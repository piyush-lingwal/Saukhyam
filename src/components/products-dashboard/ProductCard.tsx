'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Heart, ShoppingBag, Star, Eye, Leaf } from 'lucide-react';
import type { CatalogProduct } from '@/types/catalog';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { useNotification } from '@/context/NotificationContext';

interface ProductCardProps {
  product: CatalogProduct;
  onQuickView: (product: CatalogProduct) => void;
}

export default function ProductCard({ product, onQuickView }: ProductCardProps) {
  const { addItem } = useCart();
  const { has, toggle } = useWishlist();
  const { notify } = useNotification();
  const wished = has(product.id);
  const discount =
    product.comparePrice && product.comparePrice > product.price
      ? Math.round((1 - product.price / product.comparePrice) * 100)
      : null;

  const handleAddToCart = () => {
    addItem(product);
    notify(`${product.name} added to cart`, 'success');
  };

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.3 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100 dark:bg-slate-800">
        {product.images[0] ? (
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <Leaf size={48} className="text-slate-300" />
          </div>
        )}

        <div className="absolute left-3 top-3 flex flex-col gap-1.5">
          {discount && (
            <span className="rounded-lg bg-rose-500 px-2 py-0.5 text-xs font-bold text-white shadow">
              -{discount}%
            </span>
          )}
          {product.badge && (
            <span className="rounded-lg bg-emerald-600/90 px-2 py-0.5 text-xs font-semibold text-white backdrop-blur">
              {product.badge}
            </span>
          )}
          {!product.inStock && (
            <span className="rounded-lg bg-slate-800/80 px-2 py-0.5 text-xs font-medium text-white backdrop-blur">
              Out of stock
            </span>
          )}
        </div>

        <button
          type="button"
          onClick={() => toggle(product.id)}
          className={`absolute right-3 top-3 rounded-full p-2 shadow-md transition ${
            wished
              ? 'bg-rose-500 text-white'
              : 'bg-white/90 text-slate-600 hover:bg-white dark:bg-slate-900/90 dark:text-slate-300'
          }`}
          aria-label={wished ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <Heart size={16} fill={wished ? 'currentColor' : 'none'} />
        </button>

        <div className="absolute inset-x-0 bottom-0 flex translate-y-full justify-center gap-2 bg-gradient-to-t from-slate-900/80 to-transparent p-4 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <button
            type="button"
            onClick={() => onQuickView(product)}
            className="flex items-center gap-1.5 rounded-lg bg-white/95 px-3 py-2 text-xs font-semibold text-slate-800 shadow hover:bg-white"
          >
            <Eye size={14} />
            Quick view
          </button>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <div className="mb-1 flex items-center justify-between gap-2">
          <span className="text-xs font-medium uppercase tracking-wide text-emerald-600 dark:text-emerald-400">
            {product.category}
          </span>
          <span className="truncate text-xs text-slate-400">{product.brand}</span>
        </div>

        <Link
          href={`/products/${product.baseSlug}`}
          className="line-clamp-2 text-sm font-semibold text-slate-900 transition hover:text-emerald-600 dark:text-white dark:hover:text-emerald-400"
        >
          {product.name}
        </Link>

        <div className="mt-2 flex items-center gap-1.5">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={12}
                className={i < Math.floor(product.rating) ? 'fill-amber-400 text-amber-400' : 'text-slate-200 dark:text-slate-700'}
              />
            ))}
          </div>
          <span className="text-xs text-slate-500">
            {product.rating} ({product.reviewCount})
          </span>
        </div>

        <div className="mt-3 flex flex-wrap gap-1">
          {product.tags.slice(0, 3).map(tag => (
            <span
              key={tag}
              className="rounded-md bg-slate-100 px-1.5 py-0.5 text-[10px] font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-400"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-end justify-between gap-2 pt-4">
          <div>
            <span className="text-lg font-bold text-slate-900 dark:text-white">₹{product.price}</span>
            {product.comparePrice && (
              <span className="ml-1.5 text-sm text-slate-400 line-through">₹{product.comparePrice}</span>
            )}
          </div>
          <button
            type="button"
            disabled={!product.inStock}
            onClick={handleAddToCart}
            className="flex items-center gap-1.5 rounded-xl bg-emerald-600 px-3 py-2 text-xs font-semibold text-white shadow-md shadow-emerald-600/20 transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <ShoppingBag size={14} />
            Add
          </button>
        </div>
      </div>
    </motion.article>
  );
}
