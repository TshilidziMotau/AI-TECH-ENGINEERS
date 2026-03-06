import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { ThreeLandingScene } from "@/components/three-landing-scene";

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <ThreeLandingScene />
      <SiteFooter />
      <MobileStickyCta />
    </main>
  );
}
