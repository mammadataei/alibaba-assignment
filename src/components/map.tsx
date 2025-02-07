import { PropsWithChildren, memo } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const MapContent = memo(function MapContent({ children }: PropsWithChildren) {
  return (
    <MapContainer
      center={[35.6892, 51.389]}
      zoom={11}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {children}
    </MapContainer>
  )
})

export function Map({ children }: PropsWithChildren) {
  return (
    <div className="h-full w-full">
      <MapContent>{children}</MapContent>
    </div>
  )
}
