import React from 'react';
import { CheckCircle } from 'lucide-react';

const WhyUs = ({ t }) => {
  const reasons = [
    t.whyUs.location,
    t.whyUs.price,
    t.whyUs.service,
    t.whyUs.quality,
    t.whyUs.supplyChain
  ];

  return (
    <section id="why-us" className="why-us">
      <style dangerouslySetInnerHTML={{
        __html: `
        .why-us {
          background-color: var(--primary);
          color: var(--white);
        }
        .why-us h2 {
          color: var(--white);
          text-align: center;
          margin-bottom: 4rem;
          font-size: 2.5rem;
        }
        .reasons-container {
          max-width: 1000px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 2rem;
        }
        .reason-item {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding: 2rem;
          background: rgba(255,255,255,0.08);
          border-radius: 8px;
          border-left: 5px solid var(--white);
          transition: background 0.3s ease;
        }
        .reason-item:hover {
          background: rgba(255,255,255,0.12);
        }
        .reason-item span {
          font-size: 1.1rem;
          font-weight: 500;
        }
        @media (max-width: 600px) {
          .reasons-container {
            grid-template-columns: 1fr;
          }
          .reason-item {
            padding: 1.5rem;
          }
        }
      `}} />
      <div className="container">
        <h2 className="fade-in">{t.whyUs.title}</h2>
        <div className="reasons-container">
          {reasons.map((reason, i) => (
            <div key={i} className="reason-item fade-in">
              <CheckCircle size={28} color="#ffffff" style={{ flexShrink: 0 }} />
              <span>{reason}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
