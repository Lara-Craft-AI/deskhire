import {
  ComparisonSection,
  ConsultSection,
  FaqSection,
  Footer,
  Header,
  HeroSection,
  IncludedSection,
  MonthlyImprovementSection,
  OptionsSection,
  ProblemSection,
  ProcessSection,
  RolesSection,
  SecuritySection,
  TrustBar,
  ValueStrip
} from "@/components/sections/landing-sections";

export default function Home() {
  return (
    <main className="text-foreground">
      <Header />
      <HeroSection />
      <TrustBar />
      <ValueStrip />
      <ProblemSection />
      <ComparisonSection />
      <MonthlyImprovementSection />
      <IncludedSection />
      <SecuritySection />
      <RolesSection />
      <ProcessSection />
      <OptionsSection />
      <ConsultSection />
      <FaqSection />
      <Footer />
    </main>
  );
}
