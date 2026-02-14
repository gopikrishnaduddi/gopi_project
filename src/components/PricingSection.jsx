function PricingSection() {
  return (
    <section
      style={{
        padding: "120px 80px",
        position: "relative"
      }}
    >

      {/* ===================== */}
      {/* STARTUPS SECTION */}
      {/* ===================== */}

      <div style={{ textAlign: "center", marginBottom: "60px" }}>
        <span style={badgeStyle}>Pricing</span>

        <h2 style={mainHeading}>
          Product Line - Startups
        </h2>

        <p style={subText}>
          Productized packs tailored for early-stage and growth startups.
        </p>
      </div>

      <div style={gridStyle}>
        <PricingCard
          title="Startup Legal OS"
          price="₹25K - ₹1.5L"
          desc="Legal + compliance infrastructure for founders (12 months)."
          features={[
            "Incorporation, Founders Agreement, ESOP",
            "IP filings, HR policies, Domain checks",
            "Monthly compliance calendar"
          ]}
        />

        <PricingCard
          title="Fundraising Compliance Pack"
          price="₹60K - ₹4L"
          desc="Seed/Series A readiness — due diligence, cap table fixes, investor docs."
          features={[
            "Due diligence readiness & MCA cleanup",
            "Cap table correction & ROC backlog",
            "Drafting investor documents"
          ]}
        />

        <PricingCard
          title="Tech Startup IP Shield"
          price="₹35K - ₹2L"
          desc="IP & data protection for SaaS, AI and apps."
          features={[
            "Software IP assignment & NDAs",
            "Terms & Privacy, Licensing",
            "Source code ownership structure"
          ]}
        />
      </div>

      {/* ===================== */}
      {/* SMEs & ENTERPRISES */}
      {/* ===================== */}

      <div style={{ marginTop: "140px", textAlign: "center" }}>
        <h2 style={mainHeading}>
          Product Line - SMEs & Enterprises
        </h2>

        <p style={subText}>
          Scalable legal & compliance operations for mid to large companies.
        </p>
      </div>

      <div style={{ ...gridStyle, marginTop: "60px" }}>
        <PricingCard
          title="Compliance Dept Outsourcing"
          price="₹25K - ₹1.5L"
          desc="Your external legal + financial control tower."
          features={[
            "Contracts & HR compliance",
            "GST/tax filings, ROC, legal notices",
            "Litigation strategy"
          ]}
        />

        <PricingCard
          title="Corporate Litigation Risk Defence Pack"
          price="₹60K - ₹4L"
          desc="One point of contact for legal risk — annual plan."
          features={[
            "Contract review & early-warning",
            "Quarterly legal health check",
            "Evidence preservation guide"
          ]}
        />

        <PricingCard
          title="HR Legal & Payroll 360"
          price="₹20K - ₹90L"
          desc="Full HR payroll & compliance outsourcing."
          features={[
            "Payroll, PF/ESI, Payroll compliance",
            "POSH training & employment agreements",
            "Employee legal issue handling"
          ]}
        />
      </div>

    </section>
  );
}

export default PricingSection;



/* ============================= */
/* REUSABLE CARD COMPONENT */
/* ============================= */

function PricingCard({ title, price, desc, features }) {
  return (
    <div style={cardStyle}>
      <h3 style={titleStyle}>{title}</h3>
      <p style={smallText}>Starting from</p>
      <h2 style={priceStyle}>{price}</h2>

      <p style={descStyle}>{desc}</p>

      <hr style={dividerStyle} />

      <ul style={listStyle}>
        {features.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <button style={primaryBtn}>Get Started</button>
    </div>
  );
}



/* ============================= */
/* STYLE OBJECTS */
/* ============================= */

const badgeStyle = {
  background: "#E6ECFF",
  color: "#2B3674",
  padding: "6px 18px",
  borderRadius: "20px",
  fontSize: "14px",
  fontWeight: "500"
};

const mainHeading = {
  fontSize: "42px",
  marginTop: "20px",
  marginBottom: "15px",
  fontWeight: "700"
};

const subText = {
  color: "#555"
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "30px"
};

const cardStyle = {
  background: "#FFFFFF",
  padding: "35px",
  borderRadius: "18px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between"
};

const titleStyle = {
  color: "#2B3674",
  fontWeight: "600",
  marginBottom: "8px"
};

const smallText = {
  color: "#888",
  fontSize: "14px"
};

const priceStyle = {
  fontSize: "28px",
  fontWeight: "700",
  margin: "10px 0"
};

const descStyle = {
  color: "#555",
  fontSize: "14px",
  marginBottom: "20px"
};

const dividerStyle = {
  border: "none",
  borderTop: "1px dashed #ddd",
  margin: "20px 0"
};

const listStyle = {
  paddingLeft: "18px",
  marginBottom: "25px",
  color: "#555",
  fontSize: "14px",
  lineHeight: "1.8"
};

const primaryBtn = {
  background: "#2B3674",
  color: "#fff",
  padding: "14px",
  border: "none",
  borderRadius: "10px",
  fontWeight: "600",
  cursor: "pointer"
};