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
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Saukhyam Reusable Pads',
    legalName: 'Ayurarogya Saukhyam Foundation',
    url: 'https://saukhyampads.org',
    logo: 'https://saukhyampads.org/logo.svg',
    description:
      'Handcrafted reusable sanitary pads made with banana fiber. Chemical-free, eco-friendly, and empowering rural women across India.',
    foundingDate: '2016',
    founder: {
      '@type': 'Person',
      name: 'Anju Bist',
      jobTitle: 'Founder & Managing Director',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Amritapuri',
      addressLocality: 'Kollam',
      addressRegion: 'Kerala',
      postalCode: '690546',
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-628-210-3073',
      email: 'info@saukhyampads.org',
      contactType: 'customer service',
      availableLanguage: ['English', 'Hindi'],
    },
    sameAs: [
      'https://www.facebook.com/SaukhyamReusablePads/',
      'https://www.instagram.com/saukhyam_pads/',
      'https://www.youtube.com/channel/UCP_eM9o-i-HWixf-OB5lHpg',
      'https://www.linkedin.com/company/saukhyam-foundation/',
    ],
  };

  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <CartProvider>
          <LayoutShell>{children}</LayoutShell>
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
