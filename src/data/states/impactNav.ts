/** Shared labels & routes for India impact map navigation */
export const IMPACT_MAP_HUB = '/programs/reach#impact-map';
export const HOME_MAP_ANCHOR = '/#india-impact-map';

export const impactNav = {
  footer: 'Impact Map',
  homeBadge: 'Our Footprint Across India',
  exploreAll: 'See full impact map',
  viewStateDetails: (stateName: string) => `View ${stateName} details`,
  homepageMap: 'Homepage map',
  impactMapHub: 'REACH Program',
  breadcrumbHome: 'Home',
} as const;