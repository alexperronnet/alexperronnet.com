import * as React from 'react'

import { OutboundLink } from '@/components/outbound-link'
import { ThemeSelect } from '@/components/theme-select'

export function SiteFooter() {
  return (
    <footer className='flex flex-col-reverse items-center justify-between gap-10 py-16 md:flex-row'>
      <p className='text-center text-sm leading-loose text-muted-foreground md:text-left'>
        {`Built using `}
        <OutboundLink href='https://nextjs.org/'>Next.js</OutboundLink>
        {` and `}
        <OutboundLink href='Tailwind CSS'>Tailwind CSS</OutboundLink>
        {`, deployed on `}
        <OutboundLink href='https://vercel.com/'>Vercel</OutboundLink>
      </p>
      <ThemeSelect />
    </footer>
  )
}
