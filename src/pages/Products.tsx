import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Leaf, Shield, Zap, Award } from "lucide-react";
import productImage from "@/assets/chicken-feed-product.jpg";

const Products = () => {
  const products = [
    {
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
      recommended: true
    },
    {
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
      ]
    },
    {
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
      ]
    },
    {
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
      ]
    }
  ];

  const certifications = [
    { name: "USDA Organic", icon: Leaf },
    { name: "Non-GMO Project", icon: Shield },
    { name: "Quality Assured", icon: Award },
    { name: "Fast Acting", icon: Zap }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground mb-6">
            Our Product Line
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Scientifically Formulated
            <span className="block text-yellow-400">Chicken Feed Solutions</span>
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-8 animate-fade-in-up">
            From starter to layer, organic to conventional - we have the perfect feed solution 
            for every stage of your chickens' lives and farming operation.
          </p>
          
          {/* Certifications */}
          <div className="flex flex-wrap justify-center items-center gap-6 mt-12">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <div 
                  key={index}
                  className="flex items-center space-x-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-6 py-3 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Icon className="h-5 w-5 text-yellow-400" />
                  <span className="text-sm font-medium">{cert.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {products.map((product, index) => (
              <Card 
                key={index}
                className={`border-0 shadow-elegant hover:shadow-glow transition-all duration-300 hover:-translate-y-2 animate-fade-in-up overflow-hidden ${
                  product.recommended ? 'ring-2 ring-primary/20' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {product.recommended && (
                  <div className="bg-gradient-primary text-primary-foreground text-center py-2 text-sm font-semibold">
                    ⭐ Most Popular Choice
                  </div>
                )}
                
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <Badge variant="outline" className="mb-3">{product.category}</Badge>
                      <h3 className="text-2xl font-bold text-foreground mb-2">{product.name}</h3>
                      <div className="flex items-baseline space-x-2">
                        <span className="text-3xl font-bold text-primary">{product.price}</span>
                        <span className="text-muted-foreground">{product.unit}</span>
                      </div>
                    </div>
                    <div className="w-24 h-24 rounded-lg overflow-hidden bg-secondary/30">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Features */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-4 flex items-center">
                        <Leaf className="h-4 w-4 text-green-600 mr-2" />
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {product.features.map((feature, fIndex) => (
                          <li key={fIndex} className="flex items-start space-x-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-4 flex items-center">
                        <Award className="h-4 w-4 text-primary mr-2" />
                        Benefits
                      </h4>
                      <ul className="space-y-2">
                        {product.benefits.map((benefit, bIndex) => (
                          <li key={bIndex} className="flex items-start space-x-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-6 border-t border-border">
                    <Button 
                      variant={product.recommended ? "hero" : "default"} 
                      className="flex-1"
                    >
                      Add to Cart
                    </Button>
                    <Button variant="outline" className="flex-1">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Feed */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Why Choose ChickenFeed Pro?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our feeds are developed by nutrition experts and tested by real farmers to ensure optimal results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 bg-background/80 backdrop-blur-sm text-center hover:shadow-elegant transition-all duration-300 animate-fade-in-up">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Leaf className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Natural Ingredients</h3>
                <p className="text-muted-foreground">
                  Only the finest natural ingredients, carefully sourced and tested for quality and safety.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-background/80 backdrop-blur-sm text-center hover:shadow-elegant transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Quality Guaranteed</h3>
                <p className="text-muted-foreground">
                  Rigorous quality control and testing ensure every bag meets our high standards.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-background/80 backdrop-blur-sm text-center hover:shadow-elegant transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Proven Results</h3>
                <p className="text-muted-foreground">
                  See improvements in chicken health and egg production within just 2-3 weeks.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-up">
            Ready to Transform Your Farm?
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-8 animate-fade-in-up">
            Join thousands of successful farmers who have improved their operations with ChickenFeed Pro. 
            Get personalized feed recommendations from our experts.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in-up">
            <Button variant="ghost" size="xl" className="text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10">
              Call Our Experts
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;