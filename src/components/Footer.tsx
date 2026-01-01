import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from "lucide-react";
import logoMascot from "@/assets/logo-mascot.png";

interface FooterProps {
  onMenuCategoryClick?: (category: string) => void;
}

const Footer = ({ onMenuCategoryClick }: FooterProps) => {
  const handleMenuItemClick = (category: string) => {
    onMenuCategoryClick?.(category);
  };

  const quickLinks = [
    { label: "Home", to: "/" },
    { label: "Menu", to: "/#menu" },
    { label: "About Us", to: "/about" },
    { label: "Contact", to: "/contact" },
    { label: "Order Online", to: "/order" },
  ];

  const popularItems = [
    { label: "Tibsi Beef", category: "meat", to: "/order" },
    { label: "Injera", category: "sides", to: "/order" },
    { label: "Shiro", category: "vegetable", to: "/order" },
    { label: "Vegetable Combo", category: "vegetable", to: "/order" },
    { label: "Traditional Coffee", category: "hot-drinks", to: "/order" },
  ];

  return (
    <footer className="bg-hero-bg text-card" id="contact">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div id="about">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src={logoMascot} alt="Habesha Grill" className="h-12 w-12" />
              <span className="font-display text-xl font-bold">
                Habesha<span className="text-primary">Grill</span>
              </span>
            </Link>
            <p className="text-card/70 mb-6">
              Authentic Ethiopian & Eritrean cuisine served fresh from our food trailer 
              in Austin, Texas. Experience the rich flavors of East Africa.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-card/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-card/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-card/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-card/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Items */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Popular Items</h4>
            <ul className="space-y-3">
              {popularItems.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    onClick={() => handleMenuItemClick(item.category)}
                    className="text-card/70 hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <a 
                  href="https://maps.google.com/?q=5011+E+Cesar+Chavez+St,+Austin,+TX+78702"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-card/70 hover:text-primary transition-colors"
                >
                  5011 E Cesar Chavez St, Austin, TX 78702
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <a href="tel:+17372028238" className="text-card/70 hover:text-primary transition-colors">
                  +1 737-202-8238
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:info@habeshagrill.com" className="text-card/70 hover:text-primary transition-colors">
                  info@habeshagrill.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-0.5" />
                <div className="text-card/70">
                  <div>Mon - Sat: 11:00 AM - 8:00 PM</div>
                  <div>Sunday: Closed</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-card/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-card/50">
            <p>© 2026 Habesha Grill. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/about" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/about" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
