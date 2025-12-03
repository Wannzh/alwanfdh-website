import ButtonCTA from "../components/ButtonCTA";
import { useLanguage } from "../context/LanguageContext";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section
      id="contact"
      className="py-20 bg-slate-900 text-white relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500 rounded-full blur-[100px] opacity-10 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t.contact.title}
          </h2>
          <p className="text-slate-300 mb-8 text-lg">{t.contact.desc}</p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <ButtonCTA
              href="https://wa.me/6285117072750"
              className="bg-green-500 hover:bg-green-600 flex items-center justify-center gap-3 py-3 px-6"
            >
              <FaWhatsapp /> {t.contact.btn_wa}
            </ButtonCTA>

            <ButtonCTA
              href="mailto:muhamad@alwanfdh.my.id"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900 flex items-center justify-center gap-3 py-3 px-6"
            >
              <FaEnvelope /> {t.contact.btn_email}
            </ButtonCTA>
          </div>

          <p className="text-gray-400 text-sm mt-4">{t.contact.note}</p>
        </div>
      </div>
    </section>
  );
}
