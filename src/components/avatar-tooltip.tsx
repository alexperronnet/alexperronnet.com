'use client'

import * as React from 'react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

function avatarSrc(name: string) {
  return `/memojis/memoji-${name}.png`
}

const AVATAR_TOOLTIP_PAIRS = [
  { src: avatarSrc('technologist'), message: 'Ready to click the day away?' },
  { src: avatarSrc('thumb-up'), message: 'Nice click! Got more in ya?' },
  { src: avatarSrc('hand-peace'), message: 'Keepin’ it chill, huh?' },
  { src: avatarSrc('blowing-a-kiss'), message: 'Oh, stop it you!' },
  { src: avatarSrc('hands-open'), message: 'Hey, hands off the goods!' },
  { src: avatarSrc('sad'), message: 'Why the click-spree? Missed me?' },
  { src: avatarSrc('crying'), message: 'Water damage alert! Too many tears!' },
  { src: avatarSrc('screaming-in-fear'), message: 'AAAH! Too. Many. Clicks!' },
  { src: avatarSrc('angry'), message: 'You clickin’ with me!?' },
  { src: avatarSrc('steam-from-nose'), message: 'About to blow a gasket here!' },
  { src: avatarSrc('symbols-on-mouth'), message: '@#$%&! Censoring my rage!' },
  { src: avatarSrc('thumb-down'), message: 'Boo! Not cool, clicker.' },
  { src: avatarSrc('hand-check'), message: 'Fine, keep going... if you dare.' },
  { src: avatarSrc('exploding-head'), message: 'Brain. Overload. Kaboom!' },
  { src: avatarSrc('dizzy'), message: "You've clicked me into a spin!" },
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
