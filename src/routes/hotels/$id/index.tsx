import { Button } from '@/components/ui/button'
import { useGetHotel } from '@/hooks/query'
import { Separator } from '@/components/ui/separator'
import { Heart, Star, Share2 } from 'lucide-react'
import { Comments } from './components/commets'
import { BookingCard } from './components/booking-card'
import { Amenities } from './components/amenities'
import { Description } from './components/description'
import { Features } from './components/features'
import { ImageGallery } from './components/image-gallery'
import { useParams } from 'react-router-dom'
import { Suspense } from 'react'
import { CommentsSkeleton } from './components/comments-skeleton'
import { Location } from './components/location'

export function Component() {
  const { id } = useParams<{ id: string }>()
  const { data: hotel } = useGetHotel(id!)

  return (
    <div className="mx-auto max-w-6xl px-4 py-6">
      {/* Listing Title */}
      <div className="mb-4">
        <h1 className="mb-2 text-2xl font-bold">{hotel.name}</h1>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-secondary-foreground">
            <Star size={16} />
            <span>۴.۸</span>
            <span>·</span>
            <span>{hotel.reviews} نظر</span>
            <span>·</span>
            <span>تهران، {hotel.address}</span>
          </div>
          <div className="flex gap-2">
            <Button variant="ghost" size="sm">
              <Share2 className="me-1" size={16} />
              اشتراک‌گذاری
            </Button>
            <Button variant="ghost" size="sm">
              <Heart className="me-1" size={16} />
              ذخیره
            </Button>
          </div>
        </div>
      </div>

      <ImageGallery images={hotel.images} />

      <div className="grid grid-cols-3 gap-12">
        {/* Left Column */}
        <div className="col-span-2 space-y-8">
          <div className="space-y-1">
            <h2 className="text-xl font-bold">اتاق دو تخته لوکس</h2>
            <p className="text-gray-600">
              ظرفیت ۲ نفر · ۳۵ متر مربع · صبحانه رایگان
            </p>
          </div>

          <Separator />

          <Features />
          <Separator />

          <Description />
          <Separator />

          <Amenities />
          <Separator />

          <Suspense fallback={<CommentsSkeleton />}>
            <Comments hotel={hotel} />
          </Suspense>

          <Separator />
          <Location hotel={hotel} />
        </div>

        <BookingCard hotel={hotel} />
      </div>
    </div>
  )
}
