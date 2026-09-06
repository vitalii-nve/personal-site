import { SectionHeader } from "./SectionHeader";

interface Publication {
  year: string;
  title: string;
  venue: string;
  doi?: string;
}

// Real peer-reviewed record, restored from balitskyi.net. DOIs verified via
// Crossref against the author list (published as "Balitskiy"/"Balitskyi").
// The three conference entries have no DOI on record.
const publications: Publication[] = [
  {
    year: "2024",
    title: "MXene Functionalized Kevlar Yarn via Automated, Continuous Dip Coating",
    venue: "Advanced Functional Materials",
    doi: "10.1002/adfm.202312434",
  },
  {
    year: "2023",
    title: "Polycaprolactone–MXene Nanofibrous Scaffolds for Tissue Engineering",
    venue: "ACS Applied Materials & Interfaces, 15(11), 14033–14047",
    doi: "10.1021/acsami.2c22780",
  },
  {
    year: "2023",
    title: "Affordable Combustion Synthesis of V₂AlC Precursor for V₂CTₓ MXene",
    venue: "Graphene and 2D Materials, 8, 93–105",
    doi: "10.1007/s41127-023-00059-1",
  },
  {
    year: "2022",
    title: "MXene-Assisted Ablation of Cells with a Pulsed Near-Infrared Laser",
    venue: "ACS Applied Materials & Interfaces, 14(25), 28683–28696",
    doi: "10.1021/acsami.2c08678",
  },
  {
    year: "2022",
    title:
      "MXene Nanoflakes Decorating ZnO Tetrapods for Enhanced Performance of Skin-Attachable Stretchable Enzymatic Electrochemical Glucose Sensor",
    venue: "Biosensors and Bioelectronics",
    doi: "10.1016/j.bios.2022.114141",
  },
  {
    year: "2021",
    title:
      "Investigation of AC Electrical Properties of MXene-PCL Nanocomposites for Application in Small and Medium Power Generation",
    venue: "Energies, 14(21), 7123",
    doi: "10.3390/en14217123",
  },
  {
    year: "2020",
    title: "Scalable Synthesis of Ti₃C₂Tₓ MXene",
    venue: "Advanced Engineering Materials, 22(3), 1901241",
    doi: "10.1002/adem.201901241",
  },
  {
    year: "2020",
    title: "Tensile Behaviors of Ti₃C₂Tₓ (MXene) Films",
    venue: "Nanotechnology",
    doi: "10.1088/1361-6528/ab94dd",
  },
  {
    year: "2020",
    title: "Bio-functionalization of Electrospun Polymeric Nanofibers by Ti₃C₂Tₓ MXene",
    venue: "IEEE 10th International Conference on Nanomaterials: Applications & Properties",
    doi: "10.1109/nap51477.2020.9309612",
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
        <SectionHeader number="05" title="Publications" />
        {/* Dense list rather than cards: eleven entries as cards dominated the
            page, and the count is the signal more than any single paper. */}
        <div className="divide-y divide-border border-y border-border">
          {publications.map((publication) => (
            <article
              key={publication.title}
              className="grid gap-1 py-4 md:grid-cols-[64px_1fr] md:gap-6"
            >
              <span className="pt-1 font-mono text-xs tabular-nums text-subtle">
                {publication.year}
              </span>
              <div>
                <h3 className="font-serif text-base leading-snug text-heading">
                  {publication.doi ? (
                    <a
                      href={`https://doi.org/${publication.doi}`}
                      target="_blank"
                      rel="noreferrer"
                      className="transition-colors hover:text-gold"
                    >
                      {publication.title}
                    </a>
                  ) : (
                    publication.title
                  )}
                </h3>
                <p className="mt-1 font-mono text-xs leading-relaxed text-subtle">
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
