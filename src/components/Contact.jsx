import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const Contact = ({ t }) => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
    };

    return (
        <section id="contact" className="contact">
            <style dangerouslySetInnerHTML={{
                __html: `
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 4rem;
        }
        .info-card {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .info-item {
          display: flex;
          gap: 1.5rem;
        }
        .info-icon {
          width: 50px;
          height: 50px;
          background: var(--accent);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary);
          flex-shrink: 0;
        }
        .info-text h4 {
          margin-bottom: 0.25rem;
        }
        .info-text p {
          color: var(--text-light);
        }
        .contact-form {
          background: var(--white);
          padding: 2.5rem;
          border-radius: 8px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        }
        .form-group {
          margin-bottom: 1.5rem;
        }
        .form-label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 600;
          font-size: 0.9rem;
        }
        .form-input {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 1rem;
        }
        .form-input:focus {
          outline: none;
          border-color: var(--primary);
        }
        .map-placeholder {
          height: 250px;
          background-color: var(--accent);
          border-radius: 8px;
          margin-top: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-light);
          font-style: italic;
          border: 2px dashed #ccc;
        }
        .success-msg {
          background: #dcfce7;
          color: #166534;
          padding: 1rem;
          border-radius: 4px;
          margin-bottom: 1rem;
          text-align: center;
        }
        @media (max-width: 968px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }
      `}} />
            <div className="container">
                <h2 className="section-title fade-in">{t.contact.title}</h2>
                <div className="contact-grid">
                    <div className="info-card fade-in">
                        <div className="info-item">
                            <div className="info-icon"><MapPin size={24} /></div>
                            <div className="info-text">
                                <h4>Address</h4>
                                <p>{t.contact.info.address}</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <div className="info-icon"><Phone size={24} /></div>
                            <div className="info-text">
                                <h4>Phone</h4>
                                <p>{t.contact.info.phone}</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <div className="info-icon"><Mail size={24} /></div>
                            <div className="info-text">
                                <h4>Email</h4>
                                <p>{t.contact.info.email}</p>
                            </div>
                        </div>

                        <div className="map-placeholder">
                            [ Google Maps Integration Placeholder ]
                        </div>
                    </div>

                    <div className="contact-form fade-in">
                        {submitted && <div className="success-msg">{t.contact.form.success}</div>}
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label className="form-label">{t.contact.form.name}</label>
                                <input type="text" className="form-input" required />
                            </div>
                            <div className="form-group">
                                <label className="form-label">{t.contact.form.company}</label>
                                <input type="text" className="form-input" />
                            </div>
                            <div className="form-group">
                                <label className="form-label">{t.contact.form.email}</label>
                                <input type="email" className="form-input" required />
                            </div>
                            <div className="form-group">
                                <label className="form-label">{t.contact.form.message}</label>
                                <textarea className="form-input" rows="5" required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                                <Send size={18} style={{ marginRight: '8px' }} /> {t.contact.form.send}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
