type Props = {
  title: string;
  description?: string;
  crumbs?: { label: string; href?: string }[];
};

export function PageHero({ title, description, crumbs }: Props) {
  return (
    <section className="relative overflow-hidden bg-ink pt-24 pb-10 text-white sm:pt-28 sm:pb-12">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 80% 20%, rgba(232,163,23,0.28), transparent 55%), linear-gradient(160deg, #0b1624 0%, #152536 55%, #0b1624 100%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {crumbs?.length ? (
          <nav className="mb-5 flex flex-wrap gap-2 text-xs text-white/50">
            {crumbs.map((crumb, i) => (
              <span key={`${crumb.label}-${i}`} className="flex items-center gap-2">
                {i > 0 ? <span aria-hidden>/</span> : null}
                {crumb.href ? (
                  <a href={crumb.href} className="hover:text-amber">
                    {crumb.label}
                  </a>
                ) : (
                  <span className="text-white/75">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        ) : null}
        <h1 className="animate-fade-up font-display text-4xl leading-tight sm:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="animate-fade-up-delay-1 mt-4 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  );
}
