import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-title">About TransfileX</h3>
          <p className="footer-text">
            TransfileX is your ultimate file conversion and storage solution. Effortlessly
            upload, convert, and manage files of various formats with ease.
          </p>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li>
              <NavLink to="/home" activeClassName="active-link">Upload File</NavLink>
            </li>
            <li>
              <NavLink to="/home" activeClassName="active-link">Convert Files</NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="active-link">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="active-link">Contact Us</NavLink>
            </li>
            <li>
              <NavLink to="/home" activeClassName="active-link">FAQs</NavLink>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Follow Us</h3>
          <div className="social-icons">
            <a href="#facebook" className="social-icon">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#twitter" className="social-icon">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.instagram.com/anant.6765/profilecard/?igsh=MXFkcTA0ZDgzMW9iZg==" className="social-icon">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.linkedin.com/in/anant-kumar-a0439028b" className="social-icon">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 TransfileX. All rights reserved.</p>
        <p>
          <NavLink to="/home" activeClassName="active-link">Terms of Service</NavLink> |  
          <NavLink to="/home" activeClassName="active-link">Privacy Policy</NavLink>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
