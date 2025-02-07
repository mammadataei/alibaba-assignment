import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu'
import { Search, Globe, Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

export function Header() {
  return (
    <header className="border-b">
      <div className="flex items-center justify-between px-10 py-4">
        <a href="/" className="flex items-center">
          <img src="/logo.svg" alt="Logo" className="h-6" />
        </a>

        <div className="flex min-w-fit items-center rounded-full border py-2 pe-2 shadow-sm transition hover:shadow-md">
          <div className="flex items-center gap-x-4 px-6">
            <span className="font-medium">تهران</span>
            <Separator orientation="vertical" className="h-5" />
            <span>۱۵ - ۱۷ اسفند</span>
            <Separator orientation="vertical" className="h-5" />
            <span className="text-muted-foreground">۲ بزرگسال، ۱ اتاق</span>
          </div>

          <Button size="icon" variant="ghost" className="rounded-full bg-brand">
            <Search size={16} />
          </Button>
        </div>

        <div className="flex items-center gap-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Globe size={4} className="text-primary" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem className="flex items-center space-x-2">
                انگلیسی
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center space-x-2">
                فارسی
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button
            variant="outline"
            className="flex items-center space-x-2 rounded-full"
          >
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  )
}
