import { SectionHeader } from "./SectionHeader";

/*
 * Three stages, not three cards. They are a sequence — define what done
 * means, get there, build the practice that repeats it — so they are
 * numbered and separated by a hairline rather than boxed.
 */
const services = [
  {
    stage: "Stage 01",
    title: "Requirements and design review",
    description:
      "Before you commit to tooling, a supplier or a design freeze: what does done actually mean for this machine? Often nobody has written it down. I define the requirements — performance, environment, manufacture, acceptance — and review the design against them.",
    tags: ["Requirements", "Architecture", "Risk review"],
  },
  {
    stage: "Stage 02",
    title: "Prototype to production",
    description:
      "It works when you build it. Now it has to work when someone else does — from a drawing, to the requirements you agreed, repeatably. Component selection, supplier qualification, drawing packages, assembly and acceptance procedures: the work that makes unit one and unit fifty behave the same way.",
    tags: ["Design for manufacture", "Scale-up", "Supplier hand-off"],
  },
  {
    stage: "Stage 03",
    title: "The engineering practice",
    description:
      "Getting one machine across is a project. Getting every machine across is a practice: design reviews that catch things early, documentation someone else can pick up, an engineering group that makes the same call twice.",
    tags: ["Design review", "Mentoring", "Documentation"],
  },
];

export function Services() {
  return (
    <section id="services" className="scroll-mt-24">
      <div className="mx-auto w-full max-w-6xl px-6 pb-20">
        <SectionHeader title="How I help" />
        <div className="mt-10 grid gap-10 md:grid-cols-3 md:gap-0">
          {services.map((service, i) => (
            <article
              key={service.title}
              className={`md:px-8 ${
                i === 0
                  ? "md:pl-0"
                  : "border-t border-border pt-8 md:border-l md:border-t-0 md:pt-0"
              } ${i === services.length - 1 ? "md:pr-0" : ""}`}
            >
              <p className="lettering text-[10px] tracking-[0.2em] text-amber">
                {service.stage}
              </p>
              <h3 className="mt-2.5 font-display text-[1.2rem] font-bold leading-snug tracking-[-0.015em] text-heading">
                {service.title}
              </h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-foreground">
                {service.description}
              </p>
              <p className="lettering mt-4 text-[9.5px] tracking-[0.14em] text-subtle">
                {service.tags.join(" · ")}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
