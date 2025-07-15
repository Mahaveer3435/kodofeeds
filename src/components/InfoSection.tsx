import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Shield, Award, Zap } from "lucide-react";

const InfoSection = () => {
  const features = [
    {
      icon: Leaf,
      title: "100% Natural Ingredients",
      description: "Our feeds are made from carefully selected natural ingredients with no harmful additives or chemicals.",
      color: "text-green-600"
    },
    {
      icon: Shield,
      title: "Enhanced Immunity",
      description: "Specially formulated with vitamins and minerals to boost your chickens' immune system and overall health.",
      color: "text-blue-600"
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "Increase egg production by up to 30% while improving shell quality and reducing mortality rates.",
      color: "text-yellow-600"
    },
    {
      icon: Zap,
      title: "Fast-Acting Formula",
      description: "See visible improvements in chicken health and egg production within just 2-3 weeks of use.",
      color: "text-orange-600"
    }
  ];

  return (
    <section className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Why Choose Our Feed?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our scientifically formulated chicken feed combines the best of nature and nutrition science 
            to deliver outstanding results for your poultry farming operation.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-in-up border-0 bg-background/80 backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`h-8 w-8 ${feature.color}`} />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-primary rounded-3xl p-12 text-primary-foreground">
            <h3 className="text-2xl md:text-3xl font-bold mb-8">Trusted Performance</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="animate-fade-in">
                <div className="text-4xl md:text-5xl font-bold mb-2">30%</div>
                <div className="text-primary-foreground/80">Higher Egg Production</div>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <div className="text-4xl md:text-5xl font-bold mb-2">85%</div>
                <div className="text-primary-foreground/80">Improved Shell Quality</div>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="text-4xl md:text-5xl font-bold mb-2">50%</div>
                <div className="text-primary-foreground/80">Reduced Mortality</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;