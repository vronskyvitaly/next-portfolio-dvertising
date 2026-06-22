'use client'

import { useState, useEffect, useCallback } from 'react'

type Step = 'login' | 'name' | 'dashboard' | 'project-type' | 'questions' | 'success'

interface UserData {
  login: string
  firstName: string
  lastName: string
}

interface BriefRecord {
  id: number
  project_type: string
  answers: Record<string, string>
  submitted: boolean
  updated_at: string
}

const PROJECT_TYPES = [
  { id: 'site', label: 'Сайт / лендинг', icon: '🌐' },
  { id: 'shop', label: 'Интернет-магазин', icon: '🛒' },
  { id: 'bot', label: 'Telegram-бот', icon: '🤖' },
  { id: 'automation', label: 'Автоматизация бизнеса', icon: '⚙️' },
  { id: 'ai', label: 'Внедрение ИИ', icon: '🧠' },
  { id: 'webapp', label: 'Веб-приложение', icon: '💻' },
  { id: 'other', label: 'Другое', icon: '✨' }
]

interface Question {
  id: string
  label: string
  placeholder: string
  required?: boolean
}

interface QuestionSection {
  title: string
  questions: Question[]
}

const QUESTION_SECTIONS: QuestionSection[] = [
  {
    title: 'Общие сведения о проекте',
    questions: [
      {
        id: 'description',
        label: 'Описание проекта',
        placeholder: 'Опишите контекст бизнеса, чтобы разработчик понимал свою задачу. Можно своими словами',
        required: true
      },
      {
        id: 'project_type_detail',
        label: 'Тип проекта',
        placeholder: 'Одностраничный сайт, многостраничный сайт, Telegram-бот, мобильное приложение под Android/iOS'
      },
      {
        id: 'goal',
        label: 'Цель создания проекта',
        placeholder: 'Продажи, визитка, бот, приложение, блог, сервис, другое',
        required: true
      },
      {
        id: 'audience',
        label: 'Целевая аудитория',
        placeholder: 'Краткое описание: география, возраст, интересы'
      },
      {
        id: 'competitors',
        label: 'Основные конкуренты',
        placeholder: 'Ссылки на сайты, которые нравятся / не нравятся'
      },
      {
        id: 'contacts',
        label: 'Контакты в проекте',
        placeholder: 'Телефон, никнейм в Telegram, WhatsApp, Max, почта, адрес и другие'
      }
    ]
  },
  {
    title: 'Функциональные требования',
    questions: [
      {
        id: 'pages',
        label: 'Количество страниц',
        placeholder: 'Одностраничный сайт / другое'
      },
      {
        id: 'catalog',
        label: 'Каталог товаров / услуг',
        placeholder: 'Да / Нет / Другое'
      },
      {
        id: 'feedback_forms',
        label: 'Формы обратной связи',
        placeholder: 'Какие поля, куда отправляются (на почту, в бот?)'
      },
      {
        id: 'search',
        label: 'Поиск по сайту',
        placeholder: 'Да / Нет'
      },
      {
        id: 'blog',
        label: 'Блог / новостная лента',
        placeholder: 'Да / нет, необходимость категорий'
      },
      {
        id: 'cart',
        label: 'Корзина / оформление заказа',
        placeholder: 'Да / нет, способ оплаты/доставки'
      },
      {
        id: 'schedule',
        label: 'Режим работы',
        placeholder: 'Указать если в проекте есть продажи'
      },
      {
        id: 'payment_method',
        label: 'Как клиент будет оплачивать заказ?',
        placeholder: 'В офисе, курьеру, другое'
      },
      {
        id: 'cms',
        label: 'Административная панель (CMS)',
        placeholder: 'Да / Нет'
      }
    ]
  },
  {
    title: 'Дизайн и интерфейс',
    questions: [
      {
        id: 'style',
        label: 'Стиль и настроение',
        placeholder: 'Строгий, яркий, минимализм, корпоративный и т.п. — предпочтения, либо на усмотрение разработчика'
      },
      {
        id: 'colors',
        label: 'Цветовая гамма',
        placeholder: 'Основные цвета, ссылка на брендбук при наличии — либо на усмотрение разработчика'
      },
      {
        id: 'references',
        label: 'Примеры сайтов для референса',
        placeholder: 'Ссылки на сайты, которые понравились'
      },
      {
        id: 'logo',
        label: 'Логотип и фирменный стиль',
        placeholder: 'В каком виде будут предоставлены исходники / либо на усмотрение разработчика'
      },
      {
        id: 'responsive',
        label: 'Адаптивность (мобильная версия)',
        placeholder: 'Да / Нет'
      },
      {
        id: 'animation',
        label: 'Анимация / спецэффекты',
        placeholder: 'Ваши пожелания'
      }
    ]
  },
  {
    title: 'Контент / наполнение',
    questions: [
      {
        id: 'texts',
        label: 'Кто пишет тексты на сайт?',
        placeholder:
          'О вас, ваши преимущества, прочие разделы. По-хорошему лучше обратиться к копирайтеру. [ Укажите дату предоставления ] / либо тексты пишет разработчик на своё усмотрение'
      },
      {
        id: 'media',
        label: 'Фотографии / иллюстрации / видео',
        placeholder:
          'Уникальные изображения вашего бизнеса (рекомендуется — скачивать из сети рискованно, штраф от 40 000 ₽). [ Укажите дату предоставления ] / либо медиа добавляет разработчик из бесплатных источников'
      }
    ]
  },
  {
    title: 'Доменное имя и хостинг',
    questions: [
      {
        id: 'hosting',
        label: 'Кто выбирает хостинг для сайта?',
        placeholder:
          'Можно разместить на Vercel (сейчас бесплатно). Либо на усмотрение разработчика — стоимость будет указана в договоре. После сдачи проекта права и инструкции передаются вам'
      },
      {
        id: 'domain',
        label: 'Кто выбирает доменное имя?',
        placeholder: 'Например: mtplast.ru, dublikatnomera.com — вы или разработчик?'
      },
      {
        id: 'domain_payment',
        label: 'Кто оплачивает продление домена и хостинга каждый год?',
        placeholder: 'Разработчик (после пополнения его счёта на сумму услуги) / вы сами оплачиваете'
      }
    ]
  },
  {
    title: 'Дополнительные вопросы',
    questions: [
      {
        id: 'products',
        label: 'Товарные позиции (если проект связан с продажами)',
        placeholder: 'Названия, цены, описания товаров / услуг'
      },
      {
        id: 'future_updates',
        label: 'Планируете ли дорабатывать сайт в будущем?',
        placeholder: 'Вносить изменения, добавлять блоки (обратите внимание — это платная услуга)'
      },
      {
        id: 'extra_pages',
        label: 'Требуется ли создание дополнительных страниц?',
        placeholder: '404, обработка персональных данных под формой и др. — обсуждается на созвоне'
      },
      {
        id: 'preferences',
        label: 'Ваши предпочтения',
        placeholder: 'Если есть'
      },
      {
        id: 'code_delivery',
        label: 'В каком виде предоставить код проекта?',
        placeholder: 'Архив (.zip / .tar.gz) или репозиторий на GitHub — обсудим при созвоне'
      }
    ]
  },
  {
    title: 'Вопросы к разработчику',
    questions: [
      {
        id: 'dev_questions',
        label: 'Что хотели бы уточнить у разработчика на созвоне?',
        placeholder: 'Любые вопросы, которые у вас есть'
      }
    ]
  }
]

function getQuestions(): Question[] {
  return QUESTION_SECTIONS.flatMap(s => s.questions)
}

function calcProgress(answers: Record<string, string>): number {
  const qs = getQuestions()
  if (!qs.length) return 0
  const filled = qs.filter(q => answers[q.id]?.trim()).length
  return Math.round((filled / qs.length) * 100)
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' })
}

export default function BriefPage() {
  const [step, setStep] = useState<Step>('login')
  const [user, setUser] = useState<UserData>({ login: '', firstName: '', lastName: '' })
  const [loginInput, setLoginInput] = useState('')
  const [loginError, setLoginError] = useState('')
  const [loading, setLoading] = useState(false)
  const [sending, setSending] = useState(false)

  // Текущий редактируемый бриф
  const [briefId, setBriefId] = useState<number | null>(null)
  const [projectType, setProjectType] = useState('')
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [sectionIndex, setSectionIndex] = useState(0)

  // Список всех брифов для дашборда
  const [briefs, setBriefs] = useState<BriefRecord[]>([])

  const loadUserBriefs = useCallback(async (login: string) => {
    const res = await fetch(`/api/brief/user?login=${encodeURIComponent(login)}`)
    const data = await res.json()
    if (data.user) {
      setUser({ login: data.user.login, firstName: data.user.firstName, lastName: data.user.lastName })
      setBriefs(data.briefs ?? [])
    }
    return data
  }, [])

  // Восстановить сессию при загрузке
  useEffect(() => {
    const savedLogin = localStorage.getItem('brief_login')
    if (!savedLogin) return
    setLoginInput(savedLogin)
    setLoading(true)
    loadUserBriefs(savedLogin)
      .then(data => {
        if (data.user) setStep('dashboard')
      })
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [loadUserBriefs])

  // Автосохранение ответов
  useEffect(() => {
    if (!briefId || !projectType) return
    const timer = setTimeout(() => {
      fetch('/api/brief/progress', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ briefId, projectType, answers })
      }).catch(() => {})
    }, 800)
    return () => clearTimeout(timer)
  }, [answers, briefId, projectType])

  async function handleLogin() {
    const login = loginInput.trim()
    if (!login) { setLoginError('Введите логин'); return }
    if (login.length < 3) { setLoginError('Минимум 3 символа'); return }
    setLoginError('')
    setLoading(true)
    try {
      const res = await fetch('/api/brief/user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ login })
      })
      const { exists, user: u } = await res.json()
      localStorage.setItem('brief_login', login)
      if (exists && u) {
        setUser({ login: u.login, firstName: u.first_name, lastName: u.last_name })
        const data = await loadUserBriefs(login)
        setBriefs(data.briefs ?? [])
        setStep('dashboard')
      } else {
        setUser(prev => ({ ...prev, login }))
        setStep('name')
      }
    } catch {
      setLoginError('Ошибка соединения')
    } finally {
      setLoading(false)
    }
  }

  async function handleName() {
    if (!user.firstName.trim() || !user.lastName.trim()) return
    setLoading(true)
    try {
      const res = await fetch('/api/brief/user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ login: user.login, firstName: user.firstName, lastName: user.lastName })
      })
      if (res.status === 409) { setLoginError('Логин занят'); setStep('login'); return }
      setBriefs([])
      setStep('dashboard')
    } catch {
      alert('Ошибка соединения')
    } finally {
      setLoading(false)
    }
  }

  async function handleNewProject(type: string) {
    setProjectType(type)
    setAnswers({})
    setSectionIndex(0)
    setLoading(true)
    try {
      const res = await fetch('/api/brief/progress', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ login: user.login, projectType: type })
      })
      const { briefId: id } = await res.json()
      setBriefId(id)
      setStep('questions')
    } catch {
      alert('Ошибка создания проекта')
    } finally {
      setLoading(false)
    }
  }

  function handleContinueBrief(brief: BriefRecord) {
    setBriefId(brief.id)
    setProjectType(brief.project_type)
    setAnswers(brief.answers ?? {})
    setSectionIndex(0)
    setStep('questions')
  }

  async function handleBackToDashboard() {
    // Сохранить немедленно, не дожидаясь debounce
    if (briefId && projectType) {
      await fetch('/api/brief/progress', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ briefId, projectType, answers })
      }).catch(() => {})
    }
    // Обновить список брифов из БД
    const data = await loadUserBriefs(user.login).catch(() => ({ briefs: [] }))
    setBriefs((data as { briefs: BriefRecord[] }).briefs ?? [])
    setStep('dashboard')
  }

  async function handleSubmit() {
    setSending(true)
    try {
      // Сохранить последние ответы перед отправкой
      await fetch('/api/brief/progress', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ briefId, projectType, answers })
      })
      await fetch('/api/brief', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ briefId, login: user.login })
      })
      // Обновить список брифов
      const data = await loadUserBriefs(user.login)
      setBriefs(data.briefs ?? [])
      setStep('success')
    } catch {
      alert('Ошибка отправки. Попробуйте ещё раз.')
    } finally {
      setSending(false)
    }
  }

  const progress = calcProgress(answers)
  const currentSection = QUESTION_SECTIONS[sectionIndex]
  const isFirstSection = sectionIndex === 0
  const isLastSection = sectionIndex === QUESTION_SECTIONS.length - 1

  const STEPS_MAP: Record<Step, number> = { login: 1, name: 2, dashboard: 2, 'project-type': 3, questions: 4, success: 4 }
  const totalSteps = 4
  const currentStep = STEPS_MAP[step] ?? 1

  return (
    <div className='min-h-screen flex flex-col items-center justify-center px-4 py-16' style={{ background: '#0a0a0a' }}>
      <div className='fixed top-1/4 -left-32 w-96 h-96 rounded-full pointer-events-none animate-pulse-slow'
        style={{ background: 'radial-gradient(circle, rgba(125,44,200,0.12) 0%, transparent 70%)' }} />
      <div className='fixed bottom-1/4 -right-32 w-96 h-96 rounded-full pointer-events-none animate-pulse-slow-2'
        style={{ background: 'radial-gradient(circle, rgba(0,112,243,0.10) 0%, transparent 70%)' }} />

      <div className='w-full max-w-xl relative'>
        <a href='/' className='inline-flex items-center gap-2 mb-8 text-sm text-[#666] hover:text-[#999] transition-colors'>
          <svg width='16' height='16' viewBox='0 0 16 16' fill='none'>
            <path d='M10 12L6 8l4-4' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' />
          </svg>
          На главную
        </a>

        {/* Progress bar */}
        {step !== 'success' && step !== 'dashboard' && (
          <div className='mb-8'>
            <div className='flex items-center justify-between mb-2'>
              <span className='text-xs text-[#555]'>Шаг {currentStep} из {totalSteps}</span>
              <span className='text-xs text-[#555]'>{Math.round((currentStep / totalSteps) * 100)}%</span>
            </div>
            <div className='h-1 bg-white/5 rounded-full overflow-hidden'>
              <div className='h-full rounded-full transition-all duration-500'
                style={{ width: `${(currentStep / totalSteps) * 100}%`, background: 'linear-gradient(90deg, #7d2cc8, #0070f3)' }} />
            </div>
          </div>
        )}

        <div className='rounded-2xl p-8' style={{ background: '#111', border: '1px solid rgba(255,255,255,0.06)' }}>

          {/* ШАГ 1: Логин */}
          {step === 'login' && (
            <div>
              <div className='w-12 h-12 rounded-xl flex items-center justify-center mb-6'
                style={{ background: 'linear-gradient(135deg, #7d2cc8, #0070f3)' }}>
                <svg width='22' height='22' viewBox='0 0 24 24' fill='none'>
                  <path d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z'
                    stroke='white' strokeWidth='2' strokeLinecap='round' />
                </svg>
              </div>
              <h1 className='text-2xl font-semibold text-[#f0f0f0] mb-2'>Описать проект</h1>
              <p className='text-[#666] text-sm mb-8'>Введите логин — войдёте в личный кабинет или создадите новый</p>
              <div className='space-y-4'>
                <div>
                  <label className='block text-xs text-[#555] uppercase tracking-wider mb-2'>Ваш логин</label>
                  <input type='text' value={loginInput}
                    onChange={e => setLoginInput(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && handleLogin()}
                    placeholder='например: ivan_petrov'
                    className='w-full rounded-xl px-4 py-3 text-[#f0f0f0] text-sm outline-none transition-all'
                    style={{ background: 'rgba(255,255,255,0.04)', border: loginError ? '1px solid rgba(239,68,68,0.5)' : '1px solid rgba(255,255,255,0.08)' }}
                    autoFocus />
                  {loginError && <p className='text-xs text-red-400 mt-1'>{loginError}</p>}
                </div>
                <button onClick={handleLogin} disabled={loading}
                  className='w-full py-3 rounded-xl font-medium text-white text-sm transition-all hover:scale-[1.02] hover:opacity-90 disabled:opacity-60'
                  style={{ background: 'linear-gradient(135deg, #7d2cc8, #0070f3)' }}>
                  {loading ? 'Проверяем...' : 'Войти'}
                </button>
              </div>
            </div>
          )}

          {/* ШАГ 2: Имя */}
          {step === 'name' && (
            <div>
              <h2 className='text-2xl font-semibold text-[#f0f0f0] mb-2'>Как вас зовут?</h2>
              <p className='text-[#666] text-sm mb-8'>Логин: <span className='text-[#888]'>{user.login}</span></p>
              <div className='space-y-4'>
                <div>
                  <label className='block text-xs text-[#555] uppercase tracking-wider mb-2'>Имя</label>
                  <input type='text' value={user.firstName}
                    onChange={e => setUser(prev => ({ ...prev, firstName: e.target.value }))}
                    placeholder='Иван'
                    className='w-full rounded-xl px-4 py-3 text-[#f0f0f0] text-sm outline-none'
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                    autoFocus />
                </div>
                <div>
                  <label className='block text-xs text-[#555] uppercase tracking-wider mb-2'>Фамилия</label>
                  <input type='text' value={user.lastName}
                    onChange={e => setUser(prev => ({ ...prev, lastName: e.target.value }))}
                    onKeyDown={e => e.key === 'Enter' && handleName()}
                    placeholder='Петров'
                    className='w-full rounded-xl px-4 py-3 text-[#f0f0f0] text-sm outline-none'
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }} />
                </div>
                <div className='flex gap-3 pt-2'>
                  <button onClick={() => setStep('login')}
                    className='flex-1 py-3 rounded-xl text-sm text-[#666] transition-all hover:text-[#999]'
                    style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
                    Назад
                  </button>
                  <button onClick={handleName}
                    disabled={!user.firstName.trim() || !user.lastName.trim() || loading}
                    className='flex-[2] py-3 rounded-xl font-medium text-white text-sm transition-all hover:scale-[1.02] hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed'
                    style={{ background: 'linear-gradient(135deg, #7d2cc8, #0070f3)' }}>
                    Продолжить
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ДАШБОРД */}
          {step === 'dashboard' && (
            <div>
              {/* Шапка */}
              <div className='flex items-center gap-3 mb-8'>
                <div className='w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold text-white shrink-0'
                  style={{ background: 'linear-gradient(135deg, #7d2cc8, #0070f3)' }}>
                  {user.firstName.charAt(0).toUpperCase()}
                </div>
                <div className='flex-1 min-w-0'>
                  <p className='text-[#f0f0f0] font-semibold truncate'>{user.firstName} {user.lastName}</p>
                  <p className='text-xs text-[#555]'>@{user.login}</p>
                </div>
                <button onClick={() => { localStorage.removeItem('brief_login'); setStep('login'); setUser({ login: '', firstName: '', lastName: '' }) }}
                  className='text-xs text-[#444] hover:text-[#666] transition-colors'>
                  Выйти
                </button>
              </div>

              {/* Список проектов */}
              {briefs.length > 0 && (
                <div className='space-y-3 mb-6'>
                  <p className='text-xs text-[#555] uppercase tracking-widest mb-4'>Ваши проекты</p>
                  {briefs.map(b => {
                    const prog = calcProgress(b.answers ?? {})
                    const pt = PROJECT_TYPES.find(p => p.id === b.project_type)
                    return (
                      <div key={b.id} className='rounded-xl p-4 transition-all'
                        style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                        <div className='flex items-start gap-3'>
                          <span className='text-xl mt-0.5 shrink-0'>{pt?.icon ?? '📋'}</span>
                          <div className='flex-1 min-w-0'>
                            <div className='flex items-center gap-2 mb-1 flex-wrap'>
                              <span className='text-[#e0e0e0] text-sm font-medium'>{pt?.label ?? b.project_type}</span>
                              {b.submitted
                                ? <span className='text-xs px-2 py-0.5 rounded-full' style={{ background: 'rgba(34,197,94,0.12)', color: '#4ade80' }}>Отправлен</span>
                                : <span className='text-xs px-2 py-0.5 rounded-full' style={{ background: 'rgba(125,44,200,0.12)', color: '#a78bfa' }}>В процессе</span>
                              }
                            </div>
                            {/* Progress bar */}
                            <div className='flex items-center gap-2 mb-2'>
                              <div className='flex-1 h-1 bg-white/5 rounded-full overflow-hidden'>
                                <div className='h-full rounded-full transition-all'
                                  style={{ width: `${prog}%`, background: b.submitted ? 'rgba(74,222,128,0.6)' : 'linear-gradient(90deg, #7d2cc8, #0070f3)' }} />
                              </div>
                              <span className='text-xs text-[#555] shrink-0'>{prog}%</span>
                            </div>
                            <p className='text-xs text-[#444]'>
                              {b.submitted ? 'Отправлен' : 'Изменён'} {formatDate(b.updated_at)}
                            </p>
                          </div>
                          {!b.submitted && (
                            <button onClick={() => handleContinueBrief(b)}
                              className='text-xs px-3 py-1.5 rounded-lg shrink-0 transition-all hover:opacity-80'
                              style={{ background: 'rgba(125,44,200,0.15)', color: '#c084fc', border: '1px solid rgba(125,44,200,0.2)' }}>
                              Продолжить
                            </button>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}

              {/* Новый проект */}
              <button onClick={() => setStep('project-type')}
                className='w-full py-3.5 rounded-xl font-medium text-white text-sm transition-all hover:scale-[1.02] hover:opacity-90 flex items-center justify-center gap-2'
                style={{ background: 'linear-gradient(135deg, #7d2cc8, #0070f3)', boxShadow: '0 0 24px rgba(125,44,200,0.25)' }}>
                <svg width='16' height='16' viewBox='0 0 24 24' fill='none'>
                  <path d='M12 5v14M5 12h14' stroke='white' strokeWidth='2' strokeLinecap='round' />
                </svg>
                {briefs.length === 0 ? 'Описать проект' : 'Новый проект'}
              </button>
            </div>
          )}

          {/* ВЫБОР ТИПА */}
          {step === 'project-type' && (
            <div>
              <h2 className='text-2xl font-semibold text-[#f0f0f0] mb-2'>
                Что нужно сделать?
              </h2>
              <p className='text-[#666] text-sm mb-6'>Выберите тип проекта</p>
              <div className='grid grid-cols-2 gap-3'>
                {PROJECT_TYPES.map(pt => (
                  <button key={pt.id} onClick={() => handleNewProject(pt.id)} disabled={loading}
                    className='flex flex-col items-start gap-2 p-4 rounded-xl text-left transition-all hover:scale-[1.02] disabled:opacity-60'
                    style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <span className='text-2xl'>{pt.icon}</span>
                    <span className='text-[#d0d0d0] text-sm font-medium leading-tight'>{pt.label}</span>
                  </button>
                ))}
              </div>
              <button onClick={() => setStep('dashboard')}
                className='mt-4 text-sm text-[#555] hover:text-[#777] transition-colors'>
                ← Назад
              </button>
            </div>
          )}

          {/* ВОПРОСЫ */}
          {step === 'questions' && (
            <div>
              {/* Sticky-шапка: пользователь + прогресс по секциям */}
              <div className='sticky top-0 z-10 -mx-8 -mt-8 px-8 pt-6 pb-4 rounded-t-2xl' style={{ background: '#111' }}>
                {/* Плашка пользователя + тип */}
                <div className='flex items-center gap-3 p-3 rounded-xl mb-4'
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div className='w-8 h-8 rounded-lg flex items-center justify-center shrink-0 text-xs font-bold text-white'
                    style={{ background: 'linear-gradient(135deg, #7d2cc8, #0070f3)' }}>
                    {user.firstName.charAt(0).toUpperCase()}
                  </div>
                  <div className='flex-1 min-w-0'>
                    <p className='text-sm text-[#d0d0d0] font-medium truncate'>{user.firstName} {user.lastName}</p>
                    <p className='text-xs text-[#555] truncate'>@{user.login}</p>
                  </div>
                  <span className='flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs shrink-0'
                    style={{ background: 'rgba(125,44,200,0.12)', color: '#a78bfa' }}>
                    {PROJECT_TYPES.find(p => p.id === projectType)?.icon}
                    {' '}{PROJECT_TYPES.find(p => p.id === projectType)?.label}
                  </span>
                </div>

                {/* Прогресс по секциям */}
                <div className='mb-2'>
                  <div className='flex items-center justify-between mb-2'>
                    <span className='text-xs text-[#555]'>
                      Раздел {sectionIndex + 1} из {QUESTION_SECTIONS.length} — {currentSection.title}
                    </span>
                    <span className='text-xs text-[#555]'>{progress}%</span>
                  </div>
                  <div className='flex gap-1'>
                    {QUESTION_SECTIONS.map((_, i) => (
                      <div key={i} className='flex-1 h-1 rounded-full overflow-hidden' style={{ background: 'rgba(255,255,255,0.05)' }}>
                        <div className='h-full rounded-full transition-all duration-300'
                          style={{
                            width: i <= sectionIndex ? '100%' : '0%',
                            background: i < sectionIndex ? 'rgba(74,222,128,0.5)' : 'linear-gradient(90deg, #7d2cc8, #0070f3)'
                          }} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Отступ под sticky-шапкой */}
              <div className='pt-5' />

              {/* Вопросы текущего раздела */}
              <div className='space-y-5'>
                {currentSection.questions.map(q => (
                  <div key={q.id}>
                    <label className='block text-xs text-[#555] uppercase tracking-wider mb-2'>
                      {q.label}
                      {q.required && <span className='text-purple-400 ml-1'>*</span>}
                    </label>
                    <textarea value={answers[q.id] ?? ''}
                      onChange={e => setAnswers(prev => ({ ...prev, [q.id]: e.target.value }))}
                      placeholder={q.placeholder} rows={3}
                      className='w-full rounded-xl px-4 py-3 text-[#f0f0f0] text-sm outline-none resize-none transition-all'
                      style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                      onFocus={e => { e.currentTarget.style.borderColor = 'rgba(125,44,200,0.4)' }}
                      onBlur={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)' }} />
                  </div>
                ))}
              </div>

              <div className='flex gap-3 pt-6'>
                <button
                  onClick={isFirstSection ? handleBackToDashboard : () => setSectionIndex(i => i - 1)}
                  className='flex-1 py-3 rounded-xl text-sm text-[#666] transition-all hover:text-[#999]'
                  style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
                  {isFirstSection ? 'К проектам' : '← Назад'}
                </button>
                {isLastSection ? (
                  <button onClick={handleSubmit} disabled={sending}
                    className='flex-[2] py-3 rounded-xl font-medium text-white text-sm transition-all hover:scale-[1.02] hover:opacity-90 disabled:opacity-60'
                    style={{ background: 'linear-gradient(135deg, #7d2cc8, #0070f3)' }}>
                    {sending ? 'Отправляем...' : 'Отправить бриф'}
                  </button>
                ) : (
                  <button onClick={() => setSectionIndex(i => i + 1)}
                    className='flex-[2] py-3 rounded-xl font-medium text-white text-sm transition-all hover:scale-[1.02] hover:opacity-90'
                    style={{ background: 'linear-gradient(135deg, #7d2cc8, #0070f3)' }}>
                    Далее →
                  </button>
                )}
              </div>
            </div>
          )}

          {/* УСПЕХ */}
          {step === 'success' && (
            <div className='text-center py-4'>
              <div className='w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6'
                style={{ background: 'linear-gradient(135deg, #7d2cc8, #0070f3)', boxShadow: '0 0 32px rgba(125,44,200,0.4)' }}>
                <svg width='28' height='28' viewBox='0 0 24 24' fill='none'>
                  <path d='M20 6L9 17l-5-5' stroke='white' strokeWidth='2.5' strokeLinecap='round' strokeLinejoin='round' />
                </svg>
              </div>
              <h2 className='text-2xl font-semibold text-[#f0f0f0] mb-3'>Бриф отправлен!</h2>
              <p className='text-[#666] text-sm mb-8 leading-relaxed'>
                Изучу задачу и отвечу лично в течение дня
              </p>
              <div className='flex flex-col gap-3'>
                <button onClick={handleBackToDashboard}
                  className='py-3 rounded-xl font-medium text-white text-sm transition-all hover:scale-[1.02]'
                  style={{ background: 'linear-gradient(135deg, #7d2cc8, #0070f3)' }}>
                  Мои проекты
                </button>
                <a href='https://t.me/vitalyvronsky' target='_blank' rel='noopener noreferrer'
                  className='py-3 rounded-xl text-sm text-[#666] hover:text-[#999] transition-colors text-center'
                  style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
                  Написать в Telegram
                </a>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}
