import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Leaf, Shield, Zap, Award, ArrowLeft } from "lucide-react";
import productImage from "@/assets/chicken-feed-product.jpg";

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();

  const products = [
    {
      id: "premium-layer-feed",
      name: "Premium Layer Feed",
      category: "Layer Feed",
      price: "₹2,099",
      unit: "per 50lb bag",
      image: productImage,
      features: [
        "Optimized for egg production",
        "16% protein content", 
        "Added calcium for strong shells",
        "Omega-3 enriched",
        "No antibiotics or hormones"
      ],
      benefits: [
        "30% increase in egg production",
        "Stronger, cleaner eggshells",
        "Improved egg quality and taste",
        "Enhanced hen health and longevity"
      ],
      recommended: true,
      description: "Our premium layer feed is specially formulated to maximize egg production while maintaining the health and vitality of your laying hens. Rich in essential nutrients, vitamins, and minerals."
    },
    {
      id: "broiler-growth-formula",
      name: "Broiler Growth Formula", 
      category: "Broiler Feed",
      price: "₹1,949",
      unit: "per 50lb bag",
      image: productImage,
      features: [
        "High-protein growth formula",
        "22% protein content",
        "Digestibility enhancers",
        "Growth promoting nutrients",
        "All-natural ingredients"
      ],
      benefits: [
        "Faster weight gain",
        "Improved feed conversion",
        "Better meat quality",
        "Reduced mortality rates"
      ],
      description: "Scientifically designed for broiler chickens, this high-protein formula ensures rapid, healthy growth and optimal feed conversion rates for maximum profitability."
    },
    {
      id: "organic-starter-feed",
      name: "Organic Starter Feed",
      category: "Starter Feed", 
      price: "₹2,549",
      unit: "per 50lb bag",
      image: productImage,
      features: [
        "USDA Organic certified",
        "24% protein for rapid growth",
        "Probiotics for gut health",
        "No synthetic additives",
        "Non-GMO ingredients"
      ],
      benefits: [
        "Healthy chick development",
        "Strong immune system",
        "Better feed utilization",
        "Organic certification eligible"
      ],
      description: "Give your chicks the best start with our organic starter feed. USDA certified organic ingredients ensure healthy development without compromising on nutrition."
    },
    {
      id: "free-range-maintenance",
      name: "Free-Range Maintenance",
      category: "Maintenance Feed",
      price: "₹2,299", 
      unit: "per 50lb bag",
      image: productImage,
      features: [
        "Balanced nutrition for all ages",
        "14% protein content",
        "Vitamin and mineral fortified",
        "Weather-resistant pellets",
        "Suitable for mixed flocks"
      ],
      benefits: [
        "Maintains optimal health",
        "Supports natural foraging",
        "All-season nutrition",
        "Cost-effective feeding"
      ],
      description: "Perfect for free-range operations and mixed flocks. This balanced feed provides complete nutrition while supporting your chickens' natural foraging behavior."
    }
  ];

  const product = products.find(p => p.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Link to="/products">
            <Button>Back to Products</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 pt-8">
        <Link to="/products" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Products
        </Link>
      </div>

      {/* Product Detail */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="space-y-6">
              <div className="aspect-square bg-secondary/30 rounded-lg overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-8">
              {product.recommended && (
                <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                  ⭐ Most Popular Choice
                </Badge>
              )}
              
              <div>
                <Badge variant="outline" className="mb-4">{product.category}</Badge>
                <h1 className="text-4xl font-bold text-foreground mb-4">{product.name}</h1>
                <div className="flex items-baseline space-x-2 mb-6">
                  <span className="text-4xl font-bold text-primary">{product.price}</span>
                  <span className="text-muted-foreground">{product.unit}</span>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Features */}
                <div>
                  <h3 className="font-semibold text-foreground mb-4 flex items-center">
                    <Leaf className="h-5 w-5 text-green-600 mr-2" />
                    Key Features
                  </h3>
                  <ul className="space-y-3">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div>
                  <h3 className="font-semibold text-foreground mb-4 flex items-center">
                    <Award className="h-5 w-5 text-primary mr-2" />
                    Benefits
                  </h3>
                  <ul className="space-y-3">
                    {product.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant={product.recommended ? "hero" : "default"}
                  size="lg"
                  className="flex-1"
                >
                  Add to Cart
                </Button>
                <Button variant="outline" size="lg" className="flex-1">
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductDetail;