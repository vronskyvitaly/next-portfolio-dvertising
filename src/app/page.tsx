import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import Process from "@/components/Process";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const SITE_URL = "https://vitalyvronsky.ru";

export const metadata: Metadata = {
  title: "Автоматизация бизнеса и внедрение ИИ — Виталий Вронский | Москва и СПб",
  description:
    "Автоматизирую бизнес-процессы, создаю сайты и веб-приложения, внедряю ИИ в организации. Работаю в Москве и Санкт-Петербурге. Telegram-боты и автоматизация 24/7.",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Виталий Вронский",
    title: "Автоматизация бизнеса и внедрение ИИ — Виталий Вронский | Москва и СПб",
    description:
      "Автоматизирую бизнес-процессы, создаю сайты и внедряю ИИ в организации. Работаю в Москве и Санкт-Петербурге.",
    locale: "ru_RU",
  },
  twitter: {
    card: "summary_large_image",
    title: "Автоматизация бизнеса и внедрение ИИ — Виталий Вронский | Москва и СПб",
    description:
      "Автоматизирую бизнес-процессы, создаю сайты и внедряю ИИ. Работаю в Москве и Санкт-Петербурге.",
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "geo.region": "RU-MOW, RU-SPE",
    "geo.placename": "Москва, Санкт-Петербург",
    "yandex-verification": "46d64c47c02e1a18",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Виталий Вронский",
      jobTitle: "Разработчик и специалист по автоматизации бизнеса",
      url: SITE_URL,
      sameAs: ["https://t.me/vitalyvronsky", "https://vronskyvitaly.ru"],
      knowsAbout: [
        "Автоматизация бизнеса",
        "Разработка сайтов",
        "Веб-приложения",
        "Внедрение искусственного интеллекта",
        "Telegram-боты",
        "Next.js",
        "React",
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#service`,
      name: "Виталий Вронский — разработка и автоматизация",
      description:
        "Автоматизация бизнес-процессов, разработка сайтов и веб-приложений, внедрение ИИ в организации, создание Telegram-ботов. Работаю в Москве и Санкт-Петербурге.",
      url: SITE_URL,
      provider: { "@id": `${SITE_URL}/#person` },
      areaServed: [
        { "@type": "City", name: "Москва" },
        { "@type": "City", name: "Санкт-Петербург" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Услуги",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Автоматизация бизнеса",
              description:
                "Освобождение сотрудников от рутины: документооборот, отчёты, интеграции между системами.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Сайты и веб-приложения",
              description:
                "Разработка лендингов, корпоративных сайтов, интернет-магазинов и веб-приложений под ключ.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Внедрение ИИ в организации",
              description:
                "Интеграция ИИ-ассистентов в рабочие процессы: обработка заявок, анализ данных, поддержка клиентов.",
            },
          },
        ],
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        availableLanguage: "Russian",
        url: "https://t.me/vitalyvronsky",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Сколько стоит разработка сайта?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Стоимость зависит от сложности. Лендинг — от 30 000 ₽, корпоративный сайт — от 60 000 ₽, веб-приложение — от 100 000 ₽.",
          },
        },
        {
          "@type": "Question",
          name: "Как долго занимает разработка?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Лендинг — 3–7 дней, корпоративный сайт — 2–4 недели, сложное приложение — 1–3 месяца.",
          },
        },
        {
          "@type": "Question",
          name: "Что такое автоматизация бизнеса и как она помогает?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Это перевод ручных повторяющихся задач в автоматический режим. В среднем экономит 2–5 часов работы в день.",
          },
        },
        {
          "@type": "Question",
          name: "Работаете ли вы с небольшими компаниями?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Да. Работаю как с малым бизнесом и ИП, так и со средними компаниями.",
          },
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Services />
      <Benefits />
      <Process />
      <Faq />
      <Contact />
      <Footer />
    </main>
  );
}
