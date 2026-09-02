const contacts = [
  {
    label: "Email",
    href: "mailto:vitalii.balitskyi@gmail.com",
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
    href: "https://www.linkedin.com/in/vitalii-balitskyi",
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
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-4xl text-heading md:text-5xl">
              Start a project conversation
            </h2>
            <p className="mt-6 max-w-md font-mono text-sm leading-relaxed text-dim">
              Tell me what you are building. I typically reply within one business day
              and can start with a short diagnostic call.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {contacts.map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  target={contact.href.startsWith("http") ? "_blank" : undefined}
                  rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
                  className="cta-secondary"
                >
                  {contact.icon}
                  {contact.label}
                </a>
              ))}
            </div>
          </div>

          <form
            action="mailto:vitalii.balitskyi@gmail.com"
            method="post"
            encType="text/plain"
            className="space-y-5 border border-border bg-card p-6 md:p-8"
          >
            <div>
              <label htmlFor="name" className="block font-mono text-[10px] uppercase tracking-[0.2em] text-gold">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-2 w-full border border-border bg-background px-4 py-3 font-mono text-sm text-foreground placeholder:text-subtle focus:border-gold focus:outline-none"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-mono text-[10px] uppercase tracking-[0.2em] text-gold">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-2 w-full border border-border bg-background px-4 py-3 font-mono text-sm text-foreground placeholder:text-subtle focus:border-gold focus:outline-none"
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label htmlFor="company" className="block font-mono text-[10px] uppercase tracking-[0.2em] text-gold">
                Company / Project
              </label>
              <input
                id="company"
                name="company"
                type="text"
                className="mt-2 w-full border border-border bg-background px-4 py-3 font-mono text-sm text-foreground placeholder:text-subtle focus:border-gold focus:outline-none"
                placeholder="Company or project name"
              />
            </div>
            <div>
              <label htmlFor="message" className="block font-mono text-[10px] uppercase tracking-[0.2em] text-gold">
                What are you building?
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="mt-2 w-full border border-border bg-background px-4 py-3 font-mono text-sm text-foreground placeholder:text-subtle focus:border-gold focus:outline-none"
                placeholder="A short description of the challenge or project..."
              />
            </div>
            <button type="submit" className="cta-primary w-full">
              Send message
            </button>
            <p className="font-mono text-[10px] text-subtle">
              Opens your email client with a pre-filled message. No data is stored on this site.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
