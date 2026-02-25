import React, { useEffect, useRef } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero = ({ t }) => {
  const titleRef = useRef(null);

  useEffect(() => {
    const el = titleRef.current;
    if (el) {
      setTimeout(() => el.classList.add('hero-visible'), 100);
    }
  }, []);

  return (
    <section id="home" className="hero">
      <style dangerouslySetInnerHTML={{
        __html: `
        .hero {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
          overflow: hidden;
          background-color: #060e1a;
        }

        /* Multi-layer background */
        .hero-bg {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(to right, rgba(6,14,26,0.95) 0%, rgba(6,14,26,0.75) 55%, rgba(6,14,26,0.5) 100%),
            url('https://images.unsplash.com/photo-1584445584400-3f07b2d7c0e0?auto=format&fit=crop&q=80&w=2400');
          background-size: cover;
          background-position: center right;
          background-repeat: no-repeat;
        }

        /* Animated grid overlay */
        .hero-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(37,99,235,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(37,99,235,0.04) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: linear-gradient(to bottom, transparent, rgba(0,0,0,0.5) 20%, rgba(0,0,0,0.5) 80%, transparent);
        }

        /* Gradient accent line */
        .hero-accent-line {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, transparent 0%, #2563eb 40%, #1a4a8a 70%, transparent 100%);
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 780px;
          padding-top: 7rem;
          padding-bottom: 4rem;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #93c5fd;
          padding: 0.4rem 1rem;
          border: 1px solid rgba(37,99,235,0.4);
          border-radius: 2px;
          background: rgba(37,99,235,0.1);
          margin-bottom: 2.25rem;
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s;
        }

        .hero-badge::before {
          content: '';
          width: 6px; height: 6px;
          background: #2563eb;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.4); }
        }

        .hero h1 {
          font-size: clamp(2.4rem, 5.5vw, 4.2rem);
          font-weight: 800;
          color: var(--white);
          line-height: 1.08;
          margin-bottom: 1.75rem;
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.7s ease 0.25s, transform 0.7s ease 0.25s;
        }

        .hero h1 .highlight {
          color: #60a5fa;
          position: relative;
        }

        .hero p {
          font-size: clamp(1rem, 1.8vw, 1.2rem);
          color: rgba(240,244,248,0.75);
          max-width: 580px;
          line-height: 1.75;
          margin-bottom: 2.75rem;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.7s ease 0.4s, transform 0.7s ease 0.4s;
        }

        .hero-actions {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          flex-wrap: wrap;
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.6s ease 0.55s, transform 0.6s ease 0.55s;
        }

        .hero-stats {
          display: flex;
          align-items: center;
          gap: 2.5rem;
          margin-top: 4rem;
          padding-top: 2.5rem;
          border-top: 1px solid rgba(255,255,255,0.08);
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.6s ease 0.7s, transform 0.6s ease 0.7s;
        }

        .hero-stat-divider {
          width: 1px;
          height: 36px;
          background: rgba(255,255,255,0.12);
        }

        .hero-stat-num {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 2.2rem;
          font-weight: 800;
          color: white;
          line-height: 1;
        }

        .hero-stat-label {
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--text-secondary);
          margin-top: 0.25rem;
        }

        .hero-scroll {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          color: rgba(255,255,255,0.3);
          font-size: 0.7rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          animation: scrollBounce 2.5s ease infinite;
        }

        @keyframes scrollBounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(6px); }
        }

        /* Animate everything when hero-visible class is added */
        .hero-visible .hero-badge,
        .hero-visible .hero h1,
        .hero-visible h1,
        .hero-visible .hero p,
        .hero-visible p.hero-sub,
        .hero-visible .hero-actions,
        .hero-visible .hero-stats {
          opacity: 1;
          transform: translateY(0);
        }
      `}} />
      <div className="hero-bg" />
      <div className="hero-grid" />
      <div className="hero-accent-line" />

      <div className="container">
        <div className="hero-content" ref={titleRef}>
          <div className="hero-badge">{t.hero.badge}</div>
          <h1>TECHNOPROD – <span className="highlight">Technical Textile</span> Solutions for Defense, Aeronautics &amp; Specialized Industries</h1>
          <p className="hero-sub">{t.hero.subtitle}</p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              {t.hero.cta} <ArrowRight size={17} />
            </a>
            <a href="#sectors" className="btn btn-outline">
              {t.nav.sectors}
            </a>
          </div>
          <div className="hero-stats">
            <div>
              <div className="hero-stat-num">4</div>
              <div className="hero-stat-label">{t.nav.sectors === 'Sectors' ? 'Strategic Sectors' : 'Secteurs Stratégiques'}</div>
            </div>
            <div className="hero-stat-divider" />
            <div>
              <div className="hero-stat-num">B2B</div>
              <div className="hero-stat-label">{t.nav.sectors === 'Sectors' ? 'Institutional' : 'Institutionnel'}</div>
            </div>
            <div className="hero-stat-divider" />
            <div>
              <div className="hero-stat-num">TN</div>
              <div className="hero-stat-label">Sousse, Tunisia</div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <ChevronDown size={18} />
      </div>
    </section>
  );
};

export default Hero;
