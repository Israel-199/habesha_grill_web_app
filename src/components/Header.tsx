import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, MapPin, Menu, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoMascot from "@/assets/logo-mascot.png";

const navItems = [
  { label: "Home", to: "/", hasDropdown: false },
  { label: "About Us", to: "/about", hasDropdown: false },
  { label: "Menu", to: "/#menu", hasDropdown: false },
  { label: "Contact", to: "/contact", hasDropdown: false },
  { label: "Order Online", to: "/order", hasDropdown: false },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (to: string) => {
    if (to === "/") return location.pathname === "/";
    return location.pathname.startsWith(to.replace("/#", ""));
  };

  const handleNavClick = (to: string) => {
    setIsMobileMenuOpen(false);
    if (to.includes("#")) {
      const hash = to.split("#")[1];
      if (location.pathname === "/") {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img 
              src={logoMascot} 
              alt="Habesha Grill Logo" 
              className="h-12 w-12 object-contain"
            />
            <span className="font-display text-xl font-bold text-foreground">
              Habesha<span className="text-primary">Grill</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                onClick={() => handleNavClick(item.to)}
                className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                  isActive(item.to)
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {item.label}
                {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
              </Link>
            ))}
            <div className="flex items-center gap-1 text-sm font-medium text-foreground">
              <MapPin className="w-4 h-4 text-primary" />
              Austin, TX
            </div>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button asChild className="btn-golden">
              <Link to="/order">
                <Search className="w-4 h-4 mr-2" />
                Order Now
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={() => handleNavClick(item.to)}
                  className={`flex items-center justify-between py-2 transition-colors ${
                    isActive(item.to)
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </Link>
              ))}
              <div className="flex items-center gap-2 py-2 text-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                Austin, TX
              </div>
              <Button asChild className="btn-golden w-full mt-2">
                <Link to="/order">
                  <Search className="w-4 h-4 mr-2" />
                  Order Now
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
