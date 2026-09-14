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
    <section id="education" className="scroll-mt-24">
      <div className="mx-auto w-full max-w-6xl px-6 pb-20">
        <SectionHeader title="Education" />
        <div className="mt-10 grid gap-6 md:grid-cols-[150px_1fr] md:gap-10">
          <p className="lettering pt-2 text-[9.5px] tracking-[0.2em] text-subtle">
            University
          </p>
          <div>
            <h3 className="font-display text-[1.35rem] font-bold leading-snug tracking-[-0.015em] text-heading md:text-[1.6rem]">
              National Technical University of Ukraine 'Kyiv Polytechnic Institute'
            </h3>
            <ul className="mt-5 border-t border-border">
              {degrees.map((entry) => (
                <li
                  key={entry.degree}
                  className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-border-soft py-3.5"
                >
                  <span className="text-[0.95rem] text-foreground">{entry.degree}</span>
                  <span className="lettering text-[10px] tracking-[0.14em] text-subtle">
                    {entry.gpa}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
