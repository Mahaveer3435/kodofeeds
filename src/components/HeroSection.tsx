
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Professional Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/heroback.png')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/70 to-primary-glow/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto animate-fade-in-up">
          {/* Professional Rating Badge */}
          <div className="inline-flex items-center space-x-2 glass-effect rounded-full px-8 py-4 mb-8 shadow-elegant">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-primary-foreground text-sm font-medium">
              Trusted by 10,000+ Farmers
            </span>
          </div>

          {/* Main Heading with Professional Typography */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight tracking-tight">
            Premium Nutrition for
            <span className="block mt-2">
              <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 bg-clip-text text-transparent">
                Healthy Chickens
              </span>
            </span>
          </h1>

          {/* Professional Subtitle */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-10 max-w-4xl mx-auto leading-relaxed font-medium">
            Scientifically formulated feeds engineered for peak performance. 
            Trusted by agricultural professionals for over 4+ years of excellence.
          </p>

          {/* Professional CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
            <Link to="/products">
              <Button variant="hero" size="xl" className="group shadow-glow">
                Explore Products
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="xl" className="glass-effect border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 shadow-card">
                Our Story
              </Button>
            </Link>
          </div>

          {/* Professional Stats with Enhanced Design */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-primary-foreground/20">
            {[
              { number: "4+", label: "Years Experience", delay: "0s" },
              { number: "10K+", label: "Happy Farmers", delay: "0.1s" },
              { number: "50M+", label: "Chickens Fed", delay: "0.2s" },
              { number: "95%", label: "Customer Satisfaction", delay: "0.3s" },
            ].map((stat, index) => (
              <div key={index} className="text-center animate-fade-in glass-effect rounded-xl p-6 shadow-card" style={{ animationDelay: stat.delay }}>
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">{stat.number}</div>
                <div className="text-primary-foreground/80 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Professional Floating Elements */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-full animate-float blur-sm"></div>
      <div className="absolute bottom-20 right-10 w-20 h-20 bg-gradient-to-br from-orange-500/20 to-yellow-400/20 rounded-full animate-float blur-sm" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};

export default HeroSection;
