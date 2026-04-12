import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import consultingImage from "@/assets/accompagnement et consulting.jpg";

const Services = () => {
  const navigate = useNavigate();

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 -translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Content */}
          <div className="w-full lg:w-1/2">
            <div className="relative group">
              <div className="absolute -inset-4 bg-accent/20 rounded-2xl blur-xl group-hover:bg-accent/30 transition duration-500"></div>
              <img
                src={consultingImage}
                alt="Nos Services de Consulting"
                className="relative rounded-2xl shadow-2xl w-full h-[400px] object-cover object-center transform transition duration-500 hover:scale-[1.02]"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <div className="space-y-6">
              <div className="inline-block px-4 py-1.5 bg-accent/10 border border-accent/20 rounded-full">
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">Expertise & Conseil</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-primary leading-tight">
                Nos Services de <br />
                <span className="text-accent">Consulting HSE</span>
              </h2>
              <div className="w-20 h-1.5 bg-accent rounded-full"></div>

              <p className="text-lg text-slate-600 leading-relaxed">
                OZONE Safety Hub vous accompagne dans l'optimisation de votre performance en santé-sécurité.
                Nous intervenons sur l'ensemble de vos problématiques réglementaires et techniques pour garantir un environnement de travail sûr.
              </p>

              <ul className="space-y-4">
                {[
                  "Évaluation des risques professionnels et document unique",
                  "Audit de conformité réglementaire (ISO 45001, ISO 14001)",
                  "Élaboration de plans d'opération interne (POI)",
                  "Externalisation de la fonction responsable HSSE"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-accent shrink-0" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4">
                <Button
                  className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 min-w-[250px]"
                  onClick={() => {
                    navigate('/services');
                    window.scrollTo(0, 0);
                  }}
                >
                  Découvrir tous nos services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
