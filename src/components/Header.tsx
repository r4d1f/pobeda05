"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { passengerLinks, site } from "@/lib/site";

const nav = [
  { href: "/", label: "Главная" },
  { href: "/kupit-bilet", label: "Купить билет" },
  { href: "/kontakty", label: "Контакты" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [passengersOpen, setPassengersOpen] = useState(false);

  const closeMenus = () => {
    setOpen(false);
    setPassengersOpen(false);
  };

  const isPassenger = pathname.startsWith("/pasazhiram");

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-ink/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6">
        <Link
          href="/"
          onClick={closeMenus}
          className="group flex flex-col leading-none"
        >
          <span className="font-display text-2xl tracking-tight text-white sm:text-[1.75rem]">
            {site.name}
          </span>
          <span className="mt-1 text-[11px] uppercase tracking-[0.18em] text-white/65 transition group-hover:text-amber-soft">
            {site.tagline}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.slice(0, 2).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMenus}
              className={`rounded-full px-3.5 py-2 text-sm transition ${
                pathname === item.href
                  ? "bg-white/15 text-white"
                  : "text-white/80 hover:bg-white/10 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}

          <div
            className="relative"
            onMouseEnter={() => setPassengersOpen(true)}
            onMouseLeave={() => setPassengersOpen(false)}
          >
            <button
              type="button"
              className={`rounded-full px-3.5 py-2 text-sm transition ${
                isPassenger
                  ? "bg-white/15 text-white"
                  : "text-white/80 hover:bg-white/10 hover:text-white"
              }`}
              aria-expanded={passengersOpen}
              onClick={() => setPassengersOpen((v) => !v)}
            >
              Пассажирам
            </button>
            {passengersOpen ? (
              <div className="absolute left-0 top-full pt-2">
                <div className="min-w-56 overflow-hidden rounded-2xl border border-white/10 bg-ink/95 py-2 shadow-2xl backdrop-blur">
                  {passengerLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeMenus}
                      className="block px-4 py-2.5 text-sm text-white/80 transition hover:bg-white/10 hover:text-white"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          <Link
            href="/kontakty"
            onClick={closeMenus}
            className={`rounded-full px-3.5 py-2 text-sm transition ${
              pathname === "/kontakty"
                ? "bg-white/15 text-white"
                : "text-white/80 hover:bg-white/10 hover:text-white"
            }`}
          >
            Контакты
          </Link>

          <a
            href={site.phoneHref}
            className="ml-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur transition hover:border-amber hover:bg-amber hover:text-ink"
          >
            {site.phone}
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white lg:hidden"
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Меню</span>
          <div className="flex w-5 flex-col gap-1.5">
            <span
              className={`h-0.5 w-full bg-current transition ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`h-0.5 w-full bg-current transition ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`h-0.5 w-full bg-current transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </div>
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-ink/95 px-4 py-4 backdrop-blur lg:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenus}
                className="rounded-xl px-3 py-3 text-base text-white/90 hover:bg-white/10"
              >
                {item.label}
              </Link>
            ))}
            <p className="px-3 pt-3 text-xs uppercase tracking-[0.16em] text-white/45">
              Пассажирам
            </p>
            {passengerLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenus}
                className="rounded-xl px-3 py-3 text-base text-white/90 hover:bg-white/10"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={site.phoneHref}
              className="mt-2 rounded-xl bg-amber px-3 py-3 text-center font-semibold text-ink"
            >
              Позвонить: {site.phone}
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
