import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, MapPin, Home, DollarSign } from "lucide-react";

export function SearchBar() {
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
            className="border-border/50 focus:border-primary transition-colors"
          />
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground flex items-center gap-2">
            <Home className="w-4 h-4" />
            Property Type
          </label>
          <Select>
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
          <Select>
            <SelectTrigger className="border-border/50 focus:border-primary">
              <SelectValue placeholder="Select range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0-1000">$0 - $1,000</SelectItem>
              <SelectItem value="1000-2000">$1,000 - $2,000</SelectItem>
              <SelectItem value="2000-3000">$2,000 - $3,000</SelectItem>
              <SelectItem value="3000+">$3,000+</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="flex items-end">
          <Button className="w-full" size="lg">
            <Search className="w-4 h-4 mr-2" />
            Search Properties
          </Button>
        </div>
      </div>
    </div>
  );
}