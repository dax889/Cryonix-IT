import "../styles/contact.css";
import React, { useState } from 'react';
// import './Contact.css'; // Import the CSS file
import { FaInstagram, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import "../styles/contact.css";

const ContactForm = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phone: ''
  });

  // State to manage the submission status message
  const [status, setStatus] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending message...');
    
    // In a real application, you would send this data to a backend server (e.g., using fetch() or axios)
    console.log('Form submitted:', formData);

    // Simulate an API call success/failure
    setTimeout(() => {
      setStatus('Message sent successfully!');
      // Reset the form fields after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    }, 2000);
  };




  return (
    <section className="contact-section">
      <div className="contact-container">

        {/* LEFT SIDE – DETAILS */}
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>
            Have a project in mind or need support?  
            Our team at <b>CryoNix-IT</b> is ready to help.
          </p>

          <div className="info-item">
            <FaPhoneAlt />
            <span>+91 9XXXXXXXXX</span>
          </div>

          <div className="info-item">
            <FaEnvelope />
            <span>contact@cryonixit.com</span>
          </div>

          <div className="info-item">
            <FaMapMarkerAlt />
            <span>Ahmedabad, Gujarat, India</span>
          </div>

          <div className="social-links">
            <a href="https://www.instagram.com/cryonix_it?igsh=MXhtNXc5cWJ4cTF5Yg==" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="mailto:contact@cryonixit.com">
              <FaEnvelope />
            </a>
            <a href="tel:+919XXXXXXXXX">
              <FaPhoneAlt />
            </a>

          </div>
          {/* MAP */}
          <div className="map-container">
            <iframe
              title="CryoNix-IT Location"
              src="https://www.google.com/maps?q=Ahemedabad,Gujarat&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
             <FaMapMarkerAlt /> View on Google Maps
          </div>

        </div>

        {/* RIGHT SIDE – FORM */}
        <div className="contact-form">
          <h2>Contact Us</h2>

          <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" name="name" placeholder="Enter your name" value={formData.name}
            onChange={handleChange}
            required />

            <label>Email</label>
            <input type="email" name="email" placeholder="Enter your email" value={formData.email}
            onChange={handleChange}
            required/>

            <label>Phone</label>
            <input type="phone" name="phone" placeholder="Enter your phone number" value={formData.phone}
            onChange={handleChange}
            required/>

            <label>Message</label>
            <textarea rows="4" name="message"  placeholder="Write your message" value={formData.message}
            onChange={handleChange}></textarea>

            <button type="submit">Send Message</button>
          </form>
          {status && <p className="form-status">{status}</p>}
          
        </div>

      </div>
    </section>
  );
}


export default ContactForm;