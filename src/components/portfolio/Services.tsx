import { SectionHeader } from "./SectionHeader";

const services = [
  {
    title: "System architecture reviews",
    description:
      "I read your design pack and tell you where it will hurt — subsystem interfaces, tolerance stack-ups, thermal and vacuum compatibility, the assumptions that only break once tooling is paid for. Most of what I catch is cheap to fix at the point I catch it.",
    tags: ["Architecture", "Risk review", "Interface design"],
  },
  {
    title: "Prototype to production",
    description:
      "The gap between a machine that works because you built it and one that works because it was manufactured. Component selection, supplier qualification, drawing packages, assembly and acceptance procedures — the unglamorous work that makes unit one and unit fifty behave alike.",
    tags: ["Design for manufacture", "Scale-up", "Supplier hand-off"],
  },
  {
    title: "Hardware under hard constraints",
    description:
      "Precision that has to survive somewhere unforgiving — a crewed platform with a launch mass budget, or an uneven construction site. I have taken the same core process into a space-qualified envelope and into field robotics, and the discipline transfers.",
    tags: ["Space-qualified", "Field hardware", "Requirements"],
  },
];

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 border-t border-border">
      <div className="mx-auto w-full max-w-6xl px-6 py-24">
        <SectionHeader number="01" title="How I Help" />
        <div className="grid gap-4 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group relative overflow-hidden border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-0.5 hover:border-gold"
            >
              <span
                aria-hidden="true"
                className="absolute left-0 top-0 h-[2px] w-0 bg-gold transition-all duration-500 group-hover:w-full"
              />
              <h3 className="font-serif text-xl text-heading md:text-2xl">
                {service.title}
              </h3>
              <p className="mt-4 font-mono text-sm leading-relaxed text-dim">
                {service.description}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <li
                    key={tag}
                    className="bg-gold-tint px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-gold"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* The honest answer to the question every buyer asks silently:
            does he have time, and whose IP am I talking into? */}
        <div className="mt-12 grid gap-10 border-t border-border pt-12 lg:grid-cols-[1fr_auto] lg:items-start lg:gap-16">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-gold">
              Working together
            </p>
            <div className="mt-5 max-w-2xl space-y-4 font-mono text-sm leading-relaxed text-dim">
              <p>
                Start with a call. Half an hour, no charge and no obligation —
                you describe what you are building and where it is stuck, and I
                tell you whether I can help. If I am not the right person, I will
                say so on that call rather than three weeks into an engagement.
              </p>
              <p>
                I am in full-time engineering roles and take a limited amount of
                outside work, so I am selective about what I pick up. Scope,
                timing and any conflicts of interest get agreed up front, before
                anything is committed.
              </p>
            </div>
          </div>
          <a href="#contact" className="cta-primary shrink-0 self-start">
            Tell me what you're building
          </a>
        </div>
      </div>
    </section>
  );
}
