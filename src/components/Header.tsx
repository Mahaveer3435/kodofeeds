
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
  ];

  return (
    <header className="glass-effect border-b border-border/50 sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 text-xl font-bold text-primary hover:text-primary-glow transition-colors duration-300 group"
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-primary shadow-card flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <img src="/logo.png" alt="Kodo Feeds Logo" className="w-10 h-10 rounded-lg object-contain" />
            </div>
            <span className="text-gradient">Kodo Feeds</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-all duration-300 hover:text-primary relative group px-3 py-2 rounded-lg ${
                  isActive(link.path) 
                    ? "text-primary bg-primary/5" 
                    : "text-muted-foreground hover:bg-muted/50"
                }`}
              >
                {link.name}
                <span 
                  className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-6 ${
                    isActive(link.path) ? "w-6" : ""
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden glass-effect border border-border/50 shadow-card"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden animate-fade-in-up">
            <nav className="px-2 pt-2 pb-6 space-y-2 glass-effect border-t border-border/50 rounded-b-xl mx-4 mb-4 shadow-card">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block px-4 py-3 text-base font-medium transition-colors duration-300 rounded-lg ${
                    isActive(link.path)
                      ? "text-primary bg-primary/10 shadow-card"
                      : "text-muted-foreground hover:text-primary hover:bg-muted/50"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
