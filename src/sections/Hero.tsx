import ButtonCTA from "../components/ButtonCTA";
import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-white to-slate-50 min-h-screen flex items-center">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold border border-blue-100">
            {t.hero.badge}
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
            {t.hero.title} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              {t.hero.subtitle}
            </span>
          </h1>
          <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
            {t.hero.desc}
          </p>
          <div className="flex gap-4 pt-4">
            <ButtonCTA href="#contact">{t.hero.cta_primary}</ButtonCTA>
            <ButtonCTA href="#portfolio" variant="outline">
              {t.hero.cta_secondary}
            </ButtonCTA>
          </div>
        </div>

        {/* Placeholder untuk Foto Profil atau Ilustrasi */}
        <div className="relative">
          <div className="absolute inset-0 bg-blue-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
          <img
            src="https://placehold.co/600x600/e2e8f0/1e293b?text=Foto+Alwan"
            alt="Alwan Fadhlurrohman"
            className="relative z-10 w-full rounded-2xl shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500"
          />
        </div>
      </div>
    </section>
  );
}
