import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { DestinationCard } from "@/components/DestinationCard";
import goaImage from "@/assets/destinations/goa-beach.jpg";
import keralaImage from "@/assets/destinations/kerala-backwaters.jpg";
import rajasthanImage from "@/assets/destinations/rajasthan-desert.jpg";
import himachalImage from "@/assets/destinations/himachal-mountains.jpg";
import karnatakImage from "@/assets/destinations/karnatak-image.png";
import uttarakhandImage from "@/assets/destinations/uttrakhand-image.png";

const destinations = [
  {
    id: 1,
    name: "Goa",
    description: "Beautiful beaches, vibrant nightlife, and Portuguese heritage",
    image: goaImage,
    highlights: ["Beaches", "Nightlife", "Heritage"],
  },
  {
    id: 2,
    name: "Kerala",
    description: "God's Own Country with backwaters, hill stations, and spices",
    image: keralaImage,
    highlights: ["Backwaters", "Hill Stations", "Wildlife"],
  },
  {
    id: 3,
    name: "Rajasthan",
    description: "Land of kings with majestic palaces and desert adventures",
    image: rajasthanImage,
    highlights: ["Palaces", "Desert Safari", "Culture"],
  },
  {
    id: 4,
    name: "Himachal Pradesh",
    description: "Mountain paradise with snow-capped peaks and adventure sports",
    image: himachalImage,
    highlights: ["Mountains", "Adventure", "Scenic Beauty"],
  },
  {
    id: 5,
    name: "Karnataka",
    description: "Rich heritage, modern cities, and diverse landscapes",
    image: karnatakImage,
    highlights: ["Heritage", "Cities", "Nature"],
  },
  {
    id: 6,
    name: "Uttarakhand",
    description: "Spiritual journey through the land of gods and yoga",
    image: uttarakhandImage,
    highlights: ["Spirituality", "Yoga", "Pilgrimage"],
  },
];

const Destinations = () => {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gradient-hero mb-6">
              Explore India's Wonders
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the incredible diversity of India through our carefully curated destinations. 
              From pristine beaches to majestic mountains, from vibrant cities to serene temples.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Destinations;