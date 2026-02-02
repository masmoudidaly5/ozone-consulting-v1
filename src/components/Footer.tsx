import logo from "@/assets/logo-ozone.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="OZONE CONSULTING"
              className="h-8 brightness-0 invert"
            />
            <p className="text-primary-foreground/80 text-sm">
              Expert en consulting et formation SST
            </p>
          </div>

          <div className="text-center text-primary-foreground/60 text-sm">
            <p>© {currentYear} OZONE CONSULTING. Tous droits réservés.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
