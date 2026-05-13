import { Building2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import consultingImage from "@/assets/consulting.jpg";
import isoImage from "@/assets/iso-45001.jpg";
import heroImage from "@/assets/hero-safety.jpg";
import cnfcppLogo from "@/assets/logo/cnfcpp-logo.png";
import o3Logo from "@/assets/O3.png";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="relative py-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="space-y-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              {t("about.title")}
            </h3>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* First Column - Image + Text */}
            <div className="space-y-6">
              <div className="relative rounded-2xl overflow-hidden shadow-strong h-64">
                <img
                  src={consultingImage}
                  alt="Consulting OZONE"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-display font-bold text-white">
                  {t("about.approach_title")}
                </h4>
                <p className="text-gray-200 leading-relaxed">
                  {t("about.approach_p1")}
                </p>
                <p className="text-gray-200 leading-relaxed">
                  {t("about.approach_p2")}
                </p>
              </div>
            </div>

            {/* Second Column - Image + Text */}
            <div className="space-y-6">
              <div className="relative rounded-2xl overflow-hidden shadow-strong h-64">
                <img
                  src={heroImage}
                  alt="Engagement OZONE"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-accent/60 to-transparent"></div>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-display font-bold text-white">
                  {t("about.engagement_title")}
                </h4>
                <p className="text-gray-200 leading-relaxed">
                  {t("about.engagement_p1")}
                </p>
                <p className="text-gray-200 leading-relaxed">
                  {t("about.engagement_p2")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
