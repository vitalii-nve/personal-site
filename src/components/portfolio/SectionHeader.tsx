interface SectionHeaderProps {
  number: string;
  title: string;
}

export function SectionHeader({ number, title }: SectionHeaderProps) {
  return (
    <div className="mb-14 flex items-center gap-5 reveal-up">
      <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-gold">
        {number}
      </span>
      <h2 className="font-serif text-3xl text-heading md:text-4xl">{title}</h2>
      <div aria-hidden="true" className="line-grow h-px flex-1 bg-border" />
    </div>
  );
}
