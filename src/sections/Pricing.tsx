import SectionTitle from "../components/SectionTitle";
import ButtonCTA from "../components/ButtonCTA";
import { FaCheck } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

export default function Pricing() {
  const { t } = useLanguage();

  return (
    <section id="pricing" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <SectionTitle title={t.pricing.title} subtitle={t.pricing.subtitle} />

        <div className="grid md:grid-cols-3 gap-8">
          {t.pricing.plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative flex flex-col p-8 bg-white rounded-2xl shadow-sm border transition-all duration-300 hover:-translate-y-2 ${plan.recommended ? 'border-blue-500 ring-4 ring-blue-500/10 shadow-xl' : 'border-slate-200 hover:border-blue-200 hover:shadow-md'}`}
            >
              {plan.recommended && (
                <span className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                  Best Seller
                </span>
              )}
              
              <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
              <p className="text-slate-500 text-sm mt-2 mb-6 h-10 leading-relaxed">{plan.desc}</p>
              
              <div className="text-3xl font-bold text-blue-900 mb-6">
                {plan.price}
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-slate-600 text-sm">
                    <span className="text-green-500 mr-2 flex-shrink-0">
                      <FaCheck />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <ButtonCTA 
                  href="#contact" 
                  variant={plan.recommended ? "primary" : "outline"} 
                  className="w-full text-center justify-center"
                >
                  {t.pricing.cta}
                </ButtonCTA>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}