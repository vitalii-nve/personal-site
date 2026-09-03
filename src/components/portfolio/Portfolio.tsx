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
}

// All entries describe role and result only — never mechanism. Supplier names,
// unit counts, and mass/power/cost figures are deliberately absent.
const projects: Project[] = [
  {
    title: "NANOFABRICATOR® Zero-G",
    image: zeroG,
    context: "ATLANT 3D · atomic layer processing for in-space manufacturing",
    problem:
      "Spare parts, prototype components and high-precision repairs on a crewed platform have to be launched from the ground — slow, expensive, and impossible to improvise. ATLANT 3D's atomic layer processing worked on a bench; it needed to work in orbit.",
    solution:
      "Led the mechanical design of the space-adapted system, working to space-qualification and crewed-platform requirements including compatibility with the ISS European Drawer Rack (EDR2). Owned component selection, assembly and test.",
    outcome:
      "A ground-based process carried into a microgravity, crew-rated envelope — the hardest of the three platform adaptations, and the one with the least room to negotiate on requirements.",
    tags: ["Space Hardware", "Requirements Engineering", "Precision Mechanics"],
  },
  {
    title: "NANOFABRICATOR™ Lite — Gen 1 and Gen 2",
    image: lite,
    context: "ATLANT 3D · benchtop tool for atomic-scale fabrication",
    problem:
      "The benchtop tool existed as a hand-built research instrument. To be sold and supported it had to become something that could be manufactured repeatably by people who had not designed it.",
    solution:
      "Led mechanical design across both generations and owned the transfer out of R&D into production — component selection, supplier collaboration and qualification, and hands-on assembly and testing of the tools.",
    outcome:
      "Both generations moved from research build to a manufacturable product, with the drawing package, supplier base and assembly process to support them.",
    tags: ["Design for Manufacture", "Production Transfer", "Supplier Qualification"],
  },
  {
    title: "NANOFABRICATOR® PRO",
    image: pro,
    context: "ATLANT 3D · industrial platform for AI-driven materials discovery",
    problem:
      "The industrial platform had to be designed for build by an external manufacturing partner — which means the design has to survive being handed across a company boundary, not just across a desk.",
    solution:
      "Contributed mechanical design and managed requirements in collaboration with manufacturing partner Automated Industrial Robotics, taking the platform from specification to buildable design.",
    outcome:
      "Launched August 2026.",
    tags: ["Requirements Management", "External Partners", "Industrial Systems"],
  },
  {
    title: "GRID — autonomous rebar-tying robot",
    image: grid,
    context: "Spacer Robotics · construction site automation",
    problem:
      "Rebar tying is repetitive, slow and physically punishing, and it happens on an unstructured, uneven site — the opposite of the controlled environment precision hardware is usually designed for.",
    solution:
      "Systems and mechanical engineering on GRID, a mobile robot that operates directly on the rebar grid in job-site conditions.",
    outcome:
      "Spacer Robotics reports roughly 5,000 ties per eight-hour shift, on 14+ hours of runtime.",
    tags: ["Robotics", "Field Hardware", "Autonomous Systems"],
  },
  {
    title: "Modular MXene synthesis reactor",
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
    image: dipCoating,
    context: "Materials Research Centre · smart textiles",
    problem:
      "MXene-functionalised yarn was a manual batch process, which put any real textile application out of reach.",
    solution:
      "Engineered an automated, continuous dip-coating platform for yarn — turning a laboratory technique into a production process.",
    outcome:
      "Enabled the first continuous production of MXene smart textiles. The work is published in Advanced Functional Materials.",
    tags: ["Process Automation", "Smart Textiles", "Published Work"],
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="scroll-mt-20 border-t border-border">
      <div className="mx-auto w-full max-w-6xl px-6 py-24">
        <SectionHeader number="03" title="Selected Projects" />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col overflow-hidden border border-border bg-card transition-all duration-500 hover:-translate-y-1 hover:border-gold hover:shadow-[0_18px_40px_-18px_color-mix(in_oklab,var(--color-gold)_12%,transparent)]"
            >
              {project.image && (
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    width={1024}
                    height={640}
                    loading="lazy"
                    className="aspect-[16/10] w-full bg-background object-cover transition duration-700 group-hover:scale-[1.03]"
                  />
                </div>
              )}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-serif text-lg text-heading md:text-xl">
                  {project.title}
                </h3>
                <p className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.15em] text-subtle">
                  {project.context}
                </p>
                <dl className="mt-5 space-y-3">
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold">
                      Problem
                    </dt>
                    <dd className="mt-1 font-mono text-sm leading-relaxed text-dim">
                      {project.problem}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold">
                      My role
                    </dt>
                    <dd className="mt-1 font-mono text-sm leading-relaxed text-dim">
                      {project.solution}
                    </dd>
                  </div>
                  <div className="border-l-2 border-gold bg-gold-tint px-4 py-3">
                    <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold">
                      Outcome
                    </dt>
                    <dd className="mt-1 font-mono text-sm leading-relaxed text-dim">
                      {project.outcome}
                    </dd>
                  </div>
                </dl>
                <ul className="mt-5 flex flex-wrap gap-2 pt-1">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="bg-gold-tint px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-gold"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
