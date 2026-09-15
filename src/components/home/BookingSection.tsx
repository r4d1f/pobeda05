import Link from "next/link";
import { TicketWidget } from "@/components/TicketWidget";
import { site } from "@/lib/site";

export function BookingSection() {
  return (
    <section id="kupit" className="bg-paper py-12 sm:py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-ink/45">
              Онлайн-покупка
            </p>
            <h2 className="mt-3 font-display text-3xl leading-tight sm:text-4xl text-ink">
              Купите билет прямо на сайте
            </h2>
            <p className="mt-3 max-w-xl text-ink-soft">
              Выберите города посадки и высадки, дату и оплатите заказ. Цена
              зависит от участка маршрута.
            </p>
          </div>
          <Link
            href="/kupit-bilet"
            className="text-sm font-semibold text-amber-deep underline-offset-4 hover:underline"
          >
            Открыть страницу покупки
          </Link>
        </div>

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

        <p className="mt-3 text-sm text-ink/55">
          Вопросы по рейсу —{" "}
          <a
            href={site.phoneHref}
            className="font-medium text-ink hover:text-amber-deep"
          >
            {site.phone}
          </a>
        </p>
      </div>
    </section>
  );
}
