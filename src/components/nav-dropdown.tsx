'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

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
  const pathname = usePathname()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='secondary' size='sm'>
          Menu
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-48' align='end'>
        <DropdownMenuLabel>Where we droppin’?</DropdownMenuLabel>
        <DropdownMenuGroup>
          {NAV_CONFIG.map((navItem, index) => (
            <DropdownMenuItem key={index} asChild disabled={navItem.href === pathname}>
              <Link href={navItem.href} className='cursor-pointer'>
                <span>{navItem.label}</span>
                <DropdownMenuShortcut>{navItem.shortcut.join('+')}</DropdownMenuShortcut>
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
