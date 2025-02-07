import { Marker, MarkerProps, Tooltip } from 'react-leaflet'
import { HotelResource } from '@/types/resources'
import { formatPrice } from '@/lib/format'
import { useNavigate } from 'react-router-dom'
import { Star } from 'lucide-react'

interface HotelMarkerProps extends Omit<MarkerProps, 'children'> {
  hotel: HotelResource
}

export function HotelMarker({ hotel, ...props }: HotelMarkerProps) {
  const redirect = useNavigate()

  return (
    <Marker
      {...props}
      eventHandlers={{
        click: () => redirect(`/hotels/${hotel.id}`),
      }}
    >
      <Tooltip className="w-40 font-sans" direction="top" offset={[145, -15]}>
        <div className="space-y-2">
          <div className="space-y-1">
            <h3 className="font-bold">{hotel.name}</h3>
            <div>{hotel.address}</div>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-1 text-sm">
              <Star size={14} className="fill-current text-yellow-500" />
              <span>{hotel.rating}/5</span>
            </div>
            <div className="flex items-center gap-x-1">
              <p
                className="inline-flex items-center gap-x-1 text-sm text-secondary-foreground"
                aria-label={`قیمت هر شب ${Intl.NumberFormat('fa-IR').format(hotel.price)} تومان`}
              >
                {formatPrice(hotel.price)}
                <span>تومان</span>
              </p>
              <span className="text-xs text-muted-foreground">/</span>
              <span className="text-xs text-muted-foreground">شب</span>
            </div>
          </div>
        </div>
      </Tooltip>
    </Marker>
  )
}
