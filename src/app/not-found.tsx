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
        Four One Heigh
      </h1>
      <p className='text-center text-muted-foreground'>
        Actually I&apos;m not a teapot... page haven&apos;t been found but error 404 is too
        mainstream.
      </p>
    </main>
  )
}
