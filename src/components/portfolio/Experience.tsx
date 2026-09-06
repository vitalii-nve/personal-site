import { SectionHeader } from "./SectionHeader";

interface Role {
  period: string;
  company: string;
  location: string;
  title: string;
  priorTitles?: string[];
  description: string;
  keyResult?: string;
  tags: string[];
}

const roles: Role[] = [
  {
    period: "Jun 2022 — Present",
    company: "ATLANT 3D Nanosystems",
    location: "Taastrup, Denmark",
    title: "Mechanical Engineering Group Lead",
    priorTitles: [
      "Team Lead Engineering · Jan 2023 — 2024",
      "Mechanical Design Engineer · Jun 2022 — Dec 2022",
    ],
    description:
      "Took ATLANT 3D's Direct Atomic Layer Processing technology from lab to product across three platforms: a benchtop research tool, a space-rated system for in-orbit manufacturing, and an industrial production machine. Led mechanical design and the R&D-to-production transfer for each, and grew the mechanical engineering function into a team.",
    keyResult:
      "Grew the mechanical engineering function from a single role into a group, and set the design review and documentation practice the team now runs on.",
    tags: [
      "Atomic Layer Processing",
      "R&D to Production",
      "Space Hardware",
      "Team Leadership",
    ],
  },
  {
    // TODO: confirm the engagement dates before publishing.
    period: "Consulting engagement",
    company: "Spacer Robotics",
    location: "Denmark",
    title: "Systems Engineering Consultant",
    description:
      "Consulting engagement on autonomous construction robotics. Defined the system requirements, developed the system architecture and concept design, and prototyped core modules.",
    tags: ["Requirements", "System Architecture", "Concept Design", "Prototyping"],
  },

  {
    period: "Dec 2016 — Apr 2022",
    company: "Materials Research Centre",
    location: "Kyiv, Ukraine",
    title: "Mechanical Engineer / System Integrator",
    description:
      "Designed and integrated mechanical systems for materials science instrumentation — crystal growth equipment, vacuum and CVD systems, and custom characterisation rigs — alongside the scale-up work that turned laboratory material synthesis into a repeatable industrial process.",
    keyResult:
      "Designed and scaled a modular MXene synthesis reactor from milligram-level lab samples to 100-gram industrial batches.",
    tags: [
      "Materials Science",
      "Industrial Scale-up",
      "Instrumentation",
      "System Integration",
    ],
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
                <h3 className="font-serif text-xl text-heading md:text-2xl">
                  {role.title}
                </h3>
                {role.priorTitles && (
                  <ul className="mt-2 space-y-1">
                    {role.priorTitles.map((prior) => (
                      <li
                        key={prior}
                        className="font-mono text-xs text-subtle"
                      >
                        {prior}
                      </li>
                    ))}
                  </ul>
                )}
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
