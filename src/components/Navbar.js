import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  RiMenuLine,
  RiCloseLine,
  RiShieldCheckLine,
  RiCheckboxLine,
  RiSearchLine,
  RiGooglePlayLine,
} from 'react-icons/ri';
import SiteSearch from './SiteSearch';
import './Navbar.css';

const ZYGNPRO_URL = 'https://play.google.com/store/apps/details?id=com.jstclick.zygnpro&pcampaignid=web_share';
const ZENTRO_URL = 'https://play.google.com/store/apps/details?id=com.jstclick.zentro&pcampaignid=web_share';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/zygnpro', label: 'ZygnPro', icon: <RiShieldCheckLine /> },
  { path: '/zentro', label: 'Zentro', icon: <RiCheckboxLine /> },
  { path: '/about', label: 'About Us' },
  { path: '/contact', label: 'Contact' },
];

const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();
  const isOpen = menuOpen;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location, setMenuOpen]);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else if (!searchOpen) document.body.style.overflow = '';
    return () => {
      if (!searchOpen) document.body.style.overflow = '';
    };
  }, [isOpen, searchOpen]);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container nav-container-full">
          {/* Mobile: menu (left) */}
          <button
            type="button"
            className="nav-menu-btn"
            onClick={() => setMenuOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <RiCloseLine /> : <RiMenuLine />}
          </button>

          {/* Logo — left on desktop, center on mobile */}
          <div className="nav-left">
            <Link to="/" className="nav-logo">
              <span className="nav-brand-pair">
                <img src="/zygnpro-logo.png" alt="" className="brand-logo" />
                <span className="logo-text logo-text-blue">ZygnPro</span>
              </span>
              <span className="logo-text-sep">&</span>
              <span className="nav-brand-pair">
                <img src="/zentro-logo.png" alt="" className="brand-logo" />
                <span className="logo-text logo-text-green">Zentro</span>
              </span>
            </Link>
          </div>

          {/* Center: Page links (desktop) */}
          <div className="nav-center">
            <ul className="nav-links-desktop">
              {navLinks.map(({ path, label, icon }) => (
                <li key={path}>
                  <Link
                    to={path}
                    className={`nav-link ${location.pathname === path ? 'active' : ''}`}
                  >
                    {icon && <span className="nav-link-icon">{icon}</span>}
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Search + Download */}
          <div className="nav-right">
            <button
              type="button"
              className="nav-search-desktop"
              onClick={() => setSearchOpen(true)}
              aria-label="Search site"
            >
              <RiSearchLine />
              <span>Search...</span>
            </button>
            <button
              type="button"
              className="nav-search-btn"
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
            >
              <RiSearchLine />
            </button>
            <a
              href={ZYGNPRO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary nav-download-btn"
            >
              Download Apps
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      {isOpen && (
        <button
          type="button"
          className="nav-overlay"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        />
      )}
      <aside className={`nav-drawer ${isOpen ? 'open' : ''}`} aria-hidden={!isOpen}>
        <div className="nav-drawer-header">
          <span className="nav-drawer-title">Menu</span>
          <button
            type="button"
            className="nav-drawer-close"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <RiCloseLine />
          </button>
        </div>

        <div className="nav-drawer-search-box">
          <RiSearchLine />
          <input
            type="search"
            placeholder="Search pages, features..."
            readOnly
            onClick={() => {
              setMenuOpen(false);
              setSearchOpen(true);
            }}
            aria-label="Search site"
          />
        </div>

        <p className="nav-drawer-label">Pages</p>
        <ul className="nav-drawer-links">
          {navLinks.map(({ path, label, icon }) => (
            <li key={path}>
              <Link
                to={path}
                className={`nav-link ${location.pathname === path ? 'active' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                {icon && <span className="nav-link-icon">{icon}</span>}
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <p className="nav-drawer-label">Download</p>
        <div className="nav-drawer-downloads">
          <a href={ZYGNPRO_URL} target="_blank" rel="noopener noreferrer" className="nav-dl-chip blue">
            <RiGooglePlayLine /> ZygnPro
          </a>
          <a href={ZENTRO_URL} target="_blank" rel="noopener noreferrer" className="nav-dl-chip green">
            <RiGooglePlayLine /> Zentro
          </a>
        </div>

        <a
          href={ZYGNPRO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary nav-drawer-cta"
        >
          Download Apps
        </a>
      </aside>

      <SiteSearch isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
};

export { ZYGNPRO_URL, ZENTRO_URL };

export default Navbar;
