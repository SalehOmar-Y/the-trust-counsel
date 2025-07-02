import { Link } from "react-router-dom";
import { ArrowRight, Shield, Users, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/hero-image.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-background via-trust-light to-background overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professional legal support"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90" />
      </div>

      <div className="container mx-auto px-4 lg:px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-medium">
                <Shield className="h-4 w-4 mr-2" />
                Trusted Legal Support
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Connecting{" "}
                <span className="bg-gradient-trust bg-clip-text text-transparent">
                  Asylum Seekers
                </span>{" "}
                with{" "}
                <span className="text-primary">Trusted Solicitors</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Finding reliable legal representation shouldn't be overwhelming. 
                We connect refugees and asylum seekers across the UK with 
                verified, compassionate solicitors who understand your journey.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/find-solicitor">
                  Find a Solicitor
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/emergency">Emergency Support</Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 pt-6">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Users className="h-5 w-5 text-primary" />
                <span className="font-medium">500+ Verified Solicitors</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Heart className="h-5 w-5 text-accent" />
                <span className="font-medium">Free Initial Consultations</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Shield className="h-5 w-5 text-trust-green" />
                <span className="font-medium">24/7 Support Available</span>
              </div>
            </div>
          </div>

          {/* Quick Access Cards */}
          <div className="space-y-6">
            <Card className="p-6 bg-card/50 backdrop-blur-sm border shadow-soft hover:shadow-trust transition-smooth">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    Need Legal Help?
                  </h3>
                </div>
                <p className="text-muted-foreground">
                  Get matched with experienced solicitors who specialize in 
                  asylum and immigration law. Start with a free consultation.
                </p>
                <Button variant="trust" className="w-full" asChild>
                  <Link to="/get-started">Start Your Search</Link>
                </Button>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border shadow-soft hover:shadow-trust transition-smooth">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <Shield className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    Solicitor?
                  </h3>
                </div>
                <p className="text-muted-foreground">
                  Join our trusted network of legal professionals committed 
                  to helping refugees and asylum seekers.
                </p>
                <Button variant="warm" className="w-full" asChild>
                  <Link to="/join">Join Our Network</Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};