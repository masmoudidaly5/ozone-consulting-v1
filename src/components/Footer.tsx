import logo from "@/assets/logo-ozone.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-slate-900 py-6 border-t border-slate-100">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="OZONE CONSULTING"
              className="h-8"
            />
            <p className="text-slate-600 text-sm">
              Expert en consulting et formation SST
            </p>
          </div>

          <div className="text-center text-slate-400 text-sm">
            <p>© {currentYear} OZONE CONSULTING. Tous droits réservés.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
