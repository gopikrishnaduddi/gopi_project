import star from "../assets/star.png";

function GlobalJourney() {
  return (
    <section
      style={{
        padding: "120px 80px",
        position: "relative"
      }}
    >
      {/* Center Button */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "100px"
        }}
      >
        <button
          style={{
            background: "#2B3674",
            color: "#FFFFFF",
            padding: "16px 34px",
            borderRadius: "40px",
            border: "none",
            fontSize: "16px",
            fontWeight: "600",
            display: "flex",
            alignItems: "center",
            gap: "12px",
            cursor: "pointer",
            boxShadow: "0 8px 25px rgba(43, 54, 116, 0.25)"
          }}
        >
          Talk to an Expansion Advisor
          <span
            style={{
              background: "#FFFFFF",
              color: "#2B3674",
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "14px",
              fontWeight: "700"
            }}
          >
            ↗
          </span>
        </button>
      </div>

      {/* Left Star */}
      <img
        src={star}
        alt="star"
        style={{
          position: "absolute",
          left: "60px",
          top: "50%",
          transform: "translateY(-50%)",
          width: "28px"
        }}
      />

      {/* Title */}
      <h2
        style={{
          textAlign: "center",
          fontSize: "42px",
          fontWeight: "700",
          marginBottom: "70px"
        }}
      >
        Your Global Journey - Simplified in 4 Steps
      </h2>

      {/* Steps */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "40px",
          maxWidth: "1100px",
          margin: "0 auto"
        }}
      >
        {/* STEP 1 */}
        <div style={stepCard}>
          <div style={stepLeft}>
            <span style={stepNumber}>01</span>
            <div>
              <h3 style={stepTitle}>Start Global</h3>
              <button style={readBtn}>Read More ↗</button>
            </div>
          </div>

          <div style={stepRight}>
            <span>Company + Bank</span>
            <span>/</span>
            <span>Startup Founders</span>
          </div>
        </div>

        {/* STEP 2 */}
        <div style={stepCard}>
          <div style={stepLeft}>
            <span style={stepNumber}>02</span>
            <div>
              <h3 style={stepTitle}>Expand Global</h3>
              <button style={readBtn}>Read More ↗</button>
            </div>
          </div>

          <div style={stepRight}>
            <span>Company + Property - Visa</span>
            <span>/</span>
            <span>Growing Businesses</span>
          </div>
        </div>

        {/* STEP 3 */}
        <div style={stepCard}>
          <div style={stepLeft}>
            <span style={stepNumber}>03</span>
            <div>
              <h3 style={stepTitle}>Elite Global</h3>
              <button style={readBtn}>Read More ↗</button>
            </div>
          </div>

          <div style={stepRight}>
            <span>All 4 + Legal Advisory</span>
            <span>/</span>
            <span>HNIs & Investors</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GlobalJourney;


/* ================= STYLE OBJECTS ================= */

const stepCard = {
  background: "#FFFFFF",
  padding: "40px 60px",
  borderRadius: "20px",
  boxShadow: "0 15px 40px rgba(0,0,0,0.08)",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap"
};

const stepLeft = {
  display: "flex",
  alignItems: "center",
  gap: "25px"
};

const stepNumber = {
  fontSize: "48px",
  fontWeight: "700",
  color: "transparent",
  WebkitTextStroke: "1px #C5C5C5"
};

const stepTitle = {
  fontSize: "24px",
  fontWeight: "700",
  color: "#2B3674",
  marginBottom: "10px"
};

const readBtn = {
  padding: "10px 22px",
  borderRadius: "30px",
  border: "1px solid #2B3674",
  background: "transparent",
  color: "#2B3674",
  fontWeight: "600",
  cursor: "pointer"
};

const stepRight = {
  display: "flex",
  gap: "20px",
  alignItems: "center",
  fontSize: "16px",
  color: "#666"
};