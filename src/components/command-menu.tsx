'use client'

import { Command } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useTheme } from 'next-themes'
import * as React from 'react'

import { Button } from '@/components/ui/button'
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from '@/components/ui/command'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { useToast } from '@/components/ui/use-toast'
import { NAV_CONFIG } from '@/configs/nav'
import { SOCIALS } from '@/configs/socials'

export function CommandMenu() {
  const [open, setOpen] = React.useState(false)
  const router = useRouter()
  const { toast } = useToast()
  const { setTheme, theme, resolvedTheme } = useTheme()

  const isClient = typeof window !== 'undefined'
  const isMac = isClient && /(Mac)/i.test(navigator.userAgent)
  const effectiveTheme = resolvedTheme ?? theme

  const commands = React.useMemo(
    () => ({
      copyLink: () => {
        if (isClient) navigator.clipboard.writeText(window.location.href)
        toast({ title: 'Voilà!', description: '🚀 URL jet-packed into your clipboard!' })
      },
      redirectToSource: () => window.open('https://github.com/alexperronnet/lxprnt.me', '_blank'),
      toggleTheme: () => setTheme(effectiveTheme === 'light' ? 'dark' : 'light'),
      navigate: (href: string) => router.push(href),
    }),
    [effectiveTheme, isClient, router, setTheme, toast],
  )

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }

      if (open) return
      if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return

      const actionMap: { [key: string]: (() => void) | undefined } = {
        l: commands.copyLink,
        s: commands.redirectToSource,
        t: commands.toggleTheme,
      }

      actionMap[e.key.toLowerCase()]?.()

      if (e.key.toLowerCase() === 'g') {
        const handleNextKey = (e: KeyboardEvent) => {
          const nav = NAV_CONFIG.find((n) => n.shortcut[1].toLowerCase() === e.key.toLowerCase())
          if (nav) {
            commands.navigate(nav.href)
            document.removeEventListener('keydown', handleNextKey)
          }
        }
        document.addEventListener('keydown', handleNextKey)
        return () => document.removeEventListener('keydown', handleNextKey)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [commands, open])

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false)
    command()
  }, [])

  return (
    <React.Fragment>
      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild>
          <Button variant='ghost' size='sm' className='w-9 p-0' onClick={() => setOpen(true)}>
            <Command className='h-4 w-4' />
            <span className='sr-only'>Open command menu</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>{isMac ? 'Press ⌘ + K' : 'Press Ctrl + K'}</TooltipContent>
      </Tooltip>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder='Type a command or search...' />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading='General'>
            <CommandItem onSelect={() => runCommand(commands.copyLink)}>
              Copy Link
              <CommandShortcut>L</CommandShortcut>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(commands.redirectToSource)}>
              View Source
              <CommandShortcut>S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
          <CommandGroup heading='Where we droppin’?'>
            {NAV_CONFIG.map((nav, index) => (
              <CommandItem
                key={index}
                onSelect={() => runCommand(() => commands.navigate(nav.href))}
              >
                {nav.label}
                <CommandShortcut>{nav.shortcut.join('+')}</CommandShortcut>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading='Socials'>
            {SOCIALS.map((social, index) => (
              <CommandItem key={index} onSelect={() => runCommand(() => window.open(social.url))}>
                {social.name}
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading='Preferences'>
            <CommandItem onSelect={() => runCommand(commands.toggleTheme)}>
              Change Theme
              <CommandShortcut>T</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </React.Fragment>
  )
}
