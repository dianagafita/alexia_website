import MainContent from "./components/homePage/mainContent";
import HomeHighlights from "./components/homePage/HomeHighlights";
import HomePackagesPreview from "./components/homePage/HomePackagesPreview";
import HomeProcessPreview from "./components/homePage/HomeProcessPreview";
import ContactSection from "./components/homePage/ContactSection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen font-sans">
      <MainContent />
      <HomeHighlights />
      <HomePackagesPreview />
      <HomeProcessPreview />
      {/* <ContactSection /> */}
    </main>
  );
}
