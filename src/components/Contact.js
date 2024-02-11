import React from "react";
import "../styles/Contact.css";
function Contact() {
  return (
    <section id="contact" className="contact last-section">
      <h1 className="section-title">Contact Me</h1>
      <form className="contact-form">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
