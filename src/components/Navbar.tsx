import { useState, useEffect } from "react";
import ButtonCTA from "./ButtonCTA";
import { useLanguage } from "../context/LanguageContext";
import { FaGlobe, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [scrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, language, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    ["about", t.nav.about],
    ["services", t.nav.services],
    ["seo", t.nav.seo],
    ["workflow", t.nav.workflow],
    ["portfolio", t.nav.portfolio],
    ["pricing", t.nav.pricing],
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-white/50 backdrop-blur-sm py-6"}`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-slate-900">
            Alwan<span className="text-blue-600">Dev</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.slice(0, 5).map(([key, label]) => (
              <a
                key={key}
                href={`#${key}`}
                className="text-slate-600 hover:text-blue-600 font-medium transition-colors text-sm uppercase tracking-wide"
              >
                {label}
              </a>
            ))}

            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-1 rounded-full border border-slate-300 hover:border-blue-500 text-slate-600 text-xs font-bold cursor-pointer"
            >
              <FaGlobe /> {language.toUpperCase()}
            </button>

            <ButtonCTA
              href="#contact"
              variant="primary"
              className="!py-2 !px-5 text-sm shadow-blue-500/20"
            >
              {t.nav.contact}
            </ButtonCTA>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-700 hover:text-blue-600 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300 ${mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white z-50 md:hidden transform transition-transform duration-300 ease-in-out shadow-2xl ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex justify-between items-center p-6 border-b border-slate-100">
            <span className="text-xl font-bold text-slate-900">
              Alwan<span className="text-blue-600">Dev</span>
            </span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-slate-500 hover:text-slate-700 transition-colors"
              aria-label="Close menu"
            >
              <FaTimes className="text-xl" />
            </button>
          </div>

          {/* Mobile Menu Links */}
          <div className="flex-1 overflow-y-auto py-6">
            <nav className="flex flex-col space-y-1 px-4">
              {navLinks.map(([key, label]) => (
                <a
                  key={key}
                  href={`#${key}`}
                  onClick={handleNavClick}
                  className="py-3 px-4 text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-all text-base"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          {/* Mobile Menu Footer */}
          <div className="p-6 border-t border-slate-100 space-y-4">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-slate-200 hover:border-blue-500 text-slate-600 font-semibold transition-all"
            >
              <FaGlobe /> {language === "id" ? "Indonesia" : "English"}
            </button>

            {/* CTA Button */}
            <ButtonCTA
              href="#contact"
              variant="primary"
              className="w-full text-center justify-center py-3"
              onClick={handleNavClick}
            >
              {t.nav.contact}
            </ButtonCTA>
          </div>
        </div>
      </div>
    </>
  );
}
