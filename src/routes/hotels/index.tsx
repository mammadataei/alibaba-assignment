import { HotelsListing } from './components/hotels-listing'
import { Suspense } from 'react'
import { HotelsListingSkeleton } from './components/hotels-listing-skeleton'
import { Header } from '@/components/header'
import { HotelsListingFilters } from './components/hotels-listing-filters'

export function Component() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HotelsListingFilters />
      <main className="">
        <div className="flex gap-8">
          <Suspense fallback={<HotelsListingSkeleton />}>
            <HotelsListing />
          </Suspense>

          {/* Map Section */}
          <div className="sticky top-[70px] h-[calc(100vh-70px)] w-5/12 bg-gray-100">
            {/* Map would go here */}
          </div>
        </div>
      </main>
    </div>
  )
}
