import type { Metadata } from "next";
import { HelpBlock } from "@/components/HelpBlock";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Путешествия с детьми",
  description:
    "Правила проезда детей на автобусе Махачкала — Москва: детский билет, документы и сопровождение.",
  alternates: { canonical: "/pasazhiram/deti" },
};

export default function ChildrenPage() {
  return (
    <>
      <PageHero
        title="Путешествия с детьми"
        description="Как оформить детский билет и какие документы нужны для посадки."
        crumbs={[
          { label: "Главная", href: "/" },
          { label: "Пассажирам", href: "/pasazhiram/deti" },
          { label: "Путешествия с детьми" },
        ]}
      />

      <section className="bg-paper py-8 sm:py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <nav className="mb-8 flex flex-wrap gap-2 text-sm">
            {[
              { href: "#mesto", label: "Место ребёнку" },
              { href: "#tarif", label: "Тариф" },
              { href: "#dokumenty", label: "Документы" },
              { href: "#soprovozhdenie", label: "Сопровождение" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full border border-line bg-surface px-3.5 py-1.5 text-ink-soft transition hover:border-amber hover:text-ink"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="prose-page">
            <h2 id="mesto">Отдельное место</h2>
            <p>
              По законодательству РФ перевозить ребёнка в автобусе без отдельного
              посадочного места запрещено. Ответственность за безопасность
              ребёнка и использование удерживающего устройства лежит на родителях
              или опекунах.
            </p>

            <h2 id="tarif">Тариф</h2>
            <p>
              Ребёнку до 12 лет приобретается детский билет. С 12 лет плата
              взимается по полному тарифу. Возраст учитывается на день начала
              поездки.
            </p>
            <p>
              Покупка детского билета без взрослого на сайте невозможна. Можно
              вернуть пассажирский билет и оформить детский и взрослый в одном
              заказе либо купить детский билет в кассе автовокзала.
            </p>

            <h2 id="dokumenty">Документы</h2>
            <p>
              Электронные билеты именные и оформляются на основании документа,
              удостоверяющего личность. Для детей до 14 лет таким документом
              является свидетельство о рождении.
            </p>

            <h2 id="soprovozhdenie">Сопровождение</h2>
            <p>
              В пределах Российской Федерации сопровождать ребёнка может любой
              человек. На международных рейсах нужна доверенность. Самостоятельный
              проезд без сопровождения возможен с 14 лет (с момента получения
              паспорта).
            </p>
            <p>
              Подробности о провозе детей уточняйте в справочной службе
              автовокзала или у диспетчера.
            </p>
          </div>
          <HelpBlock />
        </div>
      </section>
    </>
  );
}
