import Image from 'next/image'
import Link from 'next/link'
import BlogBreadcrumbs from '@/components/ui/BlogBreadcrumbs'
import { BLOG_ROUTES, ROUTES } from '@/config/routes'
import { PUBLISHED, URL_PATH, COVER_ALT, coverImage } from './constants'
import {
  jsonLd,
  signs,
  steps,
  roles,
  faq
} from '@/common/data/pages/blog/obuchenie-rabote-v-bitrix24-i-amocrm'

const linkCls =
  'text-indigo-300 hover:text-indigo-200 underline underline-offset-2'

const tableCard = {
  border: '1px solid rgba(255,255,255,0.07)',
  background: 'rgba(255,255,255,0.025)'
}

const ctaStyle = {
  background: 'linear-gradient(135deg, #4f46e5, #3730a3)'
}

const calloutStyle = {
  background: 'rgba(129,140,248,0.08)',
  border: '1px solid rgba(129,140,248,0.25)'
}

function TelegramButton({ label }: { label: string }) {
  return (
    <a
      href='https://t.me/vitalyvronsky'
      target='_blank'
      rel='noopener noreferrer'
      className='shrink-0 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all hover:scale-105 whitespace-nowrap'
      style={ctaStyle}
    >
      {label}
    </a>
  )
}

export function ObuchenieRaboteVBitrix24IAmocrmPage() {
  const publishedFormatted = new Date(PUBLISHED).toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className='min-h-screen bg-[#0a0a0a] text-white'>
        <div
          aria-hidden='true'
          className='fixed inset-0 pointer-events-none'
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '32px 32px'
          }}
        />
        <div
          aria-hidden='true'
          className='fixed top-0 right-0 w-162.5 h-125 rounded-full pointer-events-none'
          style={{
            background:
              'radial-gradient(circle, rgba(129,140,248,0.1) 0%, rgba(55,48,163,0.07) 50%, transparent 70%)',
            filter: 'blur(80px)'
          }}
        />

        <div className='relative z-10 max-w-3xl mx-auto px-6 py-16 sm:py-24'>
          <BlogBreadcrumbs path={URL_PATH} />

          <header className='mb-12'>
            <div className='flex flex-wrap gap-2 mb-6'>
              <span
                className='text-xs px-3 py-1 rounded-full'
                style={{
                  border: '1px solid rgba(129,140,248,0.35)',
                  background: 'rgba(129,140,248,0.1)',
                  color: '#a5b4fc'
                }}
              >
                Обучение CRM
              </span>
              <span className='text-xs px-3 py-1 rounded-full border border-white/10 text-gray-400'>
                {publishedFormatted}
              </span>
              <span className='text-xs px-3 py-1 rounded-full border border-white/10 text-gray-400'>
                7 мин чтения
              </span>
            </div>

            <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-6'>
              Обучение сотрудников работе в{' '}
              <span
                className='bg-clip-text text-transparent'
                style={{
                  backgroundImage:
                    'linear-gradient(90deg, #e0e7ff, #818cf8, #4f46e5)'
                }}
              >
                Битрикс24 и amoCRM
              </span>
            </h1>

            <p className='text-lg text-gray-400 leading-relaxed'>
              Что делать, если CRM куплена, а менеджеры в ней не работают: как
              проходит обучение команды, чему учить каждую роль и как проверить,
              что навык остался.
            </p>
          </header>

          <figure
            className='mb-14 overflow-hidden rounded-2xl'
            style={{ border: '1px solid rgba(255,255,255,0.07)' }}
          >
            <Image
              src={coverImage}
              alt={COVER_ALT}
              placeholder='blur'
              preload
              sizes='(max-width: 768px) 100vw, 720px'
              className='w-full h-auto'
            />
          </figure>

          <article className='space-y-14 text-gray-300 leading-relaxed'>
            <section>
              <p className='mb-4'>
                CRM оплачена, воронка нарисована, а менеджеры по-прежнему
                записывают клиентов в блокнот и пересылают друг другу скриншоты
                переписки. Руководитель открывает отчёт и видит в нём часть
                продаж.
              </p>
              <p className='mb-4'>
                Чаще всего сотрудникам показали программу один раз в день
                запуска, и больше к ней никто не возвращался. Ниже описано, как
                я провожу обучение работе в Битрикс24 и amoCRM для команды: с
                чего начинаю, что разбираю с каждой ролью и как проверяю
                результат.
              </p>
              <p>
                Речь о CRM Битрикс24. Сайты на 1С-Битрикс это другой продукт, о
                нём здесь не будет.
              </p>
            </section>

            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Признаки, что CRM ведут для галочки
              </h2>
              <p className='mb-4'>
                Сначала три слова, без которых дальше будет непонятно. Сделка это
                карточка одной продажи: кто покупает, что, на какую сумму и на
                каком этапе. Воронка это список этапов, по которым сделка идёт от
                заявки до оплаты. Карточка клиента хранит его контакты и всю
                историю общения.
              </p>
              <ul className='space-y-3 mb-4'>
                {signs.map(item => (
                  <li key={item} className='flex gap-3'>
                    <span
                      aria-hidden='true'
                      className='mt-2.5 shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-400'
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                Если узнали у себя два пункта и больше, дело обычно в навыке и
                правилах работы. Переход на другую CRM здесь не поможет: в новой
                системе повторится то же самое.
              </p>
            </section>

            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Что меняется в компании после обучения
              </h2>
              <p className='mb-4'>
                Менеджер заносит заявку и ставит следующий шаг за минуту. Когда
                это быстро, он перестаёт откладывать CRM на вечер.
              </p>
              <p className='mb-4'>
                Руководитель видит в воронке, на каком этапе застряли деньги, и
                разбирает сделки на планёрке прямо по CRM, без устных отчётов.
              </p>
              <p className='mb-4'>
                Новичка подключают по готовой инструкции и записи занятий,
                старшему менеджеру не нужно пересказывать всё заново. Когда
                сотрудник уходит, его клиенты и история переписки остаются в
                компании.
              </p>
              <p>
                Администратор сам добавляет поле или этап и не ждёт подрядчика
                ради мелкой правки.
              </p>
            </section>

            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Как проходит обучение по шагам
              </h2>
              <p className='mb-6'>
                Это обычный порядок работы. Число занятий и сроки зависят от
                размера команды, ниже они указаны как пример.
              </p>
              <ol className='space-y-4'>
                {steps.map((item, i) => (
                  <li
                    key={item.title}
                    className='flex gap-4 p-4 rounded-xl'
                    style={tableCard}
                  >
                    <span
                      className='shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold'
                      style={{
                        background: 'rgba(129,140,248,0.18)',
                        color: '#e0e7ff'
                      }}
                    >
                      {i + 1}
                    </span>
                    <div>
                      <p className='font-semibold text-white mb-1'>
                        {item.title}
                      </p>
                      <p className='text-sm text-gray-400'>{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Программа для менеджеров, руководителей и администратора
              </h2>
              <p className='mb-6'>
                Ниже типовой пример. Перед началом я убираю из него лишнее и
                добавляю то, что нужно именно вашей компании. Под каждой ролью
                отмечено, где Битрикс24 и amoCRM устроены по-разному.
              </p>
              <div className='space-y-5'>
                {roles.map(role => (
                  <div
                    key={role.title}
                    className='p-5 rounded-2xl'
                    style={tableCard}
                  >
                    <h3 className='text-lg font-semibold text-white mb-3'>
                      {role.title}
                    </h3>
                    {role.intro ? (
                      <p className='text-sm text-gray-400 mb-3'>{role.intro}</p>
                    ) : null}
                    <ul className='space-y-2 text-sm mb-4'>
                      {role.topics.map(topic => (
                        <li key={topic} className='flex gap-3'>
                          <span
                            aria-hidden='true'
                            className='mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-400'
                          />
                          <span className='text-gray-300'>{topic}</span>
                        </li>
                      ))}
                    </ul>
                    <div
                      className='p-4 rounded-xl text-sm text-gray-300'
                      style={calloutStyle}
                    >
                      <p className='text-xs uppercase tracking-wide text-indigo-300 mb-2'>
                        Где отличается
                      </p>
                      <p>{role.diff}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Чем это отличается от бесплатных видеокурсов
              </h2>
              <p className='mb-4'>
                У обеих систем есть хорошие бесплатные материалы. У Битрикс24
                это справка Поддержка24, записи вебинаров и курсы Академии
                Битрикс24, например «Битрикс24 CRM: Основы». У amoCRM есть база
                знаний с разделами «Начиная работу», «Сделки» и другими. Я сам
                отправляю туда сотрудников за ответами на частные вопросы.
              </p>
              <p className='mb-4'>
                Курсы показывают кнопки на демонстрационном портале. После
                урока менеджер знает, где создать сделку. Он не знает, что у вас
                сделка без суммы на этапе «КП отправлено» считается ошибкой и
                что оптовых клиентов ведёт другой отдел. Этому учат на вашей
                CRM и ваших правилах.
              </p>
              <p>
                Вторая разница в проверке. Видеокурс никто не проверяет на
                практике. При обучении под компанию я через несколько недель
                открываю реальные сделки и разбираю ошибки с конкретными людьми.
              </p>
            </section>

            <section>
              <div
                className='p-6 rounded-2xl'
                style={{
                  background:
                    'linear-gradient(135deg, rgba(129,140,248,0.14), rgba(55,48,163,0.1))',
                  border: '1px solid rgba(129,140,248,0.35)'
                }}
              >
                <p className='text-xs uppercase tracking-wide text-indigo-300 mb-2'>
                  Услуга и консультация
                </p>
                <h2 className='text-2xl font-bold text-white mb-3'>
                  Обучение команды работе в CRM
                </h2>
                <p className='mb-4'>
                  Обучаю сотрудников работе в Битрикс24 и amoCRM: менеджеров,
                  руководителей и администратора. Если настройка мешает
                  работать, сначала предлагаю её поправить, потом учу.
                </p>
                <p className='mb-4'>
                  Консультация бесплатная: мы созваниваемся или переписываемся в
                  Telegram, я разбираю задачу, задаю вопросы и выясняю, что
                  именно не получается у команды.
                </p>
                <p className='mb-4'>
                  Стоимость зависит от числа сотрудников, ролей и задач, назову
                  после разбора.
                </p>
                <p className='mb-5 text-sm text-gray-400'>
                  Обучение одна из моих услуг. Ещё я делаю{' '}
                  <Link href={ROUTES.services} className={linkCls}>
                    сайты
                  </Link>
                  ,{' '}
                  <Link href={BLOG_ROUTES.telegramBotyDlyaBiznesa} className={linkCls}>
                    Telegram-ботов
                  </Link>{' '}
                  и{' '}
                  <Link href={BLOG_ROUTES.avtomatizaciyaBiznesa} className={linkCls}>
                    автоматизацию процессов
                  </Link>
                  : связываю сайт с CRM, чтобы заявки не переносили руками, и
                  подключаю ИИ к{' '}
                  <Link
                    href={BLOG_ROUTES.bitrix24IClaudeAvtomatizaciyaCrm}
                    className={linkCls}
                  >
                    Битрикс24
                  </Link>
                  . Что из этого стоит делать в 2026 году, разобрано в статье
                  про{' '}
                  <Link
                    href={BLOG_ROUTES.trendyAvtomatizaciiBiznesa2026}
                    className={linkCls}
                  >
                    тренды автоматизации
                  </Link>
                  .
                </p>
                <TelegramButton label='Записаться на консультацию →' />
              </div>
            </section>

            <section>
              <h2 className='text-2xl font-bold text-white mb-6'>
                Частые вопросы
              </h2>
              <div className='space-y-4'>
                {faq.map(item => (
                  <div
                    key={item.q}
                    className='p-5 rounded-2xl'
                    style={tableCard}
                  >
                    <h3 className='font-semibold text-white mb-2'>{item.q}</h3>
                    <p className='text-sm text-gray-400 leading-relaxed'>
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <div
                className='flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5 rounded-2xl'
                style={calloutStyle}
              >
                <div className='flex-1'>
                  <p className='font-semibold text-white mb-1'>
                    Возьму рутину на себя
                  </p>
                  <p className='text-sm text-gray-400'>
                    Просто напишите в Telegram. Первая консультация
                    бесплатная.
                  </p>
                </div>
                <TelegramButton label='Написать в Telegram →' />
              </div>
            </section>
          </article>

          <div className='mt-12 pt-8 border-t border-white/10 flex flex-wrap gap-6'>
            <Link
              href={ROUTES.home}
              className='inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-200 transition-colors'
            >
              <svg width='16' height='16' viewBox='0 0 16 16' fill='none'>
                <path
                  d='M10 12L6 8l4-4'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
              На главную
            </Link>
            <Link
              href={BLOG_ROUTES.bitrix24IClaudeAvtomatizaciyaCrm}
              className='inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-200 transition-colors'
            >
              Читать: Битрикс24 и Claude
              <svg width='16' height='16' viewBox='0 0 16 16' fill='none'>
                <path
                  d='M6 4l4 4-4 4'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
