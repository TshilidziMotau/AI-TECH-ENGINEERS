import { SectionHeading } from "@/components/ui/section-heading";

const industries = ["Construction", "Civil Engineering", "Mining", "Agriculture", "Real Estate & Development", "Water / Hydrology", "Infrastructure Monitoring", "Municipal Planning"];

export function Industries() {
  return (
    <section className="border-y border-white/10 bg-white/[0.02] py-20">
      <div className="container mx-auto px-4">
        <SectionHeading eyebrow="Use Cases" title="Built for sectors where precision drives outcomes" description="AeroSpatial Prime supports teams that require reliable data for compliance, planning, and capital execution." />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {industries.map((item) => (
            <div key={item} className="rounded-xl border border-white/10 bg-background/40 p-5 text-center text-sm text-foreground">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
