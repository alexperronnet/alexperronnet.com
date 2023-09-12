'use client'

import * as React from 'react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

function avatarSrc(name: string) {
  return `/memojis/memoji-${name}.png`
}

const AVATAR_TOOLTIP_PAIRS = [
  { src: avatarSrc('technologist'), message: "Getting click-happy, aren't we?" },
  { src: avatarSrc('thumb-up'), message: 'Feel the vibe? Click for more surprises.' },
  { src: avatarSrc('hand-peace'), message: 'Chillin’ with the clicks, I see.' },
  { src: avatarSrc('blowing-a-kiss'), message: 'Feeling the love? Smooches!' },
  { src: avatarSrc('hands-open'), message: 'Easy tiger, I bruise like a peach!.' },
  { src: avatarSrc('sad'), message: 'A click-storm? Did you miss me?' },
  { src: avatarSrc('crying'), message: "Hold on! My circuits can't swim in tears!" },
  { src: avatarSrc('screaming-in-fear'), message: 'YIKES! Click avalanche!' },
  { src: avatarSrc('angry'), message: 'Click wars, huh!?' },
  { src: avatarSrc('steam-from-nose'), message: 'Getting heated up! Cool the clicks.' },
  { src: avatarSrc('symbols-on-mouth'), message: '*Beep* *Boop* Censored frustration!' },
  { src: avatarSrc('thumb-down'), message: 'Boo! Jk, keep the clicks coming.' },
  { src: avatarSrc('hand-check'), message: 'Alright, alright... proceed with caution.' },
  { src: avatarSrc('exploding-head'), message: 'Mind = Blown. Too. Much. Awesomeness.' },
  { src: avatarSrc('dizzy'), message: 'Whoa, that’s one click too many. Headspin!' },
]

export function AvatarTooltip() {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const triggerRef = React.useRef<HTMLButtonElement>(null)

  const handleOnClick = React.useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.preventDefault()
      if (currentIndex < AVATAR_TOOLTIP_PAIRS.length - 1) {
        setCurrentIndex((prevIndex) => prevIndex + 1)
      }
    },
    [currentIndex],
  )

  return (
    <Tooltip delayDuration={0}>
      <TooltipTrigger ref={triggerRef} onClick={handleOnClick}>
        <Avatar className='h-12 w-12'>
          <AvatarImage src={AVATAR_TOOLTIP_PAIRS[currentIndex].src} alt='@alexperronnet' />
          <AvatarFallback>AP</AvatarFallback>
        </Avatar>
      </TooltipTrigger>
      <TooltipContent
        side='right'
        onPointerDownOutside={(event) => {
          if (triggerRef.current?.contains(event.target as Node)) {
            event.preventDefault()
          }
        }}
      >
        {AVATAR_TOOLTIP_PAIRS[currentIndex].message}
      </TooltipContent>
    </Tooltip>
  )
}
