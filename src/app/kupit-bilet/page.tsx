import type { Metadata } from "next";
import { HelpBlock } from "@/components/HelpBlock";
import { PageHero } from "@/components/PageHero";
import { TicketWidget } from "@/components/TicketWidget";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Купить билет на автобус Махачкала — Москва",
  description:
    "Онлайн-покупка билетов на автобус Махачкала — Москва и обратно. Выберите дату, оплатите на сайте, получите маршрутную квитанцию на email.",
  alternates: { canonical: "/kupit-bilet" },
  openGraph: {
    title: "Купить билет на автобус Махачкала — Москва",
    description:
      "Онлайн-покупка билетов. Регулярный экспресс без пересадок.",
    url: "/kupit-bilet",
  },
};

export default function BuyTicketPage() {
  return (
    <>
      <PageHero
        title="Купить билет"
        description="Укажите пункты посадки и высадки, выберите рейс и оплатите заказ на сайте. После оплаты маршрутная квитанция придёт на email."
        crumbs={[
          { label: "Главная", href: "/" },
          { label: "Купить билет" },
        ]}
      />

      <section className="bg-paper py-8 sm:py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <ol className="mb-8 grid gap-4 sm:grid-cols-3">
            {[
              "Выберите города и дату",
              "Оформите и оплатите заказ",
              "Получите квитанцию на email",
            ].map((step, i) => (
              <li
                key={step}
                className="rounded-2xl border border-line bg-surface px-5 py-4"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-deep">
                  Шаг {i + 1}
                </p>
                <p className="mt-2 text-sm font-medium text-ink">{step}</p>
              </li>
            ))}
          </ol>

          <div className="overflow-hidden rounded-3xl border border-line bg-surface p-3 shadow-[0_20px_60px_rgba(11,22,36,0.08)] sm:p-5">
            <TicketWidget />
          </div>

          <p className="mt-4 text-sm text-ink/55">
            Оформляя заказ, вы принимаете условия{" "}
            <a
              href={site.biletdo.disclaimerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline-offset-2 hover:underline"
            >
              пользовательского соглашения
            </a>{" "}
            и соглашаетесь с{" "}
            <a
              href={site.biletdo.policyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline-offset-2 hover:underline"
            >
              политикой конфиденциальности
            </a>
            .
          </p>

          <div className="prose-page mt-10">
            <h2>Как покупать билеты на сайте</h2>
            <p>
              Укажите пункт отправления, пункт назначения и дату, затем нажмите
              «Узнать цены». Выберите рейс, оформите заказ и оплатите его на
              сайте. После успешной оплаты появится маршрутная квитанция.
            </p>
            <p>
              Данные для входа в личный кабинет приходят на email, указанный при
              покупке. Там можно посмотреть заказы, квитанции и оформить возврат.
            </p>
            <h2>После покупки</h2>
            <p>
              На большинстве автовокзалов достаточно явиться на посадку с
              документом, удостоверяющим личность, данные которого указаны в
              билете. Если в квитанции есть штрих-код для турникета, лучше иметь
              бумажную распечатку или подойти заранее.
            </p>
            <p>
              Бумажный билет для отчётности можно получить в кассе автовокзала,
              назвав номер билета и предъявив документ.
            </p>
            <h2>Реквизиты документов</h2>
            <p>
              Вводите номер документа по маске поля. Если в номере есть
              латинские символы (например, в свидетельстве о рождении), вводите
              их латиницей: «II-АБ 123456».
            </p>
          </div>

          <HelpBlock />
        </div>
      </section>
    </>
  );
}
