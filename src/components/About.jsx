import React from 'react';
import { MapPin, Zap, Layers } from 'lucide-react';

const About = ({ t }) => {
  return (
    <section id="about" className="about">
      <style dangerouslySetInnerHTML={{
        __html: `
        .about {
          background: var(--surface);
          position: relative;
          overflow: hidden;
        }

        .about::before {
          content: '';
          position: absolute;
          top: -100px; right: -100px;
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%);
          pointer-events: none;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: center;
        }

        .about-visual {
          position: relative;
        }

        .about-img-main {
          width: 100%;
          height: 480px;
          object-fit: cover;
          border-radius: 4px;
          display: block;
          filter: brightness(0.85) contrast(1.05);
        }

        .about-img-badge {
          position: absolute;
          bottom: -1.5rem;
          right: -1.5rem;
          background: var(--accent-bright);
          color: white;
          padding: 1.25rem 1.5rem;
          border-radius: 4px;
          text-align: center;
          box-shadow: 0 8px 32px rgba(37,99,235,0.4);
        }

        .about-img-badge .badge-num {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 2.8rem;
          font-weight: 800;
          line-height: 1;
          display: block;
        }

        .about-img-badge .badge-label {
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          opacity: 0.85;
        }

        .about-content h2 {
          font-size: clamp(2rem, 3.5vw, 2.75rem);
          font-weight: 800;
          color: var(--white);
          margin-bottom: 1.5rem;
        }

        .about-text {
          color: var(--text-secondary);
          font-size: 1.05rem;
          line-height: 1.8;
          margin-bottom: 1.25rem;
        }

        .about-features {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
          margin-top: 2.5rem;
        }

        .about-feature {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1.25rem 1.5rem;
          background: var(--surface-2);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          transition: border-color 0.3s ease;
        }

        .about-feature:hover {
          border-color: rgba(37,99,235,0.3);
        }

        .about-feature-icon {
          width: 38px; height: 38px;
          border-radius: 3px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          background: rgba(37,99,235,0.12);
          color: #60a5fa;
        }

        .about-feature h4 {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--white);
          margin-bottom: 0.25rem;
          font-family: 'Inter', sans-serif;
          letter-spacing: 0.03em;
        }

        .about-feature p {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        @media (max-width: 968px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .about-img-main { height: 320px; }
          .about-img-badge { right: 0.5rem; bottom: 0.5rem; }
        }
      `}} />
      <div className="container">
        <div className="about-grid">
          <div className="about-visual fade-in">
            <img
              className="about-img-main"
              src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?auto=format&fit=crop&q=80&w=1200"
              alt="TECHNOPROD Technical Textile Manufacturing"
            />
            <div className="about-img-badge">
              <span className="badge-num">B2B</span>
              <span className="badge-label">Industrial<br />Manufacturer</span>
            </div>
          </div>

          <div className="about-content fade-in">
            <span className="section-label">About TECHNOPROD</span>
            <h2>{t.about.title}</h2>
            <div className="divider" />
            <p className="about-text">{t.about.p1}</p>
            <p className="about-text">{t.about.p2}</p>

            <div className="about-features">
              <div className="about-feature">
                <div className="about-feature-icon"><MapPin size={18} /></div>
                <div>
                  <h4>{t.about.location}</h4>
                  <p>{t.about.locationDesc}</p>
                </div>
              </div>
              <div className="about-feature">
                <div className="about-feature-icon"><Zap size={18} /></div>
                <div>
                  <h4>{t.about.reliability}</h4>
                  <p>{t.about.reliabilityDesc}</p>
                </div>
              </div>
              <div className="about-feature">
                <div className="about-feature-icon"><Layers size={18} /></div>
                <div>
                  <h4>{t.about.expertise}</h4>
                  <p>{t.about.expertiseDesc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
