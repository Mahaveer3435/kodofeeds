import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src="/logo.png" alt="Kodo Feeds Logo" className="w-16 h-16 rounded-lg object-contain bg-primary-foreground" />
              <span className="text-xl font-bold">Kodo Feeds</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Premium nutrition solutions for healthy chickens and optimal egg production. 
              Your trusted partner in poultry farming success.
            </p>
            <div className="flex space-x-3">
              <a href="https://www.instagram.com/kodofeeds11/" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
                  <Instagram className="h-4 w-4 text-[#F94206]" />
                </Button>
              </a>
              <a href="https://www.linkedin.com/company/kodo-premium-feeds-private-limited" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
                  <Linkedin className="h-4 w-4 text-[#F94206]" />
                </Button>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <a href="#testimonials" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Products</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-primary-foreground/80">Layer Feed</li>
              <li className="text-primary-foreground/80">Broiler Feed</li>
              <li className="text-primary-foreground/80">Organic Feed</li>
              <li className="text-primary-foreground/80">Starter Feed</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary-foreground/60" />
                <span className="text-primary-foreground/80">+91 9148493835</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary-foreground/60" />
                <span className="text-primary-foreground/80">kodofeeds@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-primary-foreground/60 mt-1" />
                <span className="text-primary-foreground/80">
                Dairy premises, UAS Dharwad, Karnataka, India
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2025 Kodo Feeds. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;