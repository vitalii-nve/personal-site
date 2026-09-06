import { useEffect, useRef } from "react";
import portrait from "../../assets/portrait.jpg";

const stats = [
  { value: "10+", label: "Years in hardware" },
  { value: "3", label: "Platforms industrialised" },
  { value: "11", label: "Publications" },
];

const headlineWords = [
  "Precision",
  "hardware,",
  "from",
  "prototype",
  "to",
  "product.",
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
                For deep-tech hardware teams · Denmark
              </p>
              <h1 className="mt-6 font-serif text-3xl leading-[1.1] text-heading md:text-4xl lg:text-5xl">
                {headlineWords.map((word, i) => (
                  // whitespace-pre keeps the trailing space inside the
                  // inline-block, so the h1 reads as a sentence to crawlers
                  // and screen readers rather than one long word.
                  <span
                    key={i}
                    ref={(el) => { wordsRef.current[i] = el; }}
                    className="word-reveal inline-block whitespace-pre"
                    style={{ animationDelay: `${0.05 + i * 0.06}s` }}
                  >
                    {word === "product." ? (
                      <em className="italic text-gold">{word}</em>
                    ) : (
                      word
                    )}
                    {i < headlineWords.length - 1 ? " " : ""}
                  </span>
                ))}
              </h1>
              <div className="mt-6 max-w-md space-y-4 font-mono text-sm leading-relaxed text-dim">
                <p>
                  You have something that works. Now it has to be built by people who
                  weren't there when it was invented — from a drawing, repeatably,
                  against a schedule set before anyone knew where the hard part would
                  be.
                </p>
                <p>
                  That crossing is what I do. Ten years across gas, motion and
                  deposition systems, and the engineering groups that build them.
                </p>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="cta-primary">
                Start a conversation
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
              width={1400}
              height={1400}
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
                Requirements & design review · prototype to production · engineering practice
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
