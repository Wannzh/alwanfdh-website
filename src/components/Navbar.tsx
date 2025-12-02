import { useState, useEffect } from 'react';
import ButtonCTA from './ButtonCTA';

export default function Navbar() {
  const [scrolled,QH] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-900">Alwan<span className="text-blue-600">Dev</span></div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-gray-600 hover:text-blue-600 font-medium">Tentang</a>
          <a href="#services" className="text-gray-600 hover:text-blue-600 font-medium">Layanan</a>
          <a href="#portfolio" className="text-gray-600 hover:text-blue-600 font-medium">Portofolio</a>
          <ButtonCTA href="#contact" variant="primary" className="!py-2 !px-4">Konsultasi</ButtonCTA>
        </div>
      </div>
    </nav>
  );
}