import SectionTitle from "../components/SectionTitle";
import { useLanguage } from "../context/LanguageContext";
import { FaComments, FaCalculator, FaHandshake, FaCode, FaSyncAlt, FaRocket } from "react-icons/fa";

export default function Workflow() {
  const { t } = useLanguage();

  const icons = [
    <FaComments />, 
    <FaCalculator />, 
    <FaHandshake />, 
    <FaCode />, 
    <FaSyncAlt />, 
    <FaRocket />
  ];

  return (
    <section id="workflow" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <SectionTitle title={t.workflow.title} subtitle={t.workflow.subtitle} />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.workflow.steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100">
              {/* Number Badge */}
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-blue-600 text-white font-bold rounded-full flex items-center justify-center shadow-lg border-4 border-slate-50">
                {index + 1}
              </div>
              
              <div className="text-4xl text-blue-500 mb-4 p-4 bg-blue-50 rounded-full">
                {icons[index]}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}