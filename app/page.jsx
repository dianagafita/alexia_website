import NavigationBar from "./components/NavigationBar";
import MainContent from "./components/homePage/mainContent";
import AboutUsContent from "./components/homePage/aboutUsContent";
import ServicesPreview from "./components/homePage/ServicesPreview";
import CaseStudies from "./components/homePage/CaseStudies";
import FAQ from "./components/homePage/FAQ";
import ContactSection from "./components/homePage/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen font-sans">
      <MainContent />
      <ServicesPreview />
      <AboutUsContent />
      <CaseStudies />
      <FAQ />
      <ContactSection />
      <Footer />
    </main>
  );
}
