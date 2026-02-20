import React from "react";
import "./ContactSection.css";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";

import star from "../assets/star.png";
import logo from "../assets/logo.png";

const ContactSection = () => {
  return (
    <>
      {/* ================= CONTACT SECTION ================= */}
      <section className="contact-section">

        <img src={star} alt="star" className="star-left" />
        <img src={star} alt="star" className="star-right" />

        <div className="contact-container">
          <h2 className="contact-title">
            Get In Touch With Us Today
          </h2>

          <p className="contact-subtitle">
            We’re here to help! If you have any questions or would like to discuss how
            our SEO and digital marketing services can benefit your business,
          </p>

          <div className="contact-wrapper">

            {/* LEFT CARD */}
            <div className="contact-info-card">
              <h3>Contact Info</h3>

              <p className="info-desc">
                We’re here to help! If you have any questions or would
                like to discuss how our SEO and digital marketing
                services can benefit your business,
              </p>

              <div className="divider"></div>

              <div className="info-item">
                <div className="icon-circle">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4>Our Location</h4>
                  <p>8708 Technology Forest Pl Suite 125 -G, The Woodlands, TX 773</p>
                </div>
              </div>

              <div className="info-item">
                <div className="icon-circle">
                  <Phone size={18} />
                </div>
                <div>
                  <h4>Phone Number</h4>
                  <p>123-456-7890</p>
                </div>
              </div>

              <div className="info-item">
                <div className="icon-circle">
                  <Mail size={18} />
                </div>
                <div>
                  <h4>Email Address</h4>
                  <p>Infoseoc@gmail.com</p>
                </div>
              </div>
            </div>

            {/* RIGHT FORM */}
            <div className="contact-form-card">
              <h3>Get In Touch</h3>

              <p className="form-desc">
                We’re here to help! If you have any questions or would like to discuss
                how our SEO and digital marketing services can benefit your business,
              </p>

              <form>
                <div className="form-row">
                  <input type="text" placeholder="First Name" />
                  <input type="text" placeholder="Last Name" />
                </div>

                <div className="form-row">
                  <input type="email" placeholder="Email Address" />
                  <input type="text" placeholder="Phone Number" />
                </div>

                <select>
                  <option>India</option>
                  <option>USA</option>
                </select>

                <textarea placeholder="Your Message"></textarea>

                <button type="submit" className="contact-btn">
                  Free Consultation
                  <ArrowUpRight size={16} />
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>


      {/* ================= CTA SECTION ================= */}
      <section className="cta-section">

        {/* LEFT SHADED CIRCLES */}
        <div className="cta-left-1"></div>
        <div className="cta-left-2"></div>
        <div className="cta-left-3"></div>

        {/* RIGHT SHADED CIRCLES */}
        <div className="cta-right-1"></div>
        <div className="cta-right-2"></div>
        <div className="cta-right-3"></div>

        <div className="cta-inner">
          <h2>
            Ready to Take Your Business <br />
            The Next Level
          </h2>

          <p>
            Effective SEO strategies not only elevate a websites visibility but also drive
            targeted traffic, enhance user experience
          </p>

          <button className="cta-button">
            <span>Free Consultation</span>
            <div className="cta-icon-circle">
              <ArrowUpRight size={14} />
            </div>
          </button>
        </div>
      </section>


      {/* ================= FOOTER ================= */}
      <footer className="footer">

        <div className="footer-wrapper">

          <div className="footer-col logo-col">
            <img src={logo} alt="Jurea LLP" className="footer-logo" />
            <p className="footer-text">
              By optimizing content, leveraging relevant keywords, and adhering to
              best practices, businesses can secure prominent position .
            </p>
          </div>

          <div className="footer-col">
            <h4>About Links</h4>
            <ul>
              <li>Case Studies</li>
              <li>Pricing Plans</li>
              <li>Testimonials</li>
              <li>Contact Us</li>
              <li>Faq</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Get in touch</h4>

            <div className="footer-contact">
              <MapPin size={16} />
              <span>8708 Technology Forest Pl Suite 125 -G, The Woodlands, TX 773</span>
            </div>

            <div className="footer-contact">
              <Mail size={16} />
              <span>Infoseoc@gmail.com</span>
            </div>

            <div className="footer-contact">
              <Phone size={16} />
              <span>123-456-7890</span>
            </div>
          </div>

          <div className="footer-col">
            <h4>Subscribe Now</h4>

            <div className="subscribe">
              <input type="email" placeholder="Email Address" />
              <button className="subscribe-btn">
                Subscribe
                <ArrowUpRight size={14} />
              </button>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <span>© 2025 Jurea LLP, All Rights Reserved.</span>

          <div className="bottom-links">
            <span>Terms & Conditions</span>
            <span>Privacy Policy</span>
          </div>
        </div>

      </footer>
    </>
  );
};

export default ContactSection;