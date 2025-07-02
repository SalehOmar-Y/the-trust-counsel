import { Shield, Search, Heart, Clock, Award, Globe } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Search,
    title: "Smart Matching",
    description: "Our intelligent system connects you with solicitors who specialize in your specific case type and location.",
    color: "text-primary"
  },
  {
    icon: Shield,
    title: "Verified Professionals",
    description: "All solicitors in our network are thoroughly vetted and registered with the Solicitors Regulation Authority.",
    color: "text-trust-green"
  },
  {
    icon: Heart,
    title: "Compassionate Care",
    description: "Work with legal professionals who understand the unique challenges faced by asylum seekers and refugees.",
    color: "text-accent"
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Access emergency legal guidance and support whenever you need it most, day or night.",
    color: "text-trust-warm"
  },
  {
    icon: Award,
    title: "Quality Assured",
    description: "Regular quality assessments ensure you receive the highest standard of legal representation.",
    color: "text-primary"
  },
  {
    icon: Globe,
    title: "Multilingual Support",
    description: "Connect with solicitors who speak your language and understand your cultural background.",
    color: "text-trust-blue"
  }
];

export const Features = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose The Trust Counsel?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're committed to providing accessible, reliable legal support for 
            those who need it most. Here's what makes us different.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-6 bg-card hover:shadow-soft transition-smooth border group hover:border-primary/20"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-background rounded-lg shadow-soft group-hover:shadow-trust transition-smooth">
                    <feature.icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};