"use client";

import "leaflet/dist/leaflet.css";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";

import L from "leaflet";

const truckIcon = new L.Icon({
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",

  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",

  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export default function MapView() {
  return (
    <MapContainer
      center={[7.0731, 125.6128]}
      zoom={8}
      scrollWheelZoom={true}
      className="h-full w-full rounded-3xl z-0"
    >
      {/* OpenStreetMap */}
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Truck 1 */}
      <Marker
        position={[7.1907, 125.4553]}
        icon={truckIcon}
      >
        <Popup>
          <strong>TRK-001</strong>
          <br />
          Moving to General Santos
        </Popup>
      </Marker>

      {/* Truck 2 */}
      <Marker
        position={[7.4478, 125.8078]}
        icon={truckIcon}
      >
        <Popup>
          <strong>TRK-004</strong>
          <br />
          Delivering to Tagum
        </Popup>
      </Marker>

      {/* Truck 3 */}
      <Marker
        position={[8.4542, 124.6319]}
        icon={truckIcon}
      >
        <Popup>
          <strong>TRK-009</strong>
          <br />
          Stopped in CDO
        </Popup>
      </Marker>
    </MapContainer>
  );
}