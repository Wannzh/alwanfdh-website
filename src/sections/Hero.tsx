import ButtonCTA from "../components/ButtonCTA";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen flex items-center">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
            👋 Halo, Saya Alwan Fadhlurrohman
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Web Developer & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              System Builder
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-lg">
            Saya membantu UMKM & institusi membangun website profesional 
            yang cepat, aman, dan meningkatkan konversi penjualan Anda.
          </p>
          <div className="flex gap-4">
            <ButtonCTA href="#contact">Mulai Proyek</ButtonCTA>
            <ButtonCTA href="#portfolio" variant="outline">Lihat Karya</ButtonCTA>
          </div>
        </div>
        
        {/* Placeholder untuk Foto Profil atau Ilustrasi */}
        <div className="relative">
          <div className="absolute inset-0 bg-blue-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
          <img 
            src="https://placehold.co/600x600/e2e8f0/1e293b?text=Foto+Alwan" 
            alt="Alwan Fadhlurrohman" 
            className="relative z-10 w-full rounded-2xl shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500"
          />
        </div>
      </div>
    </section>
  )
}