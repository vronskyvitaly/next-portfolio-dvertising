import Link from "next/link";
import { Callout, Clause, Doc, List, Mail, Section, Table, Text } from "@/components/legal/primitives";
import { cookieCategoryLabel, requiresConsent } from "@/lib/legal/format";
import type { SiteLegalConfig } from "@/lib/legal/types";

export function CookiePolicy({ config }: { config: SiteLegalConfig }) {
  const { contacts, site, cookies } = config;

  const essential = cookies.filter((cookie) => !requiresConsent(cookie.category));
  const optional = cookies.filter((cookie) => requiresConsent(cookie.category));

  return (
    <Doc>
      <Text>
        Настоящая Политика использования cookie-файлов разъясняет, какие cookie-файлы использует сайт{" "}
        {site.url} (далее — «Сайт»), с какими целями и как Пользователь может управлять своим согласием.
      </Text>

      <Section title="Что такое cookie-файлы">
        <Clause>
          Cookie — небольшой фрагмент данных, который веб-сервер сохраняет на устройстве Пользователя при
          посещении Сайта и который передаётся обратно при последующих посещениях.
        </Clause>
        <Clause>
          Cookie-файлы в совокупности с IP-адресом и данными об устройстве позволяют косвенно определить
          Пользователя. Поэтому Оператор рассматривает такие данные как персональные и обрабатывает их в
          соответствии с{" "}
          <Link
            href="/legal/privacy-policy"
            className="font-medium text-neutral-900 underline underline-offset-4 hover:no-underline dark:text-neutral-100"
          >
            Политикой в отношении обработки персональных данных
          </Link>
          .
        </Clause>
      </Section>

      <Section title="Правовые основания использования">
        <Clause>
          Строго необходимые (технические) cookie устанавливаются без согласия Пользователя: без них Сайт
          не может функционировать.
        </Clause>
        <Clause>
          Аналитические и иные нетехнические cookie устанавливаются исключительно после получения
          предварительного согласия Пользователя в баннере согласия.
        </Clause>
      </Section>

      <Section title="Строго необходимые cookie-файлы">
        <Clause>Устанавливаются всегда, отключение через баннер невозможно:</Clause>
        <Table
          headers={["Наименование", "Кто устанавливает", "Назначение", "Срок хранения"]}
          rows={essential.map((cookie) => [
            cookie.name,
            cookie.provider,
            cookie.purpose,
            cookie.lifetime,
          ])}
        />
      </Section>

      {optional.length > 0 ? (
        <Section title="Cookie-файлы, требующие согласия">
          <Clause>Устанавливаются только после получения согласия Пользователя:</Clause>
          <Table
            headers={["Наименование", "Категория", "Кто устанавливает", "Назначение", "Срок хранения"]}
            rows={optional.map((cookie) => [
              cookie.name,
              cookieCategoryLabel(cookie.category),
              cookie.provider,
              cookie.purpose,
              cookie.lifetime,
            ])}
          />
        </Section>
      ) : null}

      <Section title="Управление согласием">
        <Clause>
          При первом посещении Сайта Пользователю показывается баннер, позволяющий принять или отклонить
          использование необязательных cookie. Отклонение не ограничивает доступ к Сайту.
        </Clause>
        <Clause>
          Ранее данное согласие может быть отозвано в любой момент путём удаления cookie-файлов в
          настройках браузера — при следующем посещении баннер будет показан повторно.
        </Clause>
        <Clause>Пользователь также может управлять cookie средствами браузера:</Clause>
        <List
          items={[
            "Google Chrome: Настройки → Конфиденциальность и безопасность → Файлы cookie;",
            "Mozilla Firefox: Настройки → Приватность и защита → Куки и данные сайтов;",
            "Safari: Настройки → Конфиденциальность → Управление данными веб-сайтов;",
            "Microsoft Edge: Настройки → Файлы cookie и разрешения сайтов.",
          ]}
        />
        <Callout>
          Блокировка строго необходимых cookie может привести к некорректной работе отдельных функций Сайта.
        </Callout>
      </Section>

      <Section title="Контакты">
        <Clause>
          Вопросы об использовании cookie-файлов направляются на адрес{" "}
          <Mail address={contacts.privacyEmail} />.
        </Clause>
      </Section>
    </Doc>
  );
}

