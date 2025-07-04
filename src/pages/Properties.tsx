import { useState } from "react";
import { PropertyCard } from "@/components/PropertyCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Search, MapPin, Home as HomeIcon, DollarSign, SlidersHorizontal } from "lucide-react";

import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

const allProperties = [
  {
    id: "1",
    title: "Luxury Downtown Apartment",
    location: "Downtown, New York",
    price: 3200,
    rating: 4.9,
    beds: 2,
    baths: 2,
    sqft: 1200,
    type: "apartment",
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
    type: "house",
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
    type: "apartment",
    image: property3,
  },
  {
    id: "4",
    title: "Cozy Studio Apartment",
    location: "Brooklyn, New York",
    price: 1800,
    rating: 4.6,
    beds: 0,
    baths: 1,
    sqft: 500,
    type: "studio",
    image: property1,
  },
  {
    id: "5",
    title: "Spacious Villa",
    location: "Beverly Hills, California",
    price: 8500,
    rating: 4.9,
    beds: 5,
    baths: 4,
    sqft: 3500,
    type: "villa",
    image: property2,
  },
];

export default function Properties() {
  const [searchQuery, setSearchQuery] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState([0, 10000]);

  const filteredProperties = allProperties.filter((property) => {
    const matchesSearch = property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         property.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = !propertyType || property.type === propertyType;
    const matchesLocation = !location || property.location.toLowerCase().includes(location.toLowerCase());
    const matchesPrice = property.price >= priceRange[0] && property.price <= priceRange[1];
    
    return matchesSearch && matchesType && matchesLocation && matchesPrice;
  });

  const FilterContent = () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          Location
        </label>
        <Input
          placeholder="Enter city or area"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border-border/50 focus:border-primary"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground flex items-center gap-2">
          <HomeIcon className="w-4 h-4" />
          Property Type
        </label>
        <Select value={propertyType} onValueChange={setPropertyType}>
          <SelectTrigger className="border-border/50 focus:border-primary">
            <SelectValue placeholder="Select type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="apartment">Apartment</SelectItem>
            <SelectItem value="house">House</SelectItem>
            <SelectItem value="studio">Studio</SelectItem>
            <SelectItem value="villa">Villa</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-4">
        <label className="text-sm font-medium text-foreground flex items-center gap-2">
          <DollarSign className="w-4 h-4" />
          Price Range: ${priceRange[0]} - ${priceRange[1]}
        </label>
        <Slider
          value={priceRange}
          onValueChange={setPriceRange}
          max={10000}
          min={0}
          step={100}
          className="w-full"
        />
      </div>

      <Button 
        onClick={() => {
          setPropertyType("");
          setLocation("");
          setPriceRange([0, 10000]);
        }}
        variant="outline" 
        className="w-full"
      >
        Clear Filters
      </Button>
    </div>
  );

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-card/95 backdrop-blur-sm border-b border-border/50 sticky top-0 z-40">
        <div className="p-4 space-y-4">
          <h1 className="text-2xl font-bold text-foreground">Find Properties</h1>
          
          {/* Search Bar */}
          <div className="flex gap-2">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search properties..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 border-border/50 focus:border-primary"
              />
            </div>
            
            {/* Mobile Filter Button */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <SlidersHorizontal className="w-4 h-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="bottom" className="h-[70vh]">
                <SheetHeader>
                  <SheetTitle>Filter Properties</SheetTitle>
                  <SheetDescription>
                    Refine your search to find the perfect property
                  </SheetDescription>
                </SheetHeader>
                <div className="mt-6">
                  <FilterContent />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Properties Grid */}
      <div className="p-4">
        <div className="mb-4 flex items-center justify-between">
          <p className="text-muted-foreground">
            {filteredProperties.length} properties found
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>

        {filteredProperties.length === 0 && (
          <Card className="p-8 text-center">
            <CardContent>
              <HomeIcon className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">No properties found</h3>
              <p className="text-muted-foreground">Try adjusting your search criteria</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}