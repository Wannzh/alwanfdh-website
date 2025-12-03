import SectionTitle from "../components/SectionTitle";
import { useLanguage } from "../context/LanguageContext";
import { FaBuilding, FaRocket, FaUniversity, FaLaptopCode } from "react-icons/fa";

export default function Services() {
  const { t } = useLanguage();
  
  // Array ikon yang urutannya sesuai dengan data di translations.ts
  const icons = [
    <FaBuilding />,      // Sesuai index 0: Website Bisnis
    <FaRocket />,        // Sesuai index 1: Landing Page
    <FaUniversity />,    // Sesuai index 2: Sistem Informasi/Institusi
    <FaLaptopCode />     // Sesuai index 3: Custom Web App
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle title={t.services.title} subtitle={t.services.subtitle} />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.services.items.map((service, index) => (
            <div key={index} className="p-8 bg-white border border-gray-100 rounded-2xl hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="text-5xl mb-6 text-gray-300 group-hover:text-blue-600 transition-colors duration-300">
                {/* Render ikon berdasarkan index */}
                {icons[index]}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-700 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}