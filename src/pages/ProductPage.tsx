import React, { useCallback, useDeferredValue, useMemo, useState } from 'react';
import { useCards } from '../hooks/useCards';
import { ProductFilters } from '../components/products/Filters';
import { ProductGrid } from '../components/products/Grid';
import { ProductGridSkeleton } from '../components/products/GridSkeleton';
import { Pagination } from '../components/products/Pagination';

import { cn } from '../utils/cn';

const ITEMS_PER_PAGE = 12;

export const ProductPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({ search: '', sortBy: 'name' });

  const deferredFilters = useDeferredValue(filters);
  const deferredPage = useDeferredValue(currentPage);

  const { data, isLoading, isError } = useCards();

  const filteredAndSortedProducts = useMemo(() => {
    if (!data?.products) return [];

    let result = [...data.products];

    if (deferredFilters.search) {
      const query = deferredFilters.search.toLowerCase();
      result = result.filter(
        (p) => p.name.toLowerCase().includes(query) || p.category.toLowerCase().includes(query),
      );
    }

    result.sort((a, b) => {
      switch (deferredFilters.sortBy) {
        case 'price_asc':
          return a.price - b.price;
        case 'price_desc':
          return b.price - a.price;
        case 'popularity':
          return b.rating - a.rating;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return result;
  }, [data?.products, deferredFilters]);

  const { paginatedProducts, totalPages } = useMemo(() => {
    const start = (deferredPage - 1) * ITEMS_PER_PAGE;
    return {
      paginatedProducts: filteredAndSortedProducts.slice(start, start + ITEMS_PER_PAGE),
      totalPages: Math.ceil(filteredAndSortedProducts.length / ITEMS_PER_PAGE) || 1,
    };
  }, [filteredAndSortedProducts, deferredPage]);

  const isStale = filters !== deferredFilters || currentPage !== deferredPage;

  const handleFilterChange = useCallback((newFilters: typeof filters) => {
    setFilters(newFilters);
    setCurrentPage(1);
  }, []);

  if (isError)
    return <div className="p-10 text-center text-red-500">Помилка завантаження даних</div>;

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-8 flex items-end justify-between">
        <p className="text-[14px] font-medium text-[#828B94]">{data?.products.length} товаров</p>
        <ProductFilters initialValues={filters} onFilterChange={handleFilterChange} />
      </div>

      <div className="relative min-h-[500px]">
        {isLoading ? (
          <ProductGridSkeleton count={ITEMS_PER_PAGE} />
        ) : (
          <div
            className={cn(
              'transition-all duration-500',
              'flex flex-col gap-10',
              isStale ? 'pointer-events-none opacity-50 grayscale-[20%]' : 'opacity-100',
            )}
          >
            <ProductGrid products={paginatedProducts} />

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        )}
      </div>
    </main>
  );
};
