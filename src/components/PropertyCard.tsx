import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, Bed, Bath, Maximize } from "lucide-react";

interface PropertyCardProps {
  id: string;
  title: string;
  location: string;
  price: number;
  rating: number;
  beds: number;
  baths: number;
  sqft: number;
  image: string;
  featured?: boolean;
}

export function PropertyCard({
  title,
  location,
  price,
  rating,
  beds,
  baths,
  sqft,
  image,
  featured = false,
}: PropertyCardProps) {
  return (
    <Card className="group overflow-hidden bg-gradient-card shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-[1.02] border-0">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        {featured && (
          <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">
            Featured
          </Badge>
        )}
        <div className="absolute top-3 right-3 bg-card/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
          <Star className="w-3 h-3 fill-current text-yellow-500" />
          <span className="text-xs font-medium">{rating}</span>
        </div>
      </div>
      
      <CardContent className="p-6">
        <div className="space-y-3">
          <div>
            <h3 className="font-semibold text-lg text-foreground line-clamp-1">
              {title}
            </h3>
            <div className="flex items-center gap-1 text-muted-foreground text-sm">
              <MapPin className="w-3 h-3" />
              <span>{location}</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Bed className="w-4 h-4" />
                <span>{beds}</span>
              </div>
              <div className="flex items-center gap-1">
                <Bath className="w-4 h-4" />
                <span>{baths}</span>
              </div>
              <div className="flex items-center gap-1">
                <Maximize className="w-4 h-4" />
                <span>{sqft} sqft</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-between pt-2">
            <div>
              <span className="text-2xl font-bold text-primary">
                ${price.toLocaleString()}
              </span>
              <span className="text-muted-foreground text-sm">/month</span>
            </div>
            <Button variant="outline" size="sm">
              View Details
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}