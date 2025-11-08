import { Moon, Sun } from 'lucide-react'

import { useTheme } from '@/providers/theme-provider/useThemeHook'

import { Button } from '../ui/button'

type ThemeModeToggleProps = {
  className?: string
}

export function ThemeModeToggle({ className }: ThemeModeToggleProps) {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <Button
      variant='ghost'
      size='icon'
      onClick={toggleTheme}
      className={className}
    >
      {theme === 'light' ? (
        <Sun className='h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90' />
      ) : (
        <Moon className='absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0' />
      )}
      <span className='sr-only'>Toggle theme</span>
    </Button>
  )
}
