import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import About from "../sections/About";
import Contact from "../sections/Contact";
import Hero from "../sections/Hero";
import Portofolio from "../sections/Portofolio";
import Pricing from "../sections/Pricing";
import Problems from "../sections/Problems";
import Services from "../sections/Services";

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Problems />
            <Services />
            <Portofolio />
            <Pricing />
            <About />
            <Contact />
            <Footer />
        </>
    )
}