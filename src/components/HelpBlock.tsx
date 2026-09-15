import { site } from "@/lib/site";

export function HelpBlock() {
  return (
    <aside className="mt-8 rounded-3xl bg-ink px-6 py-5 text-white sm:px-8">
      <p className="text-xs uppercase tracking-[0.16em] text-white/45">
        Нужна помощь?
      </p>
      <p className="mt-3 font-display text-2xl leading-snug sm:text-3xl">
        Диспетчерская служба ответит круглосуточно
      </p>
      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
        <a
          href={site.phoneHref}
          className="inline-flex items-center justify-center rounded-full bg-amber px-5 py-3 text-sm font-semibold text-ink transition hover:bg-amber-soft"
        >
          {site.phone}
        </a>
        <a
          href={site.emailHref}
          className="text-sm text-white/70 underline-offset-4 hover:text-white hover:underline"
        >
          {site.email}
        </a>
      </div>
    </aside>
  );
}
