import React from "react";
import "../styles/about.css";
import ceoImg from "../assets/CEO image.jpg";
import ownerImg from "../assets/Owner image.jpg";
import editorImg from "../assets/Editor image.jpg";

export default function AboutUs() {
  return (
    <section className="about-section">

      {/* HEADER */}
      <div className="about-header">
        <h1>About <span>CryoNix-IT</span></h1>
        <p>
          At CryoNix-IT, we deliver modern, innovative and user-focused digital
          solutions. Our mission is to help businesses grow through technology,
          creativity, and strategic planning.
        </p>
      </div>

      {/* COMPANY INFO */}
      <div className="company-content">
        <div className="company-box">
          <h2>Our Mission</h2>
          <p>
            To provide reliable and scalable IT solutions that empower
            businesses to transform digitally and achieve long-term success.
          </p>
        </div>

        <div className="company-box">
          <h2>Our Vision</h2>
          <p>
            To become a global technology leader known for quality,
            innovation, and delivering solutions that create real impact.
          </p>
        </div>

        <div className="company-box">
          <h2>Our Values</h2>
          <p>
            Innovation, Integrity, Customer Satisfaction, and Commitment
            to Excellence.
          </p>
        </div>
      </div>

      {/* TEAM SECTION */}
      <h2 className="team-title">Meet Our Team</h2>
      <div className="team-grid">

        {/* CEO */}
        <div className="team-card">
          <img src={ceoImg} alt="Mitesh Amin" />
          <h3>Mitesh Amin</h3>
          <h4>CEO • Founder of CryoNix-IT</h4>
          <p>
            With years of experience in IT consulting and digital strategy,
            Mitesh leads CryoNix-IT with a vision to deliver powerful,
            scalable and future-ready solutions.
          </p>
        </div>

        {/* BUSINESS OWNER */}
        <div className="team-card">
          <img src={ownerImg} alt="Dax Patel" />
          <h3>Dax Patel</h3>
          <h4>Business Owner</h4>
          <p>
            Dax manages business relationships, client coordination, and service
            delivery. Passionate about technology and growth, he oversees the
            operational and strategic direction of the company.
          </p>
        </div>

        {/* EDITOR */}
        <div className="team-card">
          <img src={editorImg} alt="Harsh Prajapati" />
          <h3>Harsh Prajapati</h3>
          <h4>Content Editor</h4>
          <p>
            Harsh ensures all content is clear, impactful, and professional.
            He specializes in editing, documentation, and digital communication.
          </p>
        </div>

      </div>
    </section>
  );
}
