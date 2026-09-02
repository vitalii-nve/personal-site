import { SectionHeader } from "./SectionHeader";

const details = [
  { label: "Location", value: "Greve, Denmark" },
  {
    label: "Focus Areas",
    value: "Deep-tech hardware · Atomic layer manufacturing · Lab-to-fab scale-up",
  },
  { label: "Education", value: "MEng & BEng, Kyiv Polytechnic Institute" },
];

const proofPoints = [
  "10+ years designing and integrating precision mechanical, vacuum, and motion systems.",
  "Led the mechanical group at ATLANT 3D through the R&D-to-production transition.",
  "Published 7 peer-reviewed papers on advanced manufacturing and instrumentation.",
];

export function About() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-border">
      <div className="mx-auto w-full max-w-6xl px-6 py-24">
        <SectionHeader number="02" title="About" />
        <div className="grid gap-14 lg:grid-cols-2">
          <div className="space-y-5 font-mono text-sm leading-relaxed text-dim">
            <p>
              I started in Kyiv building custom instrumentation for materials
              research — crystal growth, vacuum deposition, and characterization rigs
              that had to work in real labs, not just on paper. That taught me that
              precision is a culture, not a feature you add at the end.
            </p>
            <p>
              Today I lead the mechanical engineering group at ATLANT 3D in Denmark,
              helping atomic-layer manufacturing systems move from laboratory
              curiosity to industrial platform. I still spend time in CAD, but I also
              spend it in design reviews, mentoring engineers, and translating
              research ambition into manufacturable hardware.
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
              "The best system engineers are translators — between physics, people,
              and production."
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
