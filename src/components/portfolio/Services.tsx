import { SectionHeader } from "./SectionHeader";

const services = [
  {
    title: "System Architecture & Reviews",
    description:
      "Audit existing designs, define subsystem interfaces, and de-risk the architecture before major tooling spend. I help teams catch integration issues while they are still cheap to fix.",
    tags: ["Architecture", "Risk review", "Interface design"],
  },
  {
    title: "Prototype-to-Production Pathway",
    description:
      "Design for manufacture, assembly, and repeatable performance across vacuum, motion, thermal, and deposition subsystems — so unit one and unit one hundred behave the same.",
    tags: ["DFM", "Scale-up", "Supplier hand-off"],
  },
  {
    title: "Team & Process Advisory",
    description:
      "Build design-review culture, mentor mechanical teams, and align R&D priorities with program timelines. Useful for startups moving from hero builds to an engineering organization.",
    tags: ["Mentoring", "Process", "R&D strategy"],
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
      </div>
    </section>
  );
}
