import SectionTitle from "../components/SectionTitle";
import { useLanguage } from "../context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-white scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Bagian Gambar */}
          <div className="order-2 md:order-1 relative group">
            {/* Dekorasi Background */}
            <div className="absolute inset-0 bg-blue-600 rounded-2xl rotate-3 opacity-20 group-hover:rotate-6 transition-all duration-500"></div>
            <img 
              src="https://placehold.co/600x400/1e293b/FFFFFF?text=Coding+Workspace" 
              alt="Workspace" 
              className="relative z-10 w-full rounded-2xl shadow-xl border border-slate-100 object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          
          {/* Bagian Teks */}
          <div className="order-1 md:order-2">
            <SectionTitle 
              title={t.about.title} 
              subtitle={t.about.subtitle} 
            />
            
            <div className="prose prose-slate text-slate-600 mb-8 leading-relaxed">
              <p className="mb-4">
                {t.about.desc1}
              </p>
              <p>
                {t.about.desc2}
              </p>
            </div>

            {/* Skills List */}
            <div>
              <h3 className="font-bold text-slate-900 mb-4 text-lg border-l-4 border-blue-600 pl-3">
                {t.about.skills_title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {t.about.skills_list.map((skill: string, index: number) => (
                  <span 
                    key={index} 
                    className="px-4 py-2 bg-slate-50 text-slate-700 rounded-lg text-sm font-medium border border-slate-200 hover:border-blue-300 hover:text-blue-700 transition-all cursor-default shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}