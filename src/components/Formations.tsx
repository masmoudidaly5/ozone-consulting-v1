import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap, Users, ShieldCheck, Zap } from "lucide-react";
import formationImage from "@/assets/Photos/Hutchinson.jpg";

const Formations = () => {
  const navigate = useNavigate();

  return (
    <section id="formations" className="py-24 bg-primary relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
          {/* Image Content */}
          <div className="w-full lg:w-1/2">
            <div className="relative group">
              <div className="absolute -inset-4 bg-accent/20 rounded-2xl blur-xl group-hover:bg-accent/30 transition duration-500"></div>
              <img
                src={formationImage}
                alt="Nos Formations en Sécurité"
                className="relative rounded-2xl shadow-2xl w-full h-[400px] object-cover object-center transform transition duration-500 hover:scale-[1.02]"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <Users className="text-white h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">+850</p>
                    <p className="text-sm text-muted-foreground">Stagiaires formés</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <div className="space-y-6">
              <div className="inline-block px-4 py-1.5 bg-white/10 border border-white/20 rounded-full">
                <span className="text-white font-semibold text-sm uppercase tracking-wider">Formation & Coaching</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">
                Développez vos <br />
                <span className="text-accent">Compétences Santé & Sécurité</span>
              </h2>
              <div className="w-20 h-1.5 bg-accent rounded-full"></div>

              <p className="text-lg text-white/80 leading-relaxed">
                Nos programmes de formation sont conçus pour transformer la culture sécurité de votre entreprise.
                Une approche pédagogique interactive et pratique pour une meilleure assimilation des concepts.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                {[
                  { icon: GraduationCap, title: "SST", desc: "Sauveteur Secouriste du Travail" },
                  { icon: ShieldCheck, title: "Incendie", desc: "Manipulation des extincteurs" },
                  { icon: Zap, title: "Habilitation", desc: "Sécurité électrique" },
                  { icon: Users, title: "Management", desc: "Culture de sécurité" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-white/10 hover:border-accent/40 shadow-sm transition-colors">
                    <item.icon className="h-6 w-6 text-accent shrink-0" />
                    <div>
                      <h4 className="font-bold text-primary">{item.title}</h4>
                      <p className="text-xs text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <Button
                  className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 min-w-[250px]"
                  onClick={() => {
                    navigate('/formations');
                    window.scrollTo(0, 0);
                  }}
                >
                  Voir le catalogue complet
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

export default Formations;
