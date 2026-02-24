import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = ({ t }) => {
  return (
    <section id="home" className="hero">
      <style dangerouslySetInnerHTML={{
        __html: `
        .hero {
          height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          background: linear-gradient(rgba(0, 51, 102, 0.6), rgba(0, 51, 102, 0.6)), url('https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=2000');
          background-size: cover;
          background-position: center;
          color: var(--white);
          padding-top: 80px;
        }
        .hero-content {
          max-width: 850px;
        }
        .hero h1 {
          font-size: clamp(2.2rem, 5vw, 3.8rem);
          margin-bottom: 1.5rem;
          color: var(--white);
          font-weight: 800;
          line-height: 1.1;
        }
        .hero p {
          font-size: clamp(1.1rem, 2vw, 1.4rem);
          margin-bottom: 2.5rem;
          opacity: 0.95;
          max-width: 650px;
          line-height: 1.6;
        }
        .hero .btn {
          font-size: 1.1rem;
          padding: 1rem 2rem;
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
        }
      `}} />
      <div className="container">
        <div className="hero-content fade-in visible">
          <h1>{t.hero.title}</h1>
          <p>{t.hero.subtitle}</p>
          <a href="#contact" className="btn btn-primary">
            {t.hero.cta} <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
