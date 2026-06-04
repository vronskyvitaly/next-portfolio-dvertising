# next-portfolio-advertising

Лендинг для продвижения услуг по **автоматизации бизнеса**, **созданию сайтов и веб-приложений** и **внедрению ИИ в организации**. Подготовлен под запуск рекламы в Яндекс.Директ.

Сайт-портфолио автора: [vronskyvitaly.ru](https://vronskyvitaly.ru)

---

## Стек

| Слой | Технология |
|------|-----------|
| Фреймворк | Next.js 16 (App Router, Turbopack) |
| UI | React 19 + React Compiler |
| Стили | Tailwind CSS v4 |
| Язык | TypeScript (strict) |
| Шрифт | Geist Sans / Geist Mono |

---

## Структура проекта

```
src/
├── app/
│   ├── layout.tsx       # Корневой layout, метатеги, шрифты
│   ├── page.tsx         # Главная страница — сборка секций
│   └── globals.css      # Tailwind v4, CSS-переменные, keyframe-анимации
└── components/
    ├── Hero.tsx          # Первый экран: заголовок, CTA, статистика
    ├── Services.tsx      # Три направления услуг
    ├── Benefits.tsx      # Преимущества работы
    ├── Process.tsx       # Этапы сотрудничества
    ├── Faq.tsx           # Часто задаваемые вопросы (аккордеон)
    ├── Contact.tsx       # Блок контактов и CTA
    └── Footer.tsx        # Подвал
```

---

## Запуск

```bash
npm install
npm run dev       # http://localhost:3000
```

```bash
npm run build     # production-сборка
npm run start     # запуск production-сервера
npm run lint      # ESLint
```

---

## Дизайн

- **Тёмная тема** — единственная, без переключателя
- **Акцентные цвета** — фиолетовый `#7d2cc8`, синий `#0070f3`, голубой `#00d4ff`
- **Анимации** — чистый CSS (`@keyframes`), без Framer Motion
- **Типографика** — Geist Sans (кириллический subset подключён)
- **Фото** — не добавлены, зарезервированы для последующего добавления

---

## Контакты автора

- Telegram: [@vitalyvronsky](https://t.me/vitalyvronsky)
- Email: vronskyvitaly@mail.ru
- Портфолио: [vronskyvitaly.ru](https://vronskyvitaly.ru)
