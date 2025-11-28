import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock, User, Mail, Phone, MessageSquare } from "lucide-react";
import { toast } from "sonner";

export default function Booking() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Booking request received! We'll contact you shortly to confirm.");
  };

  const services = [
    "Hair Styling",
    "Hair Treatment",
    "Spa Therapy",
    "Facial Care",
    "Makeup & Bridal",
    "Other",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground">
              Book Your Appointment
            </h1>
            <p className="text-lg text-muted-foreground font-body">
              Fill out the form below and we'll get back to you to confirm your booking
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="p-8 md:p-12 shadow-elegant border-border/50">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground font-body font-medium">
                    <User className="w-4 h-4 inline mr-2" />
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    required
                    className="font-body"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground font-body font-medium">
                    <Phone className="w-4 h-4 inline mr-2" />
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (234) 567-890"
                    required
                    className="font-body"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground font-body font-medium">
                    <Mail className="w-4 h-4 inline mr-2" />
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                    className="font-body"
                  />
                </div>

                {/* Service */}
                <div className="space-y-2">
                  <Label htmlFor="service" className="text-foreground font-body font-medium">
                    Select Service *
                  </Label>
                  <select
                    id="service"
                    required
                    className="w-full px-3 py-2 rounded-md border border-input bg-background text-foreground font-body focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Choose a service...</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date & Time */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="date" className="text-foreground font-body font-medium">
                      <Calendar className="w-4 h-4 inline mr-2" />
                      Preferred Date *
                    </Label>
                    <Input id="date" type="date" required className="font-body" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time" className="text-foreground font-body font-medium">
                      <Clock className="w-4 h-4 inline mr-2" />
                      Preferred Time *
                    </Label>
                    <Input id="time" type="time" required className="font-body" />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground font-body font-medium">
                    <MessageSquare className="w-4 h-4 inline mr-2" />
                    Additional Notes (Optional)
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Any specific requirements or questions..."
                    rows={4}
                    className="font-body"
                  />
                </div>

                {/* Submit Button */}
                <Button type="submit" variant="hero" size="lg" className="w-full text-lg py-6">
                  Submit Booking Request
                </Button>

                <p className="text-sm text-muted-foreground font-body text-center">
                  * Required fields. We'll contact you within 24 hours to confirm your appointment.
                </p>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Booking Information"
            subtitle="Important details about appointments"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="p-6 text-center border-border/50 bg-card">
              <h3 className="font-display font-semibold text-lg mb-2 text-foreground">
                Flexible Timing
              </h3>
              <p className="text-sm text-muted-foreground font-body">
                Open 7 days a week, 9 AM - 8 PM
              </p>
            </Card>
            <Card className="p-6 text-center border-border/50 bg-card">
              <h3 className="font-display font-semibold text-lg mb-2 text-foreground">
                Easy Cancellation
              </h3>
              <p className="text-sm text-muted-foreground font-body">
                Cancel up to 24 hours before appointment
              </p>
            </Card>
            <Card className="p-6 text-center border-border/50 bg-card">
              <h3 className="font-display font-semibold text-lg mb-2 text-foreground">
                Quick Confirmation
              </h3>
              <p className="text-sm text-muted-foreground font-body">
                Get confirmed within 24 hours
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
