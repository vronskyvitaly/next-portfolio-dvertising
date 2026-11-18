'use client'

import { useEffect, useRef, useState } from 'react'
import { rampAccent, rampHsl } from '@/lib/colors'
import { scatter } from '@/common/data/sections/shared/price-mosaic'

export type MosaicItem = {
  /** Название части работ */
  part: string
  /** Диапазон доли бюджета, например «20–30%» */
  share: string
  /** Середина диапазона в процентах — ею заполняется шкала */
  mid: number
  /** Ширина плитки в сетке из шести колонок */
  span: string
  note: string
}

/**
 * Мозаика структуры цены: плитки складываются в цельный прямоугольник.
 * Пока блок не показался на экране, кусочки разведены в стороны и прозрачны;
 * при попадании в область видимости они по очереди съезжаются на свои места.
 */
export default function PriceMosaic({ items }: { items: MosaicItem[] }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [assembled, setAssembled] = useState(false)

  useEffect(() => {
    const node = containerRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      entries => {
        if (entries.some(entry => entry.isIntersecting)) {
          setAssembled(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    // overflow-x-clip: пока кусочки разведены, они не должны тянуть
    // горизонтальную прокрутку страницы на узких экранах
    <div
      ref={containerRef}
      className='grid sm:grid-cols-6 gap-2 overflow-x-clip'
    >
      {items.map((item, index) => {
        const progress = index / Math.max(items.length - 1, 1)
        const piece = scatter[index % scatter.length]
        const delay = index * 120

        return (
          <div
            key={item.part}
            className={`${item.span} transition-all duration-700 ease-out motion-reduce:transition-none`}
            style={{
              transitionDelay: `${delay}ms`,
              opacity: assembled ? 1 : 0,
              transform: assembled
                ? 'none'
                : `translate(${piece.x}px, ${piece.y}px) rotate(${piece.rotate}deg) scale(0.88)`
            }}
          >
            <div
              className='group relative h-full overflow-hidden rounded-2xl p-5 sm:p-6 transition-transform duration-300 ease-out hover:-translate-y-1'
              style={{
                border: `1px solid ${rampHsl(progress, 0.22)}`,
                background: `linear-gradient(145deg, ${rampHsl(progress, 0.1)}, rgba(255,255,255,0.02))`
              }}
            >
              {/* Подсветка плитки под курсором */}
              <span
                aria-hidden='true'
                className='pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100'
                style={{
                  background: `radial-gradient(120% 80% at 20% 0%, ${rampHsl(progress, 0.18)}, transparent 70%)`
                }}
              />

              <div className='relative'>
                <div
                  className='text-xl sm:text-2xl font-bold mb-1'
                  style={{ color: rampAccent(progress) }}
                >
                  {item.share}
                </div>
                <h3 className='text-base font-semibold text-white mb-2'>
                  {item.part}
                </h3>
                <p className='text-sm text-gray-400 leading-relaxed'>
                  {item.note}
                </p>

                {/* Шкала доли: заполняется вслед за приземлением плитки */}
                <div className='mt-4 h-1 rounded-full bg-white/6 overflow-hidden'>
                  <div
                    className='h-full rounded-full transition-[width] duration-1000 ease-out motion-reduce:transition-none'
                    style={{
                      width: assembled ? `${item.mid}%` : '0%',
                      transitionDelay: `${delay + 300}ms`,
                      background: `linear-gradient(90deg, ${rampHsl(progress, 0.9)}, ${rampHsl(progress, 0.35)})`
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
