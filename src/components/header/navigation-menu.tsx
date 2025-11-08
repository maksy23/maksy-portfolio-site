type NavigationMenuProps = {
  className?: string
}

export default function NavigationMenu({ className }: NavigationMenuProps) {
  return (
    <nav className={className}>
      <ul>
        {' '}
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='/projects'>Projects</a>
        </li>
        <li>
          <a href='/about'>About</a>
        </li>
        <li>
          <a href='/contact'>Contact</a>
        </li>
      </ul>
    </nav>
  )
}
