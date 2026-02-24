import React from 'react';

const About = ({ t }) => {
  return (
    <section id="about" className="about">
      <style dangerouslySetInnerHTML={{
        __html: `
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        .about-image {
          position: relative;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0,33,102,0.1);
        }
        .about-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .about-content h2 {
          font-size: 2.5rem;
          margin-bottom: 2rem;
        }
        .about-content p {
          margin-bottom: 1.5rem;
          color: var(--text-light);
          font-size: 1.1rem;
          line-height: 1.7;
        }
        .about-features {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin-top: 2.5rem;
        }
        .feature h4 {
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
          color: var(--primary);
        }
        .feature p {
          font-size: 0.95rem;
          margin-bottom: 0;
          line-height: 1.5;
        }
        @media (max-width: 968px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}} />
      <div className="container">
        <div className="about-grid">
          <div className="about-image fade-in">
            <img src="https://images.unsplash.com/photo-1628591830352-3d7722112f97?auto=format&fit=crop&q=80&w=1000" alt="TECHNOPROD Textile Manufacturing" />
          </div>
          <div className="about-content fade-in">
            <h2>{t.about.title}</h2>
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>

            <div className="about-features">
              <div className="feature">
                <h4>{t.about.location}</h4>
                <p>{t.about.locationDesc}</p>
              </div>
              <div className="feature">
                <h4>{t.about.reliability}</h4>
                <p>{t.about.reliabilityDesc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
