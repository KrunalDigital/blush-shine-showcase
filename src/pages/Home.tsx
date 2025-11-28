import { Link } from "react-router-dom";
import { Sparkles, Users, Award, Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/SectionHeading";
import heroImage from "@/assets/hero-salon.jpg";

export default function Home() {
  const features = [
    {
      icon: Sparkles,
      title: "Clean Ambience",
      description: "Luxurious and hygienic environment with modern facilities",
    },
    {
      icon: Users,
      title: "Professional Stylists",
      description: "Expert team with years of experience in beauty and wellness",
    },
    {
      icon: Award,
      title: "Premium Products",
      description: "Using only the finest, salon-grade products for best results",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "Absolutely love this salon! The staff is so professional and the ambience is just perfect. I always leave feeling beautiful and refreshed.",
    },
    {
      name: "Emily Davis",
      rating: 5,
      text: "Best spa experience I've ever had! The facial treatment was heavenly and the massage was so relaxing. Highly recommend!",
    },
    {
      name: "Jessica Williams",
      rating: 5,
      text: "My go-to place for all beauty needs. The hair styling is amazing and they really understand what looks good. Love it here!",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-[90vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${heroImage})` }}
      >
        <div className="container mx-auto px-4 text-center text-white z-10">
          <div className="max-w-3xl mx-auto space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight">
              Experience Beauty, Glow & Relaxation
            </h1>
            <p className="text-lg md:text-xl font-body text-white/90">
              Indulge in premium salon and spa services that bring out your natural radiance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/booking">
                <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                  Book Appointment
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-foreground">
                  View Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Why Choose Blush & Shine?"
            subtitle="We provide exceptional beauty and wellness services in a luxurious, relaxing environment"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-8 text-center hover:shadow-elegant transition-smooth border-border/50 bg-card"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4 shadow-soft">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground font-body">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="What Our Clients Say"
            subtitle="Hear from our happy and satisfied customers"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-elegant transition-smooth border-border/50 bg-card"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground font-body mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <Heart className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-display font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground font-body">Valued Client</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              Ready to Transform Your Look?
            </h2>
            <p className="text-lg font-body text-white/90">
              Book your appointment today and experience the Blush & Shine difference
            </p>
            <Link to="/booking">
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-foreground">
                Book Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
