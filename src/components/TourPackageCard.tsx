import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, Star, MessageCircle } from "lucide-react";

interface TourPackage {
  id: number;
  title: string;
  duration: string;
  price: string;
  destinations: string[];
  highlights: string[];
  image: string;
  theme: string;
}

interface TourPackageCardProps {
  tourPackage: TourPackage;
}

const TourPackageCard = ({ tourPackage }: TourPackageCardProps) => {
  const handleWhatsAppInquiry = () => {
    const message = `Hi! I'm interested in the "${tourPackage.title}" package (${tourPackage.duration}) priced at ${tourPackage.price}. Please provide more details and availability.`;
    const whatsappUrl = `https://wa.me/917873951016?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Card className="group overflow-hidden border-0 shadow-elegant hover:shadow-ocean transition-smooth destination-card">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={tourPackage.image} 
          alt={tourPackage.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        
        {/* Price Badge */}
        <div className="absolute top-4 right-4">
          <Badge className="bg-gradient-sunset text-secondary-foreground font-bold text-sm px-3 py-1">
            {tourPackage.price}
          </Badge>
        </div>
        
        {/* Theme Badge */}
        <div className="absolute top-4 left-4">
          <Badge className="bg-gradient-ocean text-primary-foreground text-xs">
            {tourPackage.theme}
          </Badge>
        </div>
      </div>
      
      <CardHeader className="pb-3">
        <h3 className="text-xl font-semibold text-primary group-hover:text-primary-light transition-smooth">
          {tourPackage.title}
        </h3>
        
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{tourPackage.duration}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 fill-secondary text-secondary" />
            <span>4.8</span>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0 space-y-4">
        {/* Destinations */}
        <div>
          <div className="flex items-center space-x-1 mb-2">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Destinations:</span>
          </div>
          <div className="flex flex-wrap gap-1">
            {tourPackage.destinations.map((destination, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {destination}
              </Badge>
            ))}
          </div>
        </div>
        
        {/* Highlights */}
        <div>
          <h4 className="text-sm font-medium text-primary mb-2">Highlights:</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            {tourPackage.highlights.slice(0, 3).map((highlight, index) => (
              <li key={index} className="flex items-start">
                <span className="text-secondary mr-2">•</span>
                {highlight}
              </li>
            ))}
          </ul>
        </div>
        
        <Button 
          onClick={handleWhatsAppInquiry}
          className="btn-ocean w-full"
        >
          <MessageCircle className="w-4 h-4 mr-2" />
          Inquire on WhatsApp
        </Button>
      </CardContent>
    </Card>
  );
};

export { TourPackageCard };