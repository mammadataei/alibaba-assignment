import { useGetAllHotels } from '@/hooks/query'
import { HotelMarker } from '@/components/hotel-marker'
import { Map } from '@/components/map'
import { useQueryState } from 'nuqs'

export function HotelsMap() {
  const [searchQuery] = useQueryState('q')
  const [rating] = useQueryState('rating_gte')

  const { data: hotels } = useGetAllHotels({
    searchQuery,
    rating,
  })

  const mapKey = `map-${searchQuery ?? ''}-${rating ?? ''}`

  return (
    <div className="sticky top-[70px] h-[calc(100vh-70px)] w-5/12 bg-gray-100">
      <Map key={mapKey}>
        {hotels.map((hotel) => (
          <HotelMarker
            key={hotel.id}
            position={[hotel.location.lat, hotel.location.long]}
            hotel={hotel}
          />
        ))}
      </Map>
    </div>
  )
}
