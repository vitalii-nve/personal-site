const contacts = [
  {
    label: "Email",
    value: "vitalii@balitskyi.net",
    href: "mailto:vitalii@balitskyi.net",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-10 6L2 7" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "+45 50 17 54 23",
    href: "tel:+4550175423",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "/in/balitskyi",
    href: "https://www.linkedin.com/in/balitskyi/",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
      </svg>
    ),
  },
];

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 border-t border-border">
      <div className="mx-auto w-full max-w-6xl px-6 py-28">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-start lg:gap-20">
          {/* Left: the offer */}
          <div>
            <h2 className="font-serif text-4xl text-heading md:text-5xl">
              Start a project conversation
            </h2>
            <div className="mt-6 max-w-md space-y-4 font-mono text-sm leading-relaxed text-dim">
              <p>
                Half an hour, no charge, no obligation. You describe the problem, I
                tell you whether I am the right person for it. I usually reply
                within a business day.
              </p>
              <p>No NDA needed to have that conversation.</p>
            </div>
          </div>

          {/* Right: how to reach me */}
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-gold">
              Get in touch
            </p>
            <div className="mt-6 flex flex-col gap-3">
              {contacts.map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  target={contact.href.startsWith("http") ? "_blank" : undefined}
                  rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
                  className="group flex items-center justify-between border border-border bg-card px-5 py-4 transition-colors hover:border-gold"
                >
                  <span className="flex items-center gap-3 font-mono text-sm text-foreground">
                    <span className="text-gold">{contact.icon}</span>
                    {contact.label}
                  </span>
                  <span className="font-mono text-xs text-subtle transition-colors group-hover:text-gold">
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
