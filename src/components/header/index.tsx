import NavigationMenu from './navigation-menu'

type HeaderProps = {
  className?: string
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={className}>
      <NavigationMenu />
    </header>
  )
}
