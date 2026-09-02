import { SectionHeader } from "./SectionHeader";
import atomicPrinter from "../../assets/project-atomic-printer.jpg";
import motionPlatform from "../../assets/project-motion-platform.jpg";
import vacuumChamber from "../../assets/project-vacuum-chamber.jpg";
import lithographyRig from "../../assets/project-lithography-rig.jpg";

interface Project {
  image: string;
  title: string;
  problem: string;
  solution: string;
  outcome: string;
  tags: string[];
}

// Edit this array to swap in real projects — replace image imports above,
// then update problem, solution, outcome, and tags per project.
const projects: Project[] = [
  {
    image: atomicPrinter,
    title: "Atomic Layer 3D Printing Platform",
    problem:
      "ATLANT 3D needed a mechanical platform that could bridge direct-write atomic layer processing from experimental R&D to a production-ready manufacturing system.",
    solution:
      "Owned the mechanical system architecture: print-head mechanics, thermal management, vacuum-compatible motion, and subsystem integration.",
    outcome:
      "Took the flagship machine from R&D prototype to production-ready architecture, establishing the design review and documentation culture the team now runs on.",
    tags: ["System Architecture", "Precision Mechanics", "Deep Tech"],
  },
  {
    image: motionPlatform,
    title: "Nanoprecision Motion Platform",
    problem:
      "The print-head motion subsystem was slow to assemble and difficult to tune, limiting how quickly the team could iterate.",
    solution:
      "Redesigned the stage for stiffness, thermal stability, and repeatable assembly across prototype and production builds.",
    outcome:
      "Cut assembly time by roughly 40% while improving positioning repeatability.",
    tags: ["Motion Control", "Vibration Isolation", "Metrology"],
  },
  {
    image: vacuumChamber,
    title: "Modular Vacuum Deposition Rig",
    problem:
      "Materials researchers needed a flexible, serviceable vacuum platform that could evolve with their experiments without a full rebuild.",
    solution:
      "Built modular chambers, precursor delivery, and serviceable mechanics around a standardized interface and rapid changeover.",
    outcome:
      "Reduced setup time between experiments and made the system usable by researchers without deep vacuum expertise.",
    tags: ["Vacuum Systems", "System Integration", "R&D Tooling"],
  },
  {
    image: lithographyRig,
    title: "Photonics Characterization Rig",
    problem:
      "A photonics team needed a stable, vibration-isolated rig for precision alignment and repeatable characterization.",
    solution:
      "Integrated an optomechanical bench, precision alignment stages, and instruments into a single, vibration-isolated research rig.",
    outcome:
      "Improved measurement repeatability and shortened alignment time between sample runs.",
    tags: ["Optomechanics", "Prototyping", "Instrumentation"],
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
              className="group overflow-hidden border border-border bg-card transition-all duration-500 hover:-translate-y-1 hover:border-gold hover:shadow-[0_18px_40px_-18px_color-mix(in_oklab,var(--color-gold)_12%,transparent)]"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  width={1024}
                  height={640}
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover grayscale transition duration-700 group-hover:scale-[1.03] group-hover:grayscale-0"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-lg text-heading md:text-xl">
                  {project.title}
                </h3>
                <dl className="mt-4 space-y-3">
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
                      Solution
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
                <ul className="mt-5 flex flex-wrap gap-2">
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
