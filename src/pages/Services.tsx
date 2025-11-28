import { SectionHeading } from "@/components/SectionHeading";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Scissors, Sparkles, Flower2, Star, Palette } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Scissors,
      category: "Hair Styling",
      description: "Expert cuts, styling, and blowouts for all hair types",
      services: [
        "Women's Haircut & Style",
        "Men's Haircut & Grooming",
        "Hair Coloring & Highlights",
        "Keratin Treatment",
        "Hair Styling for Events",
      ],
      priceRange: "$50 - $250",
    },
    {
      icon: Sparkles,
      category: "Hair Treatment",
      description: "Deep conditioning and restorative treatments for healthy hair",
      services: [
        "Deep Conditioning Treatment",
        "Protein Treatment",
        "Scalp Treatment",
        "Hair Botox",
        "Olaplex Treatment",
      ],
      priceRange: "$60 - $180",
    },
    {
      icon: Flower2,
      category: "Spa Therapy",
      description: "Luxurious spa treatments for ultimate relaxation",
      services: [
        "Swedish Massage",
        "Deep Tissue Massage",
        "Hot Stone Therapy",
        "Aromatherapy",
        "Body Scrub & Wrap",
      ],
      priceRange: "$80 - $200",
    },
    {
      icon: Star,
      category: "Facial Care",
      description: "Rejuvenating facials for glowing, healthy skin",
      services: [
        "Classic Facial",
        "Anti-Aging Facial",
        "Hydrating Facial",
        "Acne Treatment",
        "Gold Facial",
      ],
      priceRange: "$70 - $180",
    },
    {
      icon: Palette,
      category: "Makeup & Bridal",
      description: "Professional makeup artistry for every occasion",
      services: [
        "Party Makeup",
        "Bridal Makeup",
        "Pre-Bridal Package",
        "Engagement Makeup",
        "Makeup Trial",
      ],
      priceRange: "$100 - $500",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground">
              Our Premium Services
            </h1>
            <p className="text-lg text-muted-foreground font-body">
              Comprehensive beauty and wellness services tailored to your needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-elegant transition-smooth border-border/50 bg-card flex flex-col"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 shadow-soft">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-display font-bold mb-3 text-foreground">
                  {service.category}
                </h3>
                
                <p className="text-muted-foreground font-body mb-4">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6 flex-grow">
                  {service.services.map((item, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground font-body flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground font-body mb-3">
                    Price Range: <span className="font-semibold text-primary">{service.priceRange}</span>
                  </p>
                  <Link to="/booking">
                    <Button variant="default" className="w-full">
                      Book This Service
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              title="Service Information"
              subtitle="Everything you need to know about our services"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 text-center border-border/50 bg-card">
                <h3 className="font-display font-semibold text-lg mb-2 text-foreground">
                  Expert Consultation
                </h3>
                <p className="text-sm text-muted-foreground font-body">
                  Free consultation before every service to understand your needs
                </p>
              </Card>
              <Card className="p-6 text-center border-border/50 bg-card">
                <h3 className="font-display font-semibold text-lg mb-2 text-foreground">
                  Premium Products
                </h3>
                <p className="text-sm text-muted-foreground font-body">
                  We use only salon-grade, professional products
                </p>
              </Card>
              <Card className="p-6 text-center border-border/50 bg-card">
                <h3 className="font-display font-semibold text-lg mb-2 text-foreground">
                  Custom Packages
                </h3>
                <p className="text-sm text-muted-foreground font-body">
                  Custom service packages available for bridal and events
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              Not Sure Which Service to Choose?
            </h2>
            <p className="text-lg font-body text-white/90">
              Our expert team is here to help you find the perfect service for your needs
            </p>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-foreground">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
