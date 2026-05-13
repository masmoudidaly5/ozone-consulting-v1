import { useTranslation } from "react-i18next";
import logo from "@/assets/logo-ozone.png";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#033853] text-white py-6 border-t border-white/10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="OZONE CONSULTING"
              className="h-8"
            />
            <p className="text-white/70 text-sm">
              {t("footer.tagline")}
            </p>
          </div>

          <div className="text-center text-white/50 text-sm">
            <p>{t("footer.copyright", { year: currentYear })}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
