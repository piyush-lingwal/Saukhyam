import type { LucideIcon } from 'lucide-react';
import {
  Newspaper,
  Sparkles,
  Trophy,
  Download,
  Images,
  LayoutGrid,
  Megaphone,
} from 'lucide-react';

export type NewsroomSlug =
  | 'hub'
  | 'newsroom'
  | 'press-releases'
  | 'brand-story'
  | 'awards'
  | 'press-kit'
  | 'gallery';

export type NewsroomNavItem = {
  slug: NewsroomSlug;
  href: string;
  label: string;
  description: string;
  icon: LucideIcon;
};

export const NEWSROOM_NAV: NewsroomNavItem[] = [
  {
    slug: 'hub',
    href: '/media',
    label: 'Media & Press',
    description: 'Overview and highlights',
    icon: LayoutGrid,
  },
  {
    slug: 'newsroom',
    href: '/media/newsroom',
    label: 'Newsroom',
    description: 'Latest stories and updates',
    icon: Newspaper,
  },
  {
    slug: 'press-releases',
    href: '/media/press-releases',
    label: 'Press Releases',
    description: 'Official announcements',
    icon: Megaphone,
  },
  {
    slug: 'brand-story',
    href: '/media/brand-story',
    label: 'Brand Story',
    description: 'Mission, vision, and values',
    icon: Sparkles,
  },
  {
    slug: 'awards',
    href: '/media/awards',
    label: 'Awards & Recognition',
    description: 'Honours and milestones',
    icon: Trophy,
  },
  {
    slug: 'press-kit',
    href: '/media/press-kit',
    label: 'Press Kit',
    description: 'Logos, bios, and assets',
    icon: Download,
  },
  {
    slug: 'gallery',
    href: '/media/gallery',
    label: 'Campaign Gallery',
    description: 'Field moments and campaigns',
    icon: Images,
  },
];

export function getNewsroomNavItem(slug: NewsroomSlug) {
  return NEWSROOM_NAV.find((item) => item.slug === slug);
}
