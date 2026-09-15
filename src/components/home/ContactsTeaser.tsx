import Link from "next/link";
import { site } from "@/lib/site";

export function ContactsTeaser() {
  return (
    <section className="bg-paper py-10 sm:py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-ink/45">
            Контакты
          </p>
          <h2 className="mt-2 font-display text-3xl text-ink">
            {site.legalName}
          </h2>
          <p className="mt-2 text-ink-soft">
            {site.location} · работаем {site.hours}
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={site.phoneHref}
            className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-ink-soft"
          >
            {site.phone}
          </a>
          <Link
            href="/kontakty"
            className="inline-flex items-center justify-center rounded-full border border-line bg-surface px-6 py-3 text-sm font-semibold text-ink transition hover:border-amber hover:bg-amber/10"
          >
            Все контакты
          </Link>
        </div>
      </div>
    </section>
  );
}
