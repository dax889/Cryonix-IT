import React from "react";
import "../styles/support.css";

const Support = () => {
  return (
    <section className="support-section">
      <div className="support-container">

        <h1>Support – CryoNix-IT</h1>
        <p className="sub-title">
          We are here to help you! Choose a category or contact us directly.
        </p>

        <div className="support-grid">

          <div className="support-card">
            <h3>🛠 Technical Support</h3>
            <p>Facing issues with your system, software, or tools? Our team will resolve it quickly.</p>
          </div>

          <div className="support-card">
            <h3>🔐 Security & Surveillance</h3>
            <p>Support for CCTV, biometric, access control, and security devices.</p>
          </div>

          <div className="support-card">
            <h3>💼 AMC Services</h3>
            <p>Annual Maintenance Contract support — fast, reliable & dedicated.</p>
          </div>

          <div className="support-card">
            <h3>💻 Software & Web Support</h3>
            <p>Website issues, bugs, updates, and performance improvements.</p>
          </div>

        </div>

        <div className="contact-box">
          <h2>📞 Contact Support</h2>
          <p>Email: <strong>support@cryonixit.com</strong></p>
          <p>Phone: <strong>+91 98765 43210</strong></p>

          <button 
            className="contact-btn"
            onClick={() => window.location.href = "/support-ticket"}
          >
            Create Support Ticket
          </button>

        </div>

      </div>
    </section>
  );
};

export default Support;
