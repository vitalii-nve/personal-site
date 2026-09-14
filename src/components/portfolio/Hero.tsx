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
    <section id="top">
      <div className="mx-auto w-full max-w-6xl px-6 pb-16 pt-32 md:pt-40">
        <div className="grid gap-12 lg:grid-cols-[1fr_280px_200px] lg:items-start lg:gap-12">
          {/* Headline */}
          <div>
            <p className="lettering text-[10.5px] text-amber">
              For deep-tech hardware teams · Denmark
            </p>
            <h1 className="mt-4 font-display text-[clamp(2.1rem,5.2vw,3.25rem)] font-bold leading-[1.05] tracking-[-0.025em] text-heading">
              {headlineWords.map((word, i) => (
                // whitespace-pre keeps the trailing space inside the
                // inline-block, so the h1 reads as a sentence to crawlers
                // and screen readers rather than one long word.
                <span
                  key={i}
                  ref={(el) => {
                    wordsRef.current[i] = el;
                  }}
                  className="word-reveal inline-block whitespace-pre"
                  style={{ animationDelay: `${0.05 + i * 0.06}s` }}
                >
                  {word === "product." ? (
                    <span className="text-amber">{word}</span>
                  ) : (
                    word
                  )}
                  {i < headlineWords.length - 1 ? " " : ""}
                </span>
              ))}
            </h1>
            <div className="mt-6 max-w-[44ch] space-y-3.5 leading-relaxed text-foreground">
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
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="cta-primary">
                Start a conversation
              </a>
              <a href="#portfolio" className="cta-secondary">
                See recent work
              </a>
            </div>
          </div>

          {/* Portrait, drawn as selected geometry */}
          <div className="w-full max-w-[320px] lg:max-w-[280px]">
            <div className="group relative border border-subtle bg-surface">
              <img
                src={portrait}
                alt="Portrait of Vitalii Balitskyi, System Engineering Lead"
                width={1400}
                height={1400}
                className="plate aspect-[3/4] w-full object-cover"
              />
              <i aria-hidden="true" className="handle handle-tl" />
              <i aria-hidden="true" className="handle handle-tr" />
              <i aria-hidden="true" className="handle handle-bl" />
              <i aria-hidden="true" className="handle handle-br" />
            </div>
            <div className="lettering mt-2.5 flex justify-between text-[9px] tracking-[0.16em] text-subtle">
              <span>V. Balitskyi</span>
              <span>Greve, DK</span>
            </div>
          </div>

          {/* Stats */}
          <dl>
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`border-border py-4 ${i === 0 ? "pt-0" : ""} ${
                  i < stats.length - 1 ? "border-b" : ""
                }`}
              >
                <dt className="font-display text-[2.6rem] font-bold leading-none tracking-[-0.02em] text-amber">
                  {stat.value}
                </dt>
                <dd className="lettering mt-1.5 text-[10px] tracking-[0.17em] text-subtle">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
