'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, ShoppingBag, Heart } from 'lucide-react';
import type { CatalogProduct } from '@/types/catalog';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { useNotification } from '@/context/NotificationContext';

interface QuickViewModalProps {
  product: CatalogProduct | null;
  onClose: () => void;
}

export default function QuickViewModal({ product, onClose }: QuickViewModalProps) {
  const { addItem } = useCart();
  const { has, toggle } = useWishlist();
  const { notify } = useNotification();

  return (
    <AnimatePresence>
      {product && (
        <>
          <motion.button
            type="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-slate-900/60 backdrop-blur-sm"
            onClick={onClose}
            aria-label="Close modal"
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="quick-view-title"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 z-[70] max-h-[90vh] w-[calc(100%-2rem)] max-w-3xl -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-slate-800 dark:bg-slate-900"
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 z-10 rounded-full bg-white/90 p-2 shadow dark:bg-slate-800"
              aria-label="Close"
            >
              <X size={18} />
            </button>

            <div className="grid md:grid-cols-2">
              <div className="relative aspect-square bg-slate-100 dark:bg-slate-800">
                {product.images[0] && (
                  <Image src={product.images[0]} alt={product.name} fill className="object-cover" sizes="50vw" />
                )}
              </div>
              <div className="p-6">
                <p className="text-xs font-medium uppercase text-emerald-600">{product.category} · {product.brand}</p>
                <h2 id="quick-view-title" className="mt-2 text-xl font-bold text-slate-900 dark:text-white">
                  {product.name}
                </h2>
                <div className="mt-2 flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={i < Math.floor(product.rating) ? 'fill-amber-400 text-amber-400' : 'text-slate-200'}
                    />
                  ))}
                  <span className="ml-1 text-sm text-slate-500">{product.rating} ({product.reviewCount} reviews)</span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{product.description}</p>
                <ul className="mt-4 space-y-1">
                  {product.features.slice(0, 4).map(f => (
                    <li key={f} className="text-sm text-slate-600 dark:text-slate-400">• {f}</li>
                  ))}
                </ul>
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="text-2xl font-bold">₹{product.price}</span>
                  {product.comparePrice && (
                    <span className="text-slate-400 line-through">₹{product.comparePrice}</span>
                  )}
                </div>
                <p className="mt-1 text-xs text-slate-500">
                  {product.inStock ? `${product.stockCount} in stock` : 'Currently unavailable'}
                </p>
                <div className="mt-6 flex gap-3">
                  <button
                    type="button"
                    disabled={!product.inStock}
                    onClick={() => {
                      addItem(product);
                      notify('Added to cart', 'success');
                      onClose();
                    }}
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3 text-sm font-semibold text-white hover:bg-emerald-700 disabled:opacity-50"
                  >
                    <ShoppingBag size={18} />
                    Add to cart
                  </button>
                  <button
                    type="button"
                    onClick={() => toggle(product.id)}
                    className={`rounded-xl border px-4 py-3 ${
                      has(product.id)
                        ? 'border-rose-200 bg-rose-50 text-rose-600'
                        : 'border-slate-200 dark:border-slate-700'
                    }`}
                    aria-label="Wishlist"
                  >
                    <Heart size={18} fill={has(product.id) ? 'currentColor' : 'none'} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
