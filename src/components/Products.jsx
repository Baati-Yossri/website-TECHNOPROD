import React from 'react';

const Products = ({ t }) => {
  const productCategories = [
    {
      title: t.products.hospitality.title,
      desc: t.products.hospitality.desc,
      image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=1000"
    },
    {
      title: t.products.healthcare.title,
      desc: t.products.healthcare.desc,
      image: "https://images.unsplash.com/photo-1519494140681-8917d2600218?auto=format&fit=crop&q=80&w=1000"
    },
    {
      title: t.products.institutions.title,
      desc: t.products.institutions.desc,
      image: "https://images.unsplash.com/photo-1555854816-802f18809c14?auto=format&fit=crop&q=80&w=1000"
    }
  ];

  return (
    <section id="products" className="products">
      <style dangerouslySetInnerHTML={{
        __html: `
        .products {
          background-color: var(--white);
        }
        .products-grid {
          display: flex;
          flex-direction: column;
          gap: 4rem;
        }
        .product-item {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        .product-item:nth-child(even) {
          direction: rtl;
        }
        .product-item:nth-child(even) .product-text {
          direction: ltr;
        }
        .product-img {
          border-radius: 8px;
          overflow: hidden;
          height: 450px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
        .product-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .product-text h3 {
          font-size: 2rem;
          margin-bottom: 1.5rem;
          color: var(--primary);
        }
        .product-text p {
          color: var(--text-light);
          font-size: 1.1rem;
          margin-bottom: 2rem;
          line-height: 1.8;
        }
        @media (max-width: 968px) {
          .product-item {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .product-item:nth-child(even) {
            direction: ltr;
          }
          .product-img {
            height: 300px;
          }
        }
      `}} />
      <div className="container">
        <h2 className="section-title fade-in">{t.products.title}</h2>
        <div className="products-grid">
          {productCategories.map((cat, i) => (
            <div key={i} className="product-item fade-in">
              <div className="product-img">
                <img src={cat.image} alt={cat.title} />
              </div>
              <div className="product-text">
                <h3>{cat.title}</h3>
                <p>{cat.desc}</p>
                <a href="#contact" className="btn btn-outline">{t.hero.cta}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
