import { AboutContactFaq } from "@/components/sections/about-contact-faq";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Industries } from "@/components/sections/industries";
import { MetricsTestimonials } from "@/components/sections/metrics-testimonials";
import { Services } from "@/components/sections/services";
import { Showcase } from "@/components/sections/showcase";
import { TrustDeliverables } from "@/components/sections/trust";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <Hero />
      <Services />
      <Industries />
      <MetricsTestimonials />
      <Showcase />
      <HowItWorks />
      <TrustDeliverables />
      <AboutContactFaq />
      <SiteFooter />
      <MobileStickyCta />
    </main>
  );
}
