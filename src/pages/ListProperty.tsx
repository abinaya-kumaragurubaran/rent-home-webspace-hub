import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Home, Upload, MapPin, DollarSign, Camera, Phone, Mail } from "lucide-react";

export default function ListProperty() {
  const [images, setImages] = useState<string[]>([]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newImages = Array.from(files).map(file => URL.createObjectURL(file));
      setImages(prev => [...prev, ...newImages]);
    }
  };

  const removeImage = (index: number) => {
    setImages(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-gradient-primary text-primary-foreground p-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Home className="w-8 h-8" />
          <span className="text-2xl font-bold">RentHub</span>
        </div>
        <h1 className="text-2xl font-bold">List Your Property</h1>
        <p className="text-primary-foreground/90">Reach thousands of potential renters</p>
      </div>

      <div className="p-4 space-y-6">
        {/* Benefits */}
        <Card className="bg-accent/10 border-accent/20">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="secondary" className="bg-accent/20 text-accent">
                Why List With Us?
              </Badge>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
              <div className="text-center">
                <div className="font-semibold text-foreground">50,000+</div>
                <div className="text-muted-foreground">Active Renters</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-foreground">Zero</div>
                <div className="text-muted-foreground">Listing Fees</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-foreground">24/7</div>
                <div className="text-muted-foreground">Support</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Property Form */}
        <Card className="bg-gradient-card shadow-card border-0">
          <CardHeader>
            <CardTitle>Property Details</CardTitle>
            <CardDescription>
              Provide accurate information to attract quality renters
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Property Images */}
            <div className="space-y-3">
              <Label>Property Images</Label>
              <div className="border-2 border-dashed border-border/50 rounded-lg p-6 text-center">
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="image-upload"
                />
                <label htmlFor="image-upload" className="cursor-pointer">
                  <Camera className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                  <p className="text-muted-foreground">
                    Click to upload images or drag and drop
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Upload up to 10 high-quality photos
                  </p>
                </label>
              </div>
              
              {images.length > 0 && (
                <div className="grid grid-cols-3 gap-2">
                  {images.map((image, index) => (
                    <div key={index} className="relative">
                      <img
                        src={image}
                        alt={`Property ${index + 1}`}
                        className="w-full h-20 object-cover rounded-lg"
                      />
                      <button
                        onClick={() => removeImage(index)}
                        className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Basic Information */}
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Property Title</Label>
                <Input
                  id="title"
                  placeholder="e.g., Modern 2BR Apartment with City View"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe your property's features, amenities, and neighborhood..."
                  rows={4}
                />
              </div>
            </div>

            {/* Location */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-4 h-4 text-primary" />
                <Label>Location Details</Label>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select city" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="new-york">New York</SelectItem>
                      <SelectItem value="los-angeles">Los Angeles</SelectItem>
                      <SelectItem value="chicago">Chicago</SelectItem>
                      <SelectItem value="miami">Miami</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="neighborhood">Neighborhood</Label>
                  <Input
                    id="neighborhood"
                    placeholder="e.g., Downtown, Midtown"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Full Address</Label>
                <Input
                  id="address"
                  placeholder="123 Main Street, Apt 4B"
                />
              </div>
            </div>

            {/* Property Details */}
            <div className="space-y-4">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="type">Property Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="apartment">Apartment</SelectItem>
                      <SelectItem value="house">House</SelectItem>
                      <SelectItem value="studio">Studio</SelectItem>
                      <SelectItem value="villa">Villa</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bedrooms">Bedrooms</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Beds" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0">Studio</SelectItem>
                      <SelectItem value="1">1 Bedroom</SelectItem>
                      <SelectItem value="2">2 Bedrooms</SelectItem>
                      <SelectItem value="3">3 Bedrooms</SelectItem>
                      <SelectItem value="4">4+ Bedrooms</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bathrooms">Bathrooms</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Baths" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 Bathroom</SelectItem>
                      <SelectItem value="1.5">1.5 Bathrooms</SelectItem>
                      <SelectItem value="2">2 Bathrooms</SelectItem>
                      <SelectItem value="3">3+ Bathrooms</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="sqft">Square Feet</Label>
                  <Input
                    id="sqft"
                    type="number"
                    placeholder="1200"
                  />
                </div>
              </div>
            </div>

            {/* Pricing */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="w-4 h-4 text-primary" />
                <Label>Pricing Information</Label>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="rent">Monthly Rent ($)</Label>
                  <Input
                    id="rent"
                    type="number"
                    placeholder="2500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="deposit">Security Deposit ($)</Label>
                  <Input
                    id="deposit"
                    type="number"
                    placeholder="2500"
                  />
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <Label>Contact Information</Label>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="landlord@email.com"
                      className="pl-10"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <Button className="w-full" size="lg">
              <Upload className="w-4 h-4 mr-2" />
              List My Property
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}