import { useQueryState } from 'nuqs'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ChevronDown, Search } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { hotelAmenities as amenities } from '../../../../tests/fixtures'
import { useDebounce } from '@/hooks/use-debounce'

export function HotelsListingFilters() {
  // I used the useQueryState hook to manage the states with the URL query parameters.
  // This will allow the user to bookmark the page and share the URL with the filters applied.
  // It also allows to share state between different components without the need for
  // prop drilling, context or global state management.
  const [searchQuery, setSearchQuery] = useQueryState('q')
  const [sort, setSort] = useQueryState('sort', { defaultValue: 'default' })
  const [rating, setRating] = useQueryState('rating_gte')
  const [inputValue, setInputValue] = useState(searchQuery ?? '')
  const debouncedValue = useDebounce(inputValue, 300)

  useEffect(() => {
    setSearchQuery(debouncedValue || null)
  }, [debouncedValue, setSearchQuery])

  return (
    <div className="sticky top-0 w-full border-b bg-white px-10">
      <div className="flex items-center justify-between gap-4 py-4">
        <div className="relative w-64">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="جست‌و‌جوی هتل"
            className="rounded-full pl-8 pr-4"
            dir="rtl"
            aria-label="جست‌و‌جوی هتل"
          />
        </div>

        <div className="flex gap-x-4 text-center">
          <div className="flex flex-col items-end gap-1">
            <Select
              value={sort}
              onValueChange={(value) =>
                setSort(value === 'default' ? null : value)
              }
            >
              <SelectTrigger
                id="sort"
                className="w-36 rounded-full"
                aria-label="مرتب‌سازی"
              >
                <SelectValue placeholder="مرتب‌سازی" />
              </SelectTrigger>
              <SelectContent className="w-48">
                <SelectItem value="default">پیش‌فرض</SelectItem>
                <SelectItem value="price_asc">ارزان‌ترین</SelectItem>
                <SelectItem value="price_desc">گران‌ترین</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col items-end gap-1">
            <Select
              value={rating ?? 'all'}
              onValueChange={(value) =>
                setRating(value === 'all' ? null : value)
              }
            >
              <SelectTrigger
                id="rating_gte"
                className="w-36 rounded-full"
                aria-label="امتیاز"
              >
                <SelectValue placeholder="امتیاز" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">همه امتیازها</SelectItem>
                <SelectItem value="4">عالی (۴+)</SelectItem>
                <SelectItem value="3">خیلی خوب (۳+)</SelectItem>
                <SelectItem value="2">خوب (۲+)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col items-end gap-1">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="cursor-not-allowed whitespace-nowrap rounded-full"
                >
                  <span>امکانات هتل</span>
                  <ChevronDown className="h-4 w-4 opacity-50" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                {amenities.map((amenity) => (
                  <DropdownMenuCheckboxItem key={amenity} className="my-0.5">
                    {amenity}
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  )
}
