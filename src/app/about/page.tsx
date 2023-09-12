import { Metadata } from 'next'

import { PageHeading } from '@/components/page-heading'
import { Separator } from '@/components/ui/separator'

export const metadata: Metadata = {
  title: 'About',
}

export default function About() {
  return (
    <main className='flex grow flex-col gap-16 pb-32'>
      <PageHeading title='Code. Journey. Aspirations.' />
      <section className='flex flex-col gap-2'>
        <h2 className='scroll-m-20 text-xl font-semibold tracking-tight'>Professional Me</h2>
        <p className='leading-7 [&:not(:first-child)]:mt-6'>
          Hello, World! I&apos;m Alex Perronnet, a passionate developer with a keen knack for the
          web and its evolving technologies. Just a year into the field, and boy, the energy
          I&apos;ve poured into this! Fresh out of training, I might wear the &quot;junior&quot;
          badge, but trust me, the efforts I&apos;ve put in could rival many out there. My hunger
          for knowledge knows no bounds; I&apos;m always on the prowl for the latest tech and
          innovations. What drives me? The chance to create, to contribute to the open-source
          community, and to build some seriously cool side projects. I&apos;ve only scratched the
          surface, and I&apos;m raring to plunge deeper. Dive into the vast ocean of languages and
          tools? Challenge accepted!
        </p>
      </section>
      <Separator />
      <section className='flex flex-col gap-2'>
        <h2 className='scroll-m-20 text-xl font-semibold tracking-tight'>
          The Journey Behind The Code
        </h2>
        <p className='border-l-2 pl-6 leading-7 text-muted-foreground [&:not(:first-child)]:mt-6'>
          Born in &apos;95, in the picturesque landscapes of New Caledonia 🇳🇨, I spent my entire
          life basking in its beauty before France beckoned. But here&apos;s a twist in the tale:
          I&apos;m an Asperger&apos;s Autist. With a late diagnosis, life threw its fair share of
          challenges, with some days spent calling my car &apos;home&apos;. Yet, every sunrise saw a
          resilient Alex, armed with positivity. A year ago, I embarked on my coding journey, not
          just as a career move, but as a life-altering decision. Turns out, my autism, often a
          hurdle in day-to-day life, became my strength here, aiding my learning curve.
        </p>
        <p className='border-l-2 pl-6 leading-7 text-muted-foreground [&:not(:first-child)]:mt-6'>
          My mantra? If you believe you can bring about some good in a situation, you have a moral
          duty to do so. This philosophy saw a younger me globetrotting places like Cambodia, Laos,
          Thailand, and Vietnam, all in the name of humanitarian missions with the Scouts. As I
          tread my path today, my goals are clear - immerse myself in society, elevate myself
          professionally, and break free from the self-imposed solitude of yesteryears.
        </p>
        <p className='border-l-2 pl-6 leading-7 text-muted-foreground [&:not(:first-child)]:mt-6'>
          Oh, and speaking of companions, meet Blue, my 2.5-year-old Border Collie 🐕. Brainy and
          the best doggo in the universe! With no strings attached anywhere and minimal baggage, at
          any given point, I&apos;m just a backpack, a dog, and a laptop away from seizing any
          opportunity that knocks.
        </p>
      </section>
    </main>
  )
}
