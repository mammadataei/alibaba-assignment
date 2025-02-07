import { Button } from '@/components/ui/button'

export function Description() {
  return (
    <div className="space-y-2">
      <p className="text-secondary-foreground">
        اتاق دو تخته لوکس با چشم‌انداز شهری، مجهز به تمامی امکانات رفاهی از جمله
        تلویزیون LED، مینی‌بار، سرویس چای و قهوه، سرویس بهداشتی مجزا و حمام. این
        اتاق دارای پنجره‌های بزرگ با منظره پانورامیک شهر تهران است. صبحانه بوفه
        بین‌المللی در رستوران مجلل هتل سرو می‌شود.
      </p>
      <Button variant="link" className="px-0 text-sm font-bold">
        اطلاعات بیشتر
      </Button>
    </div>
  )
}
