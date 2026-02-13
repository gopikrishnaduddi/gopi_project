import {
  Gavel,
  FileText,
  Landmark,
  Scale,
  Search,
  Monitor,
  Users
} from "lucide-react";
import "./ServicesStrip.css";

function ServicesStrip() {
  return (
    <section className="services-strip">
      <div className="strip-container">

        <div className="strip-item">
          <Gavel size={30} />
          <p>Business Setup<br />& Compliance</p>
        </div>

        <div className="strip-item">
          <FileText size={30} />
          <p>Licensing & Government<br />Registrations</p>
        </div>

        <div className="strip-item">
          <Landmark size={30} />
          <p>Taxation &<br />Accounting</p>
        </div>

        <div className="strip-item">
          <Scale size={30} />
          <p>Legal Advisory &<br />Litigation Support</p>
        </div>

        <div className="strip-item">
          <Search size={30} />
          <p>HR & Recruitment<br />Solutions</p>
        </div>

        <div className="strip-item">
          <Monitor size={30} />
          <p>Digital & Business<br />Growth Solutions</p>
        </div>

        <div className="strip-item">
          <Users size={30} />
          <p>International Business<br />& Compliance</p>
        </div>

      </div>
    </section>
  );
}

export default ServicesStrip;