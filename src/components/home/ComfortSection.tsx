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
    <section className="bg-paper py-12 sm:py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-xs uppercase tracking-[0.18em] text-ink/45">
          Комфорт в дороге
        </p>
        <h2 className="mt-2 max-w-2xl font-display text-3xl leading-tight text-ink sm:text-4xl">
          Комфорт на всём пути следования
        </h2>
        <p className="mt-3 max-w-2xl text-ink-soft">
          Комфортабельные автобусы туристического класса без пересадок по пути
          следования.
        </p>

        <div className="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {comfort.map((item) => (
            <article key={item.title} className="border-t border-line pt-4">
              <h3 className="font-display text-2xl text-ink">{item.title}</h3>
              <p className="mt-3 text-ink-soft">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
