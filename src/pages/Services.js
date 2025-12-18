// Services.js
import React, { useState } from "react";
import "../styles/services.css";

import CCTV from "../assets/CCTV  Setup.jpg";
import Security from "../assets/Home Security System.gif";
import Fire from "../assets/Fire image.jpg";
import Biometric from "../assets/biometric system.jpg";
import PCBuild from "../assets/Pc & Amc image.jpg";
import Laptop from "../assets/Lapteop image.jpg";
import Website from "../assets/Website design.webp";
import Ecommerce from "../assets/E-commerce imges.webp";
import Automation from "../assets/Automation.jpg";
import App from "../assets/App Development.jpg";
import SEO from "../assets/SEO images.png";

// Icons
// import { FaTools, FaLaptop, FaShieldAlt, FaCogs, FaRobot } from "react-icons/fa";

const allServices = [
  // ----------------- HARDWARE -----------------
  {
    category: "Hardware",
    title: "CCTV Cameras",
    img: CCTV,
    short: "HD & IP CCTV installation, support & monitoring.",
    full: "We provide end-to-end CCTV camera installation, configuration, remote monitoring setup, and long-term maintenance for homes, shops, offices, and industries.",
    // icon: <FaShieldAlt />
  },
  {
    category: "Hardware",
    title: "Home Security Systems",
    img: Security,
    short: "Smart alarms, sensors & complete home protection.",
    full: "Protect your home with cutting-edge smart alarms, door sensors, motion detectors, and integrated mobile notifications.",
    // icon: <FaTools />
  },
  {
    category: "Hardware",
    title: "Fire Alarms & Smoke Sensors",
    img: Fire,
    short: "Certified fire detection sensors & AMC.",
    full: "We install certified fire detection systems with regular maintenance, testing, and compliance documentation.",
    // icon: <FaTools />
  },
  {
    category: "Hardware",
    title: "Biometric Attendance Systems",
    img: Biometric,
    short: "Fingerprint & face recognition attendance machines.",
    full: "We provide biometric machines with attendance software, shift management, mobile logs, and cloud syncing.",
    // icon: <FaCogs />
  },
  {
    category: "Hardware",
    title: "PC Build & AMC",
    img: PCBuild,
    short: "Custom PC builds, repairs & annual maintenance.",
    full: "Build your dream PC or maintain office systems with our affordable AMC plans including monthly checkups.",
    // icon: <FaLaptop />
  },
  {
    category: "Hardware",
    title: "Used Laptops",
    img: Laptop,
    short: "Certified used laptops with warranty.",
    full: "We sell refurbished laptops with battery check, SSD upgrade options & 3-month warranty.",
    // icon: <FaLaptop />
  },

  // ----------------- SOFTWARE -----------------
  {
    category: "Software",
    title: "Website Development",
    img: Website,
    short: "Modern, responsive & SEO-friendly websites.",
    full: "We build professional business websites, portfolios, and company profiles using React, Django & Node.",
    // icon: <FaLaptop />
  },
  {
    category: "Software",
    title: "E-Commerce Store",
    img: Ecommerce,
    short: "Online store with cart, payment & admin panel.",
    full: "Complete eCommerce solutions with product management, orders, payments, analytics, and delivery tracking.",
    // icon: <FaTools />
  },
  {
    category: "Software",
    title: "SEO Optimization",
    img: SEO,
    short: "Rank on Google with on-page & off-page SEO.",
    full: "Our SEO strategy improves organic ranking, traffic, and business conversions with analytics support.",

  },
  {
    category: "Software",
    title: "Automation Software",
    img: Automation,
    short: "Automate your business using AI tools.",
    full: "We build custom workflow automation, auto-reporting, AI chatbots, OCR extraction, and more.",

  },
  {
    category: "Software",
    title: "Mobile App Development",
    img: App,
    short: "Android & iOS apps using modern technology.",
    full: "We create fast and scalable apps with login systems, admin dashboards APIs, and cloud integration.",

  }
];

export default function Services() {
  const [category, setCategory] = useState("All");
  const [modalData, setModalData] = useState(null);

  const filteredServices =
    category === "All"
      ? allServices
      : allServices.filter((s) => s.category === category);

  return (
    <section className="services">
      <div className="services__inner">

        <h2 className="main-title">Our <span>Services</span></h2>

        {/* Category Tabs */}
        <div className="tabs">
          {["All", "Hardware", "Software"].map((cat) => (
            <button
              key={cat}
              className={`tab ${category === cat ? "active" : ""}`}
              onClick={() => setCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Service Cards */}
        <div className="services__grid">
          {filteredServices.map((service, i) => (
            <div className="card" key={i}>
              <div className="flip">
                <div className="flip-front">
                  <img src={service.img} alt={service.title} />
                  <h4>{service.title}</h4>
                </div>

                <div className="flip-back">
                  <h4>{service.title}</h4>
                  <p>{service.short}</p>

                  <div className="actions">
                    <button
                      className="btn-primary"
                      onClick={() => setModalData(service)}
                    >
                      View Details
                    </button>

                    <button className="btn-secondary">
                      Request Quote
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {modalData && (
          <div className="modal-bg" onClick={() => setModalData(null)}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              <div className="modal-content">
                <img src={modalData.img} alt="" />

                <div>
                  <h2>{modalData.title}</h2>
                  <p>{modalData.full}</p>

                  <button className="btn-primary">Book Now</button>
                  <button className="btn-secondary">Request Quote</button>

                  <button
                    className="close-btn"
                    onClick={() => setModalData(null)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
