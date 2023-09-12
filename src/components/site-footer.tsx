import * as React from 'react'

import { OutboundLink } from '@/components/outbound-link'
import { ThemeSelect } from '@/components/theme-select'
import { TokenizedText } from '@/components/tokenized-text'

export function SiteFooter() {
  return (
    <footer className='flex flex-col-reverse items-center justify-between gap-10 py-16 md:flex-row'>
      <TokenizedText
        format='Built using {{next}} and {{tailwind}}. Deployed on {{vercel}}.'
        replacements={{
          next: <OutboundLink href='https://nextjs.org/'>Next.js</OutboundLink>,
          tailwind: <OutboundLink href='https://tailwindcss.com'>Tailwind CSS</OutboundLink>,
          vercel: <OutboundLink href='https://vercel.com/'>Vercel</OutboundLink>,
        }}
        className='text-center text-sm leading-loose text-muted-foreground md:text-left'
      />
      <ThemeSelect />
    </footer>
  )
}
