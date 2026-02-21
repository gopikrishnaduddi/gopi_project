import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ServicesStrip from "./components/ServicesStrip";
import WhySection from "./components/WhySection";
import PricingSection from "./components/PricingSection";
import GlobalSection from "./components/GlobalSection";
import GlobalJourney from "./components/GlobalJourney";
import GoogleReviews from "./components/GoogleReviews";
import ContactSection from "./components/ContactSection";
import LawyerHero from "./components/LawyerHero";

function HomePage() {
  return (
    <>
      <Hero />
      <ServicesStrip />
      <WhySection />
      <PricingSection />
      <GlobalSection />
      <GlobalJourney />
      <GoogleReviews />
      <ContactSection />
    </>
  );
}

function App() {
  const location = useLocation();

  return (
    <>
      {/* Hide default navbar on lawyer page */}
      {location.pathname !== "/lawyer" && <Navbar />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/lawyer" element={<LawyerHero />} />
      </Routes>
    </>
  );
}

export default App;