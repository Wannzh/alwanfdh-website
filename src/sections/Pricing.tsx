import SectionTitle from "../components/SectionTitle";
import ButtonCTA from "../components/ButtonCTA";
import { FaCheck } from "react-icons/fa";

export default function Pricing() {
  const plans = [
    {
      name: "Landing Page",
      price: "700rb",
      desc: "Cocok untuk promosi produk atau event spesifik.",
      features: ["1 Halaman Responsive", "SEO Dasar", "Koneksi WhatsApp", "Revisi 2x", "Gratis Hosting 1 Tahun"],
      recommended: false,
    },
    {
      name: "Company Profile",
      price: "1.5jt",
      desc: "Website profesional untuk meningkatkan kredibilitas bisnis.",
      features: ["Hingga 5 Halaman", "Desain Premium", "Optimasi Kecepatan", "Setup Email Bisnis", "Gratis Domain .com"],
      recommended: true,
    },
    {
      name: "Custom System",
      price: "Hubungi Saya",
      desc: "Aplikasi web kompleks sesuai kebutuhan alur bisnis Anda.",
      features: ["Database Terintegrasi", "Dashboard Admin", "Fitur Login/Register", "API Integration", "Maintenance Bulanan"],
      recommended: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <SectionTitle title="Penawaran Terbaik" subtitle="Investasi cerdas untuk pertumbuhan digital bisnis Anda" />

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative p-8 bg-white rounded-2xl shadow-lg border transition-all duration-300 hover:-translate-y-2 ${plan.recommended ? 'border-blue-500 ring-2 ring-blue-500/20' : 'border-gray-100'}`}
            >
              {plan.recommended && (
                <span className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                  Terlaris
                </span>
              )}
              <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
              <p className="text-gray-500 text-sm mt-2 mb-6">{plan.desc}</p>
              
              <div className="text-3xl font-bold text-blue-900 mb-6">
                {plan.price === "Hubungi Saya" ? <span className="text-2xl">{plan.price}</span> : <>Rp {plan.price}<span className="text-sm text-gray-400 font-normal">/proyek</span></>}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-600 text-sm">
                    <span className="text-green-500 mr-2 flex-shrink-0">
                      <FaCheck />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <ButtonCTA href="#contact" variant={plan.recommended ? "primary" : "outline"} className="w-full text-center">
                Pilih Paket
              </ButtonCTA>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}