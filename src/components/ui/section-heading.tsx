export function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="mb-3 text-sm uppercase tracking-[0.25em] text-accent/80">{eyebrow}</p>
      <h2 className="text-3xl font-semibold text-foreground md:text-5xl">{title}</h2>
      <p className="mt-4 text-muted">{description}</p>
    </div>
  );
}
