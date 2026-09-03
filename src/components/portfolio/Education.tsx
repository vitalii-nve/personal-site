import { SectionHeader } from "./SectionHeader";

// Degrees restored to match balitskyi.net. The previous build listed a
// Ph.D. and an M.Sc.; neither appears on the live site or the CV.
const degrees = [
  { degree: "Master of Engineering (MEng) — Mechanical Engineering", gpa: "5.0/5.0" },
  {
    degree: "Bachelor of Engineering (BE) — Engineering & Material Processing",
    gpa: "5.0/5.0",
  },
];

export function Education() {
  return (
    <section id="education" className="scroll-mt-20 border-t border-border">
      <div className="mx-auto w-full max-w-6xl px-6 py-24">
        <SectionHeader number="07" title="Education" />
        <div className="grid gap-10 md:grid-cols-[180px_1fr]">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-gold">
            University
          </p>
          <div>
            <h3 className="font-serif text-2xl leading-snug text-heading md:text-3xl">
              National Technical University of Ukraine 'Kyiv Polytechnic Institute'
            </h3>
            <ul className="mt-8 space-y-4">
              {degrees.map((entry) => (
                <li key={entry.degree} className="font-mono text-sm text-dim">
                  {entry.degree} · <span className="text-gold">{entry.gpa}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
