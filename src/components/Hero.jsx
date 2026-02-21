import React from "react";
import ball from "../assets/ball.png";
import sound from "../assets/sound.png";
import bulb from "../assets/bulb.png";
import "./Hero.css";

import { useNavigate } from "react-router-dom";
import {
  Scale,
  BadgeCheck,
  FileText,
  Users,
  Globe,
  Sparkles
} from "lucide-react";

function Hero() {
  const navigate = useNavigate(); // ✅ REQUIRED

  return (
    <section className="hero">

      <img src={ball} alt="ball" className="hero-ball" />
      <img src={sound} alt="sound" className="hero-sound" />

      <div className="hero-left">

        <span className="badge">
          All in-one Startup Partner
        </span>

        <h1>
          Your Business - Fully Handled.
        </h1>

        <div className="services">

          <div
            className="service-card"
            onClick={() => navigate("/lawyer")}
            style={{ cursor: "pointer" }}
          >
            <Scale size={22} strokeWidth={1.6} color="#2B3674" />
            <span>Legal</span>
          </div>

          <div className="service-card">
            <BadgeCheck size={22} strokeWidth={1.6} color="#2B3674" />
            <span>CA</span>
          </div>

          <div className="service-card">
            <FileText size={22} strokeWidth={1.6} color="#2B3674" />
            <span>CS</span>
          </div>

          <div className="service-card">
            <Users size={22} strokeWidth={1.6} color="#2B3674" />
            <span>HR</span>
          </div>

          <div className="service-card">
            <Globe size={22} strokeWidth={1.6} color="#2B3674" />
            <span>Website</span>
          </div>

          <div className="service-card">
            <Sparkles size={22} strokeWidth={1.6} color="#2B3674" />
            <span>Digital</span>
          </div>

        </div>

        <p>
          From company setup and compliance to payroll, websites and digital growth -
          Jurea LLP is the single partner startups and scale-ups trust for end-to-end
          business services.
        </p>

        <div className="buttons">
          <button className="btn-primary">Explore Services</button>
          <button className="btn-secondary">Watch How It Works</button>
        </div>

      </div>

      <div className="ecosystem-wrapper">

        <div className="ecosystem-rotate">
          <div className="orbit orbit-1">HR & Payroll</div>
          <div className="orbit orbit-2">Tax & Compliance</div>
          <div className="orbit orbit-3">Legal Advisory</div>
          <div className="orbit orbit-4">Business Setup</div>
          <div className="orbit orbit-5">Jurea Global</div>
          <div className="orbit orbit-6">HR & Payroll</div>
        </div>

        <div className="ring ring-outer"></div>
        <div className="ring ring-middle"></div>
        <div className="ring ring-inner"></div>

        <div className="ecosystem-center-text">
          Jurea<br />Ecosystem
        </div>

      </div>

      <img 
        src={bulb} 
        alt="bulb" 
        className="ecosystem-bulb" 
      />

    </section>
  );
}

export default Hero;