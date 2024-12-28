const routes = [
  { path: "/", element: "Home", priority: 1.0 },
  { path: "/about", element: "AboutPage", priority: 0.8 },
  { path: "/news", element: "NewsPage", priority: 0.7 },
  { path: "/web-development", element: "WebDevelopment", priority: 0.6 },
  { path: "/seo", element: "Seo", priority: 0.6 },
  { path: "/smo", element: "Smo", priority: 0.6 },
  { path: "/ppc", element: "Ppc", priority: 0.6 },
  { path: "/contact", element: "ContactPage", priority: 0.7 },
  { path: "/view-article", element: "ViewArticle", priority: 0.5 },
  // Service Pages
  { path: "/seo-services", element: "SeoService", priority: 0.6 },
  { path: "/smo-services", element: "SmoService", priority: 0.6 },
  {
    path: "/online-reputation-management",
    element: "OnlineReputation",
    priority: 0.5,
  },
  { path: "/small-business-seo", element: "SmallBusinessSeo", priority: 0.5 },
  { path: "/ecommerce-seo", element: "EcommerceSeo", priority: 0.5 },
  { path: "/local-seo-services", element: "LocalSeoService", priority: 0.5 },
  { path: "/white-label-seo", element: "WhiteLabelSeo", priority: 0.5 },
  { path: "/pay-per-click", element: "PayPerClick", priority: 0.5 },
  { path: "/content-marketing", element: "ContentMarketing", priority: 0.5 },
  { path: "*", element: "NotFound", priority: 0.1 },
];

module.exports = routes;
