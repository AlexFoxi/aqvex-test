import React from 'react';

export const ProductSkeleton: React.FC = () => {
  return (
    <article
      className="flex flex-col overflow-hidden rounded-xl border bg-white shadow-sm"
      aria-hidden="true"
    >
      <div className="aspect-video w-full animate-pulse bg-gray-200" />

      <div className="flex flex-1 flex-col space-y-3 p-5">
        <div className="flex items-center justify-between">
          <div className="h-3 w-16 animate-pulse rounded bg-gray-200" />
          <div className="h-3 w-12 animate-pulse rounded bg-gray-100" />
        </div>

        <div className="h-6 w-3/4 animate-pulse rounded bg-gray-200" />

        <div className="flex-1 space-y-2">
          <div className="h-3 w-full animate-pulse rounded bg-gray-100" />
          <div className="h-3 w-full animate-pulse rounded bg-gray-100" />
          <div className="h-3 w-2/3 animate-pulse rounded bg-gray-100" />
        </div>

        <div className="mt-2 h-9 w-full animate-pulse rounded-lg bg-gray-200" />
      </div>
    </article>
  );
};
