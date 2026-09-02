const logos = [
  { name: "ATLANT 3D", abbr: "A3D" },
  { name: "Materials Research Centre", abbr: "MRC" },
  { name: "Kyiv Polytechnic Institute", abbr: "KPI" },
];

const testimonial = {
  quote:
    "Vitalii has a rare combination: he can sit in a design review and question the architecture, then go to the lab and fix the hardware. That is exactly what a scaling deep-tech team needs.",
  author: "Colleague at ATLANT 3D",
  note: "Placeholder — replace with real testimonial before publishing",
};

export function Testimonials() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto w-full max-w-6xl px-6 py-24">
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-gold">
              Trusted by
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {logos.map((logo) => (
                <div
                  key={logo.name}
                  className="flex items-center gap-3 border border-border bg-card px-5 py-3 transition-colors hover:border-gold"
                  title={logo.name}
                >
                  <span className="flex h-8 w-8 items-center justify-center border border-gold font-mono text-[10px] uppercase tracking-[0.1em] text-gold">
                    {logo.abbr}
                  </span>
                  <span className="font-mono text-xs text-dim">{logo.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="border-l-2 border-gold bg-gold-tint px-6 py-6 md:px-8 md:py-8">
            <blockquote className="font-serif text-lg italic leading-relaxed text-heading md:text-xl">
              “{testimonial.quote}”
            </blockquote>
            <div className="mt-5 flex items-center justify-between gap-4">
              <span className="font-mono text-xs text-dim">
                — {testimonial.author}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-subtle">
                {testimonial.note}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
