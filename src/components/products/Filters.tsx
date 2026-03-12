import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Search, ChevronDown, ArrowUpDown } from 'lucide-react';
import { cn } from '../../utils/cn';

interface FilterValues {
  search: string;
  sortBy: string;
}

interface Props {
  onFilterChange: (values: FilterValues) => void;
  initialValues: FilterValues;
}

export const ProductFilters: React.FC<Props> = ({ onFilterChange, initialValues }) => {
  const { register, watch } = useForm<FilterValues>({
    defaultValues: initialValues,
  });

  const { search, sortBy } = watch();

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      onFilterChange({ search, sortBy });
    }, 400);

    return () => clearTimeout(delayDebounce);
  }, [search, sortBy, onFilterChange]);

  return (
    <div className={cn('flex w-full max-w-[453px] flex-col gap-4')}>
      {/* Search Input Group */}
      <div className={cn('relative flex-1')}>
        <Search
          className={cn('absolute top-1/2 left-4 -translate-y-1/2 text-[#828B94]')}
          size={20}
        />
        <input
          {...register('search')}
          type="text"
          placeholder="Пошук товарів..."
          aria-label="Пошук товарів"
          className={cn(
            'w-full rounded-2xl border border-[#E5E7EB] bg-white py-3 pr-4 pl-12',
            'text-[16px] text-[#1D2127] placeholder-[#828B94] outline-none',
            'transition-all duration-300 focus:border-[#0047BB] focus:ring-4 focus:ring-[#0047BB]/5',
          )}
        />
      </div>

      {/* Sort Select Group */}
      <div className={cn('relative flex w-full max-w-62 min-w-46.5 items-center self-end')}>
        <ArrowUpDown />
        <select
          {...register('sortBy')}
          aria-label="Сортування"
          className={cn(
            'transition-all duration-300',
            'w-full max-w-69 appearance-none rounded-2xl py-2 pr-7 pl-3',
            'cursor-pointer text-[16px] font-medium text-[#1D2127] outline-none dark:text-white',
          )}
        >
          <option value="name">За назвою</option>
          <option value="popularity">За популярністю</option>
          <option value="price_asc">Від дешевих до дорогих</option>
          <option value="price_desc">Від дорогих до дешевих</option>
        </select>
        <ChevronDown
          className={cn(
            'pointer-events-none absolute top-1/2 right-1 -translate-y-1/2 text-[#828B94]',
          )}
          size={20}
        />
      </div>
    </div>
  );
};
