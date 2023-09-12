import { ChevronDown } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { NAV_CONFIG } from '@/configs/nav'

export function NavDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='secondary' size='sm'>
          Menu
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-48' align='end'>
        <DropdownMenuLabel>Where to?</DropdownMenuLabel>
        <DropdownMenuGroup>
          {NAV_CONFIG.map((navItem) => (
            <DropdownMenuItem key={navItem.label} asChild>
              <Link href={navItem.href} className='cursor-pointer'>
                <span>{navItem.label}</span>
                <DropdownMenuShortcut>{navItem.shortcut}</DropdownMenuShortcut>
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
