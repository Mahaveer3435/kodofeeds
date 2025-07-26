import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import { useState, useEffect } from "react";
import chickenFeedImage from "../assets/chicken-feed-product.jpg";

const products = [
  {
    id: 1,
    name: "Starter Feed Pro",
    price: "₹2,850",
    image: chickenFeedImage
  },
  {
    id: 2,
    name: "Layer Feed Premium", 
    price: "₹3,200",
    image: chickenFeedImage
  },
  {
    id: 3,
    name: "Broiler Feed Max",
    price: "₹2,950",
    image: chickenFeedImage
  },
  {
    id: 4,
    name: "Organic Blend",
    price: "₹3,800",
    image: chickenFeedImage
  }
];

const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality - starts after 2 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;

    const startDelay = setTimeout(() => {
      const interval = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % products.length);
      }, 3000); // Change slide every 3 seconds

      return () => clearInterval(interval);
    }, 2000); // Initial delay of 2 seconds

    return () => clearTimeout(startDelay);
  }, [isAutoPlaying, products.length]);

  const nextSlide = () => {
    setCurrentIndex(prev => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex(prev => (prev - 1 + products.length) % products.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-secondary/30 to-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
            Our <span className="text-gradient">Premium Products</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Scientifically formulated feeds for optimal chicken health and performance
          </p>
        </div>

        <div className="relative w-full max-w-lg mx-auto">
          {/* Professional glass-effect container */}
          <div className="glass-effect rounded-2xl overflow-hidden shadow-elegant">
            {/* Auto-play toggle button */}
            <button
              onClick={toggleAutoPlay}
              className="absolute top-6 right-6 z-20 w-12 h-12 glass-effect hover:bg-background/90 rounded-full shadow-card flex items-center justify-center transition-all duration-300 border border-border/50"
            >
              {isAutoPlaying ? (
                <Pause className="w-5 h-5 text-foreground" />
              ) : (
                <Play className="w-5 h-5 text-foreground" />
              )}
            </button>

            {/* Main carousel container */}
            <div className="relative h-[480px] overflow-hidden">
              {/* Products slider */}
              <div 
                className="flex transition-all duration-1000 ease-in-out h-full"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {products.map((product, index) => (
                  <div key={product.id} className="min-w-full flex items-center justify-center p-8">
                    <Card className={`w-full max-w-sm card-professional transition-all duration-500 hover:shadow-glow hover:scale-[1.02] ${
                      index === currentIndex ? 'animate-scale-in' : ''
                    }`}>
                      <CardContent className="p-0">
                        <div className="w-full h-56 bg-gradient-to-br from-muted/30 to-muted/60 relative overflow-hidden">
                          <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23f8fafc'/%3E%3Ctext x='150' y='100' font-family='Inter, sans-serif' font-size='18' fill='%2364748b' text-anchor='middle' dy='.3em'%3EPremium Feed%3C/text%3E%3C/svg%3E";
                            }}
                          />
                          {/* Professional overlay gradient */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                        </div>
                        
                        <div className="p-6 text-center bg-gradient-card">
                          <h3 className="font-semibold text-xl text-foreground mb-3 tracking-tight">
                            {product.name}
                          </h3>
                          <div className="text-2xl font-bold text-gradient mb-4">
                            {product.price}
                          </div>
                          <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mb-4" />
                          <p className="text-sm text-muted-foreground">
                            Premium quality feed for optimal nutrition
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Professional navigation buttons */}
            <Button
              variant="ghost"
              size="sm"
              onClick={prevSlide}
              className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 glass-effect hover:bg-background/90 rounded-full shadow-card flex items-center justify-center transition-all duration-300 border border-border/50 p-0"
            >
              <ChevronLeft className="w-6 h-6 text-foreground" />
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={nextSlide}
              className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 glass-effect hover:bg-background/90 rounded-full shadow-card flex items-center justify-center transition-all duration-300 border border-border/50 p-0"
            >
              <ChevronRight className="w-6 h-6 text-foreground" />
            </Button>

            {/* Professional indicators */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20 glass-effect rounded-full px-4 py-3">
              {products.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 ${
                    index === currentIndex 
                      ? 'w-8 h-2 bg-gradient-primary rounded-full shadow-glow' 
                      : 'w-2 h-2 bg-muted-foreground/50 hover:bg-muted-foreground rounded-full'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
