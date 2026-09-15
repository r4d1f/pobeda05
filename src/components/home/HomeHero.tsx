import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export function HomeHero() {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden bg-ink text-white">
      <Image
        src="/hero.jpg"
        alt="Маршрут Махачкала — Москва"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-4 pb-12 pt-24 sm:px-6 sm:pb-14 lg:justify-center lg:pb-16">
        <p className="animate-fade-up font-display text-5xl tracking-tight sm:text-6xl lg:text-7xl">
          {site.name}
        </p>
        <h1 className="animate-fade-up-delay-1 mt-3 max-w-3xl font-display text-3xl leading-tight sm:text-4xl lg:text-5xl">
          {site.route.title}
        </h1>
        <p className="animate-fade-up-delay-2 mt-3 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
          Регулярный экспресс без пересадок. Туристический класс, Wi‑Fi и
          климат-контроль на всём пути.
        </p>
        <div className="animate-fade-up-delay-3 mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/kupit-bilet"
            className="inline-flex items-center justify-center rounded-full bg-amber px-7 py-3.5 text-sm font-semibold text-ink transition hover:bg-amber-soft"
          >
            Купить билет
          </Link>
          <a
            href={site.phoneHref}
            className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:border-amber hover:bg-amber hover:text-ink"
          >
            Позвонить
          </a>
        </div>
      </div>
    </section>
  );
}
