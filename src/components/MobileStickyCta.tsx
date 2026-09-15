import Link from "next/link";
import { site } from "@/lib/site";

export function MobileStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-surface/95 p-3 backdrop-blur md:hidden">
      <div className="mx-auto grid max-w-lg grid-cols-2 gap-2">
        <Link
          href="/kupit-bilet"
          className="rounded-xl bg-amber px-3 py-3 text-center text-sm font-semibold text-ink transition hover:bg-amber-deep hover:text-white"
        >
          Купить билет
        </Link>
        <a
          href={site.phoneHref}
          className="rounded-xl bg-ink px-3 py-3 text-center text-sm font-semibold text-white transition hover:bg-ink-soft"
        >
          Позвонить
        </a>
      </div>
    </div>
  );
}
