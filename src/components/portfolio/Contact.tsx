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

/*
 * No offer copy here. "Half an hour, no charge, no obligation" is stated
 * once, at the end of Services — repeating it above the contact rows said
 * the same thing twice.
 */
export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24">
      <div className="mx-auto w-full max-w-6xl px-6 pb-20">
        <div className="rule-heavy reveal-up" />
        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <h2 className="font-display text-[1.9rem] font-bold leading-tight tracking-[-0.02em] text-heading md:text-[2.25rem]">
            Start a project conversation
          </h2>

          {/* The accent marks the link on hover, not the address itself —
              colour here is a state, not decoration. */}
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
