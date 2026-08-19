import { CreativeShell } from "@/components/creative-shell";
import { SiteChrome } from "@/components/site-chrome";
import { Hero } from "@/components/hero";
import { ScrollStory } from "@/components/scroll-story";
import { StatsSection } from "@/components/stats-section";
import { PortfolioSection } from "@/components/portfolio-section";
import { CollaborationSection } from "@/components/collaboration-section";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <CreativeShell>
      <SiteChrome />
      <main>
        <Hero />
        <ScrollStory />
        <StatsSection />
        <PortfolioSection />
        <CollaborationSection />
        <CtaSection />
      </main>
      <Footer />
    </CreativeShell>
  );
}
