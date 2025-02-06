import { Skeleton } from '@/components/ui/skeleton'

export function HotelsListingSkeleton() {
  return (
    <div className="w-7/12 py-6 ps-10 text-right" dir="rtl">
      <Skeleton className="mb-6 h-7 w-64" />
      <div className="divide-y">
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="grid grid-cols-5 gap-6 py-6">
            <Skeleton className="col-span-2 h-[204px] rounded-2xl" />

            <div className="col-span-3 flex flex-col gap-4 pb-4 pt-1">
              <div className="flex justify-between">
                <div className="flex-1">
                  <Skeleton className="mb-2 h-4 w-32" />
                  <Skeleton className="h-6 w-48" />
                </div>
                <Skeleton className="h-10 w-10 rounded-full" />
              </div>

              <Skeleton className="h-4 w-full" />

              <div className="mt-auto flex justify-between">
                <Skeleton className="h-5 w-24" />
                <Skeleton className="h-5 w-32" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
