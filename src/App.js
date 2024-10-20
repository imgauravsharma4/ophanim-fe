import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import AboutPage from "./pages/about";
import ServicePage from "./pages/service";
import ContactPage from "./pages/contact";
import PricingPage from "./pages/pricing";
import NewsPage from "./pages/news";
import ViewArticle from "./pages/viewArticle";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/service' element={<ServicePage />} />
        <Route path='/news' element={<NewsPage />} />
        <Route path='/pricing' element={<PricingPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/view-article' element={<ViewArticle />} />

      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
