import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, MessageCircle, Home } from "lucide-react";

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak with our team",
    value: "+1 (555) 123-4567",
    action: "tel:+15551234567"
  },
  {
    icon: Mail,
    title: "Email Us",
    description: "Send us a message",
    value: "hello@renthub.com",
    action: "mailto:hello@renthub.com"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    description: "Our office location",
    value: "123 Main St, City, State",
    action: "#"
  }
];

const officeHours = [
  { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
  { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
  { day: "Sunday", hours: "Closed" }
];

export default function Contact() {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-gradient-primary text-primary-foreground p-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Home className="w-8 h-8" />
          <span className="text-2xl font-bold">RentHub</span>
        </div>
        <h1 className="text-2xl font-bold">Contact Us</h1>
        <p className="text-primary-foreground/90">We're here to help you find your perfect home</p>
      </div>

      <div className="p-4 space-y-6">
        {/* Quick Contact Methods */}
        <div className="grid grid-cols-1 gap-4">
          {contactMethods.map(({ icon: Icon, title, description, value, action }) => (
            <Card key={title} className="bg-gradient-card shadow-card border-0">
              <CardContent className="p-4">
                <a href={action} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{description}</p>
                    <p className="text-sm text-primary font-medium">{value}</p>
                  </div>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Office Hours */}
        <Card className="bg-gradient-card shadow-card border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              Office Hours
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {officeHours.map(({ day, hours }) => (
                <div key={day} className="flex justify-between items-center">
                  <span className="text-foreground font-medium">{day}</span>
                  <span className="text-muted-foreground">{hours}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Contact Form */}
        <Card className="bg-gradient-card shadow-card border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-primary" />
              Send us a Message
            </CardTitle>
            <CardDescription>
              Fill out the form below and we'll get back to you within 24 hours
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" placeholder="John" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" placeholder="Doe" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="john.doe@email.com" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number (Optional)</Label>
              <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" placeholder="How can we help you?" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Tell us more about your inquiry..."
                rows={4}
              />
            </div>

            <Button className="w-full" size="lg">
              Send Message
            </Button>
          </CardContent>
        </Card>

        {/* FAQ Quick Links */}
        <Card className="bg-accent/10 border-accent/20">
          <CardContent className="p-4">
            <h3 className="font-semibold text-foreground mb-3">Quick Help</h3>
            <div className="space-y-2">
              <Button variant="ghost" className="w-full justify-start text-left h-auto p-2">
                <div>
                  <div className="font-medium">How do I schedule a viewing?</div>
                  <div className="text-sm text-muted-foreground">Learn about our viewing process</div>
                </div>
              </Button>
              <Button variant="ghost" className="w-full justify-start text-left h-auto p-2">
                <div>
                  <div className="font-medium">What documents do I need?</div>
                  <div className="text-sm text-muted-foreground">Required documentation for renting</div>
                </div>
              </Button>
              <Button variant="ghost" className="w-full justify-start text-left h-auto p-2">
                <div>
                  <div className="font-medium">How does the application process work?</div>
                  <div className="text-sm text-muted-foreground">Step-by-step application guide</div>
                </div>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Emergency Contact */}
        <Card className="bg-destructive/10 border-destructive/20">
          <CardContent className="p-4 text-center">
            <h3 className="font-semibold text-foreground mb-2">Emergency Contact</h3>
            <p className="text-sm text-muted-foreground mb-3">
              For urgent property maintenance issues
            </p>
            <Button variant="destructive" className="w-full">
              <Phone className="w-4 h-4 mr-2" />
              Emergency Hotline: (555) 999-0000
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}