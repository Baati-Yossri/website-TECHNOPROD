import React from 'react';
import { Hotel, HeartPulse, Building2 } from 'lucide-react';

const Sectors = ({ t }) => {
    const sectors = [
        { icon: <Hotel size={40} />, title: t.sectors.hotels.title, desc: t.sectors.hotels.desc },
        { icon: <HeartPulse size={40} />, title: t.sectors.healthcare.title, desc: t.sectors.healthcare.desc },
        { icon: <Building2 size={40} />, title: t.sectors.institutions.title, desc: t.sectors.institutions.desc },
    ];

    return (
        <section id="sectors" className="sectors">
            <style dangerouslySetInnerHTML={{
                __html: `
        .sectors {
          background-color: var(--secondary);
        }
        .section-title {
          text-align: center;
          margin-bottom: 4rem;
          font-size: 2.5rem;
          font-weight: 700;
        }
        .sector-card {
          background: var(--white);
          padding: 3rem 2rem;
          border-radius: 8px;
          text-align: center;
          box-shadow: 0 4px 20px rgba(0,0,0,0.03);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border-bottom: 4px solid transparent;
        }
        .sector-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
          border-bottom-color: var(--primary);
        }
        .sector-icon {
          color: var(--primary);
          margin-bottom: 1.5rem;
          display: inline-block;
        }
        .sector-card h3 {
          margin-bottom: 1rem;
          font-size: 1.5rem;
        }
        .sector-card p {
          color: var(--text-light);
        }
      `}} />
            <div className="container">
                <h2 className="section-title fade-in">{t.sectors.title}</h2>
                <div className="grid-3">
                    {sectors.map((sector, i) => (
                        <div key={i} className="sector-card fade-in">
                            <div className="sector-icon">{sector.icon}</div>
                            <h3>{sector.title}</h3>
                            <p>{sector.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Sectors;
