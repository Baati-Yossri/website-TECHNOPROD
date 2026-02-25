import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const PRODUCTS = [
  {
    key: 'defense',
    color: '#2563eb',
    bgImage: 'https://images.unsplash.com/photo-1579824267459-0b0b0c200a32?auto=format&fit=crop&q=80&w=1200',
  },
  {
    key: 'aeronautics',
    color: '#0891b2',
    bgImage: 'https://images.unsplash.com/photo-1530968033775-2c92736b131e?auto=format&fit=crop&q=80&w=1200',
  },
  {
    key: 'fire',
    color: '#dc2626',
    bgImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200',
  },
  {
    key: 'medical',
    color: '#059669',
    bgImage: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200',
  },
];

const Products = ({ t }) => {
  return (
    <section id="products" className="products">
      <style dangerouslySetInnerHTML={{
        __html: `
        .products {
          background: var(--surface-2);
          position: relative;
          overflow: hidden;
        }

        .products::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(37,99,235,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(37,99,235,0.02) 1px, transparent 1px);
          background-size: 40px 40px;
        }

        .products-header {
          text-align: center;
          margin-bottom: 4rem;
          position: relative;
        }

        .products-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2px;
          background: rgba(255,255,255,0.04);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          overflow: hidden;
          position: relative;
        }

        .product-card {
          position: relative;
          padding: 3rem 2.5rem;
          background: var(--surface);
          overflow: hidden;
          transition: background 0.35s ease;
        }

        .product-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: var(--bg-img);
          background-size: cover;
          background-position: center;
          opacity: 0.05;
          transition: opacity 0.4s ease;
        }

        .product-card:hover::before {
          opacity: 0.12;
        }

        .product-card:hover {
          background: var(--surface-3);
        }

        .product-card-accent {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          opacity: 0;
          transition: opacity 0.35s ease;
        }

        .product-card:hover .product-card-accent {
          opacity: 1;
        }

        .product-num {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-bottom: 1.25rem;
        }

        .product-card h3 {
          font-size: 1.6rem;
          font-weight: 800;
          color: var(--white);
          margin-bottom: 1rem;
          transition: color 0.3s ease;
          font-family: 'Barlow Condensed', sans-serif;
        }

        .product-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 1.75rem;
        }

        .product-items {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 2rem;
        }

        .product-item-li {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .product-item-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          margin-top: 0.45em;
          flex-shrink: 0;
        }

        .product-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding-bottom: 2px;
          border-bottom: 1px solid;
          opacity: 0.7;
          transition: opacity 0.2s ease, gap 0.2s ease;
        }

        .product-cta:hover {
          opacity: 1;
          gap: 0.7rem;
        }

        @media (max-width: 768px) {
          .products-grid {
            grid-template-columns: 1fr;
            gap: 1px;
          }
          .product-card { padding: 2.5rem 1.75rem; }
        }
      `}} />
      <div className="container">
        <div className="products-header fade-in">
          <span className="section-label">{t.nav.products}</span>
          <h2 className="section-title">{t.products.title}</h2>
          <div className="divider" style={{ margin: '1rem auto 0' }} />
        </div>

        <div className="products-grid fade-in">
          {PRODUCTS.map((p, i) => {
            const data = t.products[p.key];
            return (
              <div
                key={p.key}
                className="product-card"
                style={{ '--bg-img': `url('${p.bgImage}')` }}
              >
                <div
                  className="product-card-accent"
                  style={{ background: `linear-gradient(90deg, ${p.color}, transparent)` }}
                />
                <div className="product-num">0{i + 1} — {data.title.split(' ').slice(-2).join(' ')}</div>
                <h3>{data.title}</h3>
                <p className="product-desc">{data.desc}</p>
                <ul className="product-items">
                  {data.items.map((item, j) => (
                    <li key={j} className="product-item-li">
                      <span className="product-item-dot" style={{ background: p.color }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="product-cta"
                  style={{ color: p.color, borderColor: p.color }}
                >
                  {t.hero.cta} <ArrowRight size={13} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;
