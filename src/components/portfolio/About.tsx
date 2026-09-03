import { SectionHeader } from "./SectionHeader";

const details = [
  { label: "Location", value: "Greve, Denmark" },
  {
    label: "Focus Areas",
    value: "Atomic-layer deposition · MXene synthesis · Precision mechatronics · Industrial scale-up",
  },
  { label: "Education", value: "MEng & BEng, Kyiv Polytechnic Institute" },
];

const proofPoints = [
  "Led mechanical architecture for atomic-layer 3D printing systems across three platforms — benchtop, space-qualified, and industrial.",
  "Designed and scaled a modular MXene synthesis reactor from milligram-level lab samples to 100-gram industrial batches.",
  "Engineered an automated yarn dip-coating platform enabling the first continuous production of smart textiles.",
];

export function About() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-border">
      <div className="mx-auto w-full max-w-6xl px-6 py-24">
        <SectionHeader number="02" title="About" />
        <div className="grid gap-14 lg:grid-cols-2">
          <div className="space-y-5 font-mono text-sm leading-relaxed text-dim">
            <p>
              I've spent my career at the intersection of advanced materials science
              and precision engineering — the narrow space where a process that works
              on a bench needs to survive the realities of production volume, thermal
              drift, and a ticking clock.
            </p>
            <p>
              That work started in Kyiv, building instrumentation for materials
              research and scaling laboratory chemistry into industrial equipment. It
              continues in Denmark, where I lead the mechanical engineering group at
              ATLANT 3D and have taken the same core atomic layer processing
              technology to product three times over — as a benchtop research tool, a
              space-rated system for in-orbit manufacturing, and an industrial
              production machine.
            </p>
            <ul className="space-y-3 pt-4">
              {proofPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span aria-hidden="true" className="text-gold">
                    ›
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <blockquote className="border-l-2 border-gold pl-6 font-serif text-xl italic leading-relaxed text-heading md:text-2xl">
              "The best systems don't just work — they make the physics obvious and
              the complexity invisible."
            </blockquote>
            <div className="mt-12 divide-y divide-border border-y border-border">
              {details.map((detail) => (
                <div key={detail.label} className="flex flex-col gap-1.5 py-5">
                  <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold">
                    {detail.label}
                  </span>
                  <span className="font-mono text-sm text-dim">{detail.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
