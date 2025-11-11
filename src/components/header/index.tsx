import { cn } from '@/lib/utils'

import { ThemeModeToggle } from '../theme-mode-toggle'
import NavigationMenu from './navigation-menu'

type HeaderProps = {
  className?: string
}

export default function Header({ className }: HeaderProps) {
  return (
    <div
      className={cn(
        'border-primary bg-card mx-auto flex w-fit items-center justify-center gap-2 rounded-xl border-1 py-2 pr-2 pl-4 text-sm md:text-base md:font-medium lg:text-lg',
        className
      )}
    >
      <NavigationMenu />
      <ThemeModeToggle />
    </div>
  )
}
