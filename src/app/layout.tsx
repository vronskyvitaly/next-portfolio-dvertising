import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Script from 'next/script'
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

const METRIKA_ID = 110092238

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

// Масштабирование не ограничиваем: запрет зума — это минус в доступности
// и в Lighthouse. Авто-зум на iOS уже погашен через font-size: 16px в globals.css.
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
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
      // data-consent ставит инлайн-скрипт ниже до гидратации
      suppressHydrationWarning
    >
      <head>
        {/* Прячет cookie-баннер до первой отрисовки, если выбор уже сохранён */}
        <script
          dangerouslySetInnerHTML={{
            __html: `if(/(?:^|; )cookie_consent=(granted|denied)/.test(document.cookie))document.documentElement.dataset.consent='1'`
          }}
        />
        <link rel='preconnect' href='https://mc.yandex.ru' />
      </head>
      <body
        className='min-h-full flex flex-col bg-[#0a0a0a] text-[#f0f0f0]'
        suppressHydrationWarning
      >
        {children}
        {/* Яндекс.Метрика — afterInteractive, чтобы не блокировать рендер */}
        <Script id='yandex-metrika' strategy='afterInteractive'>{`
          (function(m,e,t,r,i,k,a){
            m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for(var j=0;j<document.scripts.length;j++){if(document.scripts[j].src===r){return;}}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
          })(window,document,'script','https://mc.yandex.ru/metrika/tag.js?id=${METRIKA_ID}','ym');
          ym(${METRIKA_ID},'init',{ssr:true,webvisor:true,clickmap:true,ecommerce:"dataLayer",referrer:document.referrer,url:location.href,accurateTrackBounce:true,trackLinks:true});
        `}</Script>
        <noscript>
          <div>
            {/* Пиксель Метрики — намеренно обычный <img>: next/image здесь неприменим */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://mc.yandex.ru/watch/${METRIKA_ID}`}
              style={{ position: 'absolute', left: '-9999px' }}
              alt=''
            />
          </div>
        </noscript>
        <CookieBanner />
      </body>
    </html>
  )
}
