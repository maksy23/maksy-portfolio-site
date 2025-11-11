import { NavLink } from 'react-router-dom'

import { cn } from '@/lib/utils'

type NavigationMenuProps = {
  className?: string
}

export default function NavigationMenu({ className }: NavigationMenuProps) {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    cn(
      'transition-colors',
      isActive ? 'text-primary font-medium' : 'text-muted-foreground hover:text-foreground'
    )

  return (
    <nav className={cn('', className)}>
      <ul className='flex flex-row justify-center gap-3'>
        <li>
          <NavLink
            to='/'
            className={linkClass}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/projects'
            className={linkClass}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/contact'
            className={linkClass}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
