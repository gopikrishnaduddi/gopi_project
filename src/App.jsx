import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ServicesStrip from "./components/ServicesStrip";
import WhySection from "./components/WhySection";
import PricingSection from "./components/PricingSection";
import GlobalSection from "./components/GlobalSection";
import GlobalJourney from "./components/GlobalJourney";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ServicesStrip />
      <WhySection />
      <PricingSection />
      <GlobalSection />
      <GlobalJourney />
    </div>
  )
}

export default App
