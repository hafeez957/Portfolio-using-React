import React from 'react'

const Footer = () => {
  return (
    < >
      <footer className="footer">
      <div className="footer-container">
        <h3 className="footer-logo">Hafeezulla</h3>

        <p className="footer-text">
          © {new Date().getFullYear()} Hafeezulla. All rights reserved.
        </p>

        <div className="footer-socials">
          <a href="#">GitHub</a>
          <a href="#">LinkedIn</a>
          <a href="#">Twitter</a>
        </div>
      </div>
    </footer>
    </ >
  )
}

export default Footer
