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
    <section className="bg-ink py-12 text-white sm:py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-xs uppercase tracking-[0.18em] text-white/45">
          Безопасность
        </p>
        <h2 className="mt-2 max-w-2xl font-display text-3xl leading-tight sm:text-4xl">
          Надёжность на каждом этапе поездки
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {safety.map((item, index) => (
            <article key={item.title} className="flex gap-5">
              <span className="font-display text-3xl text-amber">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-white/65">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
