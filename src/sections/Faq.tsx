import SectionTitle from "../components/SectionTitle";
import { useLanguage } from "../context/LanguageContext";
import { FaChevronDown } from "react-icons/fa";

export default function Faq() {
  const { t } = useLanguage();

  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <SectionTitle title={t.faq.title} subtitle={t.faq.subtitle} />

        <div className="max-w-3xl mx-auto space-y-4">
          {t.faq.items.map((item, index) => (
            <details
              key={index}
              className="group bg-white border border-slate-200 rounded-2xl p-6 shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between text-slate-900 font-semibold">
                <span>{item.q}</span>
                <FaChevronDown className="text-slate-400 transition-transform duration-300 group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
