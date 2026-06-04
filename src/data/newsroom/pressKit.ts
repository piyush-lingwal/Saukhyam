export type PressKitAsset = {
  id: string;
  title: string;
  description: string;
  format: string;
  size: string;
  href: string;
};

export const pressKitAssets: PressKitAsset[] = [
  {
    id: 'logo',
    title: 'Saukhyam logo pack',
    description: 'Primary, monochrome, and favicon variants on transparent backgrounds.',
    format: 'ZIP',
    size: '2.4 MB',
    href: '/logo.svg',
  },
  {
    id: 'bio',
    title: 'Founder biography - Anju Bist',
    description: 'Short and long-form bios with key milestones and awards.',
    format: 'PDF',
    size: '180 KB',
    href: '/contact',
  },
  {
    id: 'facts',
    title: 'Fact sheet 2025',
    description: 'Impact numbers, product overview, and programme summaries.',
    format: 'PDF',
    size: '420 KB',
    href: '/contact',
  },
  {
    id: 'photos',
    title: 'Campaign photography',
    description: 'High-resolution field and product images for editorial use.',
    format: 'ZIP',
    size: '48 MB',
    href: '/media/gallery',
  },
];
