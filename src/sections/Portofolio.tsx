import SectionTitle from "../components/SectionTitle";
import ButtonCTA from "../components/ButtonCTA";
import { useLanguage } from "../context/LanguageContext";
import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";

export default function Portofolio() {
  const { t } = useLanguage();

  const projectImages = [
    "https://res.cloudinary.com/dimtuwrap/image/upload/v1764886718/ZakatNow_fbbjoh.png",
    "https://res.cloudinary.com/dimtuwrap/image/upload/v1764885771/Locobooking_pbfqq4.jpg",
    "https://res.cloudinary.com/dimtuwrap/image/upload/v1764886600/Cover_Wanflix_pyn383.png",
    "https://placehold.co/600x400/064e3b/FFF?text=GedeClimb"
  ];

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle title={t.portfolio.title} subtitle={t.portfolio.subtitle} />
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {t.portfolio.projects.map((project, index) => (
            <div key={index} className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-2xl hover:border-blue-200 transition-all duration-300 flex flex-col">
              
              {/* Image Container with Overlay */}
              <div className="relative overflow-hidden aspect-video bg-slate-100">
                <img 
                  src={projectImages[index]} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {project.link_demo !== "#" && (
                    <a 
                      href={project.link_demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 bg-white text-slate-900 rounded-full hover:bg-blue-500 hover:text-white transition-colors"
                      title="View Demo"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}
                  <a 
                    href={project.link_repo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-white text-slate-900 rounded-full hover:bg-slate-800 hover:text-white transition-colors"
                    title="View Code"
                  >
                    <FaGithub className="text-xl" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <FaCode className="text-slate-300 text-xl" />
                </div>
                
                <p className="text-slate-600 mb-6 leading-relaxed text-sm flex-1">
                  {project.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-full border border-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <ButtonCTA href="https://github.com/wannzh" variant="outline" className="border-slate-300 text-slate-600 hover:border-slate-900 hover:text-slate-900">
            <FaGithub className="mr-2 inline" /> Lihat Proyek Lainnya di GitHub
          </ButtonCTA>
        </div>
      </div>
    </section>
  )
}