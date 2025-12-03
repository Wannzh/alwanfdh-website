import ButtonCTA from "../components/ButtonCTA";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Siap Mulai? Diskusi Langsung dengan Developernya</h2>
          <p className="text-gray-300 mb-6">Konsultasi langsung untuk cek kebutuhan, timeline, dan estimasi biaya. Slot terbatas setiap minggu — segera pesan waktu Anda.</p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <ButtonCTA href="https://wa.me/6285117072750" className="bg-green-500 hover:bg-green-600 flex items-center justify-center gap-3 py-3 px-6">
              <FaWhatsapp /> Hubungi via WhatsApp — Langsung Bicara dengan Developernya
            </ButtonCTA>

            <ButtonCTA href="mailto:muhamad@alwanfdh.my.id" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 flex items-center justify-center gap-3 py-3 px-6">
              <FaEnvelope /> Kirim RFP / Pertanyaan
            </ButtonCTA>
          </div>

          <p className="text-gray-400 text-sm mt-4">Balasan biasanya dalam 24 jam kerja. Jika perlu, sebutkan deadline Anda agar prioritas dapat diatur.</p>
        </div>
      </div>
    </section>
  );
}