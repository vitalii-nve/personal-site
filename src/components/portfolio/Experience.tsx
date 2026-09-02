import { SectionHeader } from "./SectionHeader";

interface Role {
  period: string;
  company: string;
  location: string;
  title: string;
  description: string;
  keyResult?: string;
  tags: string[];
}

const roles: Role[] = [
  {
    period: "Nov 2024 — Present",
    company: "ATLANT 3D",
    location: "Taastrup, Denmark",
    title: "Mechanical Engineering Group Lead",
    description:
      "Leading the mechanical engineering group behind ATLANT 3D's atomic-layer manufacturing systems. Owning system architecture, design standards, and the path from experimental prototypes to production-grade platforms.",
    keyResult:
      "Established the design review and documentation culture the team now runs on.",
    tags: ["Team Leadership", "System Architecture", "Atomic Layer Manufacturing"],
  },
  {
    period: "Jun 2022 — Oct 2024",
    company: "ATLANT 3D",
    location: "Taastrup, Denmark",
    title: "Mechanical Engineer & Team Lead",
    description:
      "Designed precision motion, thermal, and vacuum-compatible subsystems for a direct-write atomic layer 3D printing platform. Coordinated mechanical workstreams and aligned hardware with process and software teams.",
    keyResult:
      "Redesigned the print-head motion subsystem, cutting assembly time by roughly 40% while improving positioning repeatability.",
    tags: ["Precision Mechanics", "Vacuum Systems", "Motion Control", "DFM"],
  },
  {
    period: "Dec 2016 — Apr 2022",
    company: "Materials Research Centre",
    location: "Kyiv, Ukraine",
    title: "Mechanical Engineer / System Integrator",
    description:
      "Designed and integrated mechanical systems for materials science instrumentation — crystal growth equipment, vacuum and CVD systems, and custom characterization rigs.",
    tags: ["System Integration", "Materials Science", "Instrumentation", "Prototyping"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 border-t border-border">
      <div className="mx-auto w-full max-w-6xl px-6 py-24">
        <SectionHeader number="04" title="Experience" />
        <div className="divide-y divide-border border-y border-border">
          {roles.map((role) => (
            <article
              key={`${role.company}-${role.period}`}
              className="group relative grid gap-8 py-10 transition-all duration-300 hover:translate-x-1 md:grid-cols-[180px_1fr]"
            >
              <span
                aria-hidden="true"
                className="absolute left-0 top-0 h-full w-[2px] scale-y-0 bg-gold transition-transform duration-500 group-hover:scale-y-100"
              />
              <div className="flex flex-col gap-1.5 pl-0 md:pl-4">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-subtle">
                  {role.period}
                </span>
                <span className="font-mono text-sm text-gold">{role.company}</span>
                <span className="font-mono text-xs text-subtle">{role.location}</span>
              </div>
              <div>
                <h3 className="font-serif text-xl text-heading md:text-2xl">{role.title}</h3>
                <p className="mt-4 max-w-3xl font-mono text-sm leading-relaxed text-dim">
                  {role.description}
                </p>
                {role.keyResult && (
                  <div className="mt-5 max-w-3xl border-l-2 border-gold bg-gold-tint px-5 py-4">
                    <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold">
                      Key result
                    </span>
                    <p className="mt-2 font-mono text-sm leading-relaxed text-dim">
                      {role.keyResult}
                    </p>
                  </div>
                )}
                <ul className="mt-5 flex flex-wrap gap-2">
                  {role.tags.map((tag) => (
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
