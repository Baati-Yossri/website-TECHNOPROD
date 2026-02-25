import React from 'react';
import { Wrench, Sliders, ShieldCheck, MapPin, Truck, Award } from 'lucide-react';

const ICONS = [Wrench, Sliders, ShieldCheck, MapPin, Truck, Award];

const WhyUs = ({ t }) => {
  const reasons = [
    { key: 'expertise', icon: ICONS[0] },
    { key: 'custom', icon: ICONS[1] },
    { key: 'quality', icon: ICONS[2] },
    { key: 'location', icon: ICONS[3] },
    { key: 'chain', icon: ICONS[4] },
    { key: 'experience', icon: ICONS[5] },
  ];

  return (
    <section id="why-us" className="why-us">
      <style dangerouslySetInnerHTML={{
        __html: `
        .why-us {
          background: var(--primary);
          position: relative;
          overflow: hidden;
        }

        .why-us::before {
          content: 'WHY US';
          position: absolute;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 18vw;
          font-weight: 900;
          color: rgba(255,255,255,0.02);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          white-space: nowrap;
          pointer-events: none;
          letter-spacing: 0.1em;
        }

        .why-us-underline {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, transparent, #2563eb, transparent);
        }

        .why-us-header {
          text-align: center;
          margin-bottom: 4.5rem;
          position: relative;
        }

        .why-us-header h2 {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
          color: white;
        }

        .why-us-header .section-subtitle {
          color: rgba(240,244,248,0.55);
          margin: 0 auto;
        }

        .reasons-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5px;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: var(--radius-lg);
          overflow: hidden;
          position: relative;
        }

        .reason-card {
          padding: 2.5rem 2rem;
          background: rgba(255,255,255,0.025);
          transition: background 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .reason-card:hover {
          background: rgba(255,255,255,0.06);
        }

        .reason-card:hover .reason-icon-wrap {
          background: rgba(37,99,235,0.25);
          border-color: rgba(37,99,235,0.5);
        }

        .reason-card::after {
          content: '';
          position: absolute;
          inset: 0;
          border: 1px solid transparent;
          border-radius: inherit;
          transition: border-color 0.3s ease;
          pointer-events: none;
        }

        .reason-card:hover::after {
          border-color: rgba(37,99,235,0.2);
        }

        .reason-icon-wrap {
          width: 48px; height: 48px;
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.25rem;
          color: #60a5fa;
          background: rgba(37,99,235,0.1);
          transition: all 0.3s ease;
        }

        .reason-card h4 {
          font-size: 1.05rem;
          font-weight: 700;
          color: white;
          margin-bottom: 0.6rem;
          font-family: 'Inter', sans-serif;
          letter-spacing: 0.02em;
        }

        .reason-card p {
          font-size: 0.875rem;
          color: rgba(240,244,248,0.5);
          line-height: 1.65;
        }

        @media (max-width: 968px) {
          .reasons-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .reasons-grid {
            grid-template-columns: 1fr;
          }
          .reason-card { padding: 2rem 1.5rem; }
        }
      `}} />
      <div className="why-us-underline" />
      <div className="container">
        <div className="why-us-header fade-in">
          <span className="section-label">{t.nav.whyUs}</span>
          <h2>{t.whyUs.title}</h2>
          <div className="divider" style={{ margin: '1.25rem auto 0' }} />
        </div>

        <div className="reasons-grid fade-in">
          {reasons.map(({ key, icon: Icon }, i) => {
            const r = t.whyUs[key];
            return (
              <div key={key} className="reason-card">
                <div className="reason-icon-wrap">
                  <Icon size={22} />
                </div>
                <h4>{r.title}</h4>
                <p>{r.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
