import SectionTitle from "../components/SectionTitle";
import { useLanguage } from "../context/LanguageContext";
import { FaBolt, FaCheckCircle, FaSearch, FaHeadset } from "react-icons/fa";

export default function Why() {
  const { t } = useLanguage();

  const icons = [<FaBolt />, <FaCheckCircle />, <FaSearch />, <FaHeadset />];

  return (
    <section id="why" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle title={t.why.title} subtitle={t.why.subtitle} />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.why.items.map((item, index) => (
            <div
              key={index}
              className="p-8 bg-slate-50 border border-slate-100 rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-3xl mb-5 text-blue-600 bg-blue-50 w-12 h-12 flex items-center justify-center rounded-xl">
                {icons[index]}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {item.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
