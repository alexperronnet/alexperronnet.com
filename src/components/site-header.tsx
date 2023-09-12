'use client'

import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { AvatarTooltip } from '@/components/avatar-tooltip'
import { NavDropdown } from '@/components/nav-dropdown'
import { buttonVariants } from '@/components/ui/button'

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className='flex items-center justify-between py-16'>
      <AvatarTooltip />
      <div className='flex items-center gap-2'>
        {pathname !== '/' && (
          <Link className={buttonVariants({ variant: 'ghost', size: 'sm' })} href='/'>
            <ChevronLeft className='mr-2 h-4 w-4' />
            <span>Back</span>
          </Link>
        )}
        <NavDropdown />
      </div>
    </header>
  )
}
