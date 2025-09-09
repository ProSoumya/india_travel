import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

import sarajhonson from "@/assets/testimonial/sara-jhonson.png";
import davidkumar from "@/assets/testimonial/davidkumar.png";
import emmawilliams from "@/assets/testimonial/emmawilliams.png";
import jameswilliams from "@/assets/testimonial/jameswillams.png";
import lisaanderson from "@/assets/testimonial/lisa-anderson.png";
import michelchen from "@/assets/testimonial/michaelchen.png";




const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "California, USA",
    rating: 5,
    text: "Our trip to Kerala was absolutely magical! The houseboat experience was beyond our expectations. The team arranged everything perfectly from airport pickup to drop-off. The attention to detail was remarkable.",
    trip: "Kerala Backwaters - 7 Days",
    avatar: sarajhonson,
    date: "March 2024"
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Singapore",
    rating: 5,
    text: "The Golden Triangle tour was incredible. From the Taj Mahal at sunrise to the vibrant markets of Jaipur, every moment was perfectly planned. Our guide was knowledgeable and made history come alive.",
    trip: "Golden Triangle Classic - 8 Days",
    avatar: michelchen,
    date: "February 2024"
  },
  {
    id: 3,
    name: "Emma Williams",
    location: "London, UK",
    rating: 5,
    text: "Goa was the perfect blend of relaxation and adventure. The beach resorts were fantastic and the local cuisine recommendations were spot-on! We felt safe and well-cared for throughout our stay.",
    trip: "Goa Beach Paradise - 5 Days",
    avatar: emmawilliams,
    date: "January 2024"
  },
  {
    id: 4,
    name: "David Kumar",
    location: "Toronto, Canada",
    rating: 5,
    text: "The Rajasthan royal experience exceeded all expectations. Staying in heritage hotels and experiencing the desert safari was unforgettable. The cultural performances were absolutely mesmerizing.",
    trip: "Rajasthan Royal Experience - 10 Days",
    avatar: davidkumar,
    date: "December 2023"
  },
  {
    id: 5,
    name: "Lisa Anderson",
    location: "Sydney, Australia",
    rating: 5,
    text: "The spiritual journey through Rishikesh and Varanasi was life-changing. The yoga sessions by the Ganges and the evening aartis will stay with me forever. Perfectly organized spiritual experience.",
    trip: "Spiritual India Journey - 12 Days",
    avatar: lisaanderson,
    date: "November 2023"
  },
  {
    id: 6,
    name: "James Wilson",
    location: "New York, USA",
    rating: 5,
    text: "The Himachal adventure was thrilling! Trekking in Manali, paragliding in Bir, and the scenic drives were incredible. The accommodations were comfortable and the food was delicious.",
    trip: "Himachal Adventure - 8 Days",
    avatar: jameswilliams,
    date: "October 2023"
  },
];

const Testimonials = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "fill-secondary text-secondary" : "text-muted-foreground"
        }`}
      />
    ));
  };

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gradient-hero mb-6">
              Traveler Stories
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real experiences from real people who've explored India with us. These authentic stories 
              reflect our commitment to creating unforgettable journeys for every traveler.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="gradient-card border-0 shadow-elegant hover:shadow-sunset transition-smooth">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover shadow-elegant"
                    />
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-primary">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <div className="flex space-x-1">
                          {renderStars(testimonial.rating)}
                        </div>
                        <span className="text-sm text-muted-foreground">•</span>
                        <span className="text-sm text-muted-foreground">{testimonial.date}</span>
                      </div>
                    </div>
                    <Quote className="w-8 h-8 text-primary/20" />
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="inline-block bg-gradient-ocean text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {testimonial.trip}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-hero p-8 rounded-2xl text-primary-foreground max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold mb-4">Ready to Create Your Own Story?</h2>
              <p className="mb-6 text-primary-foreground/90">
                Join hundreds of satisfied travelers and discover the magic of India with our expert guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => {
                    const message = "Hi! I read the testimonials and I'm interested in planning a trip to India. Please help me get started!";
                    const whatsappUrl = `https://wa.me/917873951016?text=${encodeURIComponent(message)}`;
                    window.open(whatsappUrl, '_blank');
                  }}
                  className="bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-medium hover:bg-secondary/90 transition-smooth"
                >
                  Start Planning Your Trip
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Testimonials;