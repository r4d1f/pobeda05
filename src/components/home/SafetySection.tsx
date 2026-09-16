const safety = [
  {
    title: "Технический контроль",
    text: "Перед каждым рейсом проверяем тормоза, освещение, климат-контроль и ремни.",
  },
  {
    title: "Опытные водители",
    text: "Предрейсовый медосмотр и смена водителей на длинных маршрутах.",
  },
  {
    title: "Аптечка и огнетушитель",
    text: "В салоне есть всё необходимое, водитель проинструктирован на нештатные ситуации.",
  },
  {
    title: "Контроль багажа",
    text: "Багаж в закрытом нижнем отсеке. Доступ во время движения закрыт.",
  },
];

export function SafetySection() {
  return (
    <section className="border-t border-line bg-paper py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.18em] text-ink/45">
            Безопасность
          </p>
          <h2 className="mt-2 max-w-2xl font-display text-3xl leading-tight text-ink sm:text-4xl">
            Надёжность на каждом этапе поездки
          </h2>
        </div>

        <ol className="grid gap-4 sm:grid-cols-2">
          {safety.map((item, index) => (
            <li
              key={item.title}
              className="rounded-[1.5rem] border border-line bg-surface px-5 py-6 sm:px-6"
            >
              <p className="font-display text-4xl leading-none text-amber">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 text-lg font-semibold text-ink">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {item.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
