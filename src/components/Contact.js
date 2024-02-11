import React from "react";
import "../styles/Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact last-section">
      <h1 className="section-title">Contact Me</h1>
      <form className="contact-form">
        <form
          className="contact-form"
          name="contact"
          method="POST"
          data-netlify="true"
        >
          {/* The following hidden input is required for Netlify forms to work with React */}
          <input type="hidden" name="form-name" value="contact" />
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </form>
    </section>
  );
}

export default Contact;
