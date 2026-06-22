'use client'

import { useState, useEffect } from 'react'

type Step = 'login' | 'name' | 'project-type' | 'questions' | 'success'

interface BriefData {
  login: string
  firstName: string
  lastName: string
  projectType: string
  answers: Record<string, string>
}

const EMPTY: BriefData = {
  login: '',
  firstName: '',
  lastName: '',
  projectType: '',
  answers: {}
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

// Вопросы по типам проектов — заменишь на свои
interface Question {
  id: string
  label: string
  placeholder: string
  required?: boolean
}

const QUESTIONS: Record<string, Question[]> = {
  site: [
    { id: 'goal', label: 'Цель сайта', placeholder: 'Например: продажи, портфолио, информация об услугах', required: true },
    { id: 'audience', label: 'Целевая аудитория', placeholder: 'Кто ваши клиенты?' },
    { id: 'branding', label: 'Есть ли фирменный стиль?', placeholder: 'Логотип, цвета, шрифты...' },
    { id: 'examples', label: 'Примеры сайтов которые нравятся', placeholder: 'Ссылки или описание' },
    { id: 'deadline', label: 'Дедлайн и бюджет', placeholder: 'Когда нужно и на что рассчитываете?', required: true }
  ],
  shop: [
    { id: 'catalog', label: 'Что продаёте?', placeholder: 'Товары, категории, примерный объём каталога', required: true },
    { id: 'payments', label: 'Нужна ли оплата онлайн?', placeholder: 'Карты, СБП, ЮKassa...' },
    { id: 'delivery', label: 'Как устроена доставка?', placeholder: 'Самовывоз, курьер, СДЭК...' },
    { id: 'integrations', label: 'Нужны интеграции?', placeholder: 'CRM, 1С, склад, маркетплейсы...' },
    { id: 'examples', label: 'Примеры магазинов которые нравятся', placeholder: 'Ссылки или описание' },
    { id: 'deadline', label: 'Дедлайн и бюджет', placeholder: 'Когда нужно и на что рассчитываете?', required: true }
  ],
  bot: [
    { id: 'goal', label: 'Цель бота', placeholder: 'Поддержка, продажи, уведомления, автоматизация?', required: true },
    { id: 'integrations', label: 'Какие интеграции нужны?', placeholder: 'CRM, Google Sheets, платежи...' },
    { id: 'tools', label: 'Какие инструменты используете сейчас?', placeholder: 'Что уже есть?' },
    { id: 'deadline', label: 'Дедлайн и бюджет', placeholder: 'Когда нужно и на что рассчитываете?', required: true }
  ],
  automation: [
    { id: 'process', label: 'Какой процесс автоматизировать?', placeholder: 'Опишите подробно', required: true },
    { id: 'tools', label: 'Текущие инструменты', placeholder: 'CRM, таблицы, сервисы...' },
    { id: 'volume', label: 'Объём операций', placeholder: 'В день / месяц' },
    { id: 'deadline', label: 'Дедлайн и бюджет', placeholder: 'Когда нужно и на что рассчитываете?', required: true }
  ],
  ai: [
    { id: 'task', label: 'Какую задачу решить с помощью ИИ?', placeholder: 'Опишите проблему', required: true },
    { id: 'data', label: 'Есть ли данные для контекста?', placeholder: 'База знаний, документы, история...' },
    { id: 'integrations', label: 'Интеграция с существующими системами?', placeholder: 'Что нужно подключить?' },
    { id: 'deadline', label: 'Дедлайн и бюджет', placeholder: 'Когда нужно и на что рассчитываете?', required: true }
  ],
  webapp: [
    { id: 'type', label: 'Тип приложения', placeholder: 'SaaS, внутренний инструмент, маркетплейс?', required: true },
    { id: 'features', label: 'Ключевые функции', placeholder: 'Что должно уметь приложение?' },
    { id: 'mobile', label: 'Нужна ли мобильная версия?', placeholder: 'Да / нет / нативное приложение?' },
    { id: 'auth', label: 'Авторизация и роли', placeholder: 'Какие уровни доступа нужны?' },
    { id: 'deadline', label: 'Дедлайн и бюджет', placeholder: 'Когда нужно и на что рассчитываете?', required: true }
  ],
  other: [
    { id: 'description', label: 'Опишите проект', placeholder: 'Расскажите всё что считаете важным', required: true },
    { id: 'deadline', label: 'Дедлайн и бюджет', placeholder: 'Когда нужно и на что рассчитываете?', required: true }
  ]
}

const COMMON_QUESTIONS: Question[] = [
  { id: 'extra', label: 'Дополнительные пожелания', placeholder: 'Что ещё важно знать?' },
  { id: 'source', label: 'Откуда узнали обо мне?', placeholder: 'Поиск, рекомендация, соцсети...' }
]

export default function BriefPage() {
  const [step, setStep] = useState<Step>('login')
  const [data, setData] = useState<BriefData>(EMPTY)
  const [loginInput, setLoginInput] = useState('')
  const [loginError, setLoginError] = useState('')
  const [sending, setSending] = useState(false)
  const [loading, setLoading] = useState(false)

  // Восстановить прогресс: сначала из localStorage (мгновенно), потом уточняем из БД
  useEffect(() => {
    const savedLogin = localStorage.getItem('brief_login')
    if (!savedLogin) return
    setLoginInput(savedLogin)

    // 1. Мгновенно восстановить из localStorage
    const savedProgress = localStorage.getItem('brief_progress')
    if (savedProgress) {
      try {
        const parsed: BriefData = JSON.parse(savedProgress)
        if (parsed.login === savedLogin) {
          setData(parsed)
          if (parsed.projectType) setStep('questions')
          else if (parsed.firstName) setStep('project-type')
          else setStep('name')
        }
      } catch {}
    }

    // 2. Синхронизировать с БД (может быть актуальнее)
    setLoading(true)
    fetch(`/api/brief/progress?login=${encodeURIComponent(savedLogin)}`)
      .then(r => r.json())
      .then(({ user, brief }) => {
        if (!user) return
        const restored: BriefData = {
          login: user.login,
          firstName: user.firstName,
          lastName: user.lastName,
          projectType: brief?.projectType ?? '',
          answers: (brief?.answers as Record<string, string>) ?? {}
        }
        setData(restored)
        if (brief?.projectType) setStep('questions')
        else setStep('project-type')
      })
      .catch(() => {}) // если БД недоступна — остаёмся на localStorage
      .finally(() => setLoading(false))
  }, [])

  // Автосохранение прогресса — localStorage + БД
  useEffect(() => {
    if (!data.login || !data.projectType) return

    // localStorage — мгновенно
    localStorage.setItem('brief_progress', JSON.stringify(data))

    // БД — с дебаунсом 1 сек
    const timer = setTimeout(() => {
      fetch('/api/brief/progress', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          login: data.login,
          projectType: data.projectType,
          answers: data.answers
        })
      }).catch(() => {})
    }, 1000)
    return () => clearTimeout(timer)
  }, [data.answers, data.projectType, data.login])

  function update(field: keyof BriefData, value: string) {
    setData(prev => ({ ...prev, [field]: value }))
  }

  function updateAnswer(id: string, value: string) {
    setData(prev => ({ ...prev, answers: { ...prev.answers, [id]: value } }))
  }

  async function handleLogin() {
    const login = loginInput.trim()
    if (!login) {
      setLoginError('Введите логин')
      return
    }
    if (login.length < 3) {
      setLoginError('Логин должен быть не менее 3 символов')
      return
    }
    setLoginError('')
    setLoading(true)
    try {
      const res = await fetch('/api/brief/user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ login })
      })
      const { exists, user } = await res.json()
      localStorage.setItem('brief_login', login)

      if (exists && user) {
        // Загрузить прогресс существующего пользователя
        const progRes = await fetch(`/api/brief/progress?login=${encodeURIComponent(login)}`)
        const { brief } = await progRes.json()
        setData({
          login: user.login,
          firstName: user.firstName,
          lastName: user.lastName,
          projectType: brief?.projectType ?? '',
          answers: (brief?.answers as Record<string, string>) ?? {}
        })
        if (brief?.projectType) setStep('questions')
        else setStep('project-type')
      } else {
        update('login', login)
        setStep('name')
      }
    } catch {
      setLoginError('Ошибка соединения. Попробуйте ещё раз.')
    } finally {
      setLoading(false)
    }
  }

  async function handleName() {
    if (!data.firstName.trim() || !data.lastName.trim()) return
    setLoading(true)
    try {
      const res = await fetch('/api/brief/user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          login: data.login,
          firstName: data.firstName,
          lastName: data.lastName
        })
      })
      if (res.status === 409) {
        // Логин занят другим (race condition)
        setStep('login')
        setLoginError('Этот логин уже занят, выберите другой')
        return
      }
      setStep('project-type')
    } catch {
      alert('Ошибка соединения')
    } finally {
      setLoading(false)
    }
  }

  function handleProjectType(type: string) {
    setData(prev => ({ ...prev, projectType: type }))
    setStep('questions')
  }

  async function handleSubmit() {
    setSending(true)
    try {
      await fetch('/api/brief', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ login: data.login, projectType: data.projectType, answers: data.answers })
      })
      localStorage.removeItem('brief_login')
      localStorage.removeItem('brief_progress')
      setStep('success')
    } catch {
      alert('Ошибка отправки. Попробуйте ещё раз.')
    } finally {
      setSending(false)
    }
  }

  const questions = data.projectType
    ? [...(QUESTIONS[data.projectType] ?? []), ...COMMON_QUESTIONS]
    : []

  const totalSteps = 4
  const currentStep =
    step === 'login' ? 1 : step === 'name' ? 2 : step === 'project-type' ? 3 : 4

  return (
    <div
      className='min-h-screen flex flex-col items-center justify-center px-4 py-16'
      style={{ background: '#0a0a0a' }}
    >
      {/* Фоновые сферы */}
      <div
        className='fixed top-1/4 -left-32 w-96 h-96 rounded-full pointer-events-none animate-pulse-slow'
        style={{ background: 'radial-gradient(circle, rgba(125,44,200,0.12) 0%, transparent 70%)' }}
      />
      <div
        className='fixed bottom-1/4 -right-32 w-96 h-96 rounded-full pointer-events-none animate-pulse-slow-2'
        style={{ background: 'radial-gradient(circle, rgba(0,112,243,0.10) 0%, transparent 70%)' }}
      />

      <div className='w-full max-w-xl relative'>
        {/* Логотип / назад */}
        <a
          href='/'
          className='inline-flex items-center gap-2 mb-8 text-sm text-[#666] hover:text-[#999] transition-colors'
        >
          <svg width='16' height='16' viewBox='0 0 16 16' fill='none'>
            <path d='M10 12L6 8l4-4' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' />
          </svg>
          На главную
        </a>

        {/* Progress bar */}
        {step !== 'success' && (
          <div className='mb-8'>
            <div className='flex items-center justify-between mb-2'>
              <span className='text-xs text-[#555]'>Шаг {currentStep} из {totalSteps}</span>
              <span className='text-xs text-[#555]'>{Math.round((currentStep / totalSteps) * 100)}%</span>
            </div>
            <div className='h-1 bg-white/5 rounded-full overflow-hidden'>
              <div
                className='h-full rounded-full transition-all duration-500'
                style={{
                  width: `${(currentStep / totalSteps) * 100}%`,
                  background: 'linear-gradient(90deg, #7d2cc8, #0070f3)'
                }}
              />
            </div>
          </div>
        )}

        {/* Карточка */}
        <div
          className='rounded-2xl p-8'
          style={{
            background: '#111',
            border: '1px solid rgba(255,255,255,0.06)'
          }}
        >
          {/* ШАГ 1: Логин */}
          {step === 'login' && (
            <div>
              <div
                className='w-12 h-12 rounded-xl flex items-center justify-center mb-6'
                style={{ background: 'linear-gradient(135deg, #7d2cc8, #0070f3)' }}
              >
                <svg width='22' height='22' viewBox='0 0 24 24' fill='none'>
                  <path
                    d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z'
                    stroke='white'
                    strokeWidth='2'
                    strokeLinecap='round'
                  />
                </svg>
              </div>
              <h1 className='text-2xl font-semibold text-[#f0f0f0] mb-2'>Заполнить бриф</h1>
              <p className='text-[#666] text-sm mb-8'>
                Введите логин чтобы начать или продолжить заполнение
              </p>
              <div className='space-y-4'>
                <div>
                  <label className='block text-xs text-[#555] uppercase tracking-wider mb-2'>Ваш логин</label>
                  <input
                    type='text'
                    value={loginInput}
                    onChange={e => setLoginInput(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && handleLogin()}
                    placeholder='например: ivan_petrov'
                    className='w-full rounded-xl px-4 py-3 text-[#f0f0f0] text-sm outline-none transition-all'
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: loginError ? '1px solid rgba(239,68,68,0.5)' : '1px solid rgba(255,255,255,0.08)'
                    }}
                    autoFocus
                  />
                  {loginError && <p className='text-xs text-red-400 mt-1'>{loginError}</p>}
                  <p className='text-xs text-[#444] mt-2'>
                    Если вы уже начали бриф — введите тот же логин и продолжите с места остановки
                  </p>
                </div>
                <button
                  onClick={handleLogin}
                  disabled={loading}
                  className='w-full py-3 rounded-xl font-medium text-white text-sm transition-all hover:scale-[1.02] hover:opacity-90 disabled:opacity-60'
                  style={{ background: 'linear-gradient(135deg, #7d2cc8, #0070f3)' }}
                >
                  {loading ? 'Проверяем...' : 'Продолжить'}
                </button>
              </div>
            </div>
          )}

          {/* ШАГ 2: Имя и фамилия */}
          {step === 'name' && (
            <div>
              <div
                className='w-12 h-12 rounded-xl flex items-center justify-center mb-6'
                style={{ background: 'linear-gradient(135deg, #7d2cc8, #0070f3)' }}
              >
                <svg width='22' height='22' viewBox='0 0 24 24' fill='none'>
                  <path
                    d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'
                    fill='white'
                  />
                </svg>
              </div>
              <h2 className='text-2xl font-semibold text-[#f0f0f0] mb-2'>Как вас зовут?</h2>
              <p className='text-[#666] text-sm mb-8'>Логин: <span className='text-[#888]'>{data.login}</span></p>
              <div className='space-y-4'>
                <div>
                  <label className='block text-xs text-[#555] uppercase tracking-wider mb-2'>Имя</label>
                  <input
                    type='text'
                    value={data.firstName}
                    onChange={e => update('firstName', e.target.value)}
                    placeholder='Иван'
                    className='w-full rounded-xl px-4 py-3 text-[#f0f0f0] text-sm outline-none'
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)'
                    }}
                    autoFocus
                  />
                </div>
                <div>
                  <label className='block text-xs text-[#555] uppercase tracking-wider mb-2'>Фамилия</label>
                  <input
                    type='text'
                    value={data.lastName}
                    onChange={e => update('lastName', e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && handleName()}
                    placeholder='Петров'
                    className='w-full rounded-xl px-4 py-3 text-[#f0f0f0] text-sm outline-none'
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)'
                    }}
                  />
                </div>
                <div className='flex gap-3 pt-2'>
                  <button
                    onClick={() => setStep('login')}
                    className='flex-1 py-3 rounded-xl text-sm text-[#666] transition-all hover:text-[#999]'
                    style={{ border: '1px solid rgba(255,255,255,0.06)' }}
                  >
                    Назад
                  </button>
                  <button
                    onClick={handleName}
                    disabled={!data.firstName.trim() || !data.lastName.trim()}
                    className='flex-2 py-3 rounded-xl font-medium text-white text-sm transition-all hover:scale-[1.02] hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100'
                    style={{ background: 'linear-gradient(135deg, #7d2cc8, #0070f3)' }}
                  >
                    Продолжить
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ШАГ 3: Тип проекта */}
          {step === 'project-type' && (
            <div>
              <h2 className='text-2xl font-semibold text-[#f0f0f0] mb-2'>
                Что нужно сделать,{' '}
                <span style={{ background: 'linear-gradient(90deg, #c084fc, #60a5fa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  {data.firstName}
                </span>
                ?
              </h2>

              {/* Уже выбран — показываем и даём продолжить */}
              {data.projectType && (
                <div className='mb-6'>
                  <p className='text-[#555] text-xs mb-3'>Вы уже выбрали:</p>
                  <div
                    className='flex items-center gap-3 p-4 rounded-xl mb-3'
                    style={{
                      background: 'rgba(125,44,200,0.1)',
                      border: '1px solid rgba(125,44,200,0.35)'
                    }}
                  >
                    <span className='text-2xl'>{PROJECT_TYPES.find(p => p.id === data.projectType)?.icon}</span>
                    <span className='text-[#e0d0f8] font-medium'>
                      {PROJECT_TYPES.find(p => p.id === data.projectType)?.label}
                    </span>
                    <svg className='ml-auto shrink-0' width='18' height='18' viewBox='0 0 24 24' fill='none'>
                      <path d='M20 6L9 17l-5-5' stroke='#a78bfa' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
                    </svg>
                  </div>
                  <button
                    onClick={() => setStep('questions')}
                    className='w-full py-3 rounded-xl font-medium text-white text-sm transition-all hover:scale-[1.02] hover:opacity-90 mb-4'
                    style={{ background: 'linear-gradient(135deg, #7d2cc8, #0070f3)' }}
                  >
                    Продолжить заполнение →
                  </button>
                  <p className='text-[#444] text-xs text-center mb-4'>или выберите другой тип ниже</p>
                </div>
              )}

              {!data.projectType && <p className='text-[#666] text-sm mb-6'>Выберите тип проекта</p>}

              <div className='grid grid-cols-2 gap-3'>
                {PROJECT_TYPES.map(pt => (
                  <button
                    key={pt.id}
                    onClick={() => handleProjectType(pt.id)}
                    className='flex flex-col items-start gap-2 p-4 rounded-xl text-left transition-all hover:scale-[1.02]'
                    style={{
                      background: data.projectType === pt.id ? 'rgba(125,44,200,0.08)' : 'rgba(255,255,255,0.03)',
                      border: data.projectType === pt.id ? '1px solid rgba(125,44,200,0.3)' : '1px solid rgba(255,255,255,0.06)'
                    }}
                  >
                    <span className='text-2xl'>{pt.icon}</span>
                    <span className='text-[#d0d0d0] text-sm font-medium leading-tight'>{pt.label}</span>
                  </button>
                ))}
              </div>
              <button
                onClick={() => setStep('name')}
                className='mt-4 text-sm text-[#555] hover:text-[#777] transition-colors'
              >
                ← Назад
              </button>
            </div>
          )}

          {/* ШАГ 4: Вопросы */}
          {step === 'questions' && (
            <div>
              {/* Пользователь */}
              <div
                className='flex items-center gap-3 p-3 rounded-xl mb-6'
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <div
                  className='w-8 h-8 rounded-lg flex items-center justify-center shrink-0 text-xs font-bold text-white'
                  style={{ background: 'linear-gradient(135deg, #7d2cc8, #0070f3)' }}
                >
                  {data.firstName.charAt(0).toUpperCase()}
                </div>
                <div className='flex-1 min-w-0'>
                  <p className='text-sm text-[#d0d0d0] font-medium truncate'>
                    {data.firstName} {data.lastName}
                  </p>
                  <p className='text-xs text-[#555] truncate'>@{data.login}</p>
                </div>
                <button
                  onClick={() => setStep('project-type')}
                  className='flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs shrink-0 transition-opacity hover:opacity-70'
                  style={{ background: 'rgba(125,44,200,0.12)', color: '#a78bfa' }}
                  title='Изменить тип проекта'
                >
                  <span>{PROJECT_TYPES.find(p => p.id === data.projectType)?.icon}</span>
                  <span>{PROJECT_TYPES.find(p => p.id === data.projectType)?.label}</span>
                  <svg width='10' height='10' viewBox='0 0 24 24' fill='none'>
                    <path d='M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7' stroke='currentColor' strokeWidth='2' strokeLinecap='round'/>
                    <path d='M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z' stroke='currentColor' strokeWidth='2' strokeLinecap='round'/>
                  </svg>
                </button>
              </div>

              <div className='space-y-5'>
                {questions.map(q => (
                  <div key={q.id}>
                    <label className='block text-xs text-[#555] uppercase tracking-wider mb-2'>
                      {q.label}
                      {q.required && <span className='text-purple-400 ml-1'>*</span>}
                    </label>
                    <textarea
                      value={data.answers[q.id] ?? ''}
                      onChange={e => updateAnswer(q.id, e.target.value)}
                      placeholder={q.placeholder}
                      rows={3}
                      className='w-full rounded-xl px-4 py-3 text-[#f0f0f0] text-sm outline-none resize-none transition-all'
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.08)'
                      }}
                      onFocus={e => {
                        e.currentTarget.style.borderColor = 'rgba(125,44,200,0.4)'
                      }}
                      onBlur={e => {
                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                      }}
                    />
                  </div>
                ))}
              </div>

              <div className='flex gap-3 pt-6'>
                <button
                  onClick={handleSubmit}
                  disabled={sending}
                  className='w-full py-3 rounded-xl font-medium text-white text-sm transition-all hover:scale-[1.02] hover:opacity-90 disabled:opacity-60'
                  style={{ background: 'linear-gradient(135deg, #7d2cc8, #0070f3)' }}
                >
                  {sending ? 'Отправляем...' : 'Отправить бриф'}
                </button>
              </div>
            </div>
          )}

          {/* ШАГ 5: Успех */}
          {step === 'success' && (
            <div className='text-center py-4'>
              <div
                className='w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6'
                style={{ background: 'linear-gradient(135deg, #7d2cc8, #0070f3)', boxShadow: '0 0 32px rgba(125,44,200,0.4)' }}
              >
                <svg width='28' height='28' viewBox='0 0 24 24' fill='none'>
                  <path d='M20 6L9 17l-5-5' stroke='white' strokeWidth='2.5' strokeLinecap='round' strokeLinejoin='round' />
                </svg>
              </div>
              <h2 className='text-2xl font-semibold text-[#f0f0f0] mb-3'>Бриф отправлен!</h2>
              <p className='text-[#666] text-sm mb-8 leading-relaxed'>
                Получил ваши данные и свяжусь с вами в ближайшее время, чтобы обсудить проект.
              </p>
              <a
                href='https://t.me/vitalyvronsky'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-white text-sm transition-all hover:scale-105'
                style={{ background: 'linear-gradient(135deg, #7d2cc8, #0070f3)', boxShadow: '0 0 24px rgba(125,44,200,0.3)' }}
              >
                Написать в Telegram
              </a>
              <div className='mt-4'>
                <a href='/' className='text-sm text-[#555] hover:text-[#777] transition-colors'>
                  На главную
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
