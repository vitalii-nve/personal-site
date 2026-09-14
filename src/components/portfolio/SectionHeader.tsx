interface SectionHeaderProps {
  title: string;
}

/*
 * A section opens the way a drawing divides zones: a thick rule over a
 * hairline, then the title. The decorative 01–06 numbering is gone — it
 * implied a sequence the page does not have. (Services numbers its three
 * stages, because those genuinely are one.)
 */
export function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <div className="rule-heavy reveal-up">
      <h2 className="mt-8 font-display text-[1.7rem] font-bold leading-tight tracking-[-0.02em] text-heading md:text-[2rem]">
        {title}
      </h2>
    </div>
  );
}
