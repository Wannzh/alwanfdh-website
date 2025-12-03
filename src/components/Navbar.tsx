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
        <div className="text-2xl font-bold text-gray-900">Alwan<span className="text-blue-600">Dev</span></div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">{t.nav.about}</a>
          <a href="#services" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">{t.nav.services}</a>
          <a href="#workflow" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">{t.nav.workflow}</a>
          <a href="#pricing" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">{t.nav.pricing}</a>
          
          {/* Language Toggle */}
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-1 rounded-full border border-gray-300 hover:border-blue-500 hover:text-blue-600 transition-all text-sm font-medium"
          >
            <FaGlobe />
            {language === 'id' ? 'EN' : 'ID'}
          </button>

          <ButtonCTA href="#contact" variant="primary" className="!py-2 !px-4 text-sm">
            {t.nav.contact}
          </ButtonCTA>
        </div>
      </div>
    </nav>
  );
}