'use client';

import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';

interface WishlistContextType {
  ids: Set<string>;
  toggle: (id: string) => void;
  has: (id: string) => boolean;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [ids, setIds] = useState<Set<string>>(new Set());

  useEffect(() => {
    try {
      const raw = localStorage.getItem('saukhyam-wishlist');
      if (raw) setIds(new Set(JSON.parse(raw) as string[]));
    } catch { /* ignore */ }
  }, []);

  useEffect(() => {
    localStorage.setItem('saukhyam-wishlist', JSON.stringify([...ids]));
  }, [ids]);

  const toggle = useCallback((id: string) => {
    setIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const has = useCallback((id: string) => ids.has(id), [ids]);

  return (
    <WishlistContext.Provider value={{ ids, toggle, has }}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const ctx = useContext(WishlistContext);
  if (!ctx) throw new Error('useWishlist must be used within WishlistProvider');
  return ctx;
}
