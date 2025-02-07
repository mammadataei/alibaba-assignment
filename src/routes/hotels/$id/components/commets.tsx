import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { useGetHotelComments } from '@/hooks/query'
import { formatDate } from '@/lib/format'
import { HotelResource } from '@/types/resources'
import { Star } from 'lucide-react'

export function Comments({ hotel }: { hotel: HotelResource }) {
  const { data, fetchNextPage, hasNextPage, isFetching } = useGetHotelComments(
    hotel.id,
  )

  const comments = data?.pages.flat() ?? []

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-xl font-bold">بازخورد میهمانان</h2>

        <div className="mb-6 flex items-center gap-4 text-base">
          <div className="flex items-center justify-between gap-2">
            <Star size={16} />
            <span>{hotel.rating}</span>
          </div>
          <span className="block size-1 rounded-full bg-foreground"></span>
          <span className="">{hotel.reviews} نظر</span>
        </div>
      </div>
      <div className="space-y-8">
        {comments.map((comment) => (
          <div key={comment.id} className="space-y-4" data-testid="comment">
            <div className="flex items-center gap-4">
              <img
                src="https://avatar.iran.liara.run/public"
                alt={comment.name}
                className="size-12 rounded-full text-xs"
              />
              <div className="space-y-1">
                <h3 className="text-sm font-bold">{comment.name}</h3>
                <p className="text-xs text-muted-foreground">
                  {formatDate(comment.created_at)}
                </p>
              </div>
            </div>
            <p>{comment.text}</p>
          </div>
        ))}
      </div>
      {hasNextPage ? (
        <Button
          variant="outline"
          onClick={() => fetchNextPage()}
          disabled={isFetching}
        >
          {isFetching ? (
            <Skeleton className="h-4 w-32" />
          ) : (
            'مشاهده نظرات بیشتر'
          )}
        </Button>
      ) : (
        <p className="text-sm text-muted-foreground">نتایج بیشتری وجود ندارد</p>
      )}
    </div>
  )
}
