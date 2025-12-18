import React, { useState } from "react";
import "../styles/createsupportticket.css";

export default function SupportTicket() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [issue, setIssue] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Support Ticket Created Successfully! Our team will contact you soon.");
    
    setName("");
    setEmail("");
    setIssue("");
    setMessage("");
  };

  return (
    <section className="create-support-container">
      <div className="create-support-card">
        <h2>Create Support Ticket</h2>
        <p className="create-support-subtitle">
          Need help? The Cryonix-IT team is here to support you 24/7.
        </p>

        <form className="create-support-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Your Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <select value={issue} required onChange={(e) => setIssue(e.target.value)}>
            <option value="">Select Issue Type</option>
            <option>Hardware Issue</option>
            <option>Software Issue</option>
            <option>CCTV & Surveillance Issue</option>
            <option>Network Issue</option>
            <option>AI Tools / Automation</option>
            <option>Other</option>
          </select>

          <textarea
            placeholder="Describe your issue..."
            value={message}
            required
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          <button type="submit" className="support-btn">Submit Ticket</button>
        </form>
      </div>
    </section>
  );
}
