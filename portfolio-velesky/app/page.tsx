import { HeroSection } from "@/components/sections/HeroSection";
import { ProjetsSection } from "@/components/sections/ProjetsSection";
import { AProposSection } from "@/components/sections/AProposSection";
import { CompetencesSection } from "@/components/sections/CompetencesSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProjetsSection />
      <AProposSection />
      <CompetencesSection />
      <ContactSection />
    </>
  );
}
