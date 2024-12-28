import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import routes from "./routes";
// Dynamically import components
const components = {
  Home: React.lazy(() => import("./pages/home")),
  AboutPage: React.lazy(() => import("./pages/about")),
  ServicePage: React.lazy(() => import("./pages/service")),
  ContactPage: React.lazy(() => import("./pages/contact")),
  NewsPage: React.lazy(() => import("./pages/news")),
  ViewArticle: React.lazy(() => import("./pages/viewArticle")),
  WebDevelopment: React.lazy(() => import("./pages/pricing/WebDevelopment")),
  Seo: React.lazy(() => import("./pages/pricing/Seo")),
  Smo: React.lazy(() => import("./pages/pricing/Smo")),
  Ppc: React.lazy(() => import("./pages/pricing/Ppc")),
  SeoService: React.lazy(() => import("./pages/service/SeoService")),
  SmoService: React.lazy(() => import("./pages/service/SmoService")),
  OnlineReputation: React.lazy(() =>
    import("./pages/service/OnlineReputation")
  ),
  SmallBusinessSeo: React.lazy(() =>
    import("./pages/service/SmallBusinessSeo")
  ),
  EcommerceSeo: React.lazy(() => import("./pages/service/EcommerceSeo")),
  LocalSeoService: React.lazy(() => import("./pages/service/LocalSeoService")),
  WhiteLabelSeo: React.lazy(() => import("./pages/service/WhiteLabelSeo")),
  PayPerClick: React.lazy(() => import("./pages/service/PayPerClick")),
  ContentMarketing: React.lazy(() =>
    import("./pages/service/ContentMarketing")
  ),
  NotFound: React.lazy(() => import("./Components/NotFound")),
};
const App = () => {
  return (
    <Router>
      <Navbar />
      <React.Suspense fallback={<span class='loader'></span>}>
        <Routes>
          {routes.map(({ path, element }) => {
            const Component = components[element];
            return <Route key={path} path={path} element={<Component />} />;
          })}
        </Routes>
      </React.Suspense>
      <Footer />
    </Router>
  );
};

export default App;
