import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { DocumentsSection } from "@/components/DocumentsSection";
import { NewslettersSection } from "@/components/NewslettersSection";
import { ResourcesSection } from "@/components/ResourcesSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <DocumentsSection />
        <NewslettersSection />
        <ResourcesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
