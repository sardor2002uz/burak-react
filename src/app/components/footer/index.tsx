import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="footer-about">
          <Link className="footer-wordmark" to="/" aria-label="Burak home">BURAK</Link>
          <p>Authentic Turkish cuisine, prepared with care and served around the clock.</p>
          <div className="footer-socials" aria-label="Social media">
            <a href="https://www.facebook.com/" aria-label="Facebook"><img src="/icons/facebook.svg" alt="" /></a>
            <a href="https://www.instagram.com/" aria-label="Instagram"><img src="/icons/instagram.svg" alt="" /></a>
            <a href="https://www.youtube.com/" aria-label="YouTube"><img src="/icons/youtube.svg" alt="" /></a>
          </div>
        </div>
        <div className="footer-column">
          <h2>Explore</h2>
          <Link to="/">Home</Link>
          <Link to="/products">Menu</Link>
          <Link to="/help">Help</Link>
        </div>
        <div className="footer-column footer-contact">
          <h2>Contact us</h2>
          <span>Downtown, Dubai</span>
          <a href="tel:+97145547777">+971 4 554 7777</a>
          <a href="mailto:devexuz@gmail.com">devexuz@gmail.com</a>
          <span>Open 24 hours</span>
        </div>
        <div className="footer-bottom">© Burak Restaurant. All rights reserved.</div>
      </div>
    </footer>
  );
}
