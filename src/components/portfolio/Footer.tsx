/*
 * Title block. A drawing ends with one: who drew it, how to reach them,
 * the revision and the sheet count. Update REVISION when the content of
 * the page changes in a way worth dating.
 */
const REVISION = "2026 — 09 — 14";

const fields = [
  { label: "Drawn by", value: "Vitalii Balitskyi" },
  { label: "Contact", value: "vitalii@balitskyi.net" },
  { label: "Revision", value: REVISION },
  { label: "Sheet", value: "1 of 1" },
];

export function Footer() {
  return (
    <footer>
      <div className="mx-auto w-full max-w-6xl px-6 pb-14">
        <div className="grid divide-y divide-border border border-subtle bg-panel md:grid-cols-[1.6fr_1fr_1fr_0.8fr] md:divide-x md:divide-y-0">
          {fields.map((field) => (
            <div key={field.label} className="px-4 py-2.5">
              <p className="lettering text-[8.5px] tracking-[0.19em] text-subtle">
                {field.label}
              </p>
              <p className="mt-1 text-[0.9rem] text-heading">{field.value}</p>
            </div>
          ))}
        </div>
        <p className="lettering mt-5 text-[9px] tracking-[0.2em] text-subtle">
          © 2026 Vitalii Balitskyi · Greve, Denmark
        </p>
      </div>
    </footer>
  );
}
