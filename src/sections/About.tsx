import SectionTitle from "../components/SectionTitle";

export default function About() {
  const skills = ["React", "TypeScript", "Tailwind CSS", "Node.js", "Vite", "Next.js"];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <img 
              src="https://placehold.co/600x400/blue/white?text=Coding+Workspace" 
              alt="Workspace" 
              className="rounded-2xl shadow-2xl"
            />
          </div>
          
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Lebih dari Sekadar Koding</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Halo! Saya adalah pengembang web yang berfokus pada performa dan pengalaman pengguna. 
              Saya percaya website yang bagus tidak hanya terlihat indah, tapi juga harus cepat, 
              aman, dan mudah digunakan.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Dengan latar belakang teknis yang kuat, saya siap membantu menerjemahkan ide bisnis 
              Anda menjadi solusi digital yang nyata dan berdampak.
            </p>

            <h3 className="font-bold text-gray-900 mb-4">Tech Stack Andalan:</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}