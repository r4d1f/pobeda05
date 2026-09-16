import Link from "next/link";
import { site } from "@/lib/site";

export function ContactsTeaser() {
  return (
    <section className="bg-paper py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-[2rem] bg-ink px-6 py-10 text-white sm:px-10 sm:py-12">
          <div
            className="pointer-events-none absolute inset-0 opacity-60"
            style={{
              background:
                "radial-gradient(ellipse 55% 50% at 90% 10%, rgba(232,163,23,0.22), transparent 55%)",
            }}
          />
          <div className="relative flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-white/45">
                Контакты
              </p>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl">
                {site.legalName}
              </h2>
              <p className="mt-3 max-w-lg text-white/65">
                Диспетчерская на связи круглосуточно — поможем с рейсом, билетом
                и посадкой.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={site.phoneHref}
                className="inline-flex items-center justify-center rounded-full bg-amber px-6 py-3 text-sm font-semibold text-ink transition hover:bg-amber-soft"
              >
                {site.phone}
              </a>
              <Link
                href="/kontakty"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-amber hover:bg-white/5"
              >
                Все контакты
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
