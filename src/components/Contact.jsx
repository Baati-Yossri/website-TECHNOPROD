import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail, ChevronRight } from 'lucide-react';

const Contact = ({ t }) => {
  const [formData, setFormData] = useState({
    name: '', company: '', email: '', sector: '', message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const sectors = ['Defense & Military', 'Aeronautics', 'Fire Protection', 'Medical', 'Other'];

  return (
    <section id="contact" className="contact">
      <style dangerouslySetInnerHTML={{
        __html: `
        .contact {
          background: var(--surface-2);
          position: relative;
          overflow: hidden;
        }

        .contact::before {
          content: '';
          position: absolute;
          bottom: -150px; left: -150px;
          width: 600px; height: 600px;
          background: radial-gradient(circle, rgba(37,99,235,0.05) 0%, transparent 70%);
          pointer-events: none;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 5rem;
          align-items: start;
          position: relative;
        }

        .contact-form-wrap {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 3rem;
        }

        .contact-form-wrap h2 {
          font-size: 2rem;
          font-weight: 800;
          color: var(--white);
          margin-bottom: 0.5rem;
        }

        .contact-subtitle {
          color: var(--text-secondary);
          font-size: 0.95rem;
          margin-bottom: 2.25rem;
          line-height: 1.6;
        }

        .form-group {
          margin-bottom: 1.25rem;
        }

        .form-group label {
          display: block;
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--text-secondary);
          margin-bottom: 0.5rem;
        }

        .form-control {
          width: 100%;
          padding: 0.85rem 1rem;
          background: var(--surface-2);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          color: var(--text-primary);
          font-family: inherit;
          font-size: 0.95rem;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
          outline: none;
        }

        .form-control:focus {
          border-color: rgba(37,99,235,0.6);
          box-shadow: 0 0 0 3px rgba(37,99,235,0.1);
        }

        .form-control::placeholder {
          color: var(--text-muted);
        }

        .form-control option {
          background: var(--surface-2);
          color: var(--text-primary);
        }

        textarea.form-control {
          min-height: 120px;
          resize: vertical;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .submit-btn {
          width: 100%;
          padding: 1rem;
          background: var(--accent-bright);
          color: white;
          border: none;
          border-radius: var(--radius);
          font-size: 0.9rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          cursor: pointer;
          transition: background 0.2s ease, box-shadow 0.2s ease;
          margin-top: 0.5rem;
          box-shadow: 0 0 20px rgba(37,99,235,0.25);
        }

        .submit-btn:hover {
          background: #1d4ed8;
          box-shadow: 0 0 30px rgba(37,99,235,0.45);
        }

        .success-msg {
          text-align: center;
          padding: 3rem 1rem;
        }

        .success-icon {
          width: 56px; height: 56px;
          background: rgba(5,150,105,0.15);
          border: 1px solid rgba(5,150,105,0.3);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          color: #34d399;
          font-size: 1.5rem;
        }

        .success-msg h3 {
          color: white;
          margin-bottom: 0.5rem;
          font-size: 1.4rem;
        }

        .success-msg p {
          color: var(--text-secondary);
          font-size: 0.95rem;
        }

        /* Info side */
        .contact-info-side h3 {
          font-size: 1.5rem;
          color: white;
          margin-bottom: 0.5rem;
        }

        .contact-info-side .divider { margin-bottom: 2rem; }

        .contact-info-item {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
          padding: 1.25rem;
          border: 1px solid var(--border);
          border-radius: var(--radius);
          background: var(--surface);
          margin-bottom: 1rem;
          transition: border-color 0.3s ease;
        }

        .contact-info-item:hover {
          border-color: rgba(37,99,235,0.35);
        }

        .contact-info-icon {
          width: 40px; height: 40px;
          border-radius: 3px;
          background: rgba(37,99,235,0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #60a5fa;
          flex-shrink: 0;
        }

        .contact-info-label {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-bottom: 0.3rem;
        }

        .contact-info-val {
          font-size: 0.9rem;
          color: var(--text-primary);
          line-height: 1.5;
        }

        .contact-sectors-list {
          margin-top: 2.5rem;
          padding: 1.5rem;
          border: 1px solid var(--border);
          border-radius: var(--radius);
          background: var(--surface);
        }

        .contact-sectors-list h4 {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--text-secondary);
          margin-bottom: 1rem;
          font-family: 'Inter', sans-serif;
        }

        .csector-item {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.88rem;
          color: var(--text-secondary);
          padding: 0.4rem 0;
          border-bottom: 1px solid var(--border);
        }

        .csector-item:last-child { border-bottom: none; }

        @media (max-width: 968px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .form-row { grid-template-columns: 1fr; }
        }

        @media (max-width: 500px) {
          .contact-form-wrap { padding: 2rem 1.5rem; }
        }
      `}} />
      <div className="container">
        <div className="contact-grid">
          {/* Form */}
          <div className="contact-form-wrap fade-in">
            {!submitted ? (
              <>
                <span className="section-label">{t.contact.title}</span>
                <h2>{t.contact.title}</h2>
                <p className="contact-subtitle">{t.contact.subtitle}</p>
                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label>{t.contact.form.name}</label>
                      <input className="form-control" name="name" type="text" required placeholder={t.contact.form.name} value={formData.name} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label>{t.contact.form.company}</label>
                      <input className="form-control" name="company" type="text" placeholder={t.contact.form.company} value={formData.company} onChange={handleChange} />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>{t.contact.form.email}</label>
                      <input className="form-control" name="email" type="email" required placeholder={t.contact.form.email} value={formData.email} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label>{t.contact.form.sector}</label>
                      <select className="form-control" name="sector" value={formData.sector} onChange={handleChange}>
                        <option value="">—</option>
                        {sectors.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>{t.contact.form.message}</label>
                    <textarea className="form-control" name="message" required placeholder={t.contact.form.message} value={formData.message} onChange={handleChange} />
                  </div>
                  <button type="submit" className="submit-btn">
                    <Send size={16} /> {t.contact.form.send}
                  </button>
                </form>
              </>
            ) : (
              <div className="success-msg">
                <div className="success-icon">✓</div>
                <h3>{t.nav.contact}</h3>
                <p>{t.contact.form.success}</p>
              </div>
            )}
          </div>

          {/* Info side */}
          <div className="contact-info-side fade-in">
            <span className="section-label">Get in Touch</span>
            <h3>{t.contact.title}</h3>
            <div className="divider" />

            <div className="contact-info-item">
              <div className="contact-info-icon"><MapPin size={18} /></div>
              <div>
                <div className="contact-info-label">Address</div>
                <div className="contact-info-val">{t.contact.info.address}</div>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="contact-info-icon"><Phone size={18} /></div>
              <div>
                <div className="contact-info-label">Phone</div>
                <div className="contact-info-val">{t.contact.info.phone}</div>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="contact-info-icon"><Mail size={18} /></div>
              <div>
                <div className="contact-info-label">Email</div>
                <div className="contact-info-val">{t.contact.info.email}</div>
              </div>
            </div>

            <div className="contact-sectors-list">
              <h4>Sectors Served</h4>
              {['Defense & Military', 'Aeronautics', 'Fire Protection', 'Medical'].map(s => (
                <div key={s} className="csector-item">
                  <ChevronRight size={14} color="#2563eb" />
                  {s}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
