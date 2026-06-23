import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin', 'cyrillic']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export const metadata: Metadata = {
  icons: {
    icon: [{ url: '/favicon.ico', sizes: 'any' }],
    shortcut: '/favicon.ico'
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#0a0a0a'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='ru'
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
        className='min-h-full flex flex-col bg-[#0a0a0a] text-[#f0f0f0]'
        suppressHydrationWarning
      >
        {/* Блокировка pinch-zoom на iOS (user-scalable=no игнорируется с iOS 10+) */}
        <script dangerouslySetInnerHTML={{ __html: `
          document.addEventListener('gesturestart', function(e){e.preventDefault();});
          document.addEventListener('gesturechange', function(e){e.preventDefault();});
          document.addEventListener('gestureend', function(e){e.preventDefault();});
        `}} />
        {children}
      </body>
    </html>
  )
}
