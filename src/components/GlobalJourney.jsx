import star from "../assets/star.png";
import web from "../assets/web.png";
import setup from "../assets/setup.png";
import license from "../assets/license.png";
import tax from "../assets/tax.png";
import legal from "../assets/legal.png";
import hr from "../assets/hr.png";
import intl from "../assets/international.png";
function GlobalJourney() {
  const steps = [
    {
      number: "01",
      title: "Start Global",
      right: "Company + Bank",
      audience: "Startup Founders"
    },
    {
      number: "02",
      title: "Expand Global",
      right: "Company + Property - Visa",
      audience: "Growing Businesses"
    },
    {
      number: "03",
      title: "Elite Global",
      right: "All 4 + Legal Advisory",
      audience: "HNIs & Investors"
    }
  ];

  const imageData = [
    {
      img: web,
      title: "Website Design & Development",
      desc:
        "We understand the critical role that a well-designed and user-friendly website plays in shaping your online presence driving."
    },
    { img: setup, title: "Business Setup & Compliance" },
    { img: license, title: "Licensing & Government Registrations" },
    { img: tax, title: "Taxation & Accounting" },
    { img: legal, title: "Legal Advisory & Litigation Support" },
    { img: hr, title: "HR & Recruitment Solutions" },
    { img: intl, title: "International Business & Compliance" }
  ];

  return (
    <section
      style={{
        padding: "120px 60px",
        background: "linear-gradient(90deg, #EDE7F6 0%, #E3F2FD 100%)",
        position: "relative",
        fontFamily: "Times New Roman, serif"
      }}
    >
      {/* ================= BUTTON ================= */}
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "100px" }}>
        <button
          style={{
            background: "#2B3674",
            color: "#fff",
            padding: "16px 36px",
            borderRadius: "40px",
            border: "none",
            fontSize: "16px",
            fontWeight: "700",
            display: "flex",
            alignItems: "center",
            gap: "12px",
            cursor: "pointer",
            boxShadow: "0 8px 25px rgba(43,54,116,0.25)"
          }}
        >
          Talk to an Expansion Advisor
          <span
            style={{
              background: "#fff",
              color: "#2B3674",
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "700"
            }}
          >
            ↗
          </span>
        </button>
      </div>

      {/* ================= TITLE ================= */}
      <h2
        style={{
          textAlign: "center",
          fontSize: "42px",
          fontWeight: "700",
          marginBottom: "80px"
        }}
      >
        Your Global Journey - Simplified in 4 Steps
      </h2>

      {/* ================= STEPS ================= */}
      <div
        style={{
          maxWidth: "1150px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "40px"
        }}
      >
        {steps.map((step, index) => (
          <div
            key={index}
            style={{
              background: "#FFFFFF",
              padding: "45px 70px",
              borderRadius: "22px",
              boxShadow: "0 15px 40px rgba(0,0,0,0.08)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap"
            }}
          >
            <div style={{ display: "flex", gap: "30px", alignItems: "center" }}>
              <span
                style={{
                  fontSize: "52px",
                  fontWeight: "700",
                  color: "transparent",
                  WebkitTextStroke: "1px #C5C5C5"
                }}
              >
                {step.number}
              </span>

              <div>
                <h3
                  style={{
                    fontSize: "26px",
                    fontWeight: "700",
                    color: "#2B3674",
                    marginBottom: "12px"
                  }}
                >
                  {step.title}
                </h3>
                <button
                  style={{
                    padding: "10px 24px",
                    borderRadius: "30px",
                    border: "1px solid #2B3674",
                    background: "transparent",
                    color: "#2B3674",
                    fontWeight: "700",
                    cursor: "pointer"
                  }}
                >
                  Read More ↗
                </button>
              </div>
            </div>

            <div style={{ display: "flex", gap: "25px", color: "#555" }}>
              <span>{step.right}</span>
              <span>/</span>
              <span>{step.audience}</span>
            </div>
          </div>
        ))}
      </div>

      {/* ================= BENEFITS ================= */}
      <div style={{ marginTop: "160px" }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: "42px",
            fontWeight: "700",
            marginBottom: "15px"
          }}
        >
          Benefits of Digital Marketing
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#555",
            marginBottom: "70px",
            maxWidth: "700px",
            marginInline: "auto",
            lineHeight: "1.7"
          }}
        >
          By investing in strategic SEO and digital marketing initiatives,
          businesses can unlock a myriad of benefits.
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: "22px" }}>
          {imageData.map((item, index) => (
            <div
              key={index}
              style={{
                width: index === 0 ? "280px" : "120px",
                height: "420px",
                borderRadius: "24px",
                overflow: "hidden",
                position: "relative"
              }}
            >
              <img
                src={item.img}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }}
              />

              {/* Overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    index === 0
                      ? "linear-gradient(to top, rgba(0,0,0,0.75), transparent 60%)"
                      : "rgba(0,0,0,0.45)"
                }}
              />

              {/* First card bottom text */}
              {index === 0 && (
                <div
                  style={{
                    position: "absolute",
                    bottom: "30px",
                    left: "20px",
                    right: "20px",
                    color: "#fff"
                  }}
                >
                  <h3 style={{ fontSize: "18px", fontWeight: "700" }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: "14px", lineHeight: "1.6", color: "#ddd" }}>
                    {item.desc}
                  </p>
                </div>
              )}

              {/* Vertical text */}
              {index !== 0 && (
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%) rotate(-90deg)",
                    color: "#fff",
                    fontSize: "14px",
                    fontWeight: "700",
                    whiteSpace: "nowrap"
                  }}
                >
                  {item.title}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* STAR */}
      <img
        src={star}
        alt="star"
        style={{
          position: "absolute",
          right: "70px",
          bottom: "90px",
          width: "28px"
        }}
      />
    </section>
  );
}
export default GlobalJourney;