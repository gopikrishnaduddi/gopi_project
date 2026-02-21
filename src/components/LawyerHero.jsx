import React, { useState } from "react";
import heroBg from "../assets/lawyer.jpg";
import logo from "../assets/logo.png";
import {
  Mail,
  Phone,
  Instagram,
  Facebook,
  Dribbble,
  ArrowRight
} from "lucide-react";

function LawyerHero() {
  const [whatsAppEnabled, setWhatsAppEnabled] = useState(true);

  return (
    <div style={{ fontFamily: "Poppins, sans-serif" }}>

      {/* TOP BAR */}
      <div
        style={{
          height: "44px",
          background: "#1fa8a3",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 90px",
          fontSize: "14px"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Mail size={15} />
          <span>info@domainname.com</span>
          <div style={{ width: "1px", height: "14px", background: "rgba(255,255,255,0.6)", margin: "0 14px" }} />
          <Phone size={15} />
          <span>+123 465 789</span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Instagram size={15} />
          <span>Instagram</span>
          <div style={{ width: "1px", height: "14px", background: "rgba(255,255,255,0.6)", margin: "0 14px" }} />
          <Facebook size={15} />
          <span>Facebook</span>
          <div style={{ width: "1px", height: "14px", background: "rgba(255,255,255,0.6)", margin: "0 14px" }} />
          <Dribbble size={15} />
          <span>Dribbble</span>
        </div>
      </div>

      {/* NAVBAR */}
      <div
        style={{
          height: "95px",
          background: "#2f3c84",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 90px"
        }}
      >
        <div style={{ background: "#fff", padding: "22px 42px", borderRadius: "12px" }}>
          <img src={logo} alt="logo" style={{ height: "45px" }} />
        </div>

        <div style={{ display: "flex", gap: "55px", color: "#fff", fontSize: "16px" }}>
          <span style={{ color: "#1fa8a3" }}>Home</span>
          <span>About Us</span>
          <span>Services</span>
          <span>Blog</span>
          <span>Contact Us</span>
        </div>

        <button
          style={{
            background: "#f4a340",
            border: "none",
            padding: "14px 26px",
            borderRadius: "12px",
            fontWeight: "600",
            display: "flex",
            alignItems: "center",
            gap: "14px",
            cursor: "pointer"
          }}
        >
          Get Started
          <span
            style={{
              width: "28px",
              height: "28px",
              background: "#fff",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <ArrowRight size={14} />
          </span>
        </button>
      </div>

      {/* HERO SECTION */}
      <div
        style={{
          position: "relative",
          height: "720px",
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          padding: "0 80px"
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.55)"
          }}
        />

        {/* LEFT SIDE */}
        <div style={{ position: "relative", color: "#fff", maxWidth: "650px", zIndex: 2 }}>
          <p style={{ fontSize: "16px", opacity: 0.85, marginBottom: "20px" }}>
            India’s 1st 24/7 Lawyer Platform
          </p>

          <h1
            style={{
              fontSize: "72px",
              fontWeight: "700",
              lineHeight: "1.15",
              marginBottom: "25px"
            }}
          >
            Online Lawyer <br /> Consultation
          </h1>

          <ul style={{ marginBottom: "30px", paddingLeft: "18px", lineHeight: "1.9", fontSize: "16px" }}>
            <li>Get personalized guidance anytime, 24/7</li>
            <li>Confidential, secure consultations guaranteed</li>
          </ul>

          <button
            style={{
              background: "#1FA8A3",
              border: "none",
              padding: "14px 28px",
              borderRadius: "6px",
              color: "#fff",
              fontSize: "15px",
              fontWeight: "600",
              cursor: "pointer",
              boxShadow: "0 8px 25px rgba(31,168,163,0.4)"
            }}
          >
            500 lawyers are available
          </button>
        </div>

        {/* FORM */}
        <div
          style={{
            position: "relative",
            marginLeft: "auto",
            width: "420px",
            padding: "40px",
            borderRadius: "24px",
            background: "rgba(255,255,255,0.08)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.2)",
            boxShadow: "0 25px 60px rgba(0,0,0,0.5)",
            color: "#fff",
            zIndex: 2
          }}
        >
          <h3 style={{ textAlign: "center", marginBottom: "28px" }}>
            Get Expert Legal Consultation
          </h3>

          {["Email", "Mobile Number", "City/Pincode"].map((field, i) => (
            <input
              key={i}
              placeholder={field}
              style={{
                width: "100%",
                padding: "14px",
                marginBottom: "18px",
                background: "transparent",
                border: "1px solid rgba(255,255,255,0.45)",
                borderRadius: "8px",
                color: "#fff"
              }}
            />
          ))}

          <select style={{
            width: "100%",
            padding: "14px",
            marginBottom: "18px",
            background: "transparent",
            border: "1px solid rgba(255,255,255,0.45)",
            borderRadius: "8px",
            color: "#fff"
          }}>
            <option>Language</option>
          </select>

          <select style={{
            width: "100%",
            padding: "14px",
            marginBottom: "18px",
            background: "transparent",
            border: "1px solid rgba(255,255,255,0.45)",
            borderRadius: "8px",
            color: "#fff"
          }}>
            <option>Problem Type</option>
          </select>

          <div style={{ display: "flex", alignItems: "center", marginBottom: "22px" }}>
            <span>Get easy updates through</span>
            <span style={{ color: "#25D366", marginLeft: "6px" }}>WhatsApp</span>

            <div
              onClick={() => setWhatsAppEnabled(!whatsAppEnabled)}
              style={{
                width: "44px",
                height: "24px",
                background: whatsAppEnabled ? "#25D366" : "#999",
                borderRadius: "30px",
                position: "relative",
                cursor: "pointer",
                marginLeft: "auto",
                transition: "0.3s"
              }}
            >
              <div
                style={{
                  width: "20px",
                  height: "20px",
                  background: "#fff",
                  borderRadius: "50%",
                  position: "absolute",
                  top: "2px",
                  left: whatsAppEnabled ? "22px" : "2px",
                  transition: "0.3s"
                }}
              />
            </div>
          </div>

          <button
            style={{
              width: "100%",
              padding: "15px",
              borderRadius: "8px",
              border: "none",
              background: "#1fa8a3",
              color: "#fff",
              fontWeight: "600",
              marginBottom: "18px",
              cursor: "pointer"
            }}
          >
            Book An Appointment Now
          </button>

          <div style={{
            textAlign: "center",
            border: "1px solid rgba(255,255,255,0.4)",
            padding: "12px",
            borderRadius: "8px",
            fontSize: "14px"
          }}>
            <span style={{ textDecoration: "line-through", opacity: 0.7, marginRight: "6px" }}>₹799</span>
            <span style={{ color: "#39FF14", fontWeight: "600", marginRight: "6px" }}>₹399</span>
            for a 30-minute Lawyer Consultation
          </div>

          <div style={{ textAlign: "center", marginTop: "14px", fontSize: "13px", opacity: 0.85 }}>
            Experienced lawyers for all legal matters
          </div>
        </div>
      </div>
    </div>
  );
}

export default LawyerHero;