import { Metadata } from 'next'

import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: '404',
}

export default function NotFound() {
  return (
    <main className='flex grow flex-col items-center justify-center gap-8'>
      <Badge variant='destructive'>418: I&apos;m a Teapot</Badge>
      <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
        Four Oh High
      </h1>
      <p className='text-center leading-7 text-muted-foreground'>
        In an alternate universe, I might be a teapot. But here? This page is just playing hide and
        seek. Error 404? Pfft, too vanilla.
      </p>
    </main>
  )
}
