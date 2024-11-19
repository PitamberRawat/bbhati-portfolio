import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="name">
        <h4 className="h4">Bhushan Bhati</h4>
      </div>
      <div className="socials">
        <h4 className="h4">
          <a
            className="social-anchor"
            href="mailto:bbhati.msc2024@ivey.ca?"
            target="_blank"
          >
            Email
          </a>
          <a
            className="social-anchor"
            href="https://linkedin.com/bhushanbhati"
            target="_blank"
          >
            Linkedin
          </a>
          <a
            className="social-anchor"
            href="https://calendly.com/bhushanbhatii/"
            target="_blank"
          >
            Calendly
          </a>
        </h4>
      </div>
    </div>
  );
};

export default Footer;
