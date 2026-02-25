import React from 'react';
import { Linkedin, Facebook, Twitter, ArrowUp, Shield } from 'lucide-react';

const Footer = ({ t }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const sectorLinks = [
    { name: 'Defense & Military', href: '#sectors' },
    { name: 'Aeronautics', href: '#sectors' },
    { name: 'Fire Protection', href: '#sectors' },
    { name: 'Medical Sector', href: '#sectors' },
  ];

  return (
    <footer className="footer">
      <style dangerouslySetInnerHTML={{
        __html: `
        .footer {
          background: var(--primary);
          color: rgba(240,244,248,0.55);
          border-top: 1px solid rgba(255,255,255,0.06);
          position: relative;
          overflow: hidden;
        }

        .footer::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #2563eb 0%, #1a4a8a 50%, transparent 100%);
        }

        .footer-main {
          padding: 4.5rem 0 3rem;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 3.5rem;
        }

        .footer-brand-col {}

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 0.55rem;
          margin-bottom: 1.25rem;
        }

        .footer-logo-icon {
          width: 30px; height: 30px;
          background: linear-gradient(135deg, #1a4a8a, #2563eb);
          border-radius: 3px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .footer-logo-text {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 1.45rem;
          font-weight: 800;
          color: #ffffff;
          letter-spacing: 0.08em;
        }

        .footer-logo-text span { color: #2563eb; }

        .footer-tagline {
          font-size: 0.875rem;
          line-height: 1.75;
          max-width: 300px;
          margin-bottom: 2rem;
        }

        .footer-social {
          display: flex;
          gap: 0.75rem;
        }

        .social-btn {
          width: 36px; height: 36px;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 3px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.4);
          transition: all 0.2s ease;
        }

        .social-btn:hover {
          background: rgba(37,99,235,0.2);
          border-color: rgba(37,99,235,0.5);
          color: white;
        }

        .footer-col h5 {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
          margin-bottom: 1.25rem;
          font-family: 'Inter', sans-serif;
        }

        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }

        .footer-links a {
          font-size: 0.875rem;
          color: rgba(240,244,248,0.5);
          transition: color 0.2s ease;
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }

        .footer-links a:hover {
          color: rgba(255,255,255,0.9);
        }

        .footer-contact-val {
          font-size: 0.85rem;
          line-height: 2;
          color: rgba(240,244,248,0.5);
        }

        .footer-bottom {
          padding: 1.5rem 0;
          border-top: 1px solid rgba(255,255,255,0.06);
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .footer-bottom-left {
          font-size: 0.8rem;
          color: rgba(255,255,255,0.25);
        }

        .footer-bottom-right {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .footer-legal {
          font-size: 0.78rem;
          color: rgba(255,255,255,0.2);
        }

        .back-top-btn {
          width: 38px; height: 38px;
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 3px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.4);
          cursor: pointer;
          transition: all 0.2s ease;
          background: rgba(255,255,255,0.03);
        }

        .back-top-btn:hover {
          background: rgba(37,99,235,0.25);
          color: white;
          border-color: rgba(37,99,235,0.5);
        }

        @media (max-width: 968px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 2.5rem;
          }
        }

        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }
        }
      `}} />
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* Brand */}
            <div className="footer-brand-col">
              <div className="footer-logo">
                <div className="footer-logo-icon">
                  <Shield size={14} color="white" />
                </div>
                <span className="footer-logo-text">TECHNO<span>PROD</span></span>
              </div>
              <p className="footer-tagline">{t.footer.tagline}</p>
              <div className="footer-social">
                <a href="#" className="social-btn"><Linkedin size={16} /></a>
                <a href="#" className="social-btn"><Facebook size={16} /></a>
                <a href="#" className="social-btn"><Twitter size={16} /></a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-col">
              <h5>{t.footer.quickLinks}</h5>
              <ul className="footer-links">
                <li><a href="#home">{t.nav.home}</a></li>
                <li><a href="#about">{t.nav.about}</a></li>
                <li><a href="#sectors">{t.nav.sectors}</a></li>
                <li><a href="#products">{t.nav.products}</a></li>
                <li><a href="#why-us">{t.nav.whyUs}</a></li>
                <li><a href="#contact">{t.nav.contact}</a></li>
              </ul>
            </div>

            {/* Sectors */}
            <div className="footer-col">
              <h5>{t.footer.sectors || 'Sectors'}</h5>
              <ul className="footer-links">
                {sectorLinks.map((sl, i) => (
                  <li key={i}><a href={sl.href}>{sl.name}</a></li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="footer-col">
              <h5>Contact</h5>
              <div className="footer-contact-val">
                {t.contact.info.address}<br />
                {t.contact.info.phone}<br />
                {t.contact.info.email}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="footer-bottom">
          <p className="footer-bottom-left">{t.footer.rights}</p>
          <div className="footer-bottom-right">
            <span className="footer-legal">{t.footer.legal}</span>
            <button className="back-top-btn" onClick={scrollToTop} aria-label="Back to top">
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
