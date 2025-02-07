import {
  MapPin,
  Wifi,
  Vault,
  Utensils,
  Smartphone,
  Tv,
  Coffee,
  Bath,
  CircleParking,
  Dumbbell,
  Wind,
  ShowerHead,
  Phone,
} from 'lucide-react'

export function Amenities() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold">امکانات هتل</h2>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center gap-3">
          <MapPin className="size-5" />
          <span>منظره شهر</span>
        </div>
        <div className="flex items-center gap-3">
          <Wifi className="size-5" />
          <span>اینترنت رایگان</span>
        </div>
        <div className="flex items-center gap-3">
          <Vault className="size-5" />
          <span>گاوصندوق</span>
        </div>
        <div className="flex items-center gap-3">
          <Utensils className="size-5" />
          <span>رستوران مجلل</span>
        </div>
        <div className="flex items-center gap-3">
          <Smartphone className="size-5" />
          <span>تلفن هوشمند</span>
        </div>
        <div className="flex items-center gap-3">
          <Tv className="size-5" />
          <span>تلویزیون LED</span>
        </div>
        <div className="flex items-center gap-3">
          <Coffee className="size-5" />
          <span>مینی‌بار</span>
        </div>
        <div className="flex items-center gap-3">
          <Bath className="size-5" />
          <span>وان جکوزی</span>
        </div>
        <div className="flex items-center gap-3">
          <CircleParking className="size-5" />
          <span>پارکینگ اختصاصی</span>
        </div>
        <div className="flex items-center gap-3">
          <Dumbbell className="size-5" />
          <span>باشگاه ورزشی</span>
        </div>
        <div className="flex items-center gap-3">
          <Wind className="size-5" />
          <span>تهویه مطبوع</span>
        </div>
        <div className="flex items-center gap-3">
          <ShowerHead className="size-5" />
          <span>سرویس مجزا</span>
        </div>
        <div className="flex items-center gap-3">
          <Phone className="size-5" />
          <span>خدمات اتاق ۲۴ ساعته</span>
        </div>
      </div>
    </div>
  )
}
