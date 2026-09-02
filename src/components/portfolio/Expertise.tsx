import { SectionHeader } from "./SectionHeader";

const categories = [
  {
    label: "Strategic",
    skills: [
      "R&D Strategy & Execution",
      "Product Lifecycle Management",
      "Cross-functional Leadership",
      "Capital-efficient Roadmapping",
    ],
  },
  {
    label: "Technical",
    skills: [
      "System Architecture",
      "Precision Hardware Integration",
      "Process Automation",
      "CAD/FEA/CFD (ANSYS, SolidWorks)",
    ],
  },
  {
    label: "Analytical",
    skills: [
      "Multi-Physics Simulation",
      "Scalable Manufacturing Design",
      "Advanced Material Synthesis",
      "Design for Manufacture",
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
