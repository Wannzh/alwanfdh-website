import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import About from "../sections/About";
import Contact from "../sections/Contact";
import Hero from "../sections/Hero";
import Portofolio from "../sections/Portofolio";
import Pricing from "../sections/Pricing";
import Problems from "../sections/Problems";
import Services from "../sections/Services";
import Workflow from "../sections/Workflow";

export default function Home() {
    return (
        <div className="font-sans text-gray-800 antialiased overflow-x-hidden bg-white selection:bg-blue-100 selection:text-blue-900">
            <Navbar />
            <Hero />
            <Problems />
            <Services />
            <Workflow /> 
            <Portofolio />
            <Pricing />
            <About />
            <Contact />
            <Footer />
        </div>
    )
}