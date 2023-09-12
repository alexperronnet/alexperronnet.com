import { CommandMenu } from '@/components/command-menu'
import { HomeButton } from '@/components/home-button'
import { NavDropdown } from '@/components/nav-dropdown'

export function SiteHeader() {
  return (
    <header className='flex items-center justify-between py-16'>
      <HomeButton />
      <div className='ml-auto flex items-center gap-2'>
        <CommandMenu />
        <NavDropdown />
      </div>
    </header>
  )
}
