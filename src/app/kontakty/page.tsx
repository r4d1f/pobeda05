import type { Metadata } from "next";
import { HelpBlock } from "@/components/HelpBlock";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Контакты диспетчерской",
  description:
    "Телефон диспетчерской ООО «Победа»: +7 (937) 134-50-50, email disp_ast30@mail.ru. Работаем круглосуточно.",
  alternates: { canonical: "/kontakty" },
};

const items = [
  {
    label: "Телефон",
    value: site.phone,
    href: site.phoneHref,
  },
  {
    label: "Email",
    value: site.email,
    href: site.emailHref,
  },
  {
    label: "Местоположение",
    value: site.location,
  },
  {
    label: "Часы работы",
    value: site.hours,
  },
];

export default function ContactsPage() {
  return (
    <>
      <PageHero
        title="Контакты"
        description="Свяжитесь с диспетчерской службой — поможем с рейсом, билетом и посадкой."
        crumbs={[
          { label: "Главная", href: "/" },
          { label: "Контакты" },
        ]}
      />

      <section className="bg-paper py-8 sm:py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-4 sm:grid-cols-2">
            {items.map((item) => (
              <div
                key={item.label}
                className="rounded-3xl border border-line bg-surface px-6 py-7"
              >
                <p className="text-xs uppercase tracking-[0.16em] text-ink/45">
                  {item.label}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    className="mt-3 block font-display text-2xl text-ink transition hover:text-amber-deep"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="mt-3 font-display text-2xl">{item.value}</p>
                )}
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-3xl bg-ink px-6 py-8 text-white sm:px-8">
            <p className="font-display text-3xl">{site.legalName}</p>
            <p className="mt-3 max-w-2xl text-white/65">
              Регулярные междугородние перевозки по маршруту {site.route.title}{" "}
              с заездами в Кизляр, Хасавюрт, Элисту и Волгоград.
            </p>
            <ul className="mt-5 space-y-1.5 text-sm text-white/70">
<li>ИНН: {site.legal.inn}</li>
            <li>ОГРН: {site.legal.ogrn}</li>
            <li>{site.legal.legalAddress}</li>
          </ul>
          <p className="mt-4 text-xs text-white/40">
            Реквизиты указаны в соответствии с данными организации.
          </p>
          </div>

          <HelpBlock />
        </div>
      </section>
    </>
  );
}
