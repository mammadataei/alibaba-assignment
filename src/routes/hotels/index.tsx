import { HotelsListing } from './components/hotels-listing'
import { Suspense } from 'react'
import { HotelsListingSkeleton } from './components/hotels-listing-skeleton'
import { HotelsListingFilters } from './components/hotels-listing-filters'
import { HotelsMap } from './components/hotels-map'
import { HotelsMapSkeleton } from './components/hotels-map-skeleton'

export function Component() {
  return (
    <>
      <HotelsListingFilters />

      <div className="flex gap-8">
        <Suspense fallback={<HotelsListingSkeleton />}>
          <HotelsListing />
        </Suspense>

        <Suspense fallback={<HotelsMapSkeleton />}>
          <HotelsMap />
        </Suspense>
      </div>
    </>
  )
}
