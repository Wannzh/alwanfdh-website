import SectionTitle from "../components/SectionTitle";
import { FaBuilding, FaRocket, FaUniversity, FaLaptopCode } from "react-icons/fa";

export default function Services() {
  const services = [
    { 
      title: "Website Bisnis", 
      desc: "Tampilkan profil perusahaan Anda dengan desain elegan dan profesional.", 
      icon: <FaBuilding /> 
    },
    { 
      title: "Landing Page", 
      desc: "Halaman khusus untuk meningkatkan penjualan produk atau jasa spesifik.", 
      icon: <FaRocket /> 
    },
    { 
      title: "Website Institusi", 
      desc: "Sistem informasi terintegrasi untuk sekolah, yayasan, atau lembaga.", 
      icon: <FaUniversity /> 
    },
    { 
      title: "Custom Web App", 
      desc: "Aplikasi berbasis web sesuai kebutuhan alur kerja bisnis Anda.", 
      icon: <FaLaptopCode /> 
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle title="Layanan Profesional" subtitle="Solusi digital terbaik untuk kebutuhan bisnis Anda" />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 bg-white border border-gray-100 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="text-4xl mb-4 text-blue-600 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}