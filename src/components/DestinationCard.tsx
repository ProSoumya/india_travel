import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";

interface Destination {
  id: number;
  name: string;
  description: string; 
  image: string;
  highlights: string[];
}

interface DestinationCardProps {
  destination: Destination;
}

const DestinationCard = ({ destination }: DestinationCardProps) => {
  return (
    <Card className="group overflow-hidden border-0 shadow-elegant hover:shadow-ocean transition-smooth destination-card">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={destination.image} 
          alt={destination.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        <div className="absolute top-4 left-4">
          <div className="flex items-center space-x-1 text-white">
            <MapPin className="w-4 h-4" />
            <span className="text-sm font-medium">{destination.name}</span>
          </div>
        </div>
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-primary mb-3 group-hover:text-primary-light transition-smooth">
          {destination.name}
        </h3>
        
        <p className="text-muted-foreground leading-relaxed mb-4">
          {destination.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {destination.highlights.map((highlight, index) => (
            <Badge 
              key={index} 
              variant="secondary"
              className="bg-gradient-ocean text-primary-foreground text-xs"
            >
              {highlight}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export { DestinationCard };