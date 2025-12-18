import React, { useState } from "react";
import "../styles/portfolio.css";
import CCTV from "../assets/CCTV  Setup.jpg";
import Home from "../assets/Home Security System.gif";
import Fire from "../assets/Fire image.jpg";
import Biometric from "../assets/biometric system.jpg";
import PC from "../assets/Pc & Amc image.jpg";
import Laptop from "../assets/Lapteop image.jpg";
import Neouroflow from "../assets/Neouroflow.jpg";
import Quantum from "../assets/Quantum.png";
import Mediconnect from "../assets/Mediconnect.jpg";
import SmartFactory from "../assets/SmartFactory.jpg";
import Cryptovault from "../assets/Cryptovault.jpg";
import Edulearn from "../assets/Edulearn.jpg";

const projects = [
  {
    img: Neouroflow,
    category: "AI/ML",
    title: "NeuroFlow AI Platform",
    desc: "Advanced machine learning platform for predictive analytics and real-time data.",
    tags: ["TensorFlow", "Python", "AI"],
    tech: ["TensorFlow", "Python", "React", "AWS"],
    challenge: [
      "Building a scalable AI platform that processes millions of data points in real-time while maintaining high accuracy.",
    ],
    solution: [
      "Implemented distributed computing architecture with optimized ML models and intelligent caching strategies.",
    ],
    stats: [
      { label: "Accuracy", value: "98.5%" },
      { label: "Response Time", value: "< 100ms" },
      { label: "Data Processed", value: "10M+ / day" },
    ],
    featured: true,
  },
  {
    img: Quantum,
    category: "Web Apps",
    title: "QuantumCommerce",
    desc: "Next-gen e-commerce platform with AI-powered recommendations.",
    tags: ["React", "Node.js", "MongoDB"],
    tech: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    challenge: [
      "Creating a lightning-fast e-commerce experience with personalized recommendations at scale.",
    ],
    solution: [
      "Built with edge computing, progressive web app architecture, and custom recommendation engine.",
    ],
    stats: [
      { label: "conversion", value: "+156%" },
      { label: "load Time", value: "0.8s" },
      { label: "transactions", value: "$5M+/month" },
    ],
    featured: true,
  },
  {
    img: Mediconnect,
    category: "Mobile",
    title: "MediConnect Pro",
    desc: "Healthcare management app connecting patients with providers.",
    tags: ["React Native", "Firebase", "HealthKit", "HIPAA"],
    tech: ["React Native", "Firebase", "HealthKit", "HIPAA"],
    challenge: [
      "Building HIPAA-compliant healthcare app with real-time communication and secure data handling.",
    ],
    solution: [
      "Implemented end-to-end encryption, secure authentication, and real-time sync with FHIR standards.",
    ],
    stats: [
      { label: "appointments", value: "200K+ booked" },
      { label: "satisfaction", value: "96%" },
      { label: "response Time", value: "< 2 min" },
    ],
    featured: false,
  },
  {
    img: SmartFactory,
    category: "AI/ML",
    title: "SmartFactory IoT",
    desc: "Industrial IoT platform for predictive maintenance and monitoring.",
    tags: ["Python", "IoT", "ML"],
    tech: ["Python", "IoT", "ML", "Azure"],
    challenge: [
      "Monitoring thousands of industrial sensors and predicting equipment failures before they occur.",
    ],
    solution: [
      "Developed custom ML models for anomaly detection with real-time alerting and automated responses.",
    ],
    stats: [
      { label: "downtime", value: "-78%" },
      { label: "efficiency", value: "+125%" },
      { label: "savings", value: "$2M+/year" },
    ],
    featured: true,
  },
  {
    img: Cryptovault,
    category: "Web Apps",
    title: "CryptoVault Exchange",
    desc: "Secure cryptocurrency exchange with advanced trading features.",
    tags: ["React", "Blockchain", "WebSocket"],
    tech: ["React", "Blockchain", "WebSocket", "Redis"],
    challenge: [
      "Creating ultra-secure, high-performance trading platform handling millions of transactions daily.",
    ],
    solution: [
      "Built with microservices architecture, advanced security protocols, and real-time data streaming.",
    ],
    stats: [
      { label: "transactions", value: "1M+/day" },
      { label: "uptime", value: "99.99%" },
      { label: "volume", value: "$50M+/day" },
    ],
    featured: false,
  },
  {
    img: Edulearn,
    category: "AI/ML",
    title: "EduLearn AI Tutor",
    desc: "Personalized learning platform powered by adaptive AI algorithms.",
    tags: ["AI", "NLP", "Vue"],
    tech: ["AI", "NLP", "Vue.js", "PostgreSQL"],
    challenge: [
      "Creating adaptive learning system that personalizes education for diverse student needs and styles.",
    ],
    solution: [
      "Developed NLP-powered content generation with learning path optimization and progress tracking.",
    ],
    stats: [
      { label: "improvement", value: "+65%" },
      { label: "engagement", value: "92%" },
      { label: "completion", value: "89%" },
    ],
    featured: true,
  },
  {
    img: CCTV,
    category: "Hardware",
    title: "CCTV Cameras",
    desc: "HD & IP CCTV installation, support & monitoring.",
    full: "We provide end-to-end CCTV camera installation, configuration, remote monitoring setup, and long-term maintenance for homes, shops, offices, and industries.",

    tags: [
      "IP CCTV",
      "HD Cameras",
      "Night Vision",
      "Remote Monitoring",
      "DVR / NVR",
    ],

    tech: ["IP Cameras", "PoE Switches", "DVR/NVR", "Mobile Monitoring Apps"],

    challenge: [
      "Clients required 24/7 surveillance with clear footage and remote access while minimizing downtime and maintenance cost.",
    ],

    solution: [
      "We designed a scalable CCTV architecture using IP cameras, centralized NVRs, and secure mobile access with routine health checks.",
    ],

    stats: [
      { label: "Camera Uptime", value: "99.9%" },
      { label: "Installation Time", value: "1–2 Days" },
      { label: "Monitoring Coverage", value: "24/7" },
    ],
  },
  {
    img: Home,
    category: "Hardware",
    title: "Home Security Systems",
    desc: "Smart alarms, sensors & complete home protection.",
    full: "Protect your home with cutting-edge smart alarms, door sensors, motion detectors, and integrated mobile notifications.",

    tags: [
      "Smart Sensors",
      "Motion Detection",
      "Door Sensors",
      "Mobile Alerts",
    ],

    tech: ["IoT Sensors", "Alarm Panels", "Mobile Apps", "Cloud Alerts"],

    challenge: [
      "Homeowners needed an easy-to-use security system with instant alerts and minimal false alarms.",
    ],

    solution: [
      "We installed smart sensors with centralized alarm panels and real-time mobile notifications for complete home protection.",
    ],

    stats: [
      { label: "Alert Response Time", value: "< 5 sec" },
      { label: "False Alarm Rate", value: "< 1%" },
      { label: "Coverage Zones", value: "10+ Areas" },
    ],
  },
  {
    img: Fire,
    category: "Hardware",
    title: "Fire Alarms & Smoke Sensors",
    desc: "Certified fire detection sensors & AMC.",
    full: "We install certified fire detection systems with regular maintenance, testing, and compliance documentation.",

    tags: [
      "Smoke Detectors",
      "Fire Panels",
      "Heat Sensors",
      "Safety Compliance",
    ],

    tech: [
      "Fire Alarm Panels",
      "Smoke Sensors",
      "Heat Detectors",
      "Emergency Sirens",
    ],

    challenge: [
      "Commercial buildings required reliable fire detection systems that meet safety compliance standards.",
    ],

    solution: [
      "We deployed certified fire alarm systems with periodic testing, AMC support, and compliance documentation.",
    ],

    stats: [
      { label: "Detection Speed", value: "< 10 sec" },
      { label: "Compliance Rate", value: "100%" },
      { label: "Maintenance Cycles", value: "Quarterly" },
    ],
  },
  {
    img: Biometric,
    category: "Hardware",
    title: "Biometric Attendance Systems",
    desc: "Fingerprint & face recognition attendance machines.",
    full: "We provide biometric machines with attendance software, shift management, mobile logs, and cloud syncing.",

    tags: [
      "Fingerprint",
      "Face Recognition",
      "Attendance Reports",
      "Cloud Sync",
    ],

    tech: [
      "Biometric Devices",
      "Attendance Software",
      "Cloud Sync",
      "Mobile Dashboard",
    ],

    challenge: [
      "Organizations faced attendance manipulation and manual tracking errors.",
    ],

    solution: [
      "We implemented biometric attendance systems with real-time logs, shift rules, and centralized reporting.",
    ],

    stats: [
      { label: "Recognition Accuracy", value: "99%" },
      { label: "Employee Capacity", value: "10,000+" },
      { label: "Report Generation", value: "Instant" },
    ],
  },
  {
    img: PC,
    category: "Hardware",
    title: "PC Build & AMC",
    desc: "Custom PC builds, repairs & annual maintenance.",
    full: "Build your dream PC or maintain office systems with our affordable AMC plans including monthly checkups.",

    tags: [
      "Custom PC Build",
      "Hardware Upgrades",
      "AMC Support",
      "Office Systems",
    ],

    tech: ["Intel / AMD", "SSD / NVMe", "Windows / Linux", "Backup Solutions"],

    challenge: [
      "Businesses struggled with frequent PC downtime and inconsistent hardware performance.",
    ],

    solution: [
      "We delivered custom-built PCs with AMC coverage, preventive maintenance, and fast on-site support.",
    ],

    stats: [
      { label: "Downtime Reduction", value: "70%" },
      { label: "AMC Response Time", value: "< 24 hrs" },
      { label: "System Lifespan", value: "5+ Years" },
    ],
  },
  {
    img: Laptop,
    category: "Hardware",
    title: "Used Laptops",
    desc: "Certified used laptops with warranty.",
    full: "We sell refurbished laptops with battery check, SSD upgrade options & 3-month warranty.",

    tags: ["Refurbished", "SSD Upgrade", "Battery Tested", "Warranty"],

    tech: ["Intel / AMD", "SSD Storage", "Windows OS", "Hardware Diagnostics"],

    challenge: [
      "Customers needed affordable laptops without compromising reliability.",
    ],

    solution: [
      "We refurbished laptops with full diagnostics, SSD upgrades, and warranty-backed sales.",
    ],

    stats: [
      { label: "Cost Saving", value: "40–60%" },
      { label: "Warranty", value: "3 Months" },
      { label: "Quality Check", value: "20+ Tests" },
    ],
  },
];

export default function PortfolioSection() {
  const [category, setCategory] = useState("All");
  const [modalData, setModalData] = useState(null);

  const tabs = ["All", "Web Apps", "AI/ML", "Mobile", "Hardware"];

  const filteredProjects =
    category === "All"
      ? projects
      : projects.filter((p) => p.category === category);

  return (
    <section className="portfolio">
      <div className="portfolio-header">
        <span className="badge">🏆 Award-Winning Projects</span>

        <h2 className="portfolio-title">
          OUR <span>PORTFOLIO</span>
        </h2>
        <p className="portfolio-subtitle">
          Transforming ambitious visions into <b>digital masterpieces</b>.
        </p>
      </div>

      {/* Tabs */}
      <div className="portfolio-tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={category === tab ? "active" : ""}
            onClick={() => setCategory(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="portfolio-grid">
        {filteredProjects.map((p, i) => (
          <div className="portfolio-card" key={i}>
            {p.featured && <span className="featured">★ FEATURED</span>}

            <div className="card-image">
              <img src={p.img} alt={p.title} />
            </div>

            <h3>{p.title}</h3>
            <p>{p.desc}</p>

            <div className="tags">
              {p.tags.map((t, index) => (
                <span key={index}>{t}</span>
              ))}
            </div>

            <button className="case-btn" onClick={() => setModalData(p)}>
              View Case Study →
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalData && (
        <div className="modal-bg" onClick={() => setModalData(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            {/* Header */}
            <div className="modal-header">
              <span className="badge">⭐ Featured Case Study</span>
              <button className="close-btn" onClick={() => setModalData(null)}>
                ✕
              </button>
            </div>

            <h2 className="modal-title">{modalData.title}</h2>
            <p className="modal-subtitle">{modalData.desc}</p>

            {/* Media */}
            <div className="modal-media">
              <img src={modalData.img} alt={modalData.title} />
            </div>

            {/* Stats */}
            <div className="modal-stats">
              {modalData.stats.map((s, i) => (
                <div key={i} className="stat-box">
                  <h3>{s.value}</h3>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>

            {/* Content */}
            <div className="modal-sections">
              <div>
                <h4>The Challenge</h4>
                <p>{modalData.challenge}</p>
              </div>

              <div>
                <h4>Our Solution</h4>
                <p>{modalData.solution}</p>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="tech-stack">
              <h4>Technology Stack</h4>
              <div className="tech-tags">
                {modalData.tech.map((t, i) => (
                  <span key={i}>{t}</span>
                ))}
              </div>
            </div>

            <div className="modal-actions">
              <button className="btn-primary">Book Now</button>
              <button className="btn-secondary">Request Quote</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
