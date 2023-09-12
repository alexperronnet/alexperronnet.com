import { OutboundLink } from '@/components/outbound-link'
import { TokenizedText } from '@/components/tokenized-text'
import { Separator } from '@/components/ui/separator'
import { SITE_CONFIG } from '@/configs/site'
import { SOCIALS } from '@/configs/socials'

export default function Home() {
  return (
    <main className='flex grow flex-col justify-center gap-8'>
      <h1 className='sr-only'>{SITE_CONFIG.title}</h1>
      <TokenizedText
        format="Hey there! I'm {{name}}. {{motto}}. Turning the mundane into magic with every click."
        replacements={{
          name: <span className='font-medium'>{SITE_CONFIG.title}</span>,
          motto: <span className='italic'>Weaving digital dreams and dropping web beats</span>,
        }}
        className='text-lg leading-loose'
      />
      <Separator className='w-48' />
      <div className='flex gap-6'>
        {SOCIALS.map((social, index) => (
          <OutboundLink key={index} href={social.url} className='text-sm'>
            {social.name}
          </OutboundLink>
        ))}
      </div>
    </main>
  )
}
