// import React from "react";
import "../styles/contact.css";

// export default function Contact() {
//   return (
//     <section>
//       <div className="contact">
//         <h2>Contact Us</h2>

//         <form
//           className="contact-form"
//           onSubmit={(e) => {
//             e.preventDefault();
//             alert("Thanks! We will contact you.");
//           }}
//         >
//           <div>
//             <label htmlFor="First">Name:</label>
//             <input placeholder="Enter Your name" required />
//             <label htmlFor="Email">Email:</label>
//             <input placeholder="Email" type="email" required />
          
//             <label htmlFor="phone">phone:</label>
//             <input placeholder="phone" type="phone" required />
//           </div>
//             <label htmlFor="Message">Message:</label>
//           <textarea placeholder="Message" required />
//           <button className="btn btn--primary">Send Message</button>
//         </form>
//       </div>
//     </section>
//   );
// }
import React, { useState } from 'react';
// import './Contact.css'; // Import the CSS file

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
        message: '',
        phone: ''
      });
    }, 2000);
  };

  return (
    <div className="background">
    <div className="form-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="phone"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit">Send Message</button>
      </form>
      {status && <p className="form-status">{status}</p>}
    </div>
    </div>
  );
};

export default ContactForm;