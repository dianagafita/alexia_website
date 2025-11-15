import "./globals.css";
import NavigationBar from "./components/NavigationBar";
import SEOJsonLd from "./components/SEOJsonLd";
import EnableReveal from "./components/EnableReveal";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Consultanță Achiziții Publice | Alexia",
    template: "%s | Alexia",
  },
  description:
    "Consultanță completă pentru achiziții publice: strategie, documentație, management licitații, evaluare și contestații.",
  keywords: [
    "achiziții publice",
    "consultant achiziții",
    "documentație atribuire",
    "SEAP",
    "licitații",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Consultanță Achiziții Publice | Alexia",
    description:
      "Sprijin cap‑coadă în achiziții publice. Livrabile clare, termene ferme.",
    images: [{ url: "/images/img1.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Consultanță Achiziții Publice | Alexia",
    description:
      "Sprijin cap‑coadă în achiziții publice. Livrabile clare, termene ferme.",
    images: ["/images/img1.jpg"],
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
      </body>
    </html>
  );
}
