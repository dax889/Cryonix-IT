import React, { useState } from "react";
import "../styles/portfolio.css";

const projects = [
  {
    title: "NeuroFlow AI Platform",
    desc: "Advanced machine learning platform for predictive analytics and real-time data.",
    tags: ["TensorFlow", "Python", "AI"],
    featured: true,
  },
  {
    title: "QuantumCommerce",
    desc: "Next-gen e-commerce platform with AI-powered recommendations.",
    tags: ["React", "Node.js", "MongoDB"],
    featured: true,
  },
  {
    title: "MediConnect Pro",
    desc: "Healthcare management app connecting patients with providers.",
    tags: ["React Native", "Firebase", "Healthcare"],
    featured: false,
  },
  {
    title: "SmartFactory IoT",
    desc: "Industrial IoT platform for predictive maintenance and monitoring.",
    tags: ["Python", "IoT", "ML"],
    featured: true,
  },
  {
    title: "CryptoVault Exchange",
    desc: "Secure cryptocurrency exchange with advanced trading features.",
    tags: ["React", "Blockchain", "WebSocket"],
    featured: false,
  },
  {
    title: "EduLearn AI Tutor",
    desc: "Personalized learning platform powered by adaptive AI algorithms.",
    tags: ["AI", "NLP", "Vue"],
    featured: true,
  },
];

export default function PortfolioSection() {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All Projects", "Web Apps", "AI/ML", "Mobile"];

  return (
    <section className="portfolio">
      <span className="badge">🏆 Award-Winning Projects</span>

      <h2 className="portfolio-title">
        OUR <span>PORTFOLIO</span>
      </h2>

      <p className="portfolio-subtitle">
        Transforming ambitious visions into <b>digital masterpieces</b>. Each
        project showcases our commitment to innovation and excellence.
      </p>

      {/* Tabs */}
      <div className="portfolio-tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? "active" : ""}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="portfolio-grid">
        {projects.map((p, i) => (
          <div className="portfolio-card" key={i}>
            {p.featured && <span className="featured">★ FEATURED</span>}

            <div className="card-image">
              <span className="eye">👁</span>
            </div>

            <h3>{p.title}</h3>
            <p>{p.desc}</p>

            <div className="tags">
              {p.tags.map((t, index) => (
                <span key={index}>{t}</span>
              ))}
            </div>

            <button className="case-btn">View Case Study →</button>
          </div>
        ))}
      </div>
    </section>
  );
}
