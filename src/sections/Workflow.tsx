import SectionTitle from "../components/SectionTitle";
import { useLanguage } from "../context/LanguageContext";
import { FaComments, FaMap, FaHandshake, FaCode, FaCheckDouble, FaRocket } from "react-icons/fa";

export default function Workflow() {
  const { t } = useLanguage();
  const icons = [<FaComments />, <FaMap />, <FaHandshake />, <FaCode />, <FaCheckDouble />, <FaRocket />];

  return (
    <section id="workflow" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <SectionTitle title={t.workflow.title} subtitle={t.workflow.subtitle} />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.workflow.steps.map((step, index) => (
            <div key={index} className="relative bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="absolute top-6 right-6 text-5xl font-black text-slate-100 -z-0 select-none">0{index + 1}</div>
              <div className="relative z-10 text-3xl text-blue-600 mb-4 bg-blue-50 w-14 h-14 flex items-center justify-center rounded-xl">
                {icons[index]}
              </div>
              <h3 className="relative z-10 text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
              <p className="relative z-10 text-slate-600 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}