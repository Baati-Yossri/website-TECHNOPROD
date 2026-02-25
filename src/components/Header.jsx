import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Shield } from 'lucide-react';

const Header = ({ t, currentLang, toggleLang }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: "#home" },
    { name: t.nav.about, href: "#about" },
    { name: t.nav.sectors, href: "#sectors" },
    { name: t.nav.products, href: "#products" },
    { name: t.nav.whyUs, href: "#why-us" },
    { name: t.nav.contact, href: "#contact" },
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <style dangerouslySetInnerHTML={{
        __html: `
        .header {
          position: fixed;
          top: 0; left: 0;
          width: 100%;
          z-index: 1000;
          transition: all 0.4s ease;
          padding: 1.25rem 0;
          background: transparent;
        }
        .header.scrolled {
          padding: 0.75rem 0;
          background: rgba(10, 22, 40, 0.97);
          backdrop-filter: blur(12px);
          box-shadow: 0 1px 0 rgba(255,255,255,0.06), 0 4px 24px rgba(0,0,0,0.4);
        }
        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }
        .logo-icon {
          width: 32px;
          height: 32px;
          background: linear-gradient(135deg, #1a4a8a, #2563eb);
          border-radius: 3px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .logo-text {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 1.6rem;
          font-weight: 800;
          color: #ffffff;
          letter-spacing: 0.08em;
        }
        .logo-text span {
          color: #2563eb;
        }
        .nav-menu {
          display: flex;
          list-style: none;
          gap: 0.25rem;
          align-items: center;
        }
        .nav-link {
          font-weight: 500;
          font-size: 0.82rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(240,244,248,0.75);
          padding: 0.45rem 0.75rem;
          border-radius: 3px;
          transition: all 0.2s ease;
        }
        .nav-link:hover {
          color: #ffffff;
          background: rgba(255,255,255,0.07);
        }
        .lang-switch {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.4rem 0.9rem;
          background: rgba(37,99,235,0.15);
          border: 1px solid rgba(37,99,235,0.35);
          border-radius: 3px;
          font-weight: 700;
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #93c5fd;
          transition: all 0.2s ease;
          margin-left: 0.5rem;
        }
        .lang-switch:hover {
          background: rgba(37,99,235,0.3);
          color: white;
        }
        .mobile-toggle {
          display: none;
          color: var(--text-primary);
          padding: 0.5rem;
        }
        @media (max-width: 1024px) {
          .nav-menu { display: none; }
          .mobile-toggle { display: block; }
        }
        .mobile-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.6);
          z-index: 1001;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
        }
        .mobile-overlay.open {
          opacity: 1;
          pointer-events: all;
        }
        .mobile-menu {
          position: fixed;
          top: 0; right: 0;
          width: 85%; max-width: 320px;
          height: 100vh;
          background: var(--primary-mid);
          border-left: 1px solid rgba(255,255,255,0.08);
          z-index: 1002;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          transform: translateX(100%);
          transition: transform 0.35s cubic-bezier(0.4,0,0.2,1);
        }
        .mobile-menu.open {
          transform: translateX(0);
        }
        .mobile-menu-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 1.5rem;
          margin-bottom: 1rem;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        .mobile-nav-link {
          font-size: 0.9rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--text-secondary);
          padding: 0.85rem 1rem;
          border-radius: 4px;
          transition: all 0.2s ease;
          display: block;
        }
        .mobile-nav-link:hover {
          background: rgba(255,255,255,0.06);
          color: white;
        }
      `}} />

      <div className="container nav-container">
        <a href="#home" className="logo">
          <div className="logo-icon">
            <Shield size={16} color="white" />
          </div>
          <span className="logo-text">TECHNO<span>PROD</span></span>
        </a>

        <ul className="nav-menu">
          {navLinks.map((link, i) => (
            <li key={i}>
              <a href={link.href} className="nav-link">{link.name}</a>
            </li>
          ))}
          <button onClick={toggleLang} className="lang-switch">
            <Globe size={13} />
            {currentLang === 'en' ? 'FR' : 'EN'}
          </button>
        </ul>

        <button className="mobile-toggle" onClick={() => setIsMobileMenuOpen(true)}>
          <Menu size={24} />
        </button>
      </div>

      <div className={`mobile-overlay ${isMobileMenuOpen ? 'open' : ''}`} onClick={() => setIsMobileMenuOpen(false)} />
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-header">
          <span className="logo-text" style={{ fontSize: '1.3rem' }}>TECHNO<span style={{ color: '#2563eb' }}>PROD</span></span>
          <button onClick={() => setIsMobileMenuOpen(false)} style={{ color: 'var(--text-secondary)' }}>
            <X size={22} />
          </button>
        </div>
        {navLinks.map((link, i) => (
          <a key={i} href={link.href} className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
            {link.name}
          </a>
        ))}
        <button onClick={() => { toggleLang(); setIsMobileMenuOpen(false); }} className="lang-switch" style={{ marginTop: '1rem', width: 'fit-content' }}>
          <Globe size={14} />
          {currentLang === 'en' ? 'Version Française' : 'English Version'}
        </button>
      </div>
    </header>
  );
};

export default Header;
