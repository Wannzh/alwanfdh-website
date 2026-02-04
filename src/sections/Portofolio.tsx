import SectionTitle from "../components/SectionTitle";
import { useLanguage } from "../context/LanguageContext";
import { FaExternalLinkAlt, FaCode } from "react-icons/fa";

export default function Portofolio() {
  const { t } = useLanguage();
  const fallbackImage =
    "https://placehold.co/1200x675/0f172a/FFFFFF?text=Project+Preview";

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle
          title={t.portfolio.title}
          subtitle={t.portfolio.subtitle}
        />

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {t.portfolio.projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-2xl hover:border-blue-200 transition-all duration-300 flex flex-col"
            >
              {/* Image Container with Overlay */}
              <div className="relative overflow-hidden aspect-video bg-slate-100">
                <img
                  src={project.image || fallbackImage}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                {/* Desktop: Show on hover */}
                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:flex items-center justify-center gap-4">
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
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <FaCode className="text-slate-300 text-xl hidden md:block" />
                </div>

                <p className="text-slate-600 mb-3 leading-relaxed text-sm flex-1">
                  {project.desc}
                </p>
                <p className="text-slate-500 text-sm mb-4 border-l-2 border-blue-100 pl-3">
                  {project.impact}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-full border border-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Mobile: Always visible action buttons */}
                <div className="flex gap-3 md:hidden mt-auto pt-2">
                  {project.link_demo !== "#" && (
                    <a
                      href={project.link_demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <FaExternalLinkAlt className="text-xs" /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
