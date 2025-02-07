import { DoorClosed, Sparkles, Check } from 'lucide-react'

export function Features() {
  return (
    <div className="space-y-6">
      <div className="flex items-start gap-4">
        <div className="rounded-xl bg-gray-50 p-2">
          <DoorClosed className="size-6 text-secondary-foreground" />
        </div>
        <div>
          <h3>پذیرش ۲۴ ساعته</h3>
          <p className="text-sm text-muted-foreground">
            ورود از ساعت ۱۴ و خروج تا ساعت ۱۲
          </p>
        </div>
      </div>
      <div className="flex items-start gap-4">
        <div className="rounded-xl bg-gray-50 p-2">
          <Sparkles className="size-6 text-secondary-foreground" />
        </div>
        <div>
          <h3>نظافت ویژه</h3>
          <p className="text-sm text-muted-foreground">
            رعایت پروتکل‌های بهداشتی و ضدعفونی روزانه
          </p>
        </div>
      </div>
      <div>
        <div className="flex items-start gap-4">
          <div className="rounded-xl bg-gray-50 p-2">
            <Check className="size-6 text-secondary-foreground" />
          </div>
          <div>
            <h3>کنسلی رایگان</h3>
            <p className="text-sm text-muted-foreground">
              بازگشت کامل وجه در صورت کنسلی تا ۲۴ ساعت قبل از ورود
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
