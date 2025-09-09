import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { BookingForm } from "@/components/BookingForm";
import { DestinationHighlights } from "@/components/DestinationHighlights";
import { TestimonialPreview } from "@/components/TestimonialPreview";
import { Footer } from "@/components/Footer";

const Home = () => {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <BookingForm />
        <DestinationHighlights />
        <TestimonialPreview />
      </main>
      <Footer />
    </>
  );
};

export default Home;