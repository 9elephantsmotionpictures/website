import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Processes from "./pages/Processes";
import Portfolio from "./pages/Portfolio";
import BTS from "./pages/BTS";
import NewsAwards from "./pages/NewsAwards";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/processes" element={<Processes />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/bts" element={<BTS />} />
        <Route path="/news-awards" element={<NewsAwards />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;