import React from 'react';

interface DiscountTagProps {
  discount: number;
}

export const DiscountTag: React.FC<DiscountTagProps> = ({ discount }) => {
  return (
    <div className="relative inline-block overflow-visible">
      <div className="relative flex items-center justify-center">
        <div
          className="absolute inset-0 rounded-e-sm bg-[#FF2D55]"
          style={{
            clipPath: 'polygon(100% 0%, 15% 0%, 0% 50%, 15% 100%, 100% 100%)',
            WebkitMaskImage: 'radial-gradient(circle at 7px 50%, transparent 1.5px, black 3px)',
            maskImage: 'radial-gradient(circle at 7px 50%, transparent 1.5px, black 3px)',
          }}
        />

        <span className="relative z-10 py-0.5 pr-1 pl-3 text-base/6 text-[14px] leading-none font-bold whitespace-nowrap text-white">
          {discount}%
        </span>
      </div>
    </div>
  );
};
