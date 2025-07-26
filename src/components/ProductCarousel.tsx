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
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold mb-2 text-gray-900">Our Premium Products</h2>
          <p className="text-gray-600">
            Scientifically formulated feeds for optimal chicken health
          </p>
        </div>

        <div className="relative w-full max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Auto-play toggle button */}
          <button
            onClick={toggleAutoPlay}
            className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/90 hover:bg-gray-100 rounded-full shadow-md flex items-center justify-center transition-all duration-300 border border-gray-200"
          >
            {isAutoPlaying ? (
              <Pause className="w-4 h-4 text-gray-700" />
            ) : (
              <Play className="w-4 h-4 text-gray-700" />
            )}
          </button>

          {/* Main carousel container */}
          <div className="relative h-96 overflow-hidden">
            {/* Products slider */}
            <div 
              className="flex transition-transform duration-500 ease-in-out h-full"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {products.map((product) => (
                <div key={product.id} className="min-w-full flex items-center justify-center p-6">
                  <Card className="w-full max-w-xs bg-white shadow-md border border-gray-200 rounded-lg overflow-hidden">
                    <CardContent className="p-0">
                      <div className="w-full h-48 bg-gray-100">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23f3f4f6'/%3E%3Ctext x='100' y='100' font-family='Arial' font-size='16' fill='%236b7280' text-anchor='middle' dy='.3em'%3EChicken Feed%3C/text%3E%3C/svg%3E";
                          }}
                        />
                      </div>
                      <div className="p-4 text-center">
                        <h3 className="font-semibold text-lg text-gray-900 mb-2">
                          {product.name}
                        </h3>
                        <div className="text-xl font-bold text-gray-900">
                          {product.price}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <Button
            variant="outline"
            size="sm"
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-10 h-10 bg-white/90 hover:bg-gray-100 rounded-full shadow-md flex items-center justify-center transition-all duration-300 border border-gray-200 p-0"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-10 h-10 bg-white/90 hover:bg-gray-100 rounded-full shadow-md flex items-center justify-center transition-all duration-300 border border-gray-200 p-0"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </Button>

          {/* Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 ${
                  index === currentIndex 
                    ? 'w-8 h-2 bg-gray-900 rounded-full' 
                    : 'w-2 h-2 bg-gray-400 hover:bg-gray-600 rounded-full'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;