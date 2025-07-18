import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { useState, useEffect } from "react";

const products = [
  {
    id: 1,
    name: "Starter Feed Pro",
    price: "₹2,850",
    image: "/src/assets/chicken-feed-product.jpg"
  },
  {
    id: 2,
    name: "Layer Feed Premium", 
    price: "₹3,200",
    image: "/src/assets/chicken-feed-product.jpg"
  },
  {
    id: 3,
    name: "Broiler Feed Max",
    price: "₹2,950",
    image: "/src/assets/chicken-feed-product.jpg"
  },
  {
    id: 4,
    name: "Organic Blend",
    price: "₹3,800",
    image: "/src/assets/chicken-feed-product.jpg"
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
    <section className="py-6 bg-secondary/30">
      <div className="container mx-auto px-4 max-w-sm">
        <div className="text-center mb-4">
          <h2 className="text-xl font-bold mb-1 text-primary">Our Premium Products</h2>
          <p className="text-xs text-muted-foreground">
            Scientifically formulated feeds
          </p>
        </div>

        <div className="relative overflow-hidden">
          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="sm"
            className="absolute left-1 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground h-6 w-6 p-0"
            onClick={prevSlide}
          >
            <ArrowLeft className="h-3 w-3" />
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            className="absolute right-1 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground h-6 w-6 p-0"
            onClick={nextSlide}
          >
            <ArrowRight className="h-3 w-3" />
          </Button>

          {/* Products Slider */}
          <div className="relative h-72">
            <div 
              className="flex transition-transform duration-1000 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                width: `${products.length * 100}%`
              }}
            >
              {products.map((product, index) => (
                <div 
                  key={product.id} 
                  className="flex-shrink-0 w-full px-2 flex justify-center" 
                  style={{ width: `${100 / products.length}%` }}
                >
                  <Card className={`group hover:shadow-elegant transition-all duration-1000 w-full max-w-xs ${
                    index === currentIndex ? 'scale-100 opacity-100' : 'scale-95 opacity-70'
                  }`}>
                    <CardContent className="p-3">
                      <div className="space-y-3">
                        <div className="w-full h-32 bg-muted rounded-lg overflow-hidden">
                          <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                        <h3 className="font-semibold text-sm text-foreground text-center">{product.name}</h3>
                        <div className="flex items-center justify-center">
                          <span className="text-lg font-bold text-primary">{product.price}</span>
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
        <div className="flex justify-center mt-3 gap-1">
          {products.map((_, index) => (
            <button
              key={index}
              className={`w-1.5 h-1.5 rounded-full transition-colors ${
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