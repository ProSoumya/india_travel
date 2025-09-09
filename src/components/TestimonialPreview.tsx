import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Quote, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import sarajhonson from "@/assets/testimonial/sara-jhonson.png";
import michelchen from "@/assets/testimonial/michaelchen.png";
import emmawilliams from "@/assets/testimonial/emmawilliams.png";
import davidkumar from "@/assets/testimonial/davidkumar.png";
import lisaanderson from "@/assets/testimonial/lisa-anderson.png";
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "California, USA",
    rating: 5,
    text: "Our trip to Kerala was absolutely magical! The houseboat experience was beyond our expectations. The team arranged everything perfectly.",
    trip: "Kerala Backwaters",
    avatar: sarajhonson,
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Singapore",
    rating: 5,
    text: "The Golden Triangle tour was incredible. From the Taj Mahal to the vibrant markets of Jaipur, every moment was perfectly planned.",
    trip: "Golden Triangle",
    avatar: michelchen,
  },
  {
    id: 3,
    name: "Emma Williams",
    location: "London, UK",
    rating: 5,
    text: "Goa was the perfect blend of relaxation and adventure. The beach resorts were fantastic and the local cuisine recommendations were spot-on!",
    trip: "Goa Beach Paradise",
    avatar: emmawilliams,
  },
  {
    id: 4,
    name: "Soumya Sahu",
    location: "Dhenkanal, Odisha",
    rating: 5,
    text: "Goa was the perfect blend of relaxation and adventure. The beach resorts were fantastic and the local cuisine recommendations were spot-on!",
    trip: "Goa Beach Paradise",
    avatar: davidkumar,
  },
   {
    id: 5,
    name: "Monalisa Sahu",
    location: "Bhubaneswar, Odisha",
    rating: 4.5,
    text: "Goa was the perfect blend of relaxation and adventure. The beach resorts were fantastic and the local cuisine recommendations were spot-on!",
    trip: "Goa Beach Paradise",
    avatar: lisaanderson,
  },
];

const TestimonialPreview = () => {
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
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient-hero mb-4">
            What Our Travelers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real experiences from real travelers who've discovered the magic of India with us.
            Their stories inspire our commitment to excellence.
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <Card className="gradient-card border-0 shadow-elegant hover:shadow-sunset transition-smooth h-full">
                <CardContent className="p-6 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center mb-4">
                      <Quote className="w-8 h-8 text-primary/20 mr-2" />
                      <div className="flex space-x-1">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-6 italic">
                      "{testimonial.text}"
                    </p>
                  </div>

                  <div className="flex items-center space-x-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-primary">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                      <p className="text-xs text-secondary font-medium">{testimonial.trip}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="text-center mt-12">
          <Button asChild className="btn-sunset">
            <Link to="/testimonials">
              Read More Stories
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export { TestimonialPreview };
