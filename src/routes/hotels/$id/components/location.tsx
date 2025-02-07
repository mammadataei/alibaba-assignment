import { Map } from '@/components/map'
import { HotelMarker } from '@/components/hotel-marker'
import { HotelResource } from '@/types/resources'

interface LocationProps {
  hotel: HotelResource
}

export function Location({ hotel }: LocationProps) {
  return (
    <div className="space-y-8">
      <h2 className="text-xl font-bold">موقعیت هتل</h2>
      <div className="h-[400px] w-full overflow-hidden rounded-lg">
        <Map dragging={false}>
          <HotelMarker
            position={[hotel.location.lat, hotel.location.long]}
            hotel={hotel}
          />
        </Map>
      </div>
    </div>
  )
}
