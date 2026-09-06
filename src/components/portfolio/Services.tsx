import { SectionHeader } from "./SectionHeader";

const services = [
  {
    title: "Requirements and design review",
    description:
      "Before you commit to tooling, a supplier or a design freeze: what does done actually mean for this machine? Often nobody has written it down. I define the requirements — performance, environment, manufacture, acceptance — and review the design against them. For some clients that is the whole engagement. For others it is where a longer one starts.",
    tags: ["Requirements", "Architecture", "Risk review"],
  },
  {
    title: "Prototype to production",
    description:
      "It works when you build it. Now it has to work when someone else does — from a drawing, to the requirements you agreed, repeatably. Component selection, supplier qualification, drawing packages, assembly and acceptance procedures: the work that makes unit one and unit fifty behave the same way.",
    tags: ["Design for manufacture", "Scale-up", "Supplier hand-off"],
  },
  {
    title: "The engineering practice",
    description:
      "Getting one machine across is a project. Getting every machine across is a practice: design reviews that catch things early, documentation someone else can pick up, an engineering group that makes the same call twice. I built that function at ATLANT 3D from a single role.",
    tags: ["Design review", "Mentoring", "Documentation"],
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
