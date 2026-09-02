import { SectionHeader } from "./SectionHeader";

interface Publication {
  year: string;
  title: string;
  description: string;
}

// Placeholder entries — replace titles and descriptions with the real papers.
const publications: Publication[] = [
  {
    year: "2024",
    title: "Direct-write atomic layer processing for microscale additive manufacturing",
    description:
      "Process-window and hardware considerations for atomic layer 3D printing of functional microstructures.",
  },
  {
    year: "2023",
    title: "Thermal management strategies in multi-zone deposition printheads",
    description:
      "Design and validation of thermally stable printhead architectures for area-selective atomic layer deposition.",
  },
  {
    year: "2023",
    title: "Precision motion systems for maskless microscale fabrication",
    description:
      "Motion-stage design trade-offs for sub-micron repeatability in direct-write manufacturing tools.",
  },
  {
    year: "2022",
    title: "Integration of vacuum-based deposition platforms for advanced materials research",
    description:
      "A systems-engineering approach to modular, serviceable research instrumentation.",
  },
  {
    year: "2018",
    title: "Structural design of load-bearing frames for crystal growth equipment",
    description:
      "FEA-driven frame optimization for high-temperature crystal growth systems.",
  },
  {
    year: "2017",
    title: "Design methodology for vacuum-compatible mechanical assemblies",
    description:
      "Practical rules for materials, venting, and sealing in custom vacuum hardware.",
  },
  {
    year: "2017",
    title: "Thermal stabilization of precision instruments in laboratory environments",
    description:
      "Low-cost approaches to drift reduction in sensitive measurement setups.",
  },
];

export function Publications() {
  return (
    <section id="publications" className="scroll-mt-20 border-t border-border">
      <div className="mx-auto w-full max-w-6xl px-6 py-24">
        <SectionHeader number="06" title="Publications" />
        <div className="space-y-4">
          {publications.map((publication) => (
            <article
              key={publication.title}
              className="flex gap-8 border border-border bg-card p-6 transition-all duration-300 hover:translate-x-1 hover:border-gold"
            >
              <span className="w-14 shrink-0 font-serif text-lg text-subtle">
                {publication.year}
              </span>
              <div>
                <h3 className="font-serif text-lg leading-snug text-heading">
                  {publication.title}
                </h3>
                <p className="mt-2 font-mono text-sm leading-relaxed text-dim">
                  {publication.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
