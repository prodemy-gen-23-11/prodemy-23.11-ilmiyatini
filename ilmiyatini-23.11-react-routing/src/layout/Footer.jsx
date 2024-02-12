import React from "react";

function Footer() {
  return (
    <footer>
      <div className="bg-gray-700 text-white p-10 mt-20 font-sans">
        <div className="footer-container">
          <div className="footer-section about">
            <h2>About Us</h2>
            <p>
              Everything you require is available here. We provide a wide range
              of categories for you to select from.
            </p>
          </div>
          <div className="footer-section links">
            <h2>Quick Links</h2>
            <ul className="footer-ul mb-4">
              <li>
                <a className="footer-link" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Products
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Services
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-section why-us">
            <h2>Why Us</h2>
            <p>We are the best in our field.</p>
          </div>
          <div className="footer-section download-app">
            <h2>Download App</h2>
            <p>Get our mobile app for a seamless experience on the go.</p>
            <button className="download-btn">Download Now</button>
          </div>
          <div className="footer-section contact">
            <h2>Contact Us</h2>
            <p>Email: ilshop@gmail.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
          <div className="footer-section social">
            <h2>Follow Us</h2>
            <ul className="social-icons">
              <li>
                <a className="social-icon" href="#" target="_blank">
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li>
                <a className="social-icon" href="#" target="_blank">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a className="social-icon" href="#" target="_blank">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center my-1 copyright text-xs">
          <p>&copy; 2024 Ilshop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
