import { useEffect, useRef } from "react";
import portrait from "../../assets/portrait.jpg";

const stats = [
  { value: "10+", label: "Years in R&D" },
  { value: "3", label: "Platforms industrialised" },
  { value: "7", label: "Publications" },
];

const headlineWords = [
  "Turning",
  "breakthrough",
  "science",
  "into",
  "scalable",
  "hardware.",
];

export function Hero() {
  const wordsRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    wordsRef.current.forEach((el) => {
      if (el) {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }
    });
  }, []);

  return (
    <section id="top" className="relative overflow-hidden">
      {/* Decorative radial gold glow, top-right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-gold/10 blur-[120px] glow-pulse"
      />

      <div className="mx-auto w-full max-w-6xl px-6 pb-24 pt-36 md:pt-44">
        <div className="grid gap-4 lg:grid-cols-2 lg:grid-rows-[1fr_auto]">
          {/* Top-left: headline + CTA */}
          <div className="bento-card flex flex-col justify-between p-7 md:p-9 lg:row-span-2">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-gold">
                System Engineering Lead · Denmark
              </p>
              <h1 className="mt-6 font-serif text-3xl leading-[1.1] text-heading md:text-4xl lg:text-5xl">
                {headlineWords.map((word, i) => (
                  <span
                    key={i}
                    ref={(el) => { wordsRef.current[i] = el; }}
                    className="word-reveal mr-2 inline-block"
                    style={{ animationDelay: `${0.05 + i * 0.06}s` }}
                  >
                    {word === "scalable" ? (
                      <em className="italic text-gold">{word}</em>
                    ) : (
                      word
                    )}
                  </span>
                ))}
              </h1>
              <div className="mt-6 max-w-md space-y-4 font-mono text-sm leading-relaxed text-dim">
                <p>
                  System Engineering Lead with 10+ years in deep-tech R&D, specialising
                  in de-risking complex hardware-software integration. I take lab-scale
                  prototypes and convert them into high-throughput industrial systems
                  through robust CAD/FEA/CFD architecture and scalable manufacturing
                  processes.
                </p>
                <p>
                  Currently directing mechanical architecture for next-generation
                  atomic-layer 3D printing at ATLANT 3D in Taastrup, Denmark.
                </p>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="cta-primary">
                Book a 20-minute call
              </a>
              <a href="#portfolio" className="cta-secondary">
                See recent work
              </a>
            </div>
          </div>

          {/* Top-right: portrait */}
          <div className="group relative overflow-hidden border border-border transition-colors duration-500 hover:border-gold lg:min-h-0">
            <img
              src={portrait}
              alt="Portrait of Vitalii Balitskyi, System Engineering Lead"
              width={768}
              height={1024}
              className="aspect-[3/4] w-full object-cover grayscale transition duration-700 group-hover:grayscale-0 group-hover:scale-[1.02] lg:aspect-auto lg:h-full"
            />
          </div>

          {/* Bottom-right: stats + services teaser */}
          <div className="bento-card flex flex-col justify-between p-7 md:p-9">
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dd className="font-serif text-3xl text-heading md:text-4xl">
                    {stat.value}
                  </dd>
                  <dt className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-subtle">
                    {stat.label}
                  </dt>
                </div>
              ))}
            </div>
            <div className="mt-6 border-t border-border pt-6">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold">
                Available for
              </p>
              <p className="mt-2 font-mono text-sm text-dim">
                System architecture reviews · prototype-to-production pathways · team & process advisory
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
