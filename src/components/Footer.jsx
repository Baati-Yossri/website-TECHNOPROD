import React from 'react';
import { Facebook, Linkedin, Twitter, ArrowUp } from 'lucide-react';

const Footer = ({ t }) => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="footer">
            <style dangerouslySetInnerHTML={{
                __html: `
        .footer {
          background: #002244;
          color: rgba(255,255,255,0.8);
          padding: 4rem 0 2rem;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 4rem;
          margin-bottom: 3rem;
        }
        .footer-logo {
          color: white;
          font-size: 1.5rem;
          font-weight: 800;
          margin-bottom: 1.5rem;
          display: block;
        }
        .footer-desc {
          margin-bottom: 2rem;
          max-width: 400px;
        }
        .footer h4 {
          color: white;
          margin-bottom: 1.5rem;
          font-size: 1.2rem;
        }
        .footer-links {
          list-style: none;
        }
        .footer-links li {
          margin-bottom: 0.75rem;
        }
        .footer-links a:hover {
          color: white;
          padding-left: 5px;
        }
        .social-links {
          display: flex;
          gap: 1rem;
        }
        .social-icon {
          width: 40px;
          height: 40px;
          background: rgba(255,255,255,0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.3s ease;
        }
        .social-icon:hover {
          background: var(--primary-light);
        }
        .footer-bottom {
          padding-top: 2rem;
          border-top: 1px solid rgba(255,255,255,0.1);
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.9rem;
        }
        .back-to-top {
          background: var(--primary);
          color: white;
          width: 45px;
          height: 45px;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .footer-bottom {
            flex-direction: column;
            gap: 1.5rem;
            text-align: center;
          }
        }
      `}} />
            <div className="container">
                <div className="footer-grid">
                    <div>
                        <a href="#home" className="footer-logo">TECHNOPROD</a>
                        <p className="footer-desc">
                            {t.hero.subtitle}
                        </p>
                        <div className="social-links">
                            <a href="#" className="social-icon"><Linkedin size={20} /></a>
                            <a href="#" className="social-icon"><Facebook size={20} /></a>
                            <a href="#" className="social-icon"><Twitter size={20} /></a>
                        </div>
                    </div>

                    <div>
                        <h4>{t.footer.quickLinks}</h4>
                        <ul className="footer-links">
                            <li><a href="#home">{t.nav.home}</a></li>
                            <li><a href="#about">{t.nav.about}</a></li>
                            <li><a href="#products">{t.nav.products}</a></li>
                            <li><a href="#contact">{t.nav.contact}</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4>Contact</h4>
                        <p style={{ fontSize: '0.9rem', lineHeight: '1.8' }}>
                            {t.contact.info.address}<br />
                            {t.contact.info.phone}<br />
                            {t.contact.info.email}
                        </p>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>{t.footer.rights}</p>
                    <p>{t.footer.legal}</p>
                    <button onClick={scrollToTop} className="back-to-top">
                        <ArrowUp size={24} />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
