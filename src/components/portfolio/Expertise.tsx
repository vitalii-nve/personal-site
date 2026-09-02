import { SectionHeader } from "./SectionHeader";

const categories = [
  {
    label: "Strategic",
    skills: [
      "R&D Roadmapping",
      "Team Building & Mentoring",
      "Technology Scouting",
      "Cross-functional Leadership",
    ],
  },
  {
    label: "Technical",
    skills: [
      "Precision Mechanical Design",
      "Vacuum & Deposition Systems",
      "Mechatronics & Motion Control",
      "Design for Manufacture",
    ],
  },
  {
    label: "Analytical",
    skills: [
      "Systems Thinking",
      "Root-cause Analysis",
      "FEA & Simulation",
      "Data-driven Decisions",
    ],
  },
];

export function Expertise() {
  return (
    <section id="expertise" className="scroll-mt-20 border-t border-border">
      <div className="mx-auto w-full max-w-6xl px-6 py-24">
        <SectionHeader number="05" title="Expertise" />
        <div className="grid gap-6 md:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category.label}
              className="group relative overflow-hidden border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold"
            >
              <span
                aria-hidden="true"
                className="absolute left-0 top-0 h-[2px] w-0 bg-gold transition-all duration-500 group-hover:w-full"
              />
              <h3 className="font-mono text-[11px] uppercase tracking-[0.3em] text-gold">
                {category.label}
              </h3>
              <ul className="mt-6 space-y-3">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-baseline gap-3 font-mono text-sm text-dim"
                  >
                    <span aria-hidden="true" className="text-gold">
                      ›
                    </span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
