import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Texas Farm, TX",
      rating: 5,
      text: "ChickenFeed Pro has transformed my poultry operation. My hens are healthier, happier, and laying 40% more eggs than before. The quality improvement is remarkable!",
      image: "👩‍🌾"
    },
    {
      name: "Mike Rodriguez", 
      location: "Valley Ranch, CA",
      rating: 5,
      text: "After switching to ChickenFeed Pro, I've seen incredible results. The feed is worth every penny - my chickens are thriving and my profits have increased significantly.",
      image: "👨‍🌾"
    },
    {
      name: "Emma Thompson",
      location: "Green Acres, OR",
      rating: 5,
      text: "Outstanding customer service and even better results. My chickens love the feed, and I love the consistent egg production. Highly recommend to any serious farmer.",
      image: "👩‍🌾"
    },
    {
      name: "David Chen",
      location: "Sunrise Farm, FL",
      rating: 5,
      text: "Three generations of farming in our family, and this is the best chicken feed we've ever used. The health improvements in our flock are simply amazing.",
      image: "👨‍🌾"
    },
    {
      name: "Lisa Anderson",
      location: "Heritage Farm, NY",
      rating: 5,
      text: "The difference is night and day! Stronger eggshells, better feather quality, and happier chickens. ChickenFeed Pro delivers on all their promises.",
      image: "👩‍🌾"
    },
    {
      name: "Robert Wilson",
      location: "Mountain View Ranch, CO",
      rating: 5,
      text: "I was skeptical at first, but the results speak for themselves. Higher egg production, healthier birds, and excellent customer support. A game-changer!",
      image: "👨‍🌾"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            What Our Farmers Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join thousands of satisfied farmers who have transformed their poultry operations with ChickenFeed Pro.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 animate-fade-in-up bg-card/80 backdrop-blur-sm border-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="mb-6">
                  <Quote className="h-8 w-8 text-primary/60" />
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>

                {/* Author Info */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-2xl">
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Start your journey to healthier chickens and higher profits today. 
              Get your personalized feed recommendation and see the difference for yourself.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 px-8 py-3 rounded-lg font-semibold">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;