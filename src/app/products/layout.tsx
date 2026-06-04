import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shop Reusable Banana Fiber Pads',
  description:
    'Browse Saukhyam\'s handcrafted reusable sanitary pads — starter packs, value packs, heavy flow, teen kits, and more. Chemical-free, eco-friendly, and built to last 2-3 years.',
  openGraph: {
    title: 'Shop Reusable Banana Fiber Pads — Saukhyam',
    description:
      'Handcrafted chemical-free reusable pads starting at ₹430. Free shipping on orders above ₹500.',
  },
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
