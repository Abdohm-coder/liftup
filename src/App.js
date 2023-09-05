import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactUsPage from "./components/ContactUs/ContactUsPage";
import EngagementPage from "./components/Engagement/EngagementPage";
import Footer from "./components/Footer";
import HomePage from "./components/Home/HomePage";
import Navbar from "./components/Navbar";
import OurProcessPage from "./components/OurProcess/OurProcessPage";
import InfrastructurePage from "./components/Infrastructure/InfrastructurePage";
import AboutUsPage from "./components/About/AboutUsPage";
import CareerPage from "./components/Career/CareerPage";
import NotFoundPage from "./components/NotFoundPage";
import ScrollToTop from "./components/ScrollToTop";
function App() {
  return (
    <main className="bg-black text-light">
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/engagement" element={<EngagementPage />} />
          <Route path="/process" element={<OurProcessPage />} />
          <Route path="/infrastructure" element={<InfrastructurePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/career" element={<CareerPage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
}

export default App;
