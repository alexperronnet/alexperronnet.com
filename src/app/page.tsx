import { OutboundLink } from '@/components/outbound-link'
import { Separator } from '@/components/ui/separator'
import { SITE_CONFIG } from '@/configs/site'
import { SOCIALS } from '@/data/socials'

export default function Home() {
  return (
    <main className='flex grow flex-col justify-center gap-8'>
      <h1 className='sr-only'>{SITE_CONFIG.title}</h1>
      <p className='leading-loose'>
        {`Hi there, I'm `}
        <span className='font-medium'>{SITE_CONFIG.title}</span>
        {`. `}
        <span className='italic'>Crafting digital symphonies</span>
        {`. Transforming ordinary into extraordinary. Unleashing the magic in every click.`}
      </p>
      <Separator className='w-48' />
      <div className='flex gap-6 text-sm'>
        {SOCIALS.map((social) => (
          <OutboundLink key={social.name} href={social.url}>
            {social.name}
          </OutboundLink>
        ))}
      </div>
    </main>
  )
}
