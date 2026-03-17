import React from 'react';
import type { Product } from '../../types/products';
import { ProductItem } from './Item';

interface CardGridProps {
  products: Product[];
}

export const ProductGrid: React.FC<CardGridProps> = ({ products }) => {
  if (products.length === 0) {
    return (
      <div className="flex min-h-[400px] flex-col items-center justify-center rounded-xl border-2 border-dashed p-12 text-center">
        <h3 className="mt-2 text-lg font-semibold text-gray-900 dark:text-white">No cards found</h3>
      </div>
    );
  }

  return (
    <section
      className="grid grid-cols-1 gap-x-5 gap-y-15 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      aria-label="Cards collection"
    >
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </section>
  );
};
