import { SectionHeader } from "./SectionHeader";

interface Publication {
  year: string;
  title: string;
  venue: string;
  doi?: string;
}

// Real peer-reviewed record, restored from balitskyi.net.
// TODO: add the DOI for each entry and render the title as a link.
const publications: Publication[] = [
  {
    year: "2024",
    title: "MXene Functionalized Kevlar Yarn via Automated, Continuous Dip Coating",
    venue: "Advanced Functional Materials",
  },
  {
    year: "2023",
    title: "Polycaprolactone–MXene Nanofibrous Scaffolds for Tissue Engineering",
    venue: "ACS Applied Materials & Interfaces, 15(11), 14033–14047",
  },
  {
    year: "2023",
    title: "Affordable Combustion Synthesis of V₂AlC Precursor for V₂CTₓ MXene",
    venue: "Graphene and 2D Materials, 8, 93–105",
  },
  {
    year: "2022",
    title: "MXene-Assisted Ablation of Cells with a Pulsed Near-Infrared Laser",
    venue: "ACS Applied Materials & Interfaces, 14(25), 28683–28696",
  },
  {
    year: "2018",
    title: "Scale-up of MXene Synthesis",
    venue: "Conference proceedings",
  },
  {
    year: "2017",
    title: "Prototype Air-Curtains System Units in Three Different Protection Modes",
    venue: "Conference proceedings",
  },
  {
    year: "2017",
    title: "Synthesis and Optical Properties of 2D Carbides MXenes",
    venue: "Conference proceedings",
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
                  {publication.venue}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
