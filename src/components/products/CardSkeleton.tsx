import React from "react";

export const ProductSkeleton: React.FC = () => {
  return (
    <article
      className="flex flex-col overflow-hidden rounded-xl border bg-white shadow-sm"
      aria-hidden="true"
    >
      {/* Image Placeholder */}
      <div className="aspect-video w-full bg-gray-200 animate-pulse" />

      <div className="flex flex-1 flex-col p-5 space-y-3">
        {/* Category and Date row */}
        <div className="flex justify-between items-center">
          <div className="h-3 w-16 bg-gray-200 rounded animate-pulse" />
          <div className="h-3 w-12 bg-gray-100 rounded animate-pulse" />
        </div>

        {/* Title Placeholder */}
        <div className="h-6 w-3/4 bg-gray-200 rounded animate-pulse" />

        {/* Description Placeholder (3 lines) */}
        <div className="space-y-2 flex-1">
          <div className="h-3 w-full bg-gray-100 rounded animate-pulse" />
          <div className="h-3 w-full bg-gray-100 rounded animate-pulse" />
          <div className="h-3 w-2/3 bg-gray-100 rounded animate-pulse" />
        </div>

        {/* Button Placeholder */}
        <div className="h-9 w-full bg-gray-200 rounded-lg animate-pulse mt-2" />
      </div>
    </article>
  );
};
