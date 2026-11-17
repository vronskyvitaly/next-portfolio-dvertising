'use client'

import Script from 'next/script'
import { useEffect, useSyncExternalStore } from 'react'
import { onConsentChange, readConsent } from '@/lib/legal/consent'

export const GA_MEASUREMENT_ID = 'G-1LRNM663EV'

// Google Аналитика ставит аналитические cookie, поэтому скрипт загружается
// только после того, как посетитель нажал «Принять» в cookie-баннере.
const subscribe = (onStoreChange: () => void) => onConsentChange(onStoreChange)
const getSnapshot = () => readConsent()
const getServerSnapshot = () => null

export function GoogleAnalytics() {
  const consent = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  // Если посетитель передумал после загрузки скрипта, отключаем сбор
  // до перезагрузки страницы (официальный флаг ga-disable).
  useEffect(() => {
    const flag = `ga-disable-${GA_MEASUREMENT_ID}`
    ;(window as unknown as Record<string, boolean>)[flag] = consent !== 'granted'
  }, [consent])

  if (consent !== 'granted') return null

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy='afterInteractive'
      />
      <Script id='google-analytics' strategy='afterInteractive'>{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_MEASUREMENT_ID}');
      `}</Script>
    </>
  )
}
