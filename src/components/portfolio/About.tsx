import { SectionHeader } from "./SectionHeader";

const details = [
  { label: "Location", value: "Greve, Denmark" },
  {
    label: "Focus Areas",
    value: "Atomic-layer deposition · MXene synthesis · Precision mechatronics · Industrial scale-up",
  },
  { label: "Education", value: "MEng & BEng, Kyiv Polytechnic Institute" },
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
              technology to product.
            </p>
          </div>
          <div>
            <div className="divide-y divide-border border-y border-border">
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
