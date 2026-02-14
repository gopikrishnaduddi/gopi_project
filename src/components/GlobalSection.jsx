import {
  Settings,
  Globe,
  Landmark,
  Plane,
  Building2,
  KeyRound
} from "lucide-react";

function GlobalSection() {
  return (
    <section
      style={{
        padding: "120px 80px",
        background:
          "linear-gradient(90deg, #E8DFF0 0%, #EAF6F3 100%)"
      }}
    >

      {/* ===================== */}
      {/* WHY CHOOSE */}
      {/* ===================== */}

      <div style={{ textAlign: "center" }}>
        <h2 style={mainHeading}>
          Why Choose Jurea Global?
        </h2>

        <p style={subText}>
          Because expanding beyond borders shouldn’t mean navigating choose.
        </p>
      </div>

      <div style={topGrid}>
        <TopItem
          icon={<Settings size={36} />}
          title="Seamless Setup"
          sub="Enporey? Consult"
        />
        <TopItem
          icon={<Globe size={36} />}
          title="Global Banking Assistance"
        />
        <TopItem
          icon={<Landmark size={36} />}
          title="Property"
          sub="/Office Purchas Abroad"
        />
      </div>


      {/* ===================== */}
      {/* YOUR GLOBAL SERVICES */}
      {/* ===================== */}

      <div style={{ textAlign: "center", marginTop: "120px" }}>
        <h2 style={mainHeading}>
          Your Global Services
        </h2>

        <p style={subText}>
          Because expanding beyond borders shouldn’t mean navigating choose.
        </p>
      </div>

      <div style={cardGrid}>
        <ServiceCard
          icon={<Building2 size={28} />}
          title="Company Incorporation"
        />

        <ServiceCard
          icon={<Landmark size={28} />}
          title="Global Banking Assistance"
        />

        <ServiceCard
          icon={<KeyRound size={28} />}
          title="Esoantied Advisory"
        />

        <ServiceCard
          icon={<Plane size={28} />}
          title="Business Visa Assistance"
        />
      </div>
    </section>
  );
}

export default GlobalSection;



/* ============================= */
/* TOP 3 ITEMS */
/* ============================= */

function TopItem({ icon, title, sub }) {
  return (
    <div style={{ textAlign: "center" }}>
      <div style={topIcon}>{icon}</div>
      <h4 style={topTitle}>{title}</h4>
      {sub && <p style={topSub}>{sub}</p>}
    </div>
  );
}


/* ============================= */
/* SERVICE CARD */
/* ============================= */

function ServiceCard({ icon, title }) {
  return (
    <div style={cardStyle}>
      <div style={circleIcon}>{icon}</div>
      <h3 style={cardTitle}>{title}</h3>
      <p style={learnMore}>Learn More ....</p>
    </div>
  );
}


/* ============================= */
/* STYLE OBJECTS */
/* ============================= */

const mainHeading = {
  fontSize: "40px",
  fontWeight: "700",
  marginBottom: "15px"
};

const subText = {
  color: "#555",
  fontSize: "16px"
};

const topGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "80px",
  marginTop: "70px",
  marginBottom: "40px"
};

const topIcon = {
  marginBottom: "15px",
  color: "#2B3674"
};

const topTitle = {
  fontSize: "20px",
  fontWeight: "600",
  color: "#2B3674"
};

const topSub = {
  fontSize: "14px",
  color: "#777",
  marginTop: "5px"
};

const cardGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: "40px",
  marginTop: "70px"
};

const cardStyle = {
  background: "#fff",
  borderRadius: "18px",
  padding: "60px 30px 40px 30px",
  textAlign: "center",
  border: "1px solid #DDE1F5",
  position: "relative"
};

const circleIcon = {
  position: "absolute",
  top: "-30px",
  left: "50%",
  transform: "translateX(-50%)",
  width: "60px",
  height: "60px",
  background: "#2B3674",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff"
};

const cardTitle = {
  fontSize: "18px",
  fontWeight: "600",
  marginTop: "20px",
  marginBottom: "15px"
};

const learnMore = {
  color: "#2B3674",
  fontWeight: "500",
  cursor: "pointer"
};