import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import goaImage from "@/assets/home/goa-beach.jpg";
import keralaImage from "@/assets/home/kerala-backwaters.jpg";
import rajasthanImage from "@/assets/home/rajasthan-desert.jpg";

const highlights = [
  {
    id: 1,
    name: "Goa",
    subtitle: "Beach Paradise",
    description: "Golden beaches, vibrant nightlife, and Portuguese heritage",
    image: goaImage,
    color: "bg-gradient-ocean",
  },
  {
    id: 2,
    name: "Kerala",
    subtitle: "God's Own Country",
    description: "Backwaters, hill stations, and spice plantations",
    image: keralaImage,
    color: "bg-gradient-sunset",
  },
  {
    id: 3,
    name: "Rajasthan",
    subtitle: "Land of Kings",
    description: "Majestic palaces, desert safaris, and royal culture",
    image: rajasthanImage,
    color: "bg-gradient-hero",
  },
];

const DestinationHighlights = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient-hero mb-4">
            Popular Destinations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover India's most breathtaking destinations, each offering unique experiences 
            and unforgettable memories waiting to be made.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {highlights.map((destination) => (
            <Card key={destination.id} className="group overflow-hidden border-0 shadow-elegant hover:shadow-ocean transition-smooth destination-card">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium text-primary-foreground ${destination.color} mb-2`}>
                    {destination.subtitle}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">{destination.name}</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {destination.description}
                </p>
                <Button variant="outline" className="group/btn w-full">
                  Explore {destination.name}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-smooth" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild className="btn-ocean">
            <Link to="/destinations">
              View All Destinations
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export { DestinationHighlights };