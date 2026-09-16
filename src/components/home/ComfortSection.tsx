const comfort = [
  {
    title: "Кресла туристического класса",
    text: "Мягкие кресла с регулировкой наклона. У каждого места — USB-зарядка.",
  },
  {
    title: "Климат-контроль",
    text: "Стабильная температура в салоне на всём маршруте, включая стоянки.",
  },
  {
    title: "Wi‑Fi на всём пути",
    text: "Беспроводной интернет доступен на протяжении всей поездки.",
  },
  {
    title: "Санитарные остановки",
    text: "Каждые 3–4 часа — остановка, чтобы размяться, перекусить и отдохнуть.",
  },
];

export function ComfortSection() {
  return (
    <section className="border-t border-line bg-paper py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-16">
          <div className="lg:sticky lg:top-28">
            <p className="text-xs uppercase tracking-[0.18em] text-ink/45">
              Комфорт в дороге
            </p>
            <h2 className="mt-2 font-display text-3xl leading-tight text-ink sm:text-4xl">
              Комфорт на всём пути следования
            </h2>
            <p className="mt-4 text-ink-soft">
              Комфортабельные автобусы туристического класса без пересадок по
              пути следования. Сделали дорогу спокойной и предсказуемой.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {comfort.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.25rem] border border-line border-l-[3px] border-l-amber bg-surface px-5 py-5 shadow-[0_10px_30px_rgba(11,22,36,0.04)] sm:min-h-[10.5rem] sm:px-6 sm:py-6"
              >
                <h3 className="font-display text-xl leading-snug text-ink">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
