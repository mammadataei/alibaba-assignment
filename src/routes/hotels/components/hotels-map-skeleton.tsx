import { Skeleton } from '@/components/ui/skeleton'

export function HotelsMapSkeleton() {
  return (
    <div className="sticky top-[70px] h-[calc(100vh-70px)] w-5/12">
      <Skeleton className="h-full w-full" />
    </div>
  )
}
