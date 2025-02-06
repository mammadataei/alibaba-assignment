import { useSuspenseInfiniteQuery } from '@tanstack/react-query'
import type { HotelResource } from '@/types/resources'
import { client } from '@/lib/client'

const ITEMS_PER_PAGE = 10

interface UseGetAllHotelsInfiniteOptions {
  searchQuery: string | null
  sort: string | null
  rating: string | null // will receive numeric string values
}

export function useGetAllHotelsInfinite({
  searchQuery,
  sort,
  rating,
}: UseGetAllHotelsInfiniteOptions) {
  return useSuspenseInfiniteQuery<HotelResource[]>({
    queryKey: ['hotels', { search: searchQuery, sort, rating_gte: rating }],
    queryFn: async ({ pageParam = 1 }) => {
      const response = await client.get(`/hotels`, {
        params: {
          _page: pageParam,
          _limit: ITEMS_PER_PAGE,
          q: searchQuery,
          _sort:
            sort === 'price_asc'
              ? 'price'
              : sort === 'price_desc'
                ? 'price'
                : undefined,
          _order:
            sort === 'price_asc'
              ? 'asc'
              : sort === 'price_desc'
                ? 'desc'
                : undefined,
          rating_gte: rating ? Number(rating) : undefined,
        },
      })
      return response.data
    },
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length === ITEMS_PER_PAGE
        ? allPages.length + 1
        : undefined
    },
    initialPageParam: 1,
  })
}
