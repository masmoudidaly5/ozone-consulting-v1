import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AboutBrief from "@/components/AboutBrief";
import Services from "@/components/Services";
import Nouveautes from "@/components/Nouveautes";
import ImageCarousel from "@/components/ImageCarousel";
import Formations from "@/components/Formations";
import Contact from "@/components/Contact";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen" id="home">
      <Navigation />
      <Hero />
      <AboutBrief />
      <Formations />
      <Services />
      <Nouveautes />
      <ImageCarousel />
      <Partners />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
