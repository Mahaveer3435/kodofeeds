import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { useState, useEffect } from "react";

const products = [
  {
    id: 1,
    name: "Starter Feed Pro",
    description: "Perfect nutrition for chicks 0-8 weeks",
    price: "₹2,850",
    image: "/src/assets/chicken-feed-product.jpg",
    rating: 4.8,
    features: ["High Protein", "Easy Digest", "Growth Formula"]
  },
  {
    id: 2,
    name: "Layer Feed Premium", 
    description: "Optimized for maximum egg production",
    price: "₹3,200",
    image: "/src/assets/chicken-feed-product.jpg",
    rating: 4.9,
    features: ["Calcium Rich", "Omega-3", "Daily Nutrition"]
  },
  {
    id: 3,
    name: "Broiler Feed Max",
    description: "Fast growth formula for meat birds",
    price: "₹2,950",
    image: "/src/assets/chicken-feed-product.jpg", 
    rating: 4.7,
    features: ["Quick Growth", "Muscle Build", "Energy Dense"]
  },
  {
    id: 4,
    name: "Organic Blend",
    description: "100% natural and organic ingredients",
    price: "₹3,800",
    image: "/src/assets/chicken-feed-product.jpg",
    rating: 4.9,
    features: ["Organic", "No Chemicals", "Premium Quality"]
  }
];

const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance carousel every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  const getVisibleProducts = () => {
    return [products[currentIndex]];
  };

  return (
    <section className="py-8 bg-secondary/30">
      <div className="container mx-auto px-4 max-w-lg">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold mb-2 text-primary">Our Premium Products</h2>
          <p className="text-sm text-muted-foreground">
            Scientifically formulated feeds for optimal nutrition
          </p>
        </div>

        <div className="relative overflow-hidden">
          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="sm"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground h-8 w-8"
            onClick={prevSlide}
          >
            <ArrowLeft className="h-3 w-3" />
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground h-8 w-8"
            onClick={nextSlide}
          >
            <ArrowRight className="h-3 w-3" />
          </Button>

          {/* Products Slider */}
          <div className="relative h-80">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                width: `${products.length * 100}%`
              }}
            >
              {products.map((product, index) => (
                <div key={product.id} className="w-full px-6 flex justify-center" style={{ width: `${100 / products.length}%` }}>
                  <Card className="group hover:shadow-elegant transition-all duration-300 w-full max-w-xs">
                    <CardContent className="p-3">
                      <div className="aspect-[4/3] bg-primary/5 rounded-lg mb-3 overflow-hidden">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold text-base text-foreground truncate">{product.name}</h3>
                          <div className="flex items-center gap-1">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            <span className="text-xs text-muted-foreground">{product.rating}</span>
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground text-xs leading-relaxed">{product.description}</p>
                        
                        <div className="flex flex-wrap gap-1">
                          {product.features.slice(0, 2).map((feature, featureIndex) => (
                            <span 
                              key={featureIndex}
                              className="px-1.5 py-0.5 bg-primary/10 text-primary text-xs rounded-full"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                        
                        <div className="pt-2 border-t border-border">
                          <div className="flex items-center justify-between">
                            <span className="text-lg font-bold text-primary">{product.price}</span>
                            <Button size="sm" className="bg-primary hover:bg-primary/90 text-xs h-7 px-2">
                              View
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-4 gap-2">
          {products.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-primary' : 'bg-primary/30'
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;