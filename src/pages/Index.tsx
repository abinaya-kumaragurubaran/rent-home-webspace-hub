import { Button } from "@/components/ui/button";
import { SearchBar } from "@/components/SearchBar";
import { PropertyCard } from "@/components/PropertyCard";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Home, 
  Shield, 
  Clock, 
  Users, 
  Star,
  MapPin,
  Phone,
  Mail,
  Award
} from "lucide-react";
import { Link } from "react-router-dom";

import heroImage from "@/assets/hero-home.jpg";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

const featuredProperties = [
  {
    id: "1",
    title: "Luxury Downtown Apartment",
    location: "Downtown, New York",
    price: 3200,
    rating: 4.9,
    beds: 2,
    baths: 2,
    sqft: 1200,
    image: property1,
    featured: true,
  },
  {
    id: "2",
    title: "Modern Family House",
    location: "Suburban Area, California",
    price: 2800,
    rating: 4.7,
    beds: 4,
    baths: 3,
    sqft: 2400,
    image: property2,
  },
  {
    id: "3",
    title: "Stylish City Condo",
    location: "Midtown, Chicago",
    price: 2500,
    rating: 4.8,
    beds: 1,
    baths: 1,
    sqft: 800,
    image: property3,
  },
];

const services = [
  {
    icon: Shield,
    title: "Verified Properties",
    description: "All properties are thoroughly verified and inspected for quality assurance."
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock customer support to assist you with any queries or concerns."
  },
  {
    icon: Users,
    title: "Trusted Community",
    description: "Join thousands of satisfied tenants who found their perfect home with us."
  },
  {
    icon: Award,
    title: "Best Prices",
    description: "Competitive pricing with no hidden fees. Get the best value for your money."
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Mobile Header */}
      <div className="bg-card/95 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50 md:hidden">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Home className="w-8 h-8 text-primary" />
            <span className="text-xl font-bold text-foreground">RentHub</span>
          </div>
          <Button variant="outline" size="sm" asChild>
            <Link to="/login">Sign In</Link>
          </Button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-[80vh] md:h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-4 md:space-y-6 mb-8 md:mb-10">
            <Badge className="bg-card/20 backdrop-blur-sm text-card border-card/30">
              Trusted by 50,000+ Renters
            </Badge>
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-card leading-tight">
              Find Your Perfect
              <span className="block text-accent">Rental Home</span>
            </h1>
            <p className="text-base md:text-xl text-card/90 max-w-2xl mx-auto px-4">
              Discover amazing properties with verified listings, competitive prices, 
              and exceptional service. Your dream home is just a search away.
            </p>
          </div>
          
          <SearchBar />
          
          <div className="mt-8 flex items-center justify-center gap-6 text-card/80">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 fill-current text-yellow-400" />
              <span>4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>500+ Cities</span>
            </div>
            <div className="flex items-center gap-2">
              <Home className="w-5 h-5" />
              <span>10,000+ Properties</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Properties
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Handpicked properties that offer exceptional value and outstanding amenities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} {...property} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/properties">View All Properties</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose RentHub?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide exceptional service and support throughout your rental journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center p-6 bg-gradient-card shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105 border-0">
                <CardContent className="space-y-4">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Find Your Home?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get in touch with our expert team to start your rental journey today
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center p-8 bg-gradient-card shadow-card border-0">
              <CardContent className="space-y-4">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Call Us</h3>
                <p className="text-muted-foreground">+1 (555) 123-4567</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 bg-gradient-card shadow-card border-0">
              <CardContent className="space-y-4">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Email Us</h3>
                <p className="text-muted-foreground">hello@renthub.com</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 bg-gradient-card shadow-card border-0">
              <CardContent className="space-y-4">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Visit Us</h3>
                <p className="text-muted-foreground">123 Main St, City, State</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center space-x-4">
            <Button size="lg" variant="accent" asChild>
              <Link to="/properties">Get Started</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Home className="w-8 h-8 text-primary" />
                <span className="text-xl font-bold">RentHub</span>
              </div>
              <p className="text-background/80">
                Your trusted partner in finding the perfect rental home. 
                Quality properties, exceptional service.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Properties</h4>
              <ul className="space-y-2 text-background/80">
                <li><a href="#" className="hover:text-primary transition-colors">Apartments</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Houses</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Condos</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Townhouses</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-background/80">
                <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-background/80">
                <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60">
            <p>&copy; 2024 RentHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;