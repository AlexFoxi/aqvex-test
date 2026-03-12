import React, { useState } from 'react';
import clsx from 'clsx';
import { Star, ShoppingCart, ChevronDown, Droplet, Check } from 'lucide-react';
import type { Product } from '../../types/products';
import { getAssetUrl } from '../../utils/image-helper';
import { DiscountTag } from './DiscountTag';
import { cn } from '../../utils/cn';

interface ProductItemProps {
  product: Product;
}

export const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  const [selectedVolume, setSelectedVolume] = useState(
    product.volumes.find((v) => v.in_stock)?.label || product.volumes[0]?.label,
  );

  return (
    <article
      className={cn(
        'transition-all duration-300',
        'group flex flex-col overflow-hidden rounded-xl bg-transparent',
        'hover:shadow-lg',
      )}
    >
      {/* Image Container */}
      <div className="relative mb-4 aspect-square overflow-hidden rounded-2xl">
        <img
          src={getAssetUrl(product.image)}
          alt={product.name}
          className={cn(
            'transition-transform duration-300',
            'h-full w-full object-contain',
            'group-hover:scale-105',
          )}
          loading="lazy"
        />
      </div>
      {/* Pricing Block */}
      <div className="mb-8 flex items-center gap-3">
        {product.old_price && (
          <span className="text-[22px] leading-none text-[#828B94] line-through decoration-[#FF4B4B]">
            {product.old_price}
          </span>
        )}
        <span
          className={cn(
            'bg-gradient-to-r from-[#003181] to-[#2288ED] bg-clip-text',
            'text-[22px] leading-none font-bold text-transparent',
          )}
        >
          {product.price} {product.currency}
        </span>

        <DiscountTag discount={product.discount_percent} />
      </div>
      {/* Title */}
      <h2
        className={cn(
          'mb-4 line-clamp-3 min-h-[72px] text-[18px] leading-[1.3] font-semibold',
          'text-[#1D2127] dark:text-[#ffffff]',
        )}
      >
        {product.name}
      </h2>
      {/* Rating */}
      <div className="mb-8 flex items-center gap-1">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className={clsx(
                i < Math.round(product.rating)
                  ? 'fill-[#3399FF] text-[#3399FF]'
                  : 'fill-[#E5E7EB] text-[#E5E7EB]',
              )}
            />
          ))}
        </div>
        <span className="ml-1 text-[16px] text-[#828B94] underline">{product.reviews_count}</span>
      </div>
      {/* Stock & Category */}
      <div className="mb-6 flex items-center gap-3 text-[15px]">
        <div className="flex items-center gap-2">
          <div className="flex h-[16px] w-[16px] items-center justify-center rounded-full bg-[#0CBA7A]">
            <Check size={14} />
          </div>
          <span className="text-[14px] font-medium text-[#021527] dark:text-[#ffffff]">
            В наличии
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-[#00B05C]">
          <Droplet size={12} fill="currentColor" className="text-white" />
          <span className="text-[#828B94]">{product.category}</span>
        </div>
      </div>
      {/* Actions (Footer) */}
      <div className="mt-auto flex items-center gap-2">
        {/* Custom Volume Select */}
        <div className="relative flex-1">
          <select
            value={selectedVolume}
            onChange={(e) => setSelectedVolume(e.target.value)}
            className={cn(
              'transition-all duration-300 ease-in-out',
              'w-full appearance-none rounded-2xl border border-[#E5E7EB] bg-white',
              'py-3 pr-10 pl-4 text-center text-[16px] font-bold text-[#1D2127]',
              'outline-none focus:border-[#0047BB]',
            )}
          >
            {product.volumes.map((v) => (
              <option key={v.id} value={v.label} disabled={!v.in_stock}>
                {v.label}
              </option>
            ))}
          </select>
          <ChevronDown
            className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-[#828B94]"
            size={20}
          />
        </div>

        {/* Cart Button */}
        <button
          type="button"
          className={cn(
            'transition-all duration-300 ease-in-out',
            'flex flex-[1.5] items-center justify-center gap-2 rounded-2xl py-3',
            'text-[16px] font-bold text-[#1D2127]',
            'bg-[#E9F4FF] hover:bg-[#b8d9fc]',
            'active:scale-95',
          )}
        >
          <ShoppingCart size={22} className="text-[#1D2127]" />В корзину
        </button>
      </div>
    </article>
  );
};
