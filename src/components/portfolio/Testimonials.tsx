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
    <section id="trust" className="scroll-mt-24">
      <div className="mx-auto w-full max-w-6xl px-6 pb-20">
        <p className="lettering text-[10.5px] text-subtle">Worked with</p>
        <div className="mt-4 flex flex-wrap gap-2.5">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center gap-3 border border-border px-4 py-2.5"
              title={logo.name}
            >
              <span className="lettering text-[9px] tracking-[0.14em] text-subtle">
                {logo.abbr}
              </span>
              <span className="text-[0.9rem] text-foreground">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
