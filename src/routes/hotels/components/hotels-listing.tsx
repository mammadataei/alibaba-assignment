import { HotelResource } from '@/types/resources'
import { Button } from '@/components/ui/button'
import { Heart, Star } from 'lucide-react'
import { useGetAllHotelsInfinite } from '@/hooks/query'
import { useInView } from 'react-intersection-observer'
import { useQueryState } from 'nuqs'

export function HotelsListing() {
  const [searchQuery] = useQueryState('q')
  const [sort] = useQueryState('sort', { defaultValue: 'default' })
  const [rating] = useQueryState('rating_gte')

  const {
    data: hotels,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useGetAllHotelsInfinite({
    searchQuery,
    sort,
    rating: rating,
  })

  const { ref } = useInView({
    threshold: 0.1,
    onChange: (inView) => {
      if (inView && hasNextPage && !isFetchingNextPage) {
        fetchNextPage()
      }
    },
  })

  return (
    <div className="w-7/12 py-6 ps-10 text-right" dir="rtl">
      <h2 className="border-b pb-6 text-lg font-light text-muted-foreground">
        هتل های شهر تهران
      </h2>

      <div className="divide-y">
        {hotels.pages.flat().map((hotel) => (
          <HotelsListingItem hotel={hotel} key={hotel.id} />
        ))}
      </div>

      <div ref={ref} className="py-4 text-center">
        {isFetchingNextPage ? (
          <p className="p-2 text-center text-muted-foreground">
            در حال بارگذاری نتایج بیشتر ...
          </p>
        ) : !hasNextPage ? (
          <p className="p-2 text-center text-muted-foreground">
            نتایج بیشتری وجود ندارد
          </p>
        ) : null}
      </div>
    </div>
  )
}

interface HotelsListingItemProps {
  hotel: HotelResource
}

function HotelsListingItem({ hotel }: HotelsListingItemProps) {
  return (
    <article
      className="group grid grid-cols-5 gap-6 py-6"
      role="article"
      aria-label={`هتل ${hotel.name}`}
    >
      <a href="#" className="col-span-2 h-[204px] overflow-hidden rounded-2xl">
        <img
          width={305}
          height={204}
          loading="lazy"
          src={`https://random-image-pepebigotes.vercel.app/api/random-image`}
          alt={hotel.name}
          className="aspect-3/2 object-cover"
        />
      </a>

      <div className="col-span-3 flex flex-col items-start justify-between pb-4 pt-1">
        <div className="flex w-full items-start justify-between">
          <div className="flex-1 text-right">
            <p className="pb-2 text-xs text-muted-foreground">
              {hotel.tags.join(' · ')}
            </p>
            <a href="#">
              <p className="text-base font-bold text-foreground">
                {hotel.name}
              </p>
            </a>
          </div>

          <Button variant="ghost" size="icon">
            <Heart size={24} className="fill-transparent stroke-[1.5]" />
          </Button>
        </div>

        <div className="text-right text-sm font-normal text-muted-foreground">
          <p>{hotel.amenities.join(' · ')}</p>
        </div>

        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-1.5 text-sm">
            <span className="text-muted-foreground">({hotel.reviews} نظر)</span>
            <Star size={16} className="fill-current text-yellow-500" />
            <span
              className=""
              aria-label={`امتیاز ${hotel.rating.toFixed(1)} از ۵`}
            >
              {hotel.rating.toFixed(1)}
            </span>
          </div>

          <p className="flex items-center gap-x-1">
            <div
              className="inline-flex items-center gap-x-1 text-base font-bold text-secondary-foreground"
              aria-label={`قیمت هر شب ${Intl.NumberFormat('fa-IR').format(hotel.price)} تومان`}
            >
              {Intl.NumberFormat('fa-IR', {
                style: 'decimal',
                currencyDisplay: 'symbol',
              }).format(hotel.price)}
              <span>تومان</span>
            </div>
            <span className="text-sm text-muted-foreground">/</span>
            <span className="text-sm text-muted-foreground">شب</span>
          </p>
        </div>
      </div>
    </article>
  )
}
