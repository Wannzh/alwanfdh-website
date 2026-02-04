import SectionTitle from "../components/SectionTitle";
import { useLanguage } from "../context/LanguageContext";

export default function SeoContent() {
  const { t } = useLanguage();

  return (
    <section id="seo" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle title={t.seo.title} subtitle={t.seo.subtitle} />

        <div className="grid lg:grid-cols-3 gap-8">
          {t.seo.blocks.map((block, index) => (
            <div
              key={index}
              className="p-8 bg-slate-50 border border-slate-100 rounded-2xl hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {block.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                {block.desc}
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                {block.points.map((point, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="text-blue-600 font-bold">-</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
