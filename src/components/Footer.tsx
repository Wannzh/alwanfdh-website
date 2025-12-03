import { useLanguage } from "../context/LanguageContext";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

export default function Footer() {
  const { t } = useLanguage();

  return (
    // UBAH: bg-gray-900 -> bg-slate-900 dan border-gray-800 -> border-slate-800
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          
          {/* Brand & Tagline */}
          <div className="col-span-1 md:col-span-2">
            <span className="text-2xl font-bold text-white block mb-4">
              Alwan<span className="text-blue-500">Dev</span>
            </span>
            <p className="text-sm max-w-xs leading-relaxed text-slate-400">
              {t.footer.tagline}
            </p>
          </div>
          
          {/* Navigation Links */}
          <div>
            <h4 className="text-white font-bold mb-4">{t.footer.nav_title}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" className="hover:text-blue-500 transition-colors">
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a href="#workflow" className="hover:text-blue-500 transition-colors">
                  {t.nav.workflow}
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-blue-500 transition-colors">
                  {t.nav.portfolio}
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-blue-500 transition-colors">
                  {t.nav.pricing}
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h4 className="text-white font-bold mb-4">{t.footer.social_title}</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="https://linkedin.com/in/alwanfdh" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-500 transition-colors">
                  <FaLinkedin className="text-lg" /> LinkedIn
                </a>
              </li>
              <li>
                <a href="https://instagram.com/wnn_fdh" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-pink-500 transition-colors">
                  <FaInstagram className="text-lg" /> Instagram
                </a>
              </li>
              <li>
                <a href="https://github.com/wannzh" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                  <FaGithub className="text-lg" /> GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          &copy; {new Date().getFullYear()} Alwan Fadhlurrohman. {t.footer.copyright}
        </div>
      </div>
    </footer>
  );
}