import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Users, MapPin, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const destinations = [
  "Goa", "Kerala", "Rajasthan", "Himachal Pradesh", "Karnataka", "Uttarakhand",
  "Tamil Nadu", "Maharashtra", "Gujarat", "West Bengal", "Odisha", "Andhra Pradesh"
];

const BookingForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    destination: "",
    startDate: "",
    endDate: "",
    travelers: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.destination || !formData.startDate || !formData.endDate || !formData.travelers) {
      toast({
        title: "Please fill all fields",
        description: "All fields are required to proceed with your booking inquiry.",
        variant: "destructive",
      });
      return;
    }

    // Format message for WhatsApp
    const message = `Hello! I'd like to inquire about a trip to India.

Destination: ${formData.destination}
Start Date: ${formData.startDate}
End Date: ${formData.endDate}
Number of Travelers: ${formData.travelers}

Please provide me with package details and pricing. Thank you!`;

    const whatsappUrl = `https://wa.me/917873951016?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Redirecting to WhatsApp",
      description: "You'll be connected with our travel expert shortly!",
    });
  };

  return (
    <section id="booking-form" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient-hero mb-4">
              Plan Your Perfect Trip
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tell us your preferences and we'll create a personalized itinerary just for you. 
              Get instant assistance through WhatsApp!
            </p>
          </div>

          <Card className="gradient-card border-0 shadow-ocean">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-primary flex items-center justify-center gap-2">
                <MessageCircle className="w-6 h-6" />
                Quick Booking Inquiry
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Destination */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-primary flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      Destination
                    </label>
                    <Select onValueChange={(value) => handleInputChange('destination', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose your destination" />
                      </SelectTrigger>
                      <SelectContent>
                        {destinations.map((dest) => (
                          <SelectItem key={dest} value={dest}>
                            {dest}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Number of Travelers */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-primary flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      Number of Travelers
                    </label>
                    <Select onValueChange={(value) => handleInputChange('travelers', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select travelers" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Person</SelectItem>
                        <SelectItem value="2">2 People</SelectItem>
                        <SelectItem value="3">3 People</SelectItem>
                        <SelectItem value="4">4 People</SelectItem>
                        <SelectItem value="5">5 People</SelectItem>
                        <SelectItem value="6+">6+ People</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Start Date */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-primary flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Start Date
                    </label>
                    <Input
                      type="date"
                      value={formData.startDate}
                      onChange={(e) => handleInputChange('startDate', e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>

                  {/* End Date */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-primary flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      End Date
                    </label>
                    <Input
                      type="date"
                      value={formData.endDate}
                      onChange={(e) => handleInputChange('endDate', e.target.value)}
                      min={formData.startDate || new Date().toISOString().split('T')[0]}
                    />
                  </div>
                </div>

                <Button type="submit" className="btn-ocean w-full text-lg py-3">
                  <MessageCircle className="mr-2 w-5 h-5" />
                  Get Quote on WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export { BookingForm };