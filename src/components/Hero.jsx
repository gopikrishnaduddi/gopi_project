import React from 'react'
import ball from "../assets/ball.png";
function Hero() {
  return (
    <section className="hero">
      <img src={ball} alt="floating-ball" className="hero-ball" />
      <div className="hero-left">
        <span className="badge">All in-one Startup Partner</span>

        <h1>Your Business - Fully Handled.</h1>

        <div className="services">
          <div className="card">Legal</div>
          <div className="card">CA</div>
          <div className="card">CS</div>
          <div className="card">HR</div>
          <div className="card">Website</div>
          <div className="card">Digital</div>
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

      <div className="hero-right">
        <div className="ecosystem-circle">
          Jurea<br />Ecosystem
        </div>
      </div>
    </section>
  )
}

export default Hero