import SectionTitle from "../components/SectionTitle";
import ButtonCTA from "../components/ButtonCTA";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Siap Memulai Proyek Anda?</h2>
          <p className="text-blue-200 text-lg mb-10">
            Jangan ragu untuk berdiskusi. Konsultasi awal gratis! Saya akan membantu menemukan solusi terbaik sesuai budget Anda.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <ButtonCTA href="https://wa.me/6285117072750" className="bg-green-500 hover:bg-green-600 border-none shadow-green-500/30">
              Chat WhatsApp (0851-1707-2750)
            </ButtonCTA>
            <ButtonCTA href="mailto:muhamad@alwanfdh.my.id" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-900">
              Kirim Email
            </ButtonCTA>
          </div>

          <p className="mt-8 text-sm text-blue-300">
            Respon cepat pada jam kerja: Senin - Jumat (09.00 - 17.00)
          </p>
        </div>
      </div>
    </section>
  );
}