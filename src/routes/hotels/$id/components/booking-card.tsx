import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { formatPrice } from '@/lib/format'
import { HotelResource } from '@/types/resources'
import { ChevronDown } from 'lucide-react'

export function BookingCard({ hotel }: { hotel: HotelResource }) {
  return (
    <div className="sticky top-6 h-[calc(100vh-100px)]">
      <Card className="shadow-lg">
        <CardContent className="p-6">
          <div className="mb-6 flex items-baseline justify-between">
            <div className="flex items-center gap-x-1">
              <p
                className="inline-flex items-center gap-x-1 text-base font-bold text-secondary-foreground"
                aria-label={`قیمت هر شب ${Intl.NumberFormat('fa-IR').format(hotel.price)} تومان`}
              >
                {formatPrice(hotel.price)}
                <span>تومان</span>
              </p>
              <span className="text-sm text-muted-foreground">/</span>
              <span className="text-sm text-muted-foreground">شب</span>
            </div>
          </div>

          <div className="mb-4 cursor-not-allowed rounded-xl border">
            <div className="grid grid-cols-2 border-b">
              <div className="space-y-1 border-l px-3 py-2">
                <div className="text-xs font-bold text-secondary-foreground">
                  تاریخ ورود
                </div>
                <div className="leading-tight text-muted-foreground">
                  ۱۴۰۳/۱۲/۱۵
                </div>
              </div>
              <div className="space-y-1 px-3 py-2">
                <div className="text-xs font-bold text-secondary-foreground">
                  تاریخ خروج
                </div>
                <div className="leading-tight text-muted-foreground">
                  ۱۴۰۳/۱۲/۱۷
                </div>
              </div>
            </div>
            <div className="space-y-1 p-3">
              <div className="text-xs font-bold">تعداد نفرات</div>
              <div className="flex items-center justify-between">
                <div className="leading-tight text-muted-foreground">
                  حداکثر ۲ نفر
                </div>
                <ChevronDown className="h-4 w-4 opacity-50" />
              </div>
            </div>
          </div>

          <Button className="mb-4 w-full cursor-not-allowed">رزرو اتاق</Button>
          <p className="mb-6 text-center text-xs">
            مبلغ فقط پس از تایید نهایی کسر خواهد شد
          </p>

          <div className="space-y-4">
            <div className="flex justify-between">
              <span>۲ شب اقامت</span>
              <span>{formatPrice(2 * hotel.price)} تومان</span>
            </div>
            <div className="flex justify-between">
              <span>تخفیف رزرو آنلاین</span>
              <span className="text-green-600">۳۰۰,۰۰۰- تومان</span>
            </div>
            <div className="flex justify-between">
              <span>بیمه اقامت</span>
              <span>۱۵۰,۰۰۰ تومان</span>
            </div>
            <div className="flex justify-between border-t pt-4 font-bold">
              <span>جمع کل</span>
              <span>
                {formatPrice(2 * hotel.price + 150000 - 300000)} تومان
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
