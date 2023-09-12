import { AvatarTooltip } from '@/components/avatar-tooltip'
import { CommandMenu } from '@/components/command-menu'
import { NavDropdown } from '@/components/nav-dropdown'

export function SiteHeader() {
  return (
    <header className='flex items-center justify-between py-16'>
      <AvatarTooltip />
      <div className='flex items-center gap-2'>
        <CommandMenu />
        <NavDropdown />
      </div>
    </header>
  )
}
