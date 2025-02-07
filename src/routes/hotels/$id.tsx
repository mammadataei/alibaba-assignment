import { Outlet } from 'react-router-dom'
import { HotelDetailsSkeleton } from './$id/skeleton'
import { Suspense } from 'react'

export function Component() {
  return (
    <Suspense fallback={<HotelDetailsSkeleton />}>
      <Outlet />
    </Suspense>
  )
}
