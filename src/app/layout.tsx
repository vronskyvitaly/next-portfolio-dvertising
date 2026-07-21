import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { CookieBanner } from '@/components/legal/CookieBanner'
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
  title: 'Виталий Вронский — разработка сайтов и автоматизация бизнеса',
  description:
    'Разрабатываю сайты и веб-приложения, автоматизирую бизнес-процессы, внедряю ИИ. Работаю в Москве и Санкт-Петербурге.',
  metadataBase: new URL('https://vitalyvronsky.ru'),
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.png', sizes: '120x120', type: 'image/png' }
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon.png'
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
        {/* Яндекс.Метрика */}
        <script dangerouslySetInnerHTML={{ __html: `
          (function(m,e,t,r,i,k,a){
            m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for(var j=0;j<document.scripts.length;j++){if(document.scripts[j].src===r){return;}}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
          })(window,document,'script','https://mc.yandex.ru/metrika/tag.js?id=110092238','ym');
          ym(110092238,'init',{ssr:true,webvisor:true,clickmap:true,ecommerce:"dataLayer",referrer:document.referrer,url:location.href,accurateTrackBounce:true,trackLinks:true});
        `}} />
        <noscript dangerouslySetInnerHTML={{ __html: `<div><img src="https://mc.yandex.ru/watch/110092238" style="position:absolute;left:-9999px;" alt="" /></div>` }} />
        {children}
        <CookieBanner />
      </body>
    </html>
  )
}
