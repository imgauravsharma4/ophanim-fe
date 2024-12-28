const { SitemapStream, streamToPromise } = require("sitemap");
const fs = require("fs");
const routes = require("../src/routes"); // Import routes

const generateSitemap = async () => {
  const sitemapStream = new SitemapStream({
    hostname: "https://ophanimtechnologies.com/",
  });

  routes.forEach((route) => {
    if (route.path !== "*") {
      sitemapStream.write({
        url: route.path,
        changefreq: "daily",
        priority: route.priority,
      });
    }
  });

  sitemapStream.end();

  const sitemap = await streamToPromise(sitemapStream).then((data) =>
    data.toString()
  );
  fs.writeFileSync("public/sitemap.xml", sitemap);
  console.log("Sitemap generated at public/sitemap.xml");
};

generateSitemap().catch((err) => console.error(err));
