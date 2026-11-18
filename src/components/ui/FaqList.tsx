import type { ServiceFaqItem } from '@/config/services'

/**
 * Аккордеон на нативных <details>/<summary>: содержимое лежит в DOM
 * и индексируется, раскрытие работает без JavaScript.
 */
export default function FaqList({ items }: { items: ServiceFaqItem[] }) {
  return (
    <>
      <style>{`
        .faq-item summary {
          list-style: none;
          cursor: pointer;
          -webkit-tap-highlight-color: transparent;
        }
        .faq-item summary::-webkit-details-marker {
          display: none;
        }
        .faq-icon {
          transition: transform 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          color: #6b7280;
        }
        .faq-item[open] .faq-icon {
          transform: rotate(180deg);
          background: linear-gradient(135deg, rgba(125,44,200,0.2), rgba(0,112,243,0.2));
          border-color: rgba(125,44,200,0.4);
          box-shadow: 0 0 16px rgba(125,44,200,0.2);
          color: #c084fc;
        }
        .faq-item[open] summary .faq-question {
          background: linear-gradient(90deg, #fff, #c084fc);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      <div>
        {items.map(item => (
          <details key={item.q} className='faq-item border-b border-white/8'>
            <summary className='flex items-center justify-between gap-4 py-5'>
              <span className='faq-question text-base font-medium text-white'>
                {item.q}
              </span>
              <span className='faq-icon' aria-hidden='true'>
                <svg width='16' height='16' viewBox='0 0 16 16' fill='none'>
                  <path
                    d='M3 6l5 5 5-5'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </span>
            </summary>
            <p className='pb-5 text-sm text-gray-400 leading-relaxed'>{item.a}</p>
          </details>
        ))}
      </div>
    </>
  )
}
