import React from 'react';
import { Link } from 'react-router-dom';
import {
  RiShieldCheckLine,
  RiCheckboxLine,
  RiMailLine,
  RiMapPinLine,
  RiArrowRightLine,
  RiGooglePlayLine
} from 'react-icons/ri';
import { SUPPORT_EMAIL } from '../constants/contact';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-glow footer-glow-1" />
      <div className="footer-glow footer-glow-2" />

      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <span className="nav-brand-pair">
                <img src="/zygnpro-logo.png" alt="" className="brand-logo" />
                <span className="logo-text logo-text-blue">ZygnPro</span>
              </span>
              <span className="logo-text-sep">&</span>
              <span className="nav-brand-pair">
                <img src="/zevive-logo.png" alt="" className="brand-logo" />
                <span className="logo-text logo-text-green">Zevive</span>
              </span>
            </Link>
            <p className="footer-tagline">
              ZygnPro for secure digital signatures. Zevive for productivity and task management — built for professionals who demand more.
            </p>
            <div className="footer-contact-info">
              <div className="contact-item">
                <RiMailLine />
                <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
              </div>
              <div className="contact-item">
                <RiMapPinLine />
                <span>India</span>
              </div>
            </div>
          </div>

          <div className="footer-apps">
            <h4 className="footer-heading">Our Apps</h4>
            <div className="footer-app-card">
              <div className="app-card-icon blue">
                <img src="/zygnpro-logo.png" alt="" className="app-card-logo" />
              </div>
              <div>
                <div className="app-card-name">ZygnPro</div>
                <div className="app-card-desc">Digital Signature Platform</div>
              </div>
            </div>
            <a
              href="https://play.google.com/store/apps/details?id=com.jstclick.zygnpro&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-store-btn"
            >
              <RiGooglePlayLine /> Google Play
            </a>

            <div className="footer-app-card" style={{ marginTop: '20px' }}>
              <div className="app-card-icon green">
                <img src="/zevive-logo.png" alt="" className="app-card-logo" />
              </div>
              <div>
                <div className="app-card-name">Zevive</div>
                <div className="app-card-desc">Productivity & Task Manager</div>
              </div>
            </div>
            <a
              href="https://play.google.com/store/apps/details?id=com.jstclick.zentro&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-store-btn green"
            >
              <RiGooglePlayLine /> Google Play
            </a>
          </div>

          <div className="footer-nav-col">
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-nav-list">
              {[
                { path: '/', label: 'Home' },
                { path: '/zygnpro', label: 'ZygnPro' },
                { path: '/zevive', label: 'Zevive' },
                { path: '/about', label: 'About Us' },
                { path: '/contact', label: 'Contact Us' },
              ].map(({ path, label }) => (
                <li key={path}>
                  <Link to={path} className="footer-nav-link">
                    <RiArrowRightLine /> {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-nav-col">
            <h4 className="footer-heading">Legal</h4>
            <ul className="footer-nav-list">
              {[
                { path: '/privacy-policy', label: 'Privacy Policy' },
                { path: '/terms-and-conditions', label: 'Terms & Conditions' },
                { path: '/delete-account', label: 'Delete Account' },
              ].map(({ path, label }) => (
                <li key={path}>
                  <Link to={path} className="footer-nav-link">
                    <RiArrowRightLine /> {label}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="footer-heading" style={{ marginTop: '32px' }}>Products</h4>
            <ul className="footer-nav-list">
              <li>
                <Link to="/zygnpro" className="footer-nav-link">
                  <RiArrowRightLine /> ZygnPro Features
                </Link>
              </li>
              <li>
                <Link to="/zevive" className="footer-nav-link">
                  <RiArrowRightLine /> Zevive Features
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            &copy; {currentYear} ZygnPro & Zevive by UvRevive. All rights reserved.
          </p>
          <nav className="footer-bottom-links" aria-label="Legal">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <span className="footer-sep" aria-hidden="true" />
            <Link to="/terms-and-conditions">Terms &amp; Conditions</Link>
            <span className="footer-sep" aria-hidden="true" />
            <Link to="/delete-account">Delete Account</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
