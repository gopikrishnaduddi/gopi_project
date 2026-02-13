import React from 'react'
import logo from '../assets/logo.png'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Jurea Logo" style={{ height: "45px" }} />
      </div>

      <ul className="nav-links">
        <li>Home</li>
        <li>About Us</li>
        <li>Services</li>
        <li>Blog</li>
        <li>Contact Us</li>
      </ul>

      <button className="btn-primary">
  <span>Get Started</span>

  <div className="icon-circle">
    <span>→</span>
  </div>
</button>
    </nav>
  )
}

export default Navbar