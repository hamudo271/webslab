import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-logo">
            <h2>UNIVERLAB</h2>
            <p>영상 편집 전문 회사</p>
          </div>
          <div className="footer-links">
            <div className="link-group">
              <h3>Menu</h3>
              <ul>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
            <div className="link-group">
              <h3>Contact</h3>
              <ul>
                <li>Email: contact@univerlab.com</li>
                <li>Tel: 010-1234-5678</li>
                <li>Address: 서울특별시 강남구 테헤란로 123</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} UNIVERLAB MEDIA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
