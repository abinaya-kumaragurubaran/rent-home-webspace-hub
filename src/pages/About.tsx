import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Home, Users, Shield, Award, Star, Clock } from "lucide-react";

const stats = [
  { icon: Home, label: "Properties", value: "10,000+" },
  { icon: Users, label: "Happy Renters", value: "50,000+" },
  { icon: Star, label: "Average Rating", value: "4.9/5" },
  { icon: Award, label: "Years Experience", value: "15+" },
];

const values = [
  {
    icon: Shield,
    title: "Trust & Security",
    description: "Every property is verified and every transaction is secure. Your safety is our priority."
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Our dedicated support team is available around the clock to assist you with any needs."
  },
  {
    icon: Users,
    title: "Community First",
    description: "We build lasting relationships with our community of renters, landlords, and partners."
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for excellence in every interaction and continuously improve our services."
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-gradient-primary text-primary-foreground">
        <div className="p-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Home className="w-8 h-8" />
            <span className="text-2xl font-bold">RentHub</span>
          </div>
          <h1 className="text-3xl font-bold mb-2">About Us</h1>
          <p className="text-primary-foreground/90 max-w-md mx-auto">
            Your trusted partner in finding the perfect rental home
          </p>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Mission Statement */}
        <Card className="bg-gradient-card shadow-card border-0">
          <CardContent className="p-6">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Our Mission</Badge>
            <h2 className="text-xl font-bold text-foreground mb-3">
              Making Home Rental Simple & Secure
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              At RentHub, we believe everyone deserves a place to call home. Our mission is to 
              simplify the rental process by connecting quality properties with quality people, 
              while ensuring transparency, security, and exceptional service every step of the way.
            </p>
          </CardContent>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3">
          {stats.map(({ icon: Icon, label, value }) => (
            <Card key={label} className="text-center p-4 bg-gradient-card shadow-card border-0">
              <CardContent className="space-y-2">
                <Icon className="w-8 h-8 text-primary mx-auto" />
                <div className="text-2xl font-bold text-foreground">{value}</div>
                <div className="text-sm text-muted-foreground">{label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* What Sets Us Apart */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-4">What Sets Us Apart</h2>
          <div className="space-y-4">
            {values.map(({ icon: Icon, title, description }) => (
              <Card key={title} className="bg-gradient-card shadow-card border-0">
                <CardContent className="p-4">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-2">{title}</h3>
                      <p className="text-muted-foreground text-sm">{description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Company Story */}
        <Card className="bg-gradient-card shadow-card border-0">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold text-foreground mb-4">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2009, RentHub started with a simple idea: make renting easier for everyone. 
                What began as a small local service has grown into a trusted nationwide platform.
              </p>
              <p>
                Today, we're proud to serve over 50,000 happy renters across 500+ cities, with a 
                team dedicated to innovation and customer satisfaction.
              </p>
              <p>
                Our platform combines cutting-edge technology with human expertise to deliver an 
                unparalleled rental experience that puts people first.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="p-6 text-center">
            <h3 className="text-xl font-bold text-foreground mb-2">
              Ready to Find Your Home?
            </h3>
            <p className="text-muted-foreground mb-4">
              Join thousands of satisfied renters and discover your perfect rental today.
            </p>
            <Button className="w-full" size="lg">
              Start Your Search
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}