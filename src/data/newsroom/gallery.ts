export type ProgramCategory = 'heal' | 'care' | 'reach';

export const PROGRAM_CATEGORY_LABELS: Record<ProgramCategory, string> = {
  heal: 'HEAL',
  care: 'CARE',
  reach: 'REACH',
};

export type GalleryItem = {
  id: string;
  title: string;
  location: string;
  category: ProgramCategory;
  image: string;
  span?: 'wide' | 'tall' | 'default';
};

export const galleryItems: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Community circle in rural Bihar',
    location: 'Bihar',
    category: 'reach',
    image: 'https://images.pexels.com/photos/3825583/pexels-photo-3825583.jpeg?auto=compress&cs=tinysrgb&w=1600',
    span: 'wide',
  },
  {
    id: 'g2',
    title: 'SHG training session',
    location: 'Maharashtra',
    category: 'reach',
    image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800',
    span: 'tall',
  },
  {
    id: 'g3',
    title: 'Campus CARE awareness day',
    location: 'Chandigarh',
    category: 'care',
    image: 'https://images.pexels.com/photos/5223918/pexels-photo-5223918.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'g4',
    title: 'Recognition ceremony',
    location: 'Kerala',
    category: 'heal',
    image: 'https://saukhyampads.org/cdn/shop/files/Super_pack_with_wet_bag_Pouch_8_11zon.webp?v=1749644449&width=1200',
    span: 'default',
  },
  {
    id: 'g5',
    title: 'River-side outreach',
    location: 'Uttar Pradesh',
    category: 'reach',
    image: 'https://images.pexels.com/photos/2894574/pexels-photo-2894574.jpeg?auto=compress&cs=tinysrgb&w=1200',
    span: 'wide',
  },
  {
    id: 'g6',
    title: 'Wellness workshop',
    location: 'Tamil Nadu',
    category: 'heal',
    image: 'https://images.pexels.com/photos/6646669/pexels-photo-6646669.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'g7',
    title: 'Earth Day campus event',
    location: 'Bengaluru',
    category: 'care',
    image: 'https://images.pexels.com/photos/3768131/pexels-photo-3768131.jpeg?auto=compress&cs=tinysrgb&w=800',
    span: 'tall',
  },
  {
    id: 'g8',
    title: 'Women leaders network',
    location: 'Kerala',
    category: 'reach',
    image: 'https://images.pexels.com/photos/6646670/pexels-photo-6646670.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];
