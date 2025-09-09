import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const Contact = () => {
  const handleWhatsAppClick = () => {
    const message = "Hi! I'd like to inquire about your travel packages.";
    const whatsappUrl = `https://wa.me/917873951016?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+917873951016";
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:info@yourtravelcompany.com";
  };

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gradient-hero mb-6">
              Get In Touch
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to plan your dream vacation? We're here to help you create unforgettable memories. 
              Contact us through any of the channels below.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-primary mb-6">Contact Information</h2>
              
              <Card className="gradient-card border-0 shadow-elegant">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-ocean rounded-full flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary">WhatsApp</h3>
                      <p className="text-muted-foreground">+91 78739 51016</p>
                    </div>
                  </div>
                  <Button onClick={handleWhatsAppClick} className="btn-ocean w-full">
                    Chat on WhatsApp
                  </Button>
                </CardContent>
              </Card>

              <Card className="gradient-card border-0 shadow-elegant">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-sunset rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-secondary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary">Phone</h3>
                      <p className="text-muted-foreground">+91 78739 51016</p>
                    </div>
                  </div>
                  <Button onClick={handlePhoneClick} variant="outline" className="w-full">
                    Call Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="gradient-card border-0 shadow-elegant">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary">Email</h3>
                      <p className="text-muted-foreground">info@yourtravelcompany.com</p>
                    </div>
                  </div>
                  <Button onClick={handleEmailClick} variant="outline" className="w-full">
                    Send Email
                  </Button>
                </CardContent>
              </Card>

              <Card className="gradient-card border-0 shadow-elegant">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary">Office Address</h3>
                      <p className="text-muted-foreground">
                        123 Travel Street, Tourism District<br />
                        Mumbai, Maharashtra 400001<br />
                        India
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="gradient-card border-0 shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Send us a Message</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-primary mb-2 block">First Name</label>
                      <Input placeholder="John" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-primary mb-2 block">Last Name</label>
                      <Input placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-primary mb-2 block">Email</label>
                    <Input type="email" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-primary mb-2 block">Phone Number</label>
                    <Input type="tel" placeholder="+91 78739 51016" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-primary mb-2 block">Preferred Destination</label>
                    <Input placeholder="e.g., Goa, Kerala, Rajasthan" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-primary mb-2 block">Message</label>
                    <Textarea 
                      rows={4}
                      placeholder="Tell us about your travel plans, preferences, and any special requirements..."
                    />
                  </div>
                  <Button className="btn-ocean w-full">
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;