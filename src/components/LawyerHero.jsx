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
import statueImage from "../assets/statue.jpg";
import l1 from "../assets/l1.jpg";
import l2 from "../assets/l2.jpg";
import l3 from "../assets/l3.jpg";
import l4 from "../assets/l4.png";
import h1 from "../assets/h1.jpg";
import h2 from "../assets/h2.jpg";
import h3 from "../assets/h3.jpg";
import h4 from "../assets/h4.jpg";
import {
  Scale,
  Briefcase,
  Home,
  User,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

function LawyerHero() {
  const [whatsAppEnabled, setWhatsAppEnabled] = useState(true);
const [hovered, setHovered] = useState(null);
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
      <div
  style={{
    padding: "110px 80px",
    background: "#f3f3f3",
    textAlign: "center",
    fontFamily: "Georgia, serif"
  }}
>
  {/* ================= OUR LEGAL EXPERTISE ================= */}

  <h2
    style={{
      fontSize: "34px",
      fontWeight: "400",
      marginBottom: "12px",
      color: "#2c2c2c"
    }}
  >
    Our Legal Expertise
  </h2>

  <div
    style={{
      width: "70px",
      height: "2px",
      background: "#c7a343",
      margin: "0 auto 70px"
    }}
  />

  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "85px",
      marginBottom: "120px"
    }}
  >
    {/* LEFT ARROW */}
    <div
      style={{
        width: "50px",
        height: "50px",
        background: "#dcdcdc",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer"
      }}
    >
      <ChevronLeft size={22} color="#000" />
    </div>

    {[
      { icon: <Scale size={28} />, title: "LEGAL NOTICES" },
      { icon: <Briefcase size={28} />, title: "COMPANY LAWYER" },
      { icon: <Home size={28} />, title: "PROPERTY LAWYER" },
      { icon: <User size={28} />, title: "CIVIL LAWYER" }
    ].map((item, index) => (
      <div key={index}>
        <div
          style={{
            width: "95px",
            height: "95px",
            borderRadius: "50%",
            border: "2px solid #c7a343",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 22px",
            color: "#2f3c84"
          }}
        >
          {item.icon}
        </div>

        <div
          style={{
            fontSize: "15px",
            fontWeight: "600",
            letterSpacing: "1px",
            fontFamily: "Arial, sans-serif"
          }}
        >
          {item.title}
        </div>
      </div>
    ))}

    {/* RIGHT ARROW */}
    <div
      style={{
        width: "50px",
        height: "50px",
        background: "#dcdcdc",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer"
      }}
    >
      <ChevronRight size={22} color="#000" />
    </div>
  </div>

  {/* ================= SCHOLARLY WORK ================= */}

  <h2
    style={{
      fontSize: "30px",
      fontWeight: "400",
      marginBottom: "12px",
      color: "#2c2c2c"
    }}
  >
    Scholarly Work by Our Panel of Consultants
  </h2>

  <div
    style={{
      width: "70px",
      height: "2px",
      background: "#c7a343",
      margin: "0 auto 90px"
    }}
  />

  {/* CONSULTANTS */}
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      gap: "120px"
    }}
  >
    {[
      {
        img: l1,
        name: "SJ Anaka",
        exp: "6 years of experience",
        desc: [
          "Specialises in tax planning and filing.",
          "File accurately and on time with expert advice."
        ]
      },
      {
        img: l2,
        name: "Kavitha Natesan",
        exp: "5 years of experience",
        desc: [
          "Specialises in cheque bounce",
          "cases and GST consulting."
        ]
      },
      {
        img: l3,
        name: "Srijita",
        exp: "5 years of experience",
        desc: [
          "Expert in accidental claims,",
          "employment issues, and",
          "consumer complaints."
        ]
      },
      {
        img: l4,
        name: "Kanisha",
        exp: "3 years of experience",
        desc: [
          "Specialises in property",
          "succession, registration, and",
          "verification."
        ]
      }
    ].map((person, index) => (
      <div key={index} style={{ maxWidth: "230px" }}>
        <img
          src={person.img}
          alt={person.name}
          style={{
            width: "210px",
            height: "250px",
            objectFit: "cover",
            marginBottom: "22px"
          }}
        />

        <div
          style={{
            fontSize: "18px",
            fontWeight: "600",
            fontFamily: "Arial, sans-serif",
            marginBottom: "6px"
          }}
        >
          {person.name}
        </div>

        <div
          style={{
            fontSize: "14px",
            color: "#555",
            marginBottom: "15px",
            fontFamily: "Arial, sans-serif"
          }}
        >
          {person.exp}
        </div>

        <div
          style={{
            fontSize: "14px",
            lineHeight: "1.6",
            color: "#333"
          }}
        >
          {person.desc.map((line, i) => (
            <div key={i}>• {line}</div>
          ))}
        </div>
      </div>
    ))}
  </div>
</div>
<div style={{ width: "100%", fontFamily: "'Playfair Display', serif" }}>

  {/* ================= BLUE SECTION ================= */}
  <div
    style={{
      position: "relative",
      background: "#3c408f",
      paddingTop: "140px",
      paddingBottom: "120px",
      textAlign: "center",
      overflow: "hidden",
      color: "#ffffff"
    }}
  >
    {/* Subtle Decorative Circles */}
    <div
      style={{
        position: "absolute",
        right: "-220px",
        top: "-220px",
        width: "600px",
        height: "600px",
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.04) 40%, transparent 65%)"
      }}
    />

    <div
      style={{
        position: "absolute",
        right: "-100px",
        top: "-100px",
        width: "400px",
        height: "400px",
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)"
      }}
    />

    <h2
      style={{
        fontSize: "44px",
        fontWeight: "400",
        marginBottom: "55px"
      }}
    >
      Online Lawyer Consultation
    </h2>

    <div
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
        fontFamily: "'Open Sans', sans-serif",
        fontSize: "17px",
        lineHeight: "2"
      }}
    >
      <p style={{ marginBottom: "30px" }}>
        Getting reliable legal help is now easier and more accessible with online consultation services.
        Whether you’re dealing with property disputes, corporate law, family law, or criminal matters,
        our platform enables you to connect with experienced lawyers via video or phone calls.
        With Vakilsearch, you can choose from legal experts specializing in various fields,
        including cybercrime, intellectual property, domestic violence, and more,
        to receive personalized, professional advice tailored to your specific needs—all from the comfort of your home.
      </p>

      <p style={{ marginBottom: "30px" }}>
        Our online consultation service allows you to schedule sessions at your convenience,
        simplifying the process of obtaining timely legal assistance without the need for in-person meetings.
      </p>

      <p>
        Vakilsearch is committed to empowering you to address legal challenges with confidence.
        By connecting you directly with skilled legal professionals, we ensure your concerns are addressed promptly and accurately.
        Take charge of your legal needs with our efficient, user-friendly online lawyer consultation service at Vakilsearch.
      </p>
    </div>
  </div>

  {/* ================= STATS SECTION ================= */}
  <div
    style={{
      background: "#e4e4e4",
      paddingTop: "80px",
      paddingBottom: "80px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}
  >
    {[
      { value: "72%", label: "CHARGES DROPPED" },
      { value: "87%", label: "CASES WON" },
      { value: "36%", label: "CASES DISMISSED" },
      { value: "24%", label: "COUNTER SUITS FILED" }
    ].map((item, index) => (
      <div
        key={index}
        style={{
          width: "280px",
          textAlign: "center",
          position: "relative"
        }}
      >
        <div
          style={{
            fontSize: "60px",
            color: "#c1652c",
            marginBottom: "14px",
            fontWeight: "400"
          }}
        >
          {item.value}
        </div>

        <div
          style={{
            fontSize: "11px",
            letterSpacing: "2px",
            fontWeight: "600",
            fontFamily: "'Open Sans', sans-serif",
            color: "#222"
          }}
        >
          {item.label}
        </div>

        {index !== 3 && (
          <div
            style={{
              position: "absolute",
              right: 0,
              top: "20%",
              height: "60%",
              width: "1px",
              background: "#cfcfcf"
            }}
          />
        )}
      </div>
    ))}
  </div>
</div>
<div style={{ backgroundColor: "#f5f5f5", width: "100%" }}>
  
  {/* ================= HEADER ================= */}
  <div
    style={{
      paddingTop: "80px",
      paddingBottom: "50px",
      textAlign: "center"
    }}
  >
    <h2
      style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: "38px",
        fontWeight: "400",
        color: "#2d2d2d",
        marginBottom: "15px"
      }}
    >
      Recent Case Studies
    </h2>

    <div
      style={{
        width: "60px",
        height: "2px",
        backgroundColor: "#d4af37",
        margin: "0 auto 25px auto"
      }}
    />

    <p
      style={{
        maxWidth: "750px",
        margin: "0 auto",
        fontFamily: "'Open Sans', sans-serif",
        fontSize: "16px",
        color: "#6b6b6b",
        lineHeight: "1.8"
      }}
    >
      Our commitment and dedication to continually move forward enables us to
      improve our representation and provide you with a service you can’t find
      anywhere else.
    </p>
  </div>

  {/* ================= IMAGE ROW ================= */}
  <div style={{ display: "flex", width: "100%", height: "380px" }}>
    {[
      {
        img: h1,
        small: "CORPORATE",
        title: "Court House"
      },
      {
        img: h2,
        small: "",
        title: "Licensing & Government Registrations"
      },
      {
        img: h3,
        small: "Taxation & Accounting",
        title: "International Business & Compliance"
      },
      {
        img: h4,
        small: "INTELLECTUAL PROPERTY",
        title: "Specialised Services for Startups & SMEs"
      }
    ].map((item, index) => (
      <div
        key={index}
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
        style={{
          position: "relative",
          flex: 1,
          overflow: "hidden",
          cursor: "pointer"
        }}
      >
        <img
          src={item.img}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.6s ease",
            transform: hovered === index ? "scale(1.05)" : "scale(1)"
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor:
              hovered === index ? "rgba(0,0,0,0.55)" : "rgba(0,0,0,0)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            padding: "20px",
            transition: "all 0.4s ease"
          }}
        >
          {item.small && (
            <p
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontSize: "12px",
                letterSpacing: "1.5px",
                color: "#ffffff",
                marginBottom: "10px",
                opacity: hovered === index ? 1 : 0,
                transition: "opacity 0.4s ease"
              }}
            >
              {item.small}
            </p>
          )}

          <h3
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "26px",
              fontWeight: "400",
              color: "#ffffff",
              lineHeight: "1.4",
              maxWidth: "260px",
              opacity: hovered === index ? 1 : 0,
              transition: "opacity 0.4s ease"
            }}
          >
            {item.title}
          </h3>
        </div>
      </div>
    ))}
  </div>

  {/* ================= CTA SECTION ================= */}
  <div
    style={{
      backgroundColor: "#ffffff",
      padding: "60px 0",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}
  >
    <div
      style={{
        width: "85%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <div>
        <h3
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "30px",
            fontWeight: "400",
            color: "#c46b2c",
            marginBottom: "10px"
          }}
        >
          Get a Free Consultation From Our Team Now!
        </h3>

        <p
          style={{
            fontFamily: "'Open Sans', sans-serif",
            fontSize: "16px",
            color: "#555"
          }}
        >
          If you have questions for our experts, just leave a request or
          contact us by contact phone.
        </p>
      </div>

      <button
        style={{
          backgroundColor: "#1fa8a3",
          color: "#ffffff",
          padding: "16px 40px",
          border: "none",
          fontSize: "14px",
          fontWeight: "600",
          letterSpacing: "1px",
          cursor: "pointer"
        }}
      >
        GET IN TOUCH
      </button>
    </div>
  </div>
</div>
<div
  style={{
    position: "relative",
    backgroundColor: "#2f3478",
    color: "#ffffff",
    padding: "20px 0 50px 0",  // 🔥 reduced padding
    overflow: "hidden"
  }}
>
  {/* RIGHT CIRCLE */}
  <div
    style={{
      position: "absolute",
      right: "-160px",
      top: "90px",
      width: "380px",
      height: "380px",
      borderRadius: "50%",
      border: "55px solid rgba(255,255,255,0.05)"
    }}
  />

  {/* LEFT BOTTOM ARC */}
  <div
    style={{
      position: "absolute",
      left: "-250px",
      bottom: "-320px",
      width: "600px",
      height: "600px",
      borderRadius: "50%",
      border: "80px solid rgba(255,255,255,0.05)"
    }}
  />

  <div
    style={{
      maxWidth: "1100px",  // slightly narrower
      margin: "0 auto",
      padding: "0 20px"
    }}
  >
    {/* HEADING */}
    <h2
      style={{
        fontFamily: "'Prata', serif",
        fontWeight: 400,
        fontSize: "36px",
        lineHeight: "44px",
        textAlign: "center",
        marginBottom: "8px"
      }}
    >
      What are Lawyer Services?
    </h2>

    {/* GOLD LINE */}
    <div
      style={{
        width: "45px",
        height: "2px",
        backgroundColor: "#d4af37",
        margin: "0 auto 20px auto"
      }}
    />

    {/* INTRO */}
    <p
      style={{
        fontFamily: "'Prata', serif",
        fontWeight: 400,
        fontSize: "18px",
        lineHeight: "32px",  // slightly tighter
        textAlign: "center",
        marginBottom: "25px"
      }}
    >
      Our Online lawyer consultation services offer a range of legal consultation services that cater to different needs. For instance, if you're dealing with issues related to a Business Contract, Power Of Attorney, or Website Development, you can find top lawyers with relevant legal expertise.
    </p>

    {/* BULLETS */}
    <div
      style={{
        fontFamily: "'Prata', serif",
        fontWeight: 400,
        fontSize: "18px",
        lineHeight: "32px"  // tighter line height
      }}
    >
      <p style={{ marginBottom: "14px" }}>
        • Legal Consultation: Get expert legal advice tailored to your situation. Our lawyers analyze your case and guide you toward the best course of action.
      </p>

      <p style={{ marginBottom: "14px" }}>
        • Drafting and Reviewing Legal Documents: Ensure the legality and enforceability of your documents. Our lawyers specialise in drafting and reviewing contracts, agreements, wills, and other legal instruments to protect your interests.
      </p>

      <p style={{ marginBottom: "14px" }}>
        • Litigation and Representation: Our lawyers represent clients in civil and criminal cases, ensuring strong legal advocacy and presenting compelling arguments.
      </p>

      <p style={{ marginBottom: "14px" }}>
        • Legal Research: Benefit from thorough legal research to strengthen your case. Our lawyers analyse case law, statutes, and regulations relevant to your situation.
      </p>

      <p style={{ marginBottom: "14px" }}>
        • Corporate and Business Law Services: Navigate the complexities of business law with confidence.
      </p>

      <p style={{ marginBottom: "14px" }}>
        • Family Law Services: Address family-related legal matters with sensitivity.
      </p>

      <p style={{ marginBottom: "14px" }}>
        • Estate Planning and Probate: Plan for the future with our estate planning services.
      </p>

      <p style={{ marginBottom: "14px" }}>
        • Real Estate Services: Simplify real estate transactions and resolve disputes.
      </p>

      <p style={{ marginBottom: "14px" }}>
        • Criminal Defence: Defend your rights with our criminal defence lawyers.
      </p>

      <p style={{ marginBottom: "14px" }}>
        • Immigration Services: Navigate the complexities of immigration law.
      </p>

      <p>
        • Labour and Employment Law Services: Ensure fair and legal workplace practices.
      </p>
    </div>
  </div>
</div>
<section
  style={{
    width: "100%",
    backgroundColor: "#f3f3f3",
    display: "flex",
    height: "600px",
    overflow: "hidden",
  }}
>
  {/* LEFT IMAGE */}
  <div
    style={{
      width: "50%",
      height: "100%",
      position: "relative",
      overflow: "hidden",
    }}
  >
    <img
      src={statueImage}
      alt="Lady Justice"
      style={{
        position: "absolute",
        top: "0",
        left: "-120px",      // 🔥 pushes statue more left
        height: "100%",
        width: "auto",
        objectFit: "cover",
      }}
    />
  </div>

  {/* RIGHT CONTENT */}
  <div
    style={{
      width: "50%",
      paddingLeft: "80px",
      paddingRight: "120px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    }}
  >
    <h2
      style={{
        fontFamily: "Prata, serif",
        fontWeight: 600,
        fontSize: "48px",
        lineHeight: "58px",
        color: "#C46A2B",
        marginBottom: "30px",
      }}
    >
      How Online Attorney Consultations work
    </h2>

    <p
      style={{
        fontFamily: "Prata, serif",
        fontWeight: 400,
        fontSize: "18px",
        lineHeight: "40px",
        color: "#555555",
        marginBottom: "25px",
      }}
    >
      Jurea LLP makes it easy to connect with expert lawyers online through a
      quick and secure process. Follow these easy steps to book your slot for
      online attorney consultation with Jurea LLP and get tailor made legal
      advice for online consultation from verified lawyers in just a few
      minutes.
    </p>

    <p
      style={{
        fontFamily: "Prata, serif",
        fontWeight: 400,
        fontSize: "18px",
        lineHeight: "40px",
        color: "#555555",
      }}
    >
      Step 1: Visit our website for legal support at https://JureaLLP.com/talk-to-a-lawyer
      <br /><br />
      Step 2: Enter your email ID, phone number, and Pincode.
      <br /><br />
      Step 3: Choose your preferred language
      <br /><br />
      Step 4: Select from property issues, family matters, business disputes, and more.
      <br /><br />
      Step 5: Click on ‘Consult Now’
      <br /><br />
      Step 6: Enter the OTP sent to your mobile
      <br /><br />
      Step 7: Pick your preferred slot and make the payment.
      <br /><br />
      Step 8: Our lawyers will contact you through your chosen mode of communication,
      either video or audio call, at your selected time.
    </p>
  </div>
</section>
    </div>
  );
}

export default LawyerHero;