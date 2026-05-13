import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap, Users, ShieldCheck, Zap } from "lucide-react";
import formationImage from "@/assets/Photos/Hutchinson.jpg";
import { motion, useSpring, useTransform, useInView } from "framer-motion";

import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

const AnimatedNumber = ({ value }: { value: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 });
  const display = useTransform(spring, (current) => Math.round(current).toLocaleString());

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, value, spring]);

  return <motion.span ref={ref}>{display}</motion.span>;
};

const Formations = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <section id="formations" className="py-24 bg-[#033853] relative overflow-hidden">
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

            </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <div className="space-y-6">
              <div className="inline-block px-4 py-1.5 bg-white/10 border border-white/20 rounded-full">
                <span className="text-white font-semibold text-sm uppercase tracking-wider">{t("formations_section.tag")}</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">
                {t("formations_section.title_part1")} <br />
                <span className="text-accent">{t("formations_section.title_part2")}</span>
              </h2>
              <div className="w-20 h-1.5 bg-accent rounded-full"></div>

              <p className="text-lg text-white/80 leading-relaxed">
                {t("formations_section.description")}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                {[
                  { icon: GraduationCap, title: t("formations_section.sst"), desc: t("formations_section.sst_desc") },
                  { icon: ShieldCheck, title: t("formations_section.fire"), desc: t("formations_section.fire_desc") },
                  { icon: Zap, title: t("formations_section.habilitation"), desc: t("formations_section.habilitation_desc") },
                  { icon: Users, title: t("formations_section.management"), desc: t("formations_section.management_desc") }
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
                  {t("formations_section.view_catalog")}
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
