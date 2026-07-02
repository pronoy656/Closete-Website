import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { MapSection } from "@/components/sections/MapSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { AppMockupsSection } from "@/components/sections/AppMockupsSection";
import { VisionSection } from "@/components/sections/VisionSection";
import { CtaBannerSection } from "@/components/sections/CtaBannerSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <MapSection />
        <HowItWorksSection />
        <TrustSection />
        <AppMockupsSection />
        <VisionSection />
        <CtaBannerSection />
      </main>
      <Footer />
    </>
  );
}
