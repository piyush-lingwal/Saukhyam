export const STATE_IMAGES = [
  'https://images.pexels.com/photos/6646668/pexels-photo-6646668.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'https://images.pexels.com/photos/3825583/pexels-photo-3825583.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'https://images.pexels.com/photos/3768131/pexels-photo-3768131.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'https://images.pexels.com/photos/3822863/pexels-photo-3822863.jpeg?auto=compress&cs=tinysrgb&w=1600',
] as const;

export const STATE_COORDS: Record<string, { lat: number; lng: number }> = {
  maharashtra: { lat: 19.7515, lng: 75.7139 },
  karnataka: { lat: 15.3173, lng: 75.7139 },
  gujarat: { lat: 22.2587, lng: 71.1924 },
  'tamil-nadu': { lat: 11.1271, lng: 78.6569 },
  kerala: { lat: 10.8505, lng: 76.2711 },
  delhi: { lat: 28.7041, lng: 77.1025 },
  rajasthan: { lat: 27.0238, lng: 74.2179 },
  'uttar-pradesh': { lat: 26.8467, lng: 80.9462 },
  'west-bengal': { lat: 22.9868, lng: 87.855 },
  'andhra-pradesh': { lat: 15.9129, lng: 79.74 },
  national: { lat: 20.5937, lng: 78.9629 },
};
