import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gradient-hero mb-8 text-center">
              About Our Travel Company
            </h1>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="gradient-card border-0 shadow-elegant">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-semibold text-primary mb-4">Our Story</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Founded with a passion for showcasing India's incredible diversity, we've been crafting 
                    unforgettable travel experiences for over a decade. From the majestic Himalayas to the 
                    serene backwaters of Kerala, we know every corner of this beautiful country.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="gradient-card border-0 shadow-elegant">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-semibold text-primary mb-4">Our Mission</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    To make travel accessible, memorable, and meaningful. We believe every journey should 
                    be a story worth telling, filled with authentic experiences, cultural connections, 
                    and moments that last a lifetime.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="gradient-card border-0 shadow-elegant">
              <CardContent className="p-8">
                <h2 className="text-3xl font-semibold text-primary mb-6 text-center">Why Choose Us?</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-ocean rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🏔️</span>
                    </div>
                    <h3 className="font-semibold text-primary mb-2">Local Expertise</h3>
                    <p className="text-sm text-muted-foreground">Deep knowledge of local culture and hidden gems</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-sunset rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">✈️</span>
                    </div>
                    <h3 className="font-semibold text-primary mb-2">Seamless Planning</h3>
                    <p className="text-sm text-muted-foreground">End-to-end trip planning and 24/7 support</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">💫</span>
                    </div>
                    <h3 className="font-semibold text-primary mb-2">Unforgettable Experiences</h3>
                    <p className="text-sm text-muted-foreground">Curated adventures tailored to your preferences</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default About;