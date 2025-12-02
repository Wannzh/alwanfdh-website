import SectionTitle from "../components/SectionTitle";

export default function Portofolio() {
  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <SectionTitle title="Karya Terbaru" subtitle="Beberapa proyek yang telah saya kerjakan" />
        
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="group bg-white rounded-xl overflow-hidden shadow-md">
              <div className="h-48 bg-gray-300 w-full relative overflow-hidden">
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold">
                  Lihat Detail
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">Project Name {item}</h3>
                <p className="text-gray-500 text-sm">React, Tailwind, TypeScript</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}