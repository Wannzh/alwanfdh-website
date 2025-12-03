import { useState, useEffect } from 'react';
import ButtonCTA from './ButtonCTA';
import { useLanguage } from '../context/LanguageContext';
import { FaGlobe } from 'react-icons/fa';

export default function Navbar() {
  const [scrolled, setIsScrolled] = useState(false);
  const { t, language, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-white/50 backdrop-blur-sm py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-slate-900">Alwan<span className="text-blue-600">Dev</span></a>
        
        <div className="hidden md:flex items-center space-x-8">
          {[
            ['about', t.nav.about],
            ['services', t.nav.services],
            ['workflow', t.nav.workflow],
            ['portfolio', t.nav.portfolio],
          ].map(([key, label]) => (
            <a key={key} href={`#${key}`} className="text-slate-600 hover:text-blue-600 font-medium transition-colors text-sm uppercase tracking-wide">
              {label}
            </a>
          ))}
          
          <button onClick={toggleLanguage} className="flex items-center gap-2 px-3 py-1 rounded-full border border-slate-300 hover:border-blue-500 text-slate-600 text-xs font-bold cursor-pointer">
            <FaGlobe /> {language.toUpperCase()}
          </button>

          <ButtonCTA href="#contact" variant="primary" className="!py-2 !px-5 text-sm shadow-blue-500/20">
            {t.nav.contact}
          </ButtonCTA>
        </div>
      </div>
    </nav>
  );
}