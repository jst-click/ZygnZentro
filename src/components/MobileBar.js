import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  RiHome4Line,
  RiShieldCheckLine,
  RiCheckboxLine,
  RiSearchLine,
  RiMenuLine,
  RiGooglePlayLine,
} from 'react-icons/ri';
import SiteSearch from './SiteSearch';
import './MobileBar.css';

const ZYGNPRO_URL = 'https://play.google.com/store/apps/details?id=com.jstclick.zygnpro&pcampaignid=web_share';
const Zevive_URL = 'https://play.google.com/store/apps/details?id=com.jstclick.zentro&pcampaignid=web_share';

const MobileBar = ({ onOpenMenu }) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  const tabs = [
    { path: '/', label: 'Home', icon: <RiHome4Line /> },
    { path: '/zygnpro', label: 'ZygnPro', icon: <RiShieldCheckLine /> },
    { path: '/zevive', label: 'Zevive', icon: <RiCheckboxLine /> },
  ];

  return (
    <>
      <nav className="mobile-bottom-bar" aria-label="Mobile navigation">
        {tabs.map(({ path, label, icon }) => (
          <Link
            key={path}
            to={path}
            className={`mobile-bar-item ${location.pathname === path ? 'active' : ''}`}
          >
            {icon}
            <span>{label}</span>
          </Link>
        ))}
        <button
          type="button"
          className={`mobile-bar-item ${searchOpen ? 'active' : ''}`}
          onClick={() => setSearchOpen(true)}
          aria-label="Search"
        >
          <RiSearchLine />
          <span>Search</span>
        </button>
        <button type="button" className="mobile-bar-item" onClick={onOpenMenu} aria-label="Open menu">
          <RiMenuLine />
          <span>Menu</span>
        </button>
      </nav>

      <div className="mobile-quick-download">
        <a href={ZYGNPRO_URL} target="_blank" rel="noopener noreferrer" className="mobile-dl-btn blue">
          <RiGooglePlayLine /> ZygnPro
        </a>
        <a href={Zevive_URL} target="_blank" rel="noopener noreferrer" className="mobile-dl-btn green">
          <RiGooglePlayLine /> Zevive
        </a>
      </div>

      <SiteSearch isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
};

export default MobileBar;
