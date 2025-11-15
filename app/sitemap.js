export default function sitemap() {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
  const routes = ["", "/services", "/about", "/contact"].map((path) => ({
    url: `${siteUrl}${path || "/"}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7,
  }));
  return routes;
}


