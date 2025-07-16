import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { useState } from "react";

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

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  const getVisibleProducts = () => {
    const visibleProducts = [];
    for (let i = 0; i < 4; i++) {
      const index = (currentIndex + i) % products.length;
      visibleProducts.push(products[index]);
    }
    return visibleProducts;
  };

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-primary">Our Premium Products</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our range of scientifically formulated feeds designed for optimal nutrition and growth
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground"
            onClick={prevSlide}
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground"
            onClick={nextSlide}
          >
            <ArrowRight className="h-4 w-4" />
          </Button>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-12">
            {getVisibleProducts().map((product, index) => (
              <Card key={`${product.id}-${currentIndex}-${index}`} className="group hover:shadow-elegant transition-all duration-300 animate-fade-in">
                <CardContent className="p-6">
                  <div className="aspect-square bg-primary/5 rounded-lg mb-4 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-lg text-foreground">{product.name}</h3>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm text-muted-foreground">{product.rating}</span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground text-sm">{product.description}</p>
                    
                    <div className="flex flex-wrap gap-1">
                      {product.features.map((feature, featureIndex) => (
                        <span 
                          key={featureIndex}
                          className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-2xl font-bold text-primary">{product.price}</span>
                      <Button size="sm" className="bg-primary hover:bg-primary/90">
                        View Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-2">
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
      </div>
    </section>
  );
};

export default ProductCarousel;