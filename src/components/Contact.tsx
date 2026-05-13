import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  const [activeLocation, setActiveLocation] = useState<'sfax' | 'sousse'>('sfax');

  return (
    <section id="contact" className="relative py-24 bg-[#033853] overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[128px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[128px] pointer-events-none"></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-white">
            {t("contact_section.title")}
          </h2>
          <div className="w-24 h-1.5 bg-accent mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            {t("contact_section.intro")}
          </p>
        </div>

        <div className="flex flex-col gap-6 max-w-5xl mx-auto">
          {/* Top Row: Phone & Email */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Phone */}
            <Card className="shadow-2xl border border-gray-100 hover:border-accent/20 transition-all">
              <CardContent className="pt-6 h-full flex flex-col justify-between">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold mb-2 text-primary">{t("contact_section.phone")}</h3>
                    <p className="text-slate-600 font-medium">+216 22 017 151</p>
                    <p className="text-sm text-slate-500 mt-1">{t("contact_section.hours_week")}</p>
                    <p className="text-sm text-slate-500">{t("contact_section.hours_sat")}</p>
                  </div>
                </div>
                <Button
                  className="w-full bg-primary hover:bg-primary/90 text-white mt-2"
                  onClick={() => window.open('tel:+21622017151')}
                >
                  <Phone className="mr-2 h-4 w-4" /> {t("contact_section.call_now")}
                </Button>
              </CardContent>
            </Card>

            {/* Email */}
            <Card className="shadow-2xl border border-gray-100 hover:border-accent/20 transition-all">
              <CardContent className="pt-6 h-full flex flex-col justify-between">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold mb-2 text-primary">{t("contact_section.email")}</h3>
                    <p className="text-slate-600 font-medium">contact.O3consulting@gmail.com</p>
                    <p className="text-sm text-slate-500 mt-1">{t("contact_section.response_time")}</p>
                  </div>
                </div>
                <Button
                  className="w-full bg-primary hover:bg-primary/90 text-white mt-2"
                  onClick={() => window.open('mailto:contact.O3consulting@gmail.com')}
                >
                  <Mail className="mr-2 h-4 w-4" /> {t("contact_section.send_email")}
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Address with Map - Full Width */}
          <Card className="shadow-2xl border border-gray-100 hover:border-accent/20 transition-all overflow-hidden">
            <CardContent className="p-0 flex flex-col md:flex-row h-[450px]">
              <div className="p-8 md:w-1/3 flex flex-col justify-center bg-white/5">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-xl mb-1 text-primary">{t("contact_section.our_offices")}</h3>
                    <p className="text-slate-500 text-sm mb-6">{t("contact_section.visit_us")}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <div className="flex space-x-2 mb-4">
                      <Button
                        variant={activeLocation === 'sfax' ? "default" : "outline"}
                        size="sm"
                        onClick={() => setActiveLocation('sfax')}
                        className={`flex-1 ${activeLocation === 'sfax' ? 'bg-primary hover:bg-primary/90' : 'hover:bg-primary/5'}`}
                      >
                        Sfax
                      </Button>
                      <Button
                        variant={activeLocation === 'sousse' ? "default" : "outline"}
                        size="sm"
                        onClick={() => setActiveLocation('sousse')}
                        className={`flex-1 ${activeLocation === 'sousse' ? 'bg-primary hover:bg-primary/90' : 'hover:bg-primary/5'}`}
                      >
                        Sousse
                      </Button>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-slate-100 shadow-sm min-h-[100px] flex items-center">
                      {activeLocation === 'sfax' ? (
                        <p className="text-slate-600 animate-fade-in text-sm leading-relaxed">
                          <strong className="block text-primary mb-1">{t("contact_section.sfax_hq")}</strong>
                          1, Avenue imam sahnoun km7 chihia, 3041, Sfax
                        </p>
                      ) : (
                        <p className="text-slate-600 animate-fade-in text-sm leading-relaxed">
                          <strong className="block text-primary mb-1">{t("contact_section.sousse_office")}</strong>
                          Le maghreb Médical - Complexe SELMA 4 - Bloc B, Sousse
                        </p>
                      )}
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full border-primary/20 text-primary hover:bg-primary/5"
                    onClick={() => window.open(activeLocation === 'sfax'
                      ? "https://maps.google.com/?q=34.80349668667002,10.739440096167026"
                      : "https://maps.google.com/?q=35.83918909793552,10.623131340283386"
                      , '_blank')}
                  >
                    <MapPin className="mr-2 h-4 w-4" /> {t("contact_section.get_directions")}
                  </Button>
                </div>
              </div>

              <div className="w-full md:w-2/3 bg-muted relative h-full">
                {activeLocation === 'sfax' ? (
                  <iframe
                    src="https://maps.google.com/maps?q=34.80349668667002,10.739440096167026&z=15&t=k&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Carte Sfax"
                    className="animate-fade-in h-full w-full grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                  ></iframe>
                ) : (
                  <iframe
                    src="https://maps.google.com/maps?q=35.83918909793552,10.623131340283386&z=15&t=k&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Carte Sousse"
                    className="animate-fade-in h-full w-full grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                  ></iframe>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
