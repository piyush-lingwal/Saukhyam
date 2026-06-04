import type { Metadata } from 'next';
import './globals.css';
import LayoutShell from '@/components/layout/LayoutShell';
import CartDrawer from '@/components/cart/CartDrawer/CartDrawer';
import { CartProvider } from '@/context/CartContext';

export const metadata: Metadata = {
  title: {
    default: 'Saukhyam Reusable Pads: Healing Periods. Healing the Planet.',
    template: '%s | Saukhyam Reusable Pads',
  },
  description:
    'Handcrafted reusable sanitary pads made with banana fiber. Chemical-free, eco-friendly, and empowering rural women across India. Join 5 lakh+ women who have switched.',
  keywords: [
    'reusable pads', 'banana fiber pads', 'eco-friendly sanitary pads',
    'chemical free pads', 'sustainable menstruation', 'saukhyam',
    'reusable sanitary napkins', 'cloth pads India',
  ],
  openGraph: {
    title: 'Saukhyam Reusable Pads: Healing Periods. Healing the Planet.',
    description:
      'Handcrafted reusable sanitary pads made with banana fiber. Chemical-free, eco-friendly, and empowering rural women across India.',
    url: 'https://saukhyampads.org',
    siteName: 'Saukhyam Reusable Pads',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Saukhyam Reusable Pads',
    description: 'Healing Periods. Healing the Planet.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <CartProvider>
          <LayoutShell>{children}</LayoutShell>
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
