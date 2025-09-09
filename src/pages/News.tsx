import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const newsUpdates = [
  {
    id: 1,
    title: "New Eco-Tourism Packages Launched",
    excerpt: "Experience sustainable travel with our new eco-friendly tour packages focusing on conservation and local communities.",
    date: "March 15, 2024",
    category: "Product Launch",
    image: "/api/placeholder/300/200",
  },
  {
    id: 2,
    title: "Travel Advisory: Monsoon Season Guidelines",
    excerpt: "Important updates for travelers planning trips during the monsoon season. Stay safe and enjoy the natural beauty.",
    date: "March 10, 2024",
    category: "Travel Advisory",
    image: "/api/placeholder/300/200",
  },
  {
    id: 3,
    title: "Customer Spotlight: The Johnson Family Adventure",
    excerpt: "Read about the Johnson family's incredible 15-day journey across India and their unforgettable experiences.",
    date: "March 5, 2024",
    category: "Customer Story",
    image: "/api/placeholder/300/200",
  },
  {
    id: 4,
    title: "New Partnership with Local Artisans",
    excerpt: "We're proud to announce our collaboration with local artisan communities to promote authentic cultural experiences.",
    date: "February 28, 2024",
    category: "Partnership",
    image: "/api/placeholder/300/200",
  },
  {
    id: 5,
    title: "Festival Season Special Offers",
    excerpt: "Celebrate India's vibrant festivals with special discounts on cultural tour packages. Limited time offers available.",
    date: "February 20, 2024",
    category: "Offers",
    image: "/api/placeholder/300/200",
  },
  {
    id: 6,
    title: "Safety First: Updated Health Protocols",
    excerpt: "Our commitment to your safety continues with updated health and safety protocols for all our tour packages.",
    date: "February 15, 2024",
    category: "Safety Update",
    image: "/api/placeholder/300/200",
  },
];

const News = () => {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gradient-hero mb-6">
              News & Updates
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stay updated with our latest news, travel advisories, special offers, and stories 
              from fellow travelers exploring the incredible diversity of India.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsUpdates.map((news) => (
              <Card key={news.id} className="gradient-card border-0 shadow-elegant hover:shadow-ocean transition-smooth cursor-pointer">
                <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                  <img 
                    src={news.image} 
                    alt={news.title}
                    className="w-full h-full object-cover hover:scale-105 transition-smooth"
                  />
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-gradient-ocean text-primary-foreground">
                      {news.category}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{news.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-primary hover:text-primary-light transition-smooth">
                    {news.title}
                  </h3>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground leading-relaxed">
                    {news.excerpt}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default News;