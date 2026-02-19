import React from 'react'

const Contact = () => {
  return (
    < >
      <section className="contact">
      <h2 className="contact-title">Get In Touch</h2>

      <p className="contact-subtitle">
        Feel free to reach out for collaborations, project inquiries, or just a
        friendly hello 👋
      </p>

      <div className="contact-container">
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required />

          <button type="submit" className="contact-btn">
            Send Message
          </button>
        </form>

        <div className="contact-info">
          <h3>Contact Info</h3>
          <p>Email: hafeezulla@example.com</p>
          <p>Location: Karnataka, India</p>

          <div className="social-links">
            <a href="#">GitHub</a>
            <a href="#">LinkedIn</a>
            <a href="#">Twitter</a>
          </div>
        </div>
      </div>
    </section>
    </ >
  )
}

export default Contact
