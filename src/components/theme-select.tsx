'use client'

import { useTheme } from 'next-themes'
import * as React from 'react'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export function ThemeSelect() {
  const [mounted, setMounted] = React.useState(false)
  const { theme, setTheme } = useTheme()

  React.useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <Select onValueChange={setTheme} value={mounted ? theme : undefined} disabled={!mounted}>
      <SelectTrigger className='w-40'>
        <SelectValue placeholder='Loading...' />
      </SelectTrigger>
      <SelectContent position='popper' side='top'>
        <SelectItem value='system'>System</SelectItem>
        <SelectItem value='light'>Light</SelectItem>
        <SelectItem value='dark'>Dark</SelectItem>
      </SelectContent>
    </Select>
  )
}
