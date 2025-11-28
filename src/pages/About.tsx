import { SectionHeading } from "@/components/SectionHeading";
import { Card } from "@/components/ui/card";
import { Scissors, Heart, Award, Users } from "lucide-react";
import spaImage from "@/assets/spa-treatment.jpg";

export default function About() {
  const team = [
    {
      name: "Sophia Martinez",
      role: "Master Stylist & Founder",
      specialty: "Hair Styling & Coloring",
    },
    {
      name: "Emma Thompson",
      role: "Senior Spa Therapist",
      specialty: "Spa & Wellness Treatments",
    },
    {
      name: "Olivia Chen",
      role: "Makeup Artist",
      specialty: "Bridal & Special Events",
    },
    {
      name: "Isabella Rodriguez",
      role: "Hair Treatment Specialist",
      specialty: "Hair Care & Treatments",
    },
  ];

  const values = [
    {
      icon: Heart,
      title: "Client-Centered Care",
      description: "Your satisfaction and comfort are our top priorities",
    },
    {
      icon: Award,
      title: "Excellence in Service",
      description: "Committed to delivering outstanding results every time",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Highly trained professionals passionate about beauty",
    },
    {
      icon: Scissors,
      title: "Innovation",
      description: "Using latest techniques and premium products",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground">
              About Blush & Shine Salon
            </h1>
            <p className="text-lg text-muted-foreground font-body">
              Your trusted destination for beauty, wellness, and relaxation since 2015
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground font-body">
                <p>
                  Blush & Shine Salon was born from a passion for making people feel beautiful and
                  confident. Founded in 2015 by Sophia Martinez, our salon has grown into a premier
                  destination for luxury beauty and wellness services.
                </p>
                <p>
                  What started as a small boutique salon has blossomed into a full-service beauty
                  sanctuary, offering everything from expert hair styling and treatments to
                  rejuvenating spa therapies and stunning makeup artistry.
                </p>
                <p>
                  We believe that beauty is more than skin deep – it's about feeling good from the
                  inside out. That's why we've created a warm, welcoming space where you can relax,
                  unwind, and emerge feeling refreshed and radiant.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={spaImage}
                alt="Blush & Shine Salon interior"
                className="rounded-lg shadow-elegant w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Mission & Values"
            subtitle="The principles that guide everything we do"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-elegant transition-smooth border-border/50 bg-card"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-display font-semibold mb-2 text-foreground">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground font-body">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Meet Our Expert Team"
            subtitle="Passionate professionals dedicated to your beauty and wellness"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-elegant transition-smooth border-border/50"
              >
                <div className="h-48 bg-gradient-to-br from-primary to-accent"></div>
                <div className="p-6 space-y-2 bg-card">
                  <h3 className="text-xl font-display font-semibold text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-sm font-body font-medium text-primary">{member.role}</p>
                  <p className="text-sm text-muted-foreground font-body">{member.specialty}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "9+", label: "Years Experience" },
              { number: "5000+", label: "Happy Clients" },
              { number: "15+", label: "Expert Stylists" },
              { number: "25+", label: "Premium Services" },
            ].map((stat, index) => (
              <div key={index} className="space-y-2">
                <p className="text-4xl md:text-5xl font-display font-bold text-primary">
                  {stat.number}
                </p>
                <p className="text-sm md:text-base font-body text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
