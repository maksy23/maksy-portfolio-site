import { cn } from '@/lib/utils'

import { ThemeModeToggle } from '../theme-mode-toggle'
import NavigationMenu from './navigation-menu'

type HeaderProps = {
  className?: string
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={cn('w-full p-7', className)}>
      <div className='mx-auto flex w-xs flex-row items-center'>
        <NavigationMenu />
        <div className='light:border-black h-4 border-l dark:border-white' />
        <ThemeModeToggle />
      </div>
    </header>
  )
}
