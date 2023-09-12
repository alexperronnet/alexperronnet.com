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
  description: SITE_CONFIG.description,
  authors: [
    {
      name: 'alexperronnet',
      url: SITE_CONFIG.url,
    },
  ],
  creator: 'alexperronnet',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_CONFIG.url,
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.title,
    images: SITE_CONFIG.image,
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    images: SITE_CONFIG.image,
    creator: '@alexperronnet',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: `${SITE_CONFIG.url}/site.webmanifest`,
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
