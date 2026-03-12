import React from 'react';
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';
import { cn } from '../../utils/cn';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  siblingCount?: number; // Кількість сторінок, що відображаються з обох боків від поточної
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 1,
}) => {
  const paginationRange = React.useMemo(() => {
    const range = (start: number, end: number) => {
      return Array.from({ length: end - start + 1 }, (_, idx) => idx + start);
    };

    const totalPageNumbers = siblingCount + 5;

    if (totalPageNumbers >= totalPages) {
      return range(1, totalPages);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPages - 2;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * siblingCount;
      const leftRange = range(1, leftItemCount);
      return [...leftRange, 'DOTS', totalPages];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * siblingCount;
      const rightRange = range(totalPages - rightItemCount + 1, totalPages);
      return [1, 'DOTS', ...rightRange];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [1, 'DOTS', ...middleRange, 'DOTS', totalPages];
    }

    return [];
  }, [totalPages, siblingCount, currentPage]);

  if (totalPages <= 1) return null;

  const onNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  return (
    <nav className="flex items-center justify-center gap-2 py-10" aria-label="Pagination">
      <button
        onClick={onPrevious}
        disabled={currentPage === 1}
        className={cn(
          'flex h-12 w-12 items-center justify-center rounded-2xl border border-[#E5E7EB] bg-white transition-all duration-300',
          'hover:border-[#0047BB] hover:text-[#0047BB] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:border-[#E5E7EB] disabled:hover:text-current',
        )}
        aria-label="Previous page"
      >
        <ChevronLeft size={20} stroke="#0047BB" />
      </button>

      <div className="flex items-center gap-2">
        {paginationRange.map((pageNumber, index) => {
          if (pageNumber === 'DOTS') {
            return (
              <div
                key={`dots-${index}`}
                className="flex h-12 w-8 items-center justify-center text-[#828B94]"
              >
                <MoreHorizontal size={20} />
              </div>
            );
          }

          const page = pageNumber as number;
          const isActive = page === currentPage;

          return (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={cn(
                'h-12 min-w-[3rem] rounded-2xl border px-4 text-[16px] font-bold transition-all duration-300',
                isActive
                  ? 'border-[#0047BB] bg-[#0047BB] text-white'
                  : 'border-[#E5E7EB] bg-white text-[#1D2127] hover:border-[#0047BB] hover:text-[#0047BB]',
              )}
              aria-current={isActive ? 'page' : undefined}
            >
              {page}
            </button>
          );
        })}
      </div>

      <button
        onClick={onNext}
        disabled={currentPage === totalPages}
        className={cn(
          'flex h-12 w-12 items-center justify-center rounded-2xl border border-[#E5E7EB] bg-white transition-all duration-300',
          'hover:border-[#0047BB] hover:text-[#0047BB]',
          'disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:border-[#E5E7EB] disabled:hover:text-current',
        )}
        aria-label="Next page"
      >
        <ChevronRight size={20} stroke="#0047BB" />
      </button>
    </nav>
  );
};
