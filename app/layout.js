import "./globals.css";
import NavigationBar from "./components/NavigationBar";
import SEOJsonLd from "./components/SEOJsonLd";
import EnableReveal from "./components/EnableReveal";
import Footer from "./components/Footer";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  title: {
    default: "Achip Consulting | Consultanță Achiziții Publice",
    template: "%s | Achip Consulting",
  },
  description:
    "Achip Consulting oferă servicii complete pentru operatori economici: administrare SEAP, pregătire dosare, pachete dedicate și suport pe tot parcursul procedurilor.",
  keywords: [
    "achiziții publice",
    "consultant achiziții",
    "documentație atribuire",
    "SEAP",
    "licitații",
    "Achip Consulting",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Achip Consulting | Consultanță Achiziții Publice",
    description:
      "Sprijin cap‑coadă în achiziții publice. Livrabile clare, termene ferme.",
    images: [{ url: "/logo.png", width: 600, height: 600 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Achip Consulting | Consultanță Achiziții Publice",
    description:
      "Sprijin cap‑coadă în achiziții publice. Livrabile clare, termene ferme.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <EnableReveal />
        <SEOJsonLd siteUrl={siteUrl} />
        <NavigationBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
