import Link from "next/link";
import { Callout, Clause, Doc, List, Mail, Section, Table, Text } from "@/components/legal/primitives";
import { operatorCredentials } from "@/lib/legal/format";
import type { SiteLegalConfig } from "@/lib/legal/types";

export function PersonalDataConsent({ config }: { config: SiteLegalConfig }) {
  const { operator, contacts, site, purposes, processors } = config;

  const consentPurposes = purposes.filter((purpose) => purpose.legalBasis === "consent");
  const seen = new Set<string>();
  const consentDataCategories = consentPurposes
    .flatMap((purpose) => purpose.dataCategories)
    .filter((cat) => {
      if (seen.has(cat)) return false;
      seen.add(cat);
      return true;
    });

  return (
    <Doc>
      <Text>
        Настоящее Согласие является самостоятельным документом и даётся Пользователем свободно, своей
        волей и в своём интересе в соответствии со статьёй 9 Федерального закона от 27.07.2006 № 152-ФЗ
        «О персональных данных» при отправке любой формы на сайте {site.url} (далее — «Сайт») либо при
        проставлении соответствующей отметки.
      </Text>

      <Callout>
        Согласие является конкретным, предметным, информированным, сознательным и однозначным. Отметка о
        согласии не проставляется заранее и не объединяется с принятием иных документов.
      </Callout>

      <Section title="Оператор, получающий согласие">
        <Clause>
          {operator.fullName}, {operatorCredentials(operator)}.
        </Clause>
        <Clause>Адрес: {operator.legalAddress}.</Clause>
        <Clause>
          Телефон: {contacts.phone}. Адрес электронной почты: <Mail address={contacts.email} />.
        </Clause>
      </Section>

      <Section title="Субъект персональных данных">
        <Clause>
          Субъектом является Пользователь, самостоятельно заполнивший форму на Сайте и указавший свои
          персональные данные.
        </Clause>
        <Clause>
          Согласие даётся лицом, достигшим возраста 14 лет. За несовершеннолетних, не достигших 14 лет,
          согласие даёт их законный представитель.
        </Clause>
      </Section>

      <Section title="Цели обработки персональных данных">
        <Clause>Согласие даётся на обработку персональных данных в следующих целях:</Clause>
        <List items={consentPurposes.map((purpose) => `${purpose.title};`)} />
      </Section>

      <Section title="Перечень персональных данных">
        <Clause>Согласие даётся на обработку следующих персональных данных:</Clause>
        <List items={consentDataCategories.map((category) => `${category};`)} />
        <Clause>
          Согласие не распространяется на специальные категории и биометрические данные — Оператор их не
          обрабатывает.
        </Clause>
      </Section>

      <Section title="Перечень действий с персональными данными">
        <Clause>
          Согласие даётся на: сбор, запись, систематизацию, накопление, хранение, уточнение, извлечение,
          использование, передачу, обезличивание, блокирование, удаление, уничтожение персональных данных
          как с использованием средств автоматизации, так и без.
        </Clause>
      </Section>

      <Section title="Лица, которым поручается обработка">
        <Clause>
          Согласие даётся на поручение обработки следующим лицам:
        </Clause>
        <Table
          headers={["Лицо", "Цель обработки", "Состав данных", "Страна"]}
          rows={processors.map((processor) => [
            processor.name,
            processor.purpose,
            processor.dataCategories.join("; "),
            processor.country,
          ])}
        />
      </Section>

      <Section title="Срок действия и порядок отзыва">
        <Clause>
          Согласие действует до достижения целей обработки либо до момента его отзыва Пользователем.
        </Clause>
        <Clause>
          Согласие может быть отозвано путём направления письменного уведомления на{" "}
          <Mail address={contacts.privacyEmail} /> либо по адресу: {contacts.postalAddress}.
        </Clause>
        <Clause>
          После отзыва Оператор прекращает обработку и уничтожает данные в срок не более 30 дней, за
          исключением случаев, когда обработка допускается законом без согласия.
        </Clause>
      </Section>

      <Section title="Подтверждение согласия">
        <Clause>
          Проставляя отметку в поле согласия и отправляя форму, Пользователь подтверждает, что ознакомлен
          с настоящим Согласием и{" "}
          <Link
            href="/legal/privacy-policy"
            className="font-medium text-neutral-900 underline underline-offset-4 hover:no-underline dark:text-neutral-100"
          >
            Политикой конфиденциальности
          </Link>
          , их положения ему понятны.
        </Clause>
      </Section>
    </Doc>
  );
}

