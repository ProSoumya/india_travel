import { Link } from "react-router-dom";
import { Plane, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                <Plane className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold">TravelIndia</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Your trusted partner in discovering the incredible beauty and diversity of India. 
              Creating unforgettable memories since 2010.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-primary-foreground/20 rounded-full flex items-center justify-center hover:bg-primary-foreground/30 transition-smooth cursor-pointer">
                <Facebook className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 bg-primary-foreground/20 rounded-full flex items-center justify-center hover:bg-primary-foreground/30 transition-smooth cursor-pointer">
                <Instagram className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 bg-primary-foreground/20 rounded-full flex items-center justify-center hover:bg-primary-foreground/30 transition-smooth cursor-pointer">
                <Twitter className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/about" className="block text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                About Us
              </Link>
              <Link to="/destinations" className="block text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                Destinations
              </Link>
              <Link to="/tours" className="block text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                Tour Packages
              </Link>
              <Link to="/gallery" className="block text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                Gallery
              </Link>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Support</h3>
            <div className="space-y-2">
              <Link to="/contact" className="block text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                Contact Us
              </Link>
              <Link to="/testimonials" className="block text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                Testimonials
              </Link>
              <Link to="/news" className="block text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                News & Updates
              </Link>
              <a href="#" className="block text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                Privacy Policy
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary-foreground/60" />
                <span className="text-primary-foreground/80">+91 78739 51016</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary-foreground/60" />
                <span className="text-primary-foreground/80">info@travelindia.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-primary-foreground/60 mt-1" />
                <span className="text-primary-foreground/80">
                  123 Travel Street<br />
                  Mumbai, Maharashtra 400001
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2024 TravelIndia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export { Footer };