import { HeroPinTransition } from "@/components/sections/HeroPinTransition";

// HeroPinTransition orchestre en interne HeroSection, ProjetsSection,
// AProposSection, CompetencesSection et ContactSection dans la structure
// GSAP pin + scrub (Hero fixé → Projets qui remonte depuis le bas).
export default function Home() {
  return <HeroPinTransition />;
}
