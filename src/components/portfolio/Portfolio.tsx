import { SectionHeader } from "./SectionHeader";
import zeroG from "../../assets/zero-g.jpg";
import lite from "../../assets/lite.jpg";
import pro from "../../assets/pro.jpg";
import grid from "../../assets/grid.jpg";
import mxeneReactor from "../../assets/MXene-reactor-setup.jpg";
import dipCoating from "../../assets/dip_coating.jpg";

interface Project {
  title: string;
  context: string;
  problem: string;
  solution: string;
  outcome: string;
  tags: string[];
  // Optional. Add a cleared photo to src/assets, import it above, and set it here.
  image?: string;
  // Optional public reference — a product page or the paper behind the work.
  link?: { href: string; label: string };
}

// All entries describe role and result only — never mechanism. Supplier names,
// unit counts, and mass/power/cost figures are deliberately absent.
const projects: Project[] = [
  {
    title: "NANOFABRICATOR® Zero-G",
    link: { href: "https://atlant3d.com/nanofabricator-zero-g/", label: "ATLANT 3D product page" },
    image: zeroG,
    context: "ATLANT 3D · atomic layer processing for in-space manufacturing",
    problem:
      "The technology was developed and proven on the ground, on a bench. Putting it in orbit meant transferring it whole into a different environment, under a different set of rules.",
    solution:
      "Led the mechanical design of the space-adapted system, working to space-qualification and crewed-platform requirements including compatibility with the ISS European Drawer Rack (EDR2). Owned component selection, assembly and test.",
    outcome:
      "A ground-based process adapted to run in microgravity, inside a crew-rated envelope, to fixed space-qualification requirements.",
    tags: ["Space Hardware", "Requirements Engineering", "Precision Mechanics"],
  },
  {
    title: "NANOFABRICATOR™ Lite",
    link: { href: "https://atlant3d.com/nanofabricator-lite/", label: "ATLANT 3D product page" },
    image: lite,
    context: "ATLANT 3D · benchtop tool for atomic-scale fabrication",
    problem:
      "The benchtop tool existed as a hand-built research instrument. To be sold and supported it had to become something that could be manufactured repeatably by people who had not designed it.",
    solution:
      "Led the mechanical design and owned the transfer out of R&D into production — component selection, supplier collaboration and qualification, and hands-on assembly and testing.",
    outcome:
      "The tool moved from research build to a manufacturable product, with the drawing package, supplier base and assembly process to support it.",
    tags: ["Design for Manufacture", "Production Transfer", "Supplier Qualification"],
  },
  {
    title: "NANOFABRICATOR® PRO",
    link: { href: "https://atlant3d.com/nanofabricator_pro/", label: "ATLANT 3D product page" },
    image: pro,
    context: "ATLANT 3D · industrial platform for AI-driven materials discovery",
    problem:
      "The industrial platform had to be designed for build by an external manufacturing partner — which means the design has to be complete and unambiguous enough to hand to another company.",
    solution:
      "Contributed mechanical design and managed requirements in collaboration with manufacturing partner Automated Industrial Robotics, taking the platform from specification to buildable design.",
    outcome:
      "Launched August 2026.",
    tags: ["Requirements Management", "External Partners", "Industrial Systems"],
  },
  {
    title: "GRID — autonomous rebar-tying robot",
    link: { href: "https://spacerrobotics.ai/", label: "Spacer Robotics" },
    image: grid,
    context: "Spacer Robotics · construction site automation",
    problem:
      "Rebar tying is repetitive, slow and physically punishing, and it happens on an unstructured, uneven site rather than in the controlled environment precision hardware is usually designed for.",
    solution:
      "Consulting engagement covering system requirements, architecture and concept design, and prototyping of core modules for GRID — a mobile robot that operates directly on the rebar grid in job-site conditions.",
    outcome:
      "Spacer Robotics reports roughly 5,000 ties per eight-hour shift, on 14+ hours of runtime.",
    tags: ["Robotics", "Field Hardware", "Autonomous Systems"],
  },
  {
    title: "Modular MXene synthesis reactor",
    link: { href: "https://doi.org/10.1002/adem.201901241", label: "Read the paper" },
    image: mxeneReactor,
    context: "Materials Research Centre · laboratory to industrial scale-up",
    problem:
      "MXene synthesis worked at milligram scale in the lab. Every downstream application — composites, sensors, textiles — was rate-limited by how little material existed.",
    solution:
      "Designed and scaled a modular synthesis reactor, rebuilding a bench chemistry process as repeatable industrial equipment.",
    outcome:
      "From milligram-level lab samples to 100-gram industrial batches.",
    tags: ["Scale-up", "Process Equipment", "Advanced Materials"],
  },
  {
    title: "Automated yarn dip-coating platform",
    link: { href: "https://doi.org/10.1002/adfm.202312434", label: "Read the paper" },
    image: dipCoating,
    context: "Materials Research Centre · smart textiles",
    problem:
      "MXene-functionalised yarn was a manual batch process, which limited textile applications to laboratory quantities.",
    solution:
      "Engineered an automated, continuous dip-coating platform for yarn — turning a laboratory technique into a production process.",
    outcome:
      "Enabled the first continuous production of MXene smart textiles. The work is published in Advanced Functional Materials.",
    tags: ["Process Automation", "Smart Textiles", "Published Work"],
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="scroll-mt-24">
      <div className="mx-auto w-full max-w-6xl px-6 pb-20">
        <SectionHeader title="Selected projects" />
        <div className="mt-10">
          {projects.map((project, i) => (
            <article
              key={project.title}
              className={`group grid gap-8 pb-9 md:grid-cols-[330px_1fr] md:gap-10 ${
                i > 0 ? "border-t border-border pt-9" : ""
              }`}
            >
              {project.image && (
                <div className="border border-subtle bg-surface self-start">
                  <img
                    src={project.image}
                    alt={project.title}
                    width={1024}
                    height={640}
                    loading="lazy"
                    className="plate aspect-[16/10] w-full object-cover"
                  />
                </div>
              )}
              <div>
                <h3 className="font-display text-[1.35rem] font-bold leading-snug tracking-[-0.015em] text-heading">
                  {project.title}
                </h3>
                <p className="lettering mt-1.5 text-[10px] tracking-[0.15em] text-subtle">
                  {project.context}
                </p>
                <dl className="mt-5 space-y-2.5">
                  <div className="grid gap-1 md:grid-cols-[80px_1fr] md:gap-5">
                    <dt className="lettering pt-1 text-[9.5px] tracking-[0.17em] text-amber">
                      Problem
                    </dt>
                    <dd className="text-[0.95rem] leading-relaxed text-foreground">
                      {project.problem}
                    </dd>
                  </div>
                  <div className="grid gap-1 md:grid-cols-[80px_1fr] md:gap-5">
                    <dt className="lettering pt-1 text-[9.5px] tracking-[0.17em] text-amber">
                      My role
                    </dt>
                    <dd className="text-[0.95rem] leading-relaxed text-foreground">
                      {project.solution}
                    </dd>
                  </div>
                  <div className="grid gap-1 md:grid-cols-[80px_1fr] md:gap-5">
                    <dt className="lettering pt-1 text-[9.5px] tracking-[0.17em] text-amber">
                      Outcome
                    </dt>
                    <dd className="text-[0.95rem] leading-relaxed text-heading">
                      {project.outcome}
                    </dd>
                  </div>
                </dl>
                <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
                  <ul className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="lettering border border-border px-2.5 py-1.5 text-[9px] tracking-[0.15em] text-foreground"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                  {project.link && (
                    <a
                      href={project.link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="lettering inline-flex items-center gap-2 text-[9.5px] tracking-[0.16em] text-subtle transition-colors hover:text-amber"
                    >
                      {project.link.label}
                      <span aria-hidden="true">→</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
