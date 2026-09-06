const logos = [
  { name: "ATLANT 3D", abbr: "A3D" },
  { name: "Spacer Robotics", abbr: "SR" },
  { name: "Materials Research Centre", abbr: "MRC" },
  { name: "Kyiv Polytechnic Institute", abbr: "KPI" },
];

// NOTE: the testimonial block that stood here was AI-generated placeholder text
// attributed to an unnamed "Colleague at ATLANT 3D". Removed.
// Reinstate only with a real, written-approval quote and a named attribution.

export function Testimonials() {
  return (
    <section id="trust" className="scroll-mt-20 border-t border-border">
      <div className="mx-auto w-full max-w-6xl px-6 py-20">
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-gold">
          Worked with
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
    </section>
  );
}
