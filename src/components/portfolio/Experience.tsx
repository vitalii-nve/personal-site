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
    period: "Nov 2025 — Apr 2026",
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

/*
 * Employment history as a revision table — period, organisation, what
 * changed. It is the form a drawing already uses to record exactly this,
 * so the earlier per-role cards and hover bars are gone.
 */
export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24">
      <div className="mx-auto w-full max-w-6xl px-6 pb-20">
        <SectionHeader title="Experience" />
        <div className="mt-10 border border-border">
          <div className="hidden bg-panel md:grid md:grid-cols-[150px_210px_1fr]">
            <div className="lettering border-r border-border-soft px-4 py-2.5 text-[9px] tracking-[0.2em] text-subtle">
              Period
            </div>
            <div className="lettering border-r border-border-soft px-4 py-2.5 text-[9px] tracking-[0.2em] text-subtle">
              Organisation
            </div>
            <div className="lettering px-4 py-2.5 text-[9px] tracking-[0.2em] text-subtle">
              Role
            </div>
          </div>

          {roles.map((role, i) => (
            <div
              key={`${role.company}-${role.period}`}
              className={`grid border-border-soft md:grid-cols-[150px_210px_1fr] ${
                i > 0 ? "border-t" : "border-t md:border-t-0"
              }`}
            >
              <div className="px-4 pt-4 md:border-r md:border-border-soft md:py-4">
                <p className="lettering text-[10.5px] tracking-[0.1em] text-foreground">
                  {role.period}
                </p>
              </div>
              <div className="px-4 pt-3 md:border-r md:border-border-soft md:py-4 md:pt-4">
                <p className="font-display text-[0.95rem] font-bold text-heading">
                  {role.company}
                </p>
                <p className="lettering mt-1 text-[9.5px] tracking-[0.12em] text-subtle">
                  {role.location}
                </p>
              </div>
              <div className="px-4 pb-5 pt-3 md:py-4">
                <p className="text-[1rem] text-heading">{role.title}</p>
                {role.priorTitles && (
                  <ul className="mt-1.5 space-y-0.5">
                    {role.priorTitles.map((prior) => (
                      <li
                        key={prior}
                        className="lettering text-[9.5px] leading-relaxed tracking-[0.1em] text-subtle"
                      >
                        {prior}
                      </li>
                    ))}
                  </ul>
                )}
                <p className="mt-3 max-w-3xl text-[0.95rem] leading-relaxed text-foreground">
                  {role.description}
                </p>
                {role.keyResult && (
                  <div className="mt-4 grid max-w-3xl gap-1 border-t border-border-soft pt-3 md:grid-cols-[80px_1fr] md:gap-5">
                    <p className="lettering pt-1 text-[9.5px] tracking-[0.17em] text-amber">
                      Key result
                    </p>
                    <p className="text-[0.95rem] leading-relaxed text-heading">
                      {role.keyResult}
                    </p>
                  </div>
                )}
                <ul className="mt-4 flex flex-wrap gap-2">
                  {role.tags.map((tag) => (
                    <li
                      key={tag}
                      className="lettering border border-border px-2.5 py-1.5 text-[9px] tracking-[0.15em] text-foreground"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
