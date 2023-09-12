import { Metadata } from 'next'

import { PageHeading } from '@/components/page-heading'

export const metadata: Metadata = {
  title: 'About',
}

export default function About() {
  return (
    <main className='flex grow flex-col gap-16 pb-32'>
      <PageHeading title='Create. Share. Repeat.' />
      <div className='h-96 rounded-md border-2 border-dashed shadow-inner' />
      <div>
        <p className='leading-7 [&:not(:first-child)]:mt-6'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas repudiandae natus quasi!
          Esse deleniti autem explicabo sapiente atque dicta, aperiam ut rem asperiores optio
          inventore quas vitae, distinctio mollitia expedita!
        </p>
        <p className='leading-7 [&:not(:first-child)]:mt-6'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas repudiandae natus quasi!
          Esse deleniti autem explicabo sapiente atque dicta, aperiam ut rem asperiores optio
          inventore quas vitae, distinctio mollitia expedita!
        </p>
        <p className='leading-7 [&:not(:first-child)]:mt-6'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas repudiandae natus quasi!
          Esse deleniti autem explicabo sapiente atque dicta, aperiam ut rem asperiores optio
          inventore quas vitae, distinctio mollitia expedita!
        </p>
      </div>
    </main>
  )
}
