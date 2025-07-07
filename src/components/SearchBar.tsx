import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, MapPin, Home, DollarSign } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

export function SearchBar() {
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!location) {
      toast({
        title: "Search Error",
        description: "Please enter a location to search",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Searching Properties",
      description: `Looking for ${propertyType || 'all types'} in ${location}`,
    });
    
    navigate("/properties");
  };
  return (
    <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-6 shadow-hero border border-card/20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            Location
          </label>
          <Input 
            placeholder="Enter city or area" 
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="border-border/50 focus:border-primary transition-colors"
          />
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground flex items-center gap-2">
            <Home className="w-4 h-4" />
            Property Type
          </label>
          <Select value={propertyType} onValueChange={setPropertyType}>
            <SelectTrigger className="border-border/50 focus:border-primary">
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="apartment">Apartment</SelectItem>
              <SelectItem value="house">House</SelectItem>
              <SelectItem value="condo">Condo</SelectItem>
              <SelectItem value="townhouse">Townhouse</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground flex items-center gap-2">
            <DollarSign className="w-4 h-4" />
            Price Range
          </label>
          <Select value={priceRange} onValueChange={setPriceRange}>
            <SelectTrigger className="border-border/50 focus:border-primary">
              <SelectValue placeholder="Select range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0-83000">₹0 - ₹83,000</SelectItem>
              <SelectItem value="83000-166000">₹83,000 - ₹1,66,000</SelectItem>
              <SelectItem value="166000-249000">₹1,66,000 - ₹2,49,000</SelectItem>
              <SelectItem value="249000+">₹2,49,000+</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="flex items-end">
          <Button className="w-full" size="lg" onClick={handleSearch}>
            <Search className="w-4 h-4 mr-2" />
            Search Properties
          </Button>
        </div>
      </div>
    </div>
  );
}