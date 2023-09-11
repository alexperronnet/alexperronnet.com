import '@/styles/globals.css'

import type { Metadata } from 'next'

import { ThemeProvider } from '@/components/theme-provider'
import { SITE_CONFIG } from '@/configs/site'
import { fontSans } from '@/libs/fonts'

export const metadata: Metadata = {
  title: {
    default: SITE_CONFIG.title,
    template: `%s // ${SITE_CONFIG.title}`,
  },
}

type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head />
      <body className={fontSans.variable}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
