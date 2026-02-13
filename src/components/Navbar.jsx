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

      <button
  style={{
    width: "200.83px",
    height: "51px",
    background: "#1e2a78",
    border: "none",
    borderRadius: "50px",
    padding: "0 12px 0 24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    color: "#ffffff",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer"
  }}
>
  <span>Get Started</span>

  <div
    style={{
      width: "38px",
      height: "38px",
      background: "#ffffff",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#1e2a78",
      fontSize: "18px",
      fontWeight: "600"
    }}
  >
    ↗
  </div>
</button>
    </nav>
  )
}

export default Navbar