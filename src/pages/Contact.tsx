import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground">
              Get in Touch
            </h1>
            <p className="text-lg text-muted-foreground font-body">
              We'd love to hear from you. Reach out for any questions or inquiries
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-display font-bold mb-6 text-foreground">
                  Contact Information
                </h2>
                <p className="text-muted-foreground font-body mb-8">
                  Visit us, call us, or drop us a message. We're here to help you look and feel your best.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <Card className="p-6 border-border/50 bg-card hover:shadow-soft transition-smooth">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-lg mb-1 text-foreground">
                        Our Location
                      </h3>
                      <p className="text-muted-foreground font-body">
                        123 Beauty Boulevard<br />
                        Glamour District, City 12345<br />
                        United States
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-border/50 bg-card hover:shadow-soft transition-smooth">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-lg mb-1 text-foreground">
                        Phone
                      </h3>
                      <a
                        href="tel:+1234567890"
                        className="text-muted-foreground hover:text-primary transition-smooth font-body"
                      >
                        +1 (234) 567-890
                      </a>
                      <p className="text-sm text-muted-foreground font-body mt-1">
                        Mon-Sun: 9:00 AM - 8:00 PM
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-border/50 bg-card hover:shadow-soft transition-smooth">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-lg mb-1 text-foreground">
                        WhatsApp
                      </h3>
                      <a
                        href="https://wa.me/1234567890"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-smooth font-body"
                      >
                        Chat with us on WhatsApp
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-border/50 bg-card hover:shadow-soft transition-smooth">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-lg mb-1 text-foreground">
                        Email
                      </h3>
                      <a
                        href="mailto:hello@blushshine.com"
                        className="text-muted-foreground hover:text-primary transition-smooth font-body"
                      >
                        hello@blushshine.com
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-border/50 bg-card hover:shadow-soft transition-smooth">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-lg mb-1 text-foreground">
                        Business Hours
                      </h3>
                      <p className="text-muted-foreground font-body">
                        Monday - Sunday<br />
                        9:00 AM - 8:00 PM<br />
                        <span className="text-sm italic">Walk-ins welcome!</span>
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="p-8 shadow-elegant border-border/50">
                <h2 className="text-2xl font-display font-bold mb-6 text-foreground">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="contact-name" className="text-foreground font-body font-medium">
                      Your Name *
                    </Label>
                    <Input
                      id="contact-name"
                      type="text"
                      placeholder="Enter your name"
                      required
                      className="font-body"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-email" className="text-foreground font-body font-medium">
                      Email Address *
                    </Label>
                    <Input
                      id="contact-email"
                      type="email"
                      placeholder="your@email.com"
                      required
                      className="font-body"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-phone" className="text-foreground font-body font-medium">
                      Phone Number
                    </Label>
                    <Input
                      id="contact-phone"
                      type="tel"
                      placeholder="+1 (234) 567-890"
                      className="font-body"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-message" className="text-foreground font-body font-medium">
                      Your Message *
                    </Label>
                    <Textarea
                      id="contact-message"
                      placeholder="How can we help you?"
                      rows={6}
                      required
                      className="font-body"
                    />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full text-lg">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Find Us"
            subtitle="Visit our beautiful salon location"
          />
          <div className="max-w-5xl mx-auto">
            <div className="aspect-video bg-muted rounded-lg overflow-hidden shadow-elegant">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.6174339866945!2d-73.98731368423283!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Blush & Shine Salon Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
