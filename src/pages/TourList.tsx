import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { TourPackageCard } from "@/components/TourPackageCard";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import goldentriangleImage from "@/assets/tourpackages/golden-triangle-classic.png";
import keralaImage from "@/assets/tourpackages/Kerala-Backwaters-Bliss.png";
import goaImage from "@/assets/tourpackages/Goa-Beach-Paradise.png";
import puriImage from "@/assets/tourpackages/Puri-Beach-with-Jagannath-Darshan.png";
import himachalImage from "@/assets/tourpackages/Himachal-Adventure.png";
import rajasthanImage from "@/assets/tourpackages/Rajastan-Royal-Experience.png";
import spiritualImage from "@/assets/tourpackages/Spiritual-India-Journey.png";




const tourPackages = [
  {
    id: 1,
    title: "Golden Triangle Classic",
    duration: "7 Days / 6 Nights",
    price: "₹25,000",
    destinations: ["Delhi", "Agra", "Jaipur"],
    highlights: ["Taj Mahal", "Red Fort", "City Palace"],
    image: goldentriangleImage,
    theme: "Heritage",
  },
  {
    id: 2,
    title: "Kerala Backwaters Bliss",
    duration: "5 Days / 4 Nights", 
    price: "₹18,000",
    destinations: ["Cochin", "Alleppey", "Munnar"],
    highlights: ["Houseboat Stay", "Tea Gardens", "Wildlife"],
    image: keralaImage,
    theme: "Nature",
  },
  {
    id: 3,
    title: "Goa Beach Paradise",
    duration: "4 Days / 3 Nights",
    price: "₹15,000",
    destinations: ["North Goa", "South Goa"],
    highlights: ["Beach Resorts", "Water Sports", "Nightlife"],
    image: goaImage,
    theme: "Beach",
  },
  {
    id: 4,
    title: "Puri Beach with Jagannath Darshan",
    duration: "4 Days / 3 Nights",
    price: "7,000",
    destinations: ["Golden Beach", "jagannath Temple", "Satapada"],
    highlights: ["Beach Resorts", "Dolphin Event", "Blessing of Lord Jagannath"],
    image: puriImage,
    theme: "Beach",
  },
  {
    id: 5,
    title: "Himachal Adventure",
    duration: "8 Days / 7 Nights",
    price: "₹30,000",
    destinations: ["Shimla", "Manali", "Dharamshala"],
    highlights: ["Mountain Trekking", "Adventure Sports", "Scenic Views"],
    image: himachalImage,
    theme: "Adventure",
  },
  {
    id: 6,
    title: "Rajasthan Royal Experience",
    duration: "10 Days / 9 Nights",
    price: "₹45,000",
    destinations: ["Jaipur", "Udaipur", "Jodhpur", "Jaisalmer"],
    highlights: ["Palace Hotels", "Desert Safari", "Cultural Shows"],
    image: rajasthanImage,
    theme: "Heritage",
  },
  {
    id: 7,
    title: "Spiritual India Journey",
    duration: "12 Days / 11 Nights",
    price: "₹35,000",
    destinations: ["Varanasi", "Rishikesh", "Haridwar", "Dharamshala"],
    highlights: ["Yoga Retreats", "Spiritual Sites", "Meditation"],
    image: spiritualImage,
    theme: "Spiritual",
  },
];

const themes = ["All", "Heritage", "Nature", "Beach", "Adventure", "Spiritual"];

const TourList = () => {
  const [selectedTheme, setSelectedTheme] = useState("All");
  
  const filteredPackages = selectedTheme === "All" 
    ? tourPackages 
    : tourPackages.filter(pkg => pkg.theme === selectedTheme);

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gradient-hero mb-6">
              Tour Packages
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Choose from our carefully crafted tour packages designed to give you the best of India. 
              Each package includes accommodation, meals, transportation, and guided tours.
            </p>
            
            {/* Theme Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {themes.map((theme) => (
                <Button
                  key={theme}
                  variant={selectedTheme === theme ? "default" : "outline"}
                  onClick={() => setSelectedTheme(theme)}
                  className={selectedTheme === theme ? "btn-ocean" : ""}
                >
                  {theme}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPackages.map((tourPackage) => (
              <TourPackageCard key={tourPackage.id} tourPackage={tourPackage} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default TourList;