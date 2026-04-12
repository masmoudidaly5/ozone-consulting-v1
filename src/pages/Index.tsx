import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Nouveautes from "@/components/Nouveautes";
import ImageCarousel from "@/components/ImageCarousel";
import Formations from "@/components/Formations";
import Industries from "@/components/Industries";
import Contact from "@/components/Contact";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen" id="home">
      <Hero />
      <Formations />
      <Services />
      <Nouveautes />
      <Industries />
      <ImageCarousel />
      <Partners />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
