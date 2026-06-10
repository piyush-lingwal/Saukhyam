'use client';

import { useMemo } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export const SAUKHYAM_COORDS: [number, number] = [9.0887, 76.4906];

function createSaukhyamIcon() {
  return L.divIcon({
    className: 'saukhyam-leaflet-marker',
    html: `
      <div class="saukhyam-marker-pin">
        <div class="saukhyam-marker-head"></div>
        <div class="saukhyam-marker-tail"></div>
      </div>
    `,
    iconSize: [36, 48],
    iconAnchor: [18, 48],
    popupAnchor: [0, -44],
  });
}

export default function ContactMapInner() {
  const markerIcon = useMemo(() => createSaukhyamIcon(), []);

  return (
    <MapContainer
      center={SAUKHYAM_COORDS}
      zoom={15}
      scrollWheelZoom
      zoomControl
      className="saukhyam-contact-map"
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={SAUKHYAM_COORDS} icon={markerIcon}>
        <Popup>
          <strong>Saukhyam Reusable Pads</strong>
          <br />
          Amritapuri, Kollam, Kerala
        </Popup>
      </Marker>
    </MapContainer>
  );
}
