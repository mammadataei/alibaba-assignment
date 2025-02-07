import { PropsWithChildren, memo } from 'react'
import { MapContainer, TileLayer, type MapContainerProps } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const MapContent = memo(function MapContent({
  children,
  ...props
}: PropsWithChildren<MapContainerProps>) {
  return (
    <MapContainer
      center={[35.6892, 51.389]}
      zoom={11}
      style={{ height: '100%', width: '100%' }}
      {...props}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {children}
    </MapContainer>
  )
})

export function Map({
  children,
  ...props
}: PropsWithChildren<MapContainerProps>) {
  return (
    <div className="h-full w-full">
      <MapContent {...props}>{children}</MapContent>
    </div>
  )
}
