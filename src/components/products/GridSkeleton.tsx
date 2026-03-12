import React from 'react';
import { ProductSkeleton } from './CardSkeleton';

interface Props {
  count?: number;
}

export const ProductGridSkeleton: React.FC<Props> = ({ count = 8 }) => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {Array.from({ length: count }).map((_, index) => (
        <ProductSkeleton key={`skeleton-${index}`} />
      ))}
    </div>
  );
};
