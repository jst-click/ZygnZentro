import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { RiSearchLine, RiCloseLine, RiArrowRightLine, RiExternalLinkLine } from 'react-icons/ri';
import { filterSearch } from '../data/siteSearch';
import './SiteSearch.css';

const SiteSearch = ({ isOpen, onClose, variant = 'overlay' }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setResults([]);
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    setResults(filterSearch(query));
  }, [query]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  const handleSelect = (item) => {
    onClose();
    if (item.external) {
      window.open(item.path, '_blank', 'noopener,noreferrer');
    } else {
      navigate(item.path);
    }
  };

  if (!isOpen && variant === 'overlay') return null;

  const inner = (
    <div className={`site-search ${variant}`}>
      <div className="site-search-header">
        <RiSearchLine className="site-search-icon" />
        <input
          ref={inputRef}
          type="search"
          className="site-search-input"
          placeholder="Search pages, features, downloads..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search site"
          autoComplete="off"
        />
        <button type="button" className="site-search-close" onClick={onClose} aria-label="Close search">
          <RiCloseLine />
        </button>
      </div>

      <div className="site-search-body">
        {query && results.length === 0 && (
          <p className="site-search-empty">No results for &ldquo;{query}&rdquo;</p>
        )}
        {!query && (
          <p className="site-search-hint">Try: biometric, tasks, privacy, download, enterprise</p>
        )}
        {results.length > 0 && (
          <ul className="site-search-results">
            {results.map((item) => (
              <li key={`${item.path}-${item.title}`}>
                <button type="button" className="site-search-result" onClick={() => handleSelect(item)}>
                  <div className="site-search-result-main">
                    <span className="site-search-result-title">{item.title}</span>
                    <span className="site-search-result-cat">{item.category}</span>
                  </div>
                  {item.external ? <RiExternalLinkLine /> : <RiArrowRightLine />}
                </button>
              </li>
            ))}
          </ul>
        )}
        {!query && (
          <div className="site-search-quick">
            <span className="site-search-quick-label">Quick links</span>
            <div className="site-search-chips">
              {[
                { label: 'ZygnPro', path: '/zygnpro' },
                { label: 'Zentro', path: '/zentro' },
                { label: 'Contact', path: '/contact' },
                { label: 'Privacy', path: '/privacy-policy' },
              ].map(({ label, path }) => (
                <Link key={path} to={path} className="site-search-chip" onClick={onClose}>
                  {label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );

  if (variant === 'inline') return inner;

  return (
    <div className="site-search-backdrop" onClick={onClose} role="presentation">
      <div className="site-search-panel" onClick={(e) => e.stopPropagation()}>
        {inner}
      </div>
    </div>
  );
};

export default SiteSearch;
