import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import AboutPage from "./pages/about";
import ServicePage from "./pages/service";
import ContactPage from "./pages/contact";
import NewsPage from "./pages/news";
import ViewArticle from "./pages/viewArticle";
import WebDevelopment from "./pages/pricing/WebDevelopment";
import Seo from "./pages/pricing/Seo";
import Smo from "./pages/pricing/Smo";
import Ppc from "./pages/pricing/Ppc";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/service' element={<ServicePage />} />
        <Route path='/news' element={<NewsPage />} />
        <Route path='/web-development' element={<WebDevelopment />} />
        <Route path='/seo' element={<Seo />} />
        <Route path='/smo' element={<Smo />} />
        <Route path='/ppc' element={<Ppc />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/view-article' element={<ViewArticle />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
