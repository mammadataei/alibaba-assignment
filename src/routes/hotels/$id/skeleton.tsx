import { Skeleton } from '@/components/ui/skeleton'
import { Separator } from '@/components/ui/separator'

export function HotelDetailsSkeleton() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-6">
      {/* Title Skeleton */}
      <div className="mb-4">
        <Skeleton className="mb-2 h-8 w-1/3" />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-32" />
          </div>
          <div className="flex gap-2">
            <Skeleton className="h-9 w-28" />
            <Skeleton className="h-9 w-24" />
          </div>
        </div>
      </div>

      {/* Image Gallery Skeleton */}
      <div className="mb-8 grid grid-cols-4 gap-2">
        <Skeleton className="col-span-2 row-span-2 aspect-auto" />
        <Skeleton className="aspect-square" />
        <Skeleton className="aspect-square" />
        <Skeleton className="aspect-square" />
        <Skeleton className="aspect-square" />
      </div>

      <div className="grid grid-cols-3 gap-12">
        {/* Left Column */}
        <div className="col-span-2 space-y-8">
          <div className="space-y-2">
            <Skeleton className="h-6 w-48" />
            <Skeleton className="h-4 w-64" />
          </div>

          <Separator />

          {/* Features Skeleton */}
          <div className="grid grid-cols-2 gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex items-center gap-2">
                <Skeleton className="h-8 w-8" />
                <Skeleton className="h-4 w-32" />
              </div>
            ))}
          </div>

          <Separator />

          {/* Description Skeleton */}
          <div className="space-y-2">
            <Skeleton className="h-6 w-32" />
            {Array.from({ length: 3 }).map((_, i) => (
              <Skeleton key={i} className="h-4 w-full" />
            ))}
          </div>

          <Separator />

          {/* Amenities Skeleton */}
          <div className="space-y-4">
            <Skeleton className="h-6 w-32" />
            <div className="grid grid-cols-2 gap-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Skeleton className="h-5 w-5" />
                  <Skeleton className="h-4 w-24" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Booking Card Skeleton */}
        <div className="rounded-lg border p-4">
          <div className="space-y-4">
            <div className="flex items-end justify-between">
              <Skeleton className="h-8 w-40" />
            </div>
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-4 w-full" />
          </div>
        </div>
      </div>
    </div>
  )
}
