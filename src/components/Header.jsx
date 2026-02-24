import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';

const Header = ({ t, currentLang, toggleLang }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: t.nav.home, href: "#home" },
        { name: t.nav.about, href: "#about" },
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
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          transition: all 0.3s ease;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
          padding: 1rem 0;
        }
        .header.scrolled {
          padding: 0.75rem 0;
          background: #ffffff;
        }
        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--primary);
          letter-spacing: -0.5px;
        }
        .nav-menu {
          display: flex;
          list-style: none;
          gap: 2rem;
          align-items: center;
        }
        .nav-link {
          font-weight: 500;
          font-size: 0.95rem;
          color: var(--text-dark);
          position: relative;
        }
        .nav-link:hover {
          color: var(--primary);
        }
        .lang-switch {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: var(--accent);
          border-radius: 20px;
          font-weight: 600;
          font-size: 0.85rem;
          text-transform: uppercase;
        }
        .mobile-toggle {
          display: none;
        }
        @media (max-width: 968px) {
          .nav-menu {
            display: none;
          }
          .mobile-toggle {
            display: block;
          }
        }
        .mobile-menu {
          position: fixed;
          top: 0;
          right: 0;
          width: 80%;
          height: 100vh;
          background: var(--white);
          z-index: 1001;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 2rem;
          transform: translateX(100%);
          transition: transform 0.4s ease;
          box-shadow: -10px 0 30px rgba(0,0,0,0.1);
        }
        .mobile-menu.open {
          transform: translateX(0);
        }
      `}} />
            <div className="container nav-container">
                <a href="#home" className="logo">TECHNOPROD</a>

                <ul className="nav-menu">
                    {navLinks.map((link, i) => (
                        <li key={i}>
                            <a href={link.href} className="nav-link">{link.name}</a>
                        </li>
                    ))}
                    <button onClick={toggleLang} className="lang-switch">
                        <Globe size={16} />
                        {currentLang === 'en' ? 'FR' : 'EN'}
                    </button>
                </ul>

                <button className="mobile-toggle" onClick={() => setIsMobileMenuOpen(true)}>
                    <Menu size={24} />
                </button>
            </div>

            <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                <button onClick={() => setIsMobileMenuOpen(false)} style={{ alignSelf: 'flex-end' }}>
                    <X size={24} />
                </button>
                {navLinks.map((link, i) => (
                    <a key={i} href={link.href} className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                        {link.name}
                    </a>
                ))}
                <button onClick={() => { toggleLang(); setIsMobileMenuOpen(false); }} className="lang-switch" style={{ width: 'fit-content' }}>
                    <Globe size={18} />
                    {currentLang === 'en' ? 'French Version' : 'English Version'}
                </button>
            </div>
        </header>
    );
};

export default Header;
