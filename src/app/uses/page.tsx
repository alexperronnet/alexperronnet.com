import { Metadata } from 'next'

import { PageHeading } from '@/components/page-heading'
import { USES } from '@/data/uses'

export const metadata: Metadata = {
  title: 'Uses',
}

export default function Uses() {
  return (
    <main className='flex grow flex-col gap-16 pb-16'>
      <PageHeading
        variant='pinkPurple'
        title='Tools. Gears. Arsenal.'
        description="Dive into my curated collection of daily digital sidekicks. Consider this a living document, morphing with my ever-changing perspectives. No links? I'm all about authenticity, not affiliate perks."
      />
      {USES.map((use, index) => (
        <div key={index} className='flex flex-col gap-8'>
          <h2 className='scroll-m-20 text-xl font-semibold tracking-tight'>{use.category}</h2>
          <ul className='flex flex-col gap-4'>
            {use.items.map((item, index) => (
              <li key={index} className='leading-7'>
                <span className='font-medium'>{item.title} &mdash; </span>
                <span
                  dangerouslySetInnerHTML={{ __html: item.description }}
                  className='text-muted-foreground'
                />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </main>
  )
}
