import Link from "next/link";
import { passengerLinks, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <p className="font-display text-3xl">{site.name}</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/65">
            Регулярные междугородние перевозки по маршруту {site.route.title}.
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.16em] text-white/45">
            Пассажирам
          </p>
          <ul className="mt-4 space-y-2.5 text-sm text-white/75">
            <li>
              <Link href="/kupit-bilet" className="hover:text-amber">
                Купить билет
              </Link>
            </li>
            {passengerLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-amber">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/kontakty" className="hover:text-amber">
                Контакты
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.16em] text-white/45">
            Реквизиты
          </p>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            <li>{site.legalName}</li>
            <li>ИНН: {site.legal.inn}</li>
            <li>ОГРН: {site.legal.ogrn}</li>
            <li>{site.legal.legalAddress}</li>
            <li>
              <a href={site.phoneHref} className="hover:text-amber">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={site.emailHref} className="hover:text-amber">
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            © {new Date().getFullYear()} {site.legalName}
          </p>
          <p>Регулярные междугородние перевозки</p>
        </div>
      </div>
    </footer>
  );
}
