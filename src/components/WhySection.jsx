import React from "react";
import { ArrowUpRight } from "lucide-react";
import whyImage from "../assets/why.png"; // your illustration image
import pinkStar from "../assets/star.png";

function WhySection() {
  return (
    <section
      style={{
        position: "relative",
        padding: "120px 80px"
      }}
    >
      
        
      <div className="why-container">

        {/* LEFT SIDE */}
        <div className="why-left">
          <h2>Why we're your one-stop solution</h2>

          <ul>
            <li>No more chasing different vendors. One contract, one dashboard, one expert team.</li>
            <li>All-in-one: Legal, finance, HR and growth services together.</li>
            <li>Single point of contact: Dedicated account manager for every client.</li>
            <li>Startup-friendly packages: Fixed pricing for early-stage businesses.</li>
            <li>Founder dashboard: Real-time compliance and filings overview.</li>
            <li>Trusted experts: Lawyers, CAs, CS, HR specialists & marketers in one team.</li>
          </ul>

          <div className="why-buttons">

  <button className="why-btn-primary">
    Book Free Consultation
    <span className="why-icon">↗</span>
  </button>

  <button className="why-btn-secondary">
    See Pricing
    <span className="why-icon-outline">↗</span>
  </button>

</div>
        </div>

        {/* RIGHT SIDE */}
        <div className="why-right">
          <img src={whyImage} alt="Why Illustration" />
        </div>

      </div>
      <img
        src={pinkStar}
        alt="decorative star"
        style={{
          position: "absolute",
          bottom: "60px",
          right: "120px",
          width: "26px",
          zIndex: 2
        }}
      />
    </section>
  );
}

export default WhySection;