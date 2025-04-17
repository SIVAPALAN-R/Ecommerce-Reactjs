import React from 'react';
import logo from './Assets/logo.png';

function Footer() {
  return (
    <footer className="bg-dark text-light pt-3 pb-2 mt-5 border-top border-secondary">
      <div className="container">
        <div className="row align-items-center">

          {/* Left: Logo / Brand */}
          <div className="col-md-4 mb-3">
            <img src={logo} alt="Logo" style={{ width: '45px', height: '45px' }} className="my-2" />
            <h6 className="fw-bold mb-1">SR Ecommerce 🛒</h6>
            <p className="text-secondary small mb-0">Your trusted ecommerce site.</p>
          </div>

          {/* Center: Quick Links */}
          <div className="col-md-4 mb-3 text-center">
            <h6 className="fw-bold mb-2">Links</h6>
            <ul className="list-unstyled small mb-0">
              <li><a href="/" className="text-light text-decoration-none d-block">Home</a></li>
              <li><a href="/store" className="text-light text-decoration-none d-block">Products</a></li>
              <li><a href="/contact" className="text-light text-decoration-none d-block">Contact</a></li>
            </ul>
          </div>

          {/* Right: Social Media */}
          <div className="col-md-4 mb-3 text-md-end text-center">
            <h6 className="fw-bold mb-2">Follow</h6>
            <div className="small">
              <a href="https://facebook.com" className="text-light me-2" target="_blank" rel="noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://instagram.com" className="text-light me-2" target="_blank" rel="noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://twitter.com" className="text-light me-2" target="_blank" rel="noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://youtube.com" className="text-light" target="_blank" rel="noreferrer">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center border-top border-secondary pt-2 mt-3">
          <small className="text-secondary">
            &copy; {new Date().getFullYear()} SR Ecommerce 🛒. All rights reserved.
          </small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
