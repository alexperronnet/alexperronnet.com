import '@/styles/globals.css'

import type { Metadata } from 'next'

import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import { SITE_CONFIG } from '@/configs/site'
import { fontSans } from '@/libs/fonts'

export const metadata: Metadata = {
  title: {
    default: SITE_CONFIG.title,
    template: `%s // ${SITE_CONFIG.title}`,
  },
}

type RootLayoutProps = {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head />
      <body className={fontSans.variable}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <div className='container flex h-full max-w-3xl flex-col px-2'>
            <SiteHeader />
            {children}
            <SiteFooter />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
