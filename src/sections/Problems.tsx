import { FaHourglassHalf, FaMobileAlt, FaSearch, FaShieldAlt } from "react-icons/fa";

export default function Problems() {
  const problems = [
    {
      title: "Loading Lama",
      desc: "53% pengunjung langsung menutup website jika loading lebih dari 3 detik.",
      icon: <FaHourglassHalf />,
    },
    {
      title: "Tidak Mobile Friendly",
      desc: "Tampilan berantakan saat dibuka di HP, membuat bisnis terlihat tidak profesional.",
      icon: <FaMobileAlt />,
    },
    {
      title: "Hilang di Google",
      desc: "Website sulit ditemukan calon pelanggan karena struktur SEO yang buruk.",
      icon: <FaSearch />,
    },
    {
      title: "Rentan Diretas",
      desc: "Keamanan lemah yang membahayakan data pelanggan dan reputasi bisnis.",
      icon: <FaShieldAlt />,
    },
  ];

  return (
    <section id="problems" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Apakah Website Anda Mengalami <span className="text-red-500">Masalah Ini?</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Website yang buruk bukan aset, tapi beban. Jangan biarkan hal teknis menghambat omzet bisnis Anda.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((item, index) => (
            <div 
              key={index} 
              className="group bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-red-500 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-4xl mb-6 bg-gray-700 w-16 h-16 flex items-center justify-center rounded-full mx-auto text-red-500 group-hover:bg-red-500/20 transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-gray-100">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm text-center leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}