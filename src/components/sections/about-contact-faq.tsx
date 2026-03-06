import { LinkButton } from "@/components/ui/button";

const faqs = [
  { q: "What is drone mapping?", a: "Drone mapping uses aerial sensors and geospatial processing to create accurate orthomosaics, terrain models, and measurable datasets." },
  { q: "When do I need LiDAR?", a: "LiDAR is ideal when projects require terrain penetration, detailed elevation under vegetation, or robust classification for engineering workflows." },
  { q: "What information do you need for a quote?", a: "Project location, target outputs, area size, timeline, and any compliance constraints help us scope accurately." },
  { q: "What outputs do clients receive?", a: "Depending on your project, we deliver orthomosaics, contours, point clouds, volumes, 3D models, and technical reports." },
];

export function AboutContactFaq() {
  return (
    <section className="border-t border-white/10 py-20">
      <div className="container mx-auto grid gap-10 px-4 lg:grid-cols-3">
        <div>
          <h3 className="text-2xl text-foreground">About AeroSpatial Prime</h3>
          <p className="mt-4 text-muted">
            We operate at the intersection of drone operations, geospatial analytics, and engineering advisory. Our mandate is to deliver reliable
            spatial intelligence that reduces uncertainty and supports serious project decisions.
          </p>
        </div>
        <div>
          <h3 className="text-2xl text-foreground">Contact</h3>
          <p className="mt-4 text-muted">WhatsApp: +27 64 659 4131</p>
          <p className="text-muted">Email: tshilidzimudau62@yahoo.com.com</p>
          <p className="text-muted">Coverage: Regional & national deployments</p>
          <LinkButton href="/quote" className="mt-5">
            Start a Project
          </LinkButton>
        </div>
        <div>
          <h3 className="text-2xl text-foreground">FAQ</h3>
          <div className="mt-4 space-y-4">
            {faqs.map((item) => (
              <div key={item.q} className="rounded-xl border border-white/10 bg-card p-4">
                <p className="text-sm text-foreground">{item.q}</p>
                <p className="mt-2 text-sm text-muted">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
