import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, UserCircle, ChevronDown } from "lucide-react";
import logo from "@/assets/logo-ozone.png";
import logoMobile from "@/assets/O3.png";
import { useNavigate, useLocation } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Accueil", href: "/#home" },
    { name: "À Propos", href: "/about" },
    {
      name: "Formations",
      href: "/formations",
      subItems: [
        { name: "Toutes les formations", href: "/formations" },
        { name: "Nouveautés (VR)", href: "/nouveautes" }
      ]
    },
    { name: "Services", href: "/services" },
    { name: "E-Platform", href: "/e-platform", badge: "Coming Soon" },
    { name: "Contact", href: "/contact" },
  ];

  const handleNavigation = (href: string) => {
    setIsMobileMenuOpen(false);

    if (href.startsWith("/#")) {
      const hash = href.replace("/", "");
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          const element = document.querySelector(hash);
          element?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        const element = document.querySelector(hash);
        element?.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(href);
      window.scrollTo(0, 0);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${isScrolled || location.pathname !== "/"
        ? "bg-background/95 backdrop-blur-md shadow-medium"
        : "bg-transparent"
        }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div
            className="flex items-center cursor-pointer"
            onClick={() => {
              if (location.pathname !== "/") {
                navigate("/");
              }
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <img
              src={logo}
              alt="OZONE CONSULTING"
              className={`h-10 transition-smooth hidden md:block ${isScrolled || location.pathname !== "/" ? "" : "brightness-0 invert"}`}
            />
            <img
              src={logoMobile}
              alt="O3"
              className={`h-10 transition-smooth md:hidden ${isScrolled || location.pathname !== "/" ? "" : "brightness-0 invert"}`}
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.badge && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-[10px] font-bold bg-accent text-white px-1.5 py-0.5 rounded-full animate-pulse whitespace-nowrap pointer-events-none">
                    {link.badge}
                  </span>
                )}

                {link.subItems ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger className={`flex items-center font-medium transition-smooth hover:text-accent outline-none ${isScrolled || location.pathname !== "/" ? "text-foreground" : "text-white"}`}>
                      {link.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {link.subItems.map((subItem) => (
                        <DropdownMenuItem key={subItem.name} onClick={() => handleNavigation(subItem.href)}>
                          {subItem.name}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <button
                    onClick={() => handleNavigation(link.href)}
                    className={`font-medium transition-smooth hover:text-accent ${isScrolled || location.pathname !== "/" ? "text-foreground" : "text-white"
                      } ${link.badge ? "cursor-default opacity-80 hover:text-current" : ""}`}
                  >
                    {link.name}
                  </button>
                )}
              </div>
            ))}
            <Button
              onClick={() => window.open('#', '_blank')}
              className="bg-accent hover:bg-accent/90 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <UserCircle className="w-4 h-4 mr-2" />
              Espace Client
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled || location.pathname !== "/" ? "text-foreground" : "text-white"} />
            ) : (
              <Menu className={isScrolled || location.pathname !== "/" ? "text-foreground" : "text-white"} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 bg-background/95 backdrop-blur-md rounded-lg shadow-medium mt-2">
            {navLinks.map((link) => (
              <div key={link.name}>
                <button
                  onClick={() => !link.subItems && handleNavigation(link.href)}
                  className="block w-full text-left px-4 py-3 text-foreground hover:bg-secondary transition-smooth flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  {link.badge && (
                    <span className="text-[10px] font-bold bg-accent text-white px-2 py-0.5 rounded-full animate-pulse">
                      {link.badge}
                    </span>
                  )}
                </button>
                {link.subItems && (
                  <div className="bg-secondary/50">
                    {link.subItems.map(subItem => (
                      <button
                        key={subItem.name}
                        onClick={() => handleNavigation(subItem.href)}
                        className="block w-full text-left px-8 py-2 text-sm text-foreground hover:bg-secondary transition-smooth"
                      >
                        {subItem.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <button
              onClick={() => {
                window.open('#', '_blank');
                setIsMobileMenuOpen(false);
              }}
              className="w-full text-left px-4 py-3 text-accent hover:bg-secondary transition-smooth font-semibold flex items-center gap-2"
            >
              <UserCircle className="w-4 h-4" />
              Espace Client
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
