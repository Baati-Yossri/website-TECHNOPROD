import React, { useState, useEffect } from 'react';
import { translations } from './translations';
import Header from './components/Header';
import Hero from './components/Hero';
import Sectors from './components/Sectors';
import About from './components/About';
import Products from './components/Products';
import WhyUs from './components/WhyUs';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    const [lang, setLang] = useState('fr');
    const t = translations[lang];

    const toggleLang = () => {
        setLang(prev => (prev === 'en' ? 'fr' : 'en'));
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, [lang]);

    return (
        <div className="app">
            <Header t={t} currentLang={lang} toggleLang={toggleLang} />
            <main>
                <Hero t={t} />
                <Sectors t={t} />
                <About t={t} />
                <Products t={t} />
                <WhyUs t={t} />
                <Contact t={t} />
            </main>
            <Footer t={t} />
        </div>
    );
}

export default App;
