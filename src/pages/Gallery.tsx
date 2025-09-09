import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import tajmahalsunrise from "@/assets/gallery/taj-mahal-at-sunrise.png";
import keralabackwater from "@/assets/gallery/kerala-backwaters.png";
import rajastandessertsafari from "@/assets/gallery/Rajasthan-Desert-Safari.png";
import himachalmountains from "@/assets/gallery/himachal-mountains.jpg";
import varanasighats from "@/assets/gallery/Varanasi-Ghats.png";
import houseboatexperience from "@/assets/gallery/Houseboat-Experience.png";
import citypalacejaipur from "@/assets/gallery/city-palace-jaipur.png";
import beachsunset from "@/assets/gallery/Beach-Sunset.png";
import yogabyganges from "@/assets/gallery/Yoga-by-Ganges.png";
import spiceplantation from "@/assets/gallery/Spice-Plantation.png";
import fortamber from "@/assets/gallery/Fort-Amber.png";
import goaImage from "@/assets/gallery/goa-beach.jpg";




const galleryImages = [
  {
    id: 1,
    src: tajmahalsunrise,
    title: "Taj Mahal at Sunrise",
    location: "Agra, Uttar Pradesh",
    category: "Heritage",
  },
  {
    id: 2,
    src: keralabackwater,
    title: "Kerala Backwaters",
    location: "Alleppey, Kerala",
    category: "Nature",
  },
  {
    id: 3,
    src: goaImage,
    title: "Goa Beach Paradise",
    location: "Goa",
    category: "Beach",
  },
  {
    id: 4,
    src: rajastandessertsafari,
    title: "Rajasthan Desert Safari",
    location: "Jaisalmer, Rajasthan",
    category: "Adventure",
  },
  {
    id: 5,
    src: himachalmountains,
    title: "Himachal Mountains",
    location: "Manali, Himachal Pradesh",
    category: "Adventure",
  },
  {
    id: 6,
    src: varanasighats,
    title: "Varanasi Ghats",
    location: "Varanasi, Uttar Pradesh",
    category: "Spiritual",
  },
  {
    id: 7,
    src: houseboatexperience,
    title: "Houseboat Experience",
    location: "Kerala",
    category: "Nature",
  },
  {
    id: 8,
    src: citypalacejaipur,
    title: "City Palace Jaipur",
    location: "Jaipur, Rajasthan",
    category: "Heritage",
  },
  {
    id: 9,
    src: beachsunset,
    title: "Beach Sunset",
    location: "Goa",
    category: "Beach",
  },
  {
    id: 10,
    src: yogabyganges,
    title: "Yoga by Ganges",
    location: "Rishikesh, Uttarakhand",
    category: "Spiritual",
  },
  {
    id: 11,
    src: spiceplantation,
    title: "Spice Plantations",
    location: "Munnar, Kerala",
    category: "Nature",
  },
  {
    id: 12,
    src: fortamber,
    title: "Fort Amber",
    location: "Jaipur, Rajasthan",
    category: "Heritage",
  },
];

const categories = ["All", "Heritage", "Nature", "Beach", "Adventure", "Spiritual"];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gradient-hero mb-6">
              Travel Gallery
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Experience the beauty of India through our lens. These images capture the essence 
              of the incredible journeys our travelers have embarked upon across the country.
            </p>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "btn-ocean" : ""}
                  size="sm"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <Card 
                key={image.id} 
                className="group overflow-hidden border-0 shadow-elegant hover:shadow-ocean transition-smooth cursor-pointer"
                onClick={() => setSelectedImage(image.id)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={image.src} 
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-gradient-ocean text-primary-foreground text-xs">
                      {image.category}
                    </Badge>
                  </div>
                  
                  {/* Title and Location */}
                  <div className="absolute bottom-3 left-3 right-3 text-white opacity-0 group-hover:opacity-100 transition-smooth">
                    <h3 className="font-semibold text-sm mb-1">{image.title}</h3>
                    <p className="text-xs text-white/80">{image.location}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Image Modal */}
          {selectedImage && (
            <div 
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <div className="relative max-w-4xl max-h-[90vh] w-full">
                <img 
                  src={galleryImages.find(img => img.id === selectedImage)?.src}
                  alt={galleryImages.find(img => img.id === selectedImage)?.title}
                  className="w-full h-full object-contain rounded-lg"
                />
                <button 
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-smooth"
                >
                  ×
                </button>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl font-semibold mb-1">
                    {galleryImages.find(img => img.id === selectedImage)?.title}
                  </h3>
                  <p className="text-white/80">
                    {galleryImages.find(img => img.id === selectedImage)?.location}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-hero p-8 rounded-2xl text-primary-foreground max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold mb-4">Ready to Create Your Own Memories?</h2>
              <p className="mb-6 text-primary-foreground/90">
                These could be your photos next! Start planning your incredible India adventure today.
              </p>
              <button 
                onClick={() => {
                  const message = "Hi! I've seen your beautiful gallery and I'm interested in booking a trip to India. Please help me plan my journey!";
                  const whatsappUrl = `https://wa.me/917873951016?text=${encodeURIComponent(message)}`;
                  window.open(whatsappUrl, '_blank');
                }}
                className="bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-medium hover:bg-secondary/90 transition-smooth"
              >
                Plan Your Trip Now
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Gallery;