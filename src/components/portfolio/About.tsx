import { SectionHeader } from "./SectionHeader";

const details = [
  { label: "Location", value: "Greve, Denmark" },
  {
    label: "Focus Areas",
    value:
      "Atomic-layer deposition · MXene synthesis · Precision mechatronics · Industrial scale-up",
  },
  { label: "Education", value: "MEng & BEng, Kyiv Polytechnic Institute" },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-24">
      <div className="mx-auto w-full max-w-6xl px-6 pb-20">
        <SectionHeader title="About" />
        <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4 leading-relaxed text-foreground">
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
          <dl className="border-t border-border">
            {details.map((detail) => (
              <div
                key={detail.label}
                className="grid gap-1 border-b border-border-soft py-4 md:grid-cols-[110px_1fr] md:gap-6"
              >
                <dt className="lettering pt-1 text-[9.5px] tracking-[0.17em] text-subtle">
                  {detail.label}
                </dt>
                <dd className="text-[0.95rem] leading-relaxed text-heading">
                  {detail.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
