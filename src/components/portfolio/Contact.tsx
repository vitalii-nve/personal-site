const contacts = [
  {
    label: "Email",
    value: "vitalii@balitskyi.net",
    href: "mailto:vitalii@balitskyi.net",
  },
  {
    label: "Phone",
    value: "+45 50 17 54 23",
    href: "tel:+4550175423",
  },
  {
    label: "LinkedIn",
    value: "/in/balitskyi",
    href: "https://www.linkedin.com/in/balitskyi/",
  },
];

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24">
      <div className="mx-auto w-full max-w-6xl px-6 pb-20">
        <div className="rule-heavy reveal-up" />
        <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
          {/* Left: the offer */}
          <div>
            <h2 className="font-display text-[1.9rem] font-bold leading-tight tracking-[-0.02em] text-heading md:text-[2.25rem]">
              Start a project conversation
            </h2>
            <div className="mt-5 max-w-md space-y-3 leading-relaxed text-foreground">
              <p>
                Half an hour, no charge, no obligation. You describe the problem, I
                tell you whether I am the right person for it. I usually reply
                within a business day.
              </p>
              <p>No NDA needed to have that conversation.</p>
            </div>
          </div>

          {/* Right: how to reach me. The accent marks the link on hover,
              not the address itself — colour here is a state, not decoration. */}
          <div>
            <p className="lettering text-[10.5px] text-amber">Get in touch</p>
            <div className="mt-4 flex flex-col gap-2.5">
              {contacts.map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  target={contact.href.startsWith("http") ? "_blank" : undefined}
                  rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
                  className="group flex items-center justify-between gap-4 border border-border bg-surface px-4 py-3.5 transition-colors hover:border-amber"
                >
                  <span className="lettering text-[10.5px] tracking-[0.16em] text-subtle">
                    {contact.label}
                  </span>
                  <span className="text-[0.95rem] text-heading transition-colors group-hover:text-amber">
                    {contact.value}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
