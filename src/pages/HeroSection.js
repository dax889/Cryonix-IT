import React from "react";
import "../styles/hero.css";
import Project1 from "../assets/Project1.jpg"
import Project2 from "../assets/Project2.jpg"
import Project3 from "../assets/Project3.jpg"
// import Cryonix_IT from "../assets/Cryonix-IT image.png"
// import Portfolio from "../components/Portfolio";

const testimonials = [
  {
    quote:
      "Cryonix-IT upgraded our entire office security & built our CRM. Excellent service!",
    author: "Mitesh Amin, CEO",
  },
  {
    quote:
      "Fast AMC support and highly professional team.",
    author: "Dax Patel, Business Owner",
  },
  {
    quote:
      "Cryonix-IT delivered exceptional development support with precision and speed. Their technical expertise truly stands out.",
    author: "Abhay Raval, Sr. SDE",
  },
  {
    quote:
      "Their automation tools saved us hours of manual work every day!",
    author: "Harsh Prajapati, Manager",
  },
];

export default function Home() {
  return (
    <div className="home-container">

      {/* 🌟 HERO SECTION */}
          <section className="hero-section">
            {/* Dark + neon gradient overlay */}
            <div className="hero-overlay"></div>

            {/* Glass Content Card */}
            <div className="hero-content glass-card">
              <h1 className="hero-title">
                Welcome to <span>Cryonix-IT</span>
              </h1>

              <p className="hero-subtitle">
                Your one-stop solution for hardware, software, CCTV & AI-powered business tools.
              </p>

              <div className="hero-buttons">
                <a href="/services" className="primary-btn">Explore Services</a>
                <button
                    className="secondary-btn"
                    onClick={() => window.location.href = 'mailto:contact@cryonixit.com'}
                  >
                    Get in Touch
                  </button>

              </div>

              <div className="scroll-down">⌄ Scroll</div>
            </div>
         </section>

     {/* WHY CHOOSE US */}
          <section className="why-section">
            <div className="why-overlay"></div>

            <h2 className="why-title">Why Choose <span>Cryonix-IT?</span></h2>

            <p className="why-subtitle">
              Trusted hardware & software solutions with unmatched support and expertise.
            </p>

            <div className="why-grid">
              <div className="why-card">
                <i className="fas fa-user-shield"></i>
                <h3>Certified Experts</h3>
                <p>Our hardware and software professionals are trained & certified.</p>
              </div>

              <div className="why-card">
                <i className="fas fa-tools"></i>
                <h3>Fast Installation & AMC</h3>
                <p>We provide quick setup and reliable yearly maintenance contracts.</p>
              </div>

              <div className="why-card">
                <i className="fas fa-shield-alt"></i>
                <h3>Secure Digital Solutions</h3>
                <p>High-quality software with advanced security implementations.</p>
              </div>

              <div className="why-card">
                <i className="fas fa-headset"></i>
                <h3>24/7 Support</h3>
                <p>Your business runs non-stop—and so do we.</p>
              </div>
            </div>
          </section>


      {/* OUR EXPERTISE */}
        <section className="expertise-section">
          <h2 className="expertise-title">
            Our <span>Expertise</span>
          </h2>

          <p className="expertise-subtitle">
            End-to-end IT solutions in hardware, software, AI, and security systems.
          </p>

          <div className="expertise-grid">

            <div className="expertise-card">
              <i className="fas fa-video"></i>
              <h3>CCTV & Security Systems</h3>
              <p>Professional installation of CCTV, fire alarms, biometrics, and sensors.</p>
            </div>

            <div className="expertise-card">
              <i className="fas fa-robot"></i>
              <h3>AI & CRM Solutions</h3>
              <p>Automation tools, AI-powered applications, CRM software & analytics.</p>
            </div>

            <div className="expertise-card">
              <i className="fas fa-laptop-medical"></i>
              <h3>Laptop Parts & Repairs</h3>
              <p>Affordable laptop repair, servicing, and high-quality spare parts.</p>
            </div>

            <div className="expertise-card">
              <i className="fas fa-code"></i>
              <h3>Website & App Development</h3>
              <p>Custom websites, apps, e-commerce & digital platforms built using modern tech.</p>
            </div>

            <div className="expertise-card">
              <i className="fas fa-chart-line"></i>
              <h3>Digital Marketing</h3>
              <p>Grow your business with SEO, branding, marketing campaigns & graphics.</p>
            </div>

            <div className="expertise-card">
              <i className="fas fa-cogs"></i>
              <h3>Automation Tools</h3>
              <p>Business automation, workflow optimization & custom tools development.</p>
            </div>

          </div>
        </section>

{/* <Portfolio /> */}
      {/* PORTFOLIO PREVIEW */}
    <section className="portfolio-section">
      <h2 className="portfolio-title">Our <span>Work</span></h2>
      <p className="section-subtitle">Recent projects delivered to our clients.</p>

      <div className="portfolio-grid">

        {/* CARD 1 */}
        <div className="portfolio-card">
          <img src={Project1} alt="Project 1" className="portfolio-img" />
          <div className="portfolio-overlay">
            <h3>Hospital Dental Cleaning</h3>
            <button className="portfolio-btn">See More</button>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="portfolio-card">
          <img src={Project2} alt="Project 2" className="portfolio-img" />
          <div className="portfolio-overlay">
            <h3>Calling Agent</h3>
            <button className="portfolio-btn">See More</button>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="portfolio-card">
          <img src={Project3} alt="Project 3" className="portfolio-img" />
          <div className="portfolio-overlay">
            <h3>CCTV Setup</h3>
            <button className="portfolio-btn">See More</button>
          </div>
        </div>

      </div>

      {/* VIEW ALL BUTTON */}
      <div className="portfolio-view-more-container">
        <a href="/portfolio" className="portfolio-view-more-btn">View All Projects</a>
      </div>
    </section>

      {/* TESTIMONIALS – AUTO SLIDER */}
      {/* <section className="testimonials-section">
        <h2 className="testimonials-title">What Our <span>Clients Say</span></h2>

        <div className="testimonial-slider">

          <div className="testimonial-card">
            <p>“Cryonix-IT upgraded our entire office security & built our CRM. Excellent service!”</p>
            <h4>— Mitesh Amin, CEO</h4>
          </div>

          <div className="testimonial-card">
            <p>“Fast AMC support and highly professional team.”</p>
            <h4>— Dax Patel, Business Owner</h4>
          </div>

          <div className="testimonial-card">
           <p>“Cryonix-IT delivered exceptional development support with precision and speed. Their technical expertise truly stands out.”</p>
            <h4>— Abhay Raval, Sr.SDE</h4>
          </div>
          <div className="testimonial-card">
            <p>“Their automation tools saved us hours of manual work every day!”</p>
            <h4>— Harsh Prajapati, Manager</h4>
          </div>

        </div>
      </section> */}
      <section className="testimonials">
            <h2 className="testimonials-title">
              What Our <span>Clients Say</span>
            </h2>

            <div className="testimonials-grid">
              {testimonials.map((t, index) => (
                <div key={index} className="testimonial-card">
                  <p className="quote">“{t.quote}”</p>
                  <p className="author">— {t.author}</p>
                </div>
              ))}
            </div>
          </section>

      {/* CTA SECTION */}
      <section className="cta-section">
        <div className="cta-box">
          <h2>Need a Custom IT Solution?</h2>
          <p>From CCTV to AI tools — we build everything your business needs.</p>
          <a href="/contact" className="cta-btn">Get Free Consultation</a>
        </div>
      </section>

    </div>
  );
}
