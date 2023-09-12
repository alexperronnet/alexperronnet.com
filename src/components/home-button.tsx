'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { buttonVariants } from '@/components/ui/button'

export function HomeButton() {
  const pathname = usePathname()

  if (pathname === '/') return null

  return (
    <Link href='/' className={buttonVariants({ variant: 'secondary', size: 'sm' })}>
      Back
    </Link>
  )
}
