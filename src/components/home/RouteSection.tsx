import { site } from "@/lib/site";

export function RouteSection() {
  return (
    <section className="relative overflow-hidden bg-ink py-12 text-white sm:py-14">
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 15% 20%, rgba(232,163,23,0.18), transparent 50%), radial-gradient(ellipse 45% 50% at 85% 80%, rgba(232,163,23,0.12), transparent 55%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-xs uppercase tracking-[0.18em] text-white/45">
          Маршрут и остановки
        </p>

        <div className="mt-6 space-y-7">
          <DirectionBlock
            label="Туда"
            subtitle={`${site.route.forward[0]} → ${site.route.forward[site.route.forward.length - 1]}`}
            cities={site.route.forward}
          />
          <div className="h-px bg-white/10" />
          <DirectionBlock
            label="Обратно"
            subtitle={`${site.route.reverse[0]} → ${site.route.reverse[site.route.reverse.length - 1]}`}
            cities={site.route.reverse}
          />
        </div>
      </div>
    </section>
  );
}

function DirectionBlock({
  label,
  subtitle,
  cities,
}: {
  label: string;
  subtitle: string;
  cities: readonly string[];
}) {
  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber">
            {label}
          </p>
          <p className="mt-1 font-display text-2xl sm:text-3xl">{subtitle}</p>
        </div>
        <p className="text-xs uppercase tracking-[0.16em] text-white/40">
          {site.route.duration}
        </p>
      </div>
      <JourneyLine cities={cities} />
    </div>
  );
}

function JourneyLine({ cities }: { cities: readonly string[] }) {
  return (
    <>
      <ol
        className="relative mt-5 hidden md:grid"
        style={{ gridTemplateColumns: `repeat(${cities.length}, 1fr)` }}
      >
        <div className="pointer-events-none absolute top-[11px] right-[10%] left-[10%] h-px bg-gradient-to-r from-amber via-amber-soft to-amber" />
        {cities.map((city, i) => {
          const isEnd = i === 0 || i === cities.length - 1;
          return (
            <li
              key={`${city}-${i}`}
              className="relative flex flex-col items-center text-center"
            >
              <span
                className={`rounded-full ${
                  isEnd
                    ? "h-5 w-5 bg-amber shadow-[0_0_20px_rgba(232,163,23,0.5)]"
                    : "h-3 w-3 bg-white"
                }`}
              />
              <p
                className={`mt-4 text-sm ${isEnd ? "font-semibold" : "text-white/60"}`}
              >
                {city}
              </p>
            </li>
          );
        })}
      </ol>
      <ol className="mt-6 space-y-0 md:hidden">
        {cities.map((city, i) => (
          <li key={`m-${city}-${i}`} className="flex gap-3">
            <div className="flex flex-col items-center">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-amber" />
              {i < cities.length - 1 ? (
                <span className="my-1 w-px flex-1 bg-white/20" />
              ) : null}
            </div>
            <p className="pb-5 text-white/80">{city}</p>
          </li>
        ))}
      </ol>
    </>
  );
}
