import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const SECTOR_DATA = [
  {
    key: 'defense',
    bgImage: 'https://images.unsplash.com/photo-1579824267468-c8e16f0ed0c9?auto=format&fit=crop&q=80&w=2400',
    color: '#2563eb',
    darkColor: '#1a3a6e',
    icon: '🛡',
  },
  {
    key: 'aeronautics',
    bgImage: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=2400',
    color: '#0891b2',
    darkColor: '#0e4f60',
    icon: '✈',
  },
  {
    key: 'fire',
    bgImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2400',
    color: '#dc2626',
    darkColor: '#7f1d1d',
    icon: '🔥',
  },
  {
    key: 'medical',
    bgImage: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&q=80&w=2400',
    color: '#059669',
    darkColor: '#064e3b',
    icon: '⚕',
  },
];

const Sectors = ({ t }) => {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState(1); // 1=next, -1=prev
  const timerRef = useRef(null);

  const goTo = (idx, dir = 1) => {
    if (animating) return;
    setAnimating(true);
    setDirection(dir);
    setTimeout(() => {
      setActive(idx);
      setAnimating(false);
    }, 420);
  };

  const next = () => goTo((active + 1) % SECTOR_DATA.length, 1);
  const prev = () => goTo((active - 1 + SECTOR_DATA.length) % SECTOR_DATA.length, -1);

  useEffect(() => {
    timerRef.current = setInterval(next, 5500);
    return () => clearInterval(timerRef.current);
  }, [active]);

  const handleDotClick = (i) => {
    clearInterval(timerRef.current);
    goTo(i, i > active ? 1 : -1);
  };

  const s = SECTOR_DATA[active];
  const sData = t.sectors[s.key];

  return (
    <section id="sectors" className="sectors-section">
      <style dangerouslySetInnerHTML={{
        __html: `
        .sectors-section {
          padding: 0;
          position: relative;
          height: 100vh;
          min-height: 600px;
          overflow: hidden;
          background: #060e1a;
        }

        .sectors-bg {
          position: absolute;
          inset: 0;
          transition: opacity 0.45s ease;
        }

        .sectors-bg img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .sectors-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            105deg,
            rgba(6,14,26,0.96) 0%,
            rgba(6,14,26,0.8) 45%,
            rgba(6,14,26,0.55) 100%
          );
        }

        .sectors-color-bar {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 4px;
          transition: background 0.4s ease;
        }

        .sectors-ui {
          position: relative;
          z-index: 2;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 8rem 0 4rem;
        }

        .sectors-counter {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
          margin-bottom: 0.75rem;
        }

        .sector-tag {
          display: inline-block;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          padding: 0.32rem 0.8rem;
          border-radius: 2px;
          margin-bottom: 1.5rem;
          border: 1px solid;
          transition: background 0.4s ease, color 0.4s ease, border-color 0.4s ease;
        }

        .sector-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: clamp(3rem, 7vw, 6rem);
          font-weight: 800;
          color: white;
          line-height: 0.95;
          margin-bottom: 1.75rem;
          letter-spacing: 0.01em;
          transition: opacity 0.4s ease, transform 0.4s ease;
        }

        .sector-title.animating {
          opacity: 0;
          transform: translateY(20px);
        }

        .sector-desc {
          color: rgba(240,244,248,0.72);
          font-size: 1.1rem;
          line-height: 1.75;
          max-width: 520px;
          margin-bottom: 2.5rem;
          transition: opacity 0.4s ease 0.1s, transform 0.4s ease 0.1s;
        }

        .sector-desc.animating {
          opacity: 0;
          transform: translateY(16px);
        }

        .sectors-nav {
          position: absolute;
          bottom: 3.5rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 3;
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .sectors-dots {
          display: flex;
          gap: 0.6rem;
        }

        .sectors-dot {
          width: 28px; height: 3px;
          border-radius: 2px;
          background: rgba(255,255,255,0.2);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .sectors-dot.active {
          width: 48px;
          background: white;
        }

        .sectors-arrow {
          width: 42px; height: 42px;
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 3px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.6);
          cursor: pointer;
          transition: all 0.2s ease;
          background: rgba(255,255,255,0.04);
        }

        .sectors-arrow:hover {
          background: rgba(255,255,255,0.12);
          color: white;
          border-color: rgba(255,255,255,0.4);
        }

        .sectors-index-strip {
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          z-index: 3;
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .sector-index-btn {
          width: 5px;
          height: 80px;
          background: rgba(255,255,255,0.12);
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
        }

        .sector-index-btn.active {
          background: white;
          height: 120px;
        }

        .sector-progress-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 100%;
          background: rgba(255,255,255,0.3);
          transform-origin: bottom;
          animation: progressFill 5.5s linear infinite;
        }

        @keyframes progressFill {
          from { transform: scaleY(0); }
          to { transform: scaleY(1); }
        }

        .sector-num-label {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 5rem;
          font-weight: 800;
          color: rgba(255,255,255,0.04);
          position: absolute;
          right: 2rem;
          bottom: 5rem;
          line-height: 1;
          pointer-events: none;
          user-select: none;
          z-index: 1;
        }

        @media (max-width: 768px) {
          .sectors-section { height: auto; min-height: 100svh; }
          .sector-title { font-size: clamp(2.5rem, 10vw, 4rem); }
          .sectors-index-strip { display: none; }
          .sector-desc { font-size: 1rem; }
        }
      `}} />

      {/* Background image */}
      <div className="sectors-bg" key={s.key}>
        <img src={s.bgImage} alt={sData.title} />
      </div>
      <div className="sectors-overlay" />
      <div className="sectors-color-bar" style={{ background: `linear-gradient(90deg, ${s.color}, transparent)` }} />

      {/* Side strip index */}
      <div className="sectors-index-strip">
        {SECTOR_DATA.map((sd, i) => (
          <div
            key={i}
            className={`sector-index-btn ${i === active ? 'active' : ''}`}
            onClick={() => handleDotClick(i)}
            style={i === active ? { background: sd.color } : {}}
          >
            {i === active && <div className="sector-progress-bar" style={{ background: 'rgba(255,255,255,0.5)' }} />}
          </div>
        ))}
      </div>

      {/* Big number bg */}
      <div className="sector-num-label">0{active + 1}</div>

      {/* Main content */}
      <div className="sectors-ui">
        <div className="container">
          <div className="sectors-counter">
            {String(active + 1).padStart(2, '0')} / {String(SECTOR_DATA.length).padStart(2, '0')}
          </div>
          <div
            className="sector-tag"
            style={{
              color: s.color,
              borderColor: s.color + '55',
              background: s.color + '15',
            }}
          >
            {sData.tag}
          </div>
          <h2 className={`sector-title ${animating ? 'animating' : ''}`}>
            {sData.title}
          </h2>
          <p className={`sector-desc ${animating ? 'animating' : ''}`}>
            {sData.desc}
          </p>
          <a href="#products" className="btn btn-outline" style={{ borderColor: s.color + '88', color: 'white' }}>
            {t.nav.products} <ArrowRight size={15} />
          </a>
        </div>
      </div>

      {/* Bottom nav dots + arrows */}
      <div className="sectors-nav">
        <button className="sectors-arrow" onClick={prev} aria-label="Previous">
          <ChevronLeft size={18} />
        </button>
        <div className="sectors-dots">
          {SECTOR_DATA.map((_, i) => (
            <div
              key={i}
              className={`sectors-dot ${i === active ? 'active' : ''}`}
              onClick={() => handleDotClick(i)}
            />
          ))}
        </div>
        <button className="sectors-arrow" onClick={next} aria-label="Next">
          <ChevronRight size={18} />
        </button>
      </div>
    </section>
  );
};

export default Sectors;
