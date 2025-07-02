import { Link } from "react-router-dom";
import { Scale, Phone, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 lg:px-6 py-12">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 group">
              <Scale className="h-8 w-8 text-primary group-hover:text-trust-blue transition-smooth" />
              <span className="text-xl font-bold text-foreground">
                The Trust Counsel
              </span>
            </Link>
            <p className="text-muted-foreground leading-relaxed">
              Connecting asylum seekers and refugees with trusted legal 
              professionals across the UK. Your journey to safety starts here.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link 
                to="/find-solicitor" 
                className="text-muted-foreground hover:text-primary transition-smooth"
              >
                Find a Solicitor
              </Link>
              <Link 
                to="/emergency" 
                className="text-muted-foreground hover:text-primary transition-smooth"
              >
                Emergency Help
              </Link>
              <Link 
                to="/resources" 
                className="text-muted-foreground hover:text-primary transition-smooth"
              >
                Resources
              </Link>
              <Link 
                to="/about" 
                className="text-muted-foreground hover:text-primary transition-smooth"
              >
                About Us
              </Link>
            </nav>
          </div>

          {/* For Professionals */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">For Solicitors</h4>
            <nav className="flex flex-col space-y-2">
              <Link 
                to="/join" 
                className="text-muted-foreground hover:text-primary transition-smooth"
              >
                Join Our Network
              </Link>
              <Link 
                to="/partner-resources" 
                className="text-muted-foreground hover:text-primary transition-smooth"
              >
                Partner Resources
              </Link>
              <Link 
                to="/training" 
                className="text-muted-foreground hover:text-primary transition-smooth"
              >
                Training Programs
              </Link>
              <Link 
                to="/support" 
                className="text-muted-foreground hover:text-primary transition-smooth"
              >
                Partner Support
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>0800 123 4567</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>help@trustcounsel.uk</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>London, United Kingdom</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 The Trust Counsel. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-smooth">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-muted-foreground hover:text-primary transition-smooth">
              Terms of Service
            </Link>
            <Link to="/accessibility" className="text-muted-foreground hover:text-primary transition-smooth">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};