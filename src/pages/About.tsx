import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Users, Leaf, Clock } from "lucide-react";
import farmFacility from "@/assets/farm-facility.jpg";

const About = () => {
  const values = [
    {
      icon: Leaf,
      title: "Sustainability",
      description: "We're committed to environmentally responsible farming practices and sustainable feed production."
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "Every batch of feed meets the highest quality standards through rigorous testing and quality control."
    },
    {
      icon: Users,
      title: "Customer First",
      description: "Our farmers' success is our success. We provide ongoing support and expert guidance."
    },
    {
      icon: Clock,
      title: "Innovation",
      description: "Continuously researching and developing new formulations to improve poultry health and productivity."
    }
  ];

  const milestones = [
    { year: "1999", event: "ChickenFeed Pro founded by agricultural scientists" },
    { year: "2005", event: "Launched our first organic feed line" },
    { year: "2010", event: "Reached 1,000 satisfied farm partners" },
    { year: "2015", event: "Opened state-of-the-art research facility" },
    { year: "2020", event: "Expanded to serve 10,000+ farms nationwide" },
    { year: "2024", event: "Leading innovation in sustainable poultry nutrition" }
  ];

  const teamMembers = [
    {
      name: "Dr. Sarah Mitchell",
      role: "Chief Executive Officer",
      background: "PhD in Animal Nutrition, 20+ years in agricultural science",
      emoji: "👩‍🔬"
    },
    {
      name: "Dr. Robert Chen",
      role: "Head of Research & Development",
      background: "Veterinary Science & Poultry Nutrition Specialist",
      emoji: "👨‍🔬"
    },
    {
      name: "Maria Rodriguez",
      role: "Director of Quality Assurance",
      background: "15 years in food safety and quality management",
      emoji: "👩‍💼"
    },
    {
      name: "James Thompson",
      role: "Customer Success Manager",
      background: "Former poultry farmer with 25 years of experience",
      emoji: "👨‍🌾"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${farmFacility})` }}
        >
          <div className="absolute inset-0 bg-primary/80"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="bg-background/10 border-primary-foreground/30 text-primary-foreground mb-6">
            About ChickenFeed Pro
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in-up">
            25 Years of Excellence in
            <span className="block text-yellow-400">Poultry Nutrition</span>
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto animate-fade-in-up">
            From a small research lab to the leading poultry nutrition company, 
            we've been dedicated to helping farmers achieve exceptional results through science-backed feed solutions.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  ChickenFeed Pro was founded in 1999 by a team of agricultural scientists who recognized 
                  the need for better poultry nutrition solutions. What started as a small research project 
                  has grown into a trusted partner for over 10,000 farms across the country.
                </p>
                <p>
                  Our founders, Dr. Emily Richardson and Dr. Michael Foster, combined their expertise in 
                  animal nutrition and agricultural science to develop feed formulations that not only 
                  improved chicken health but also increased profitability for farmers.
                </p>
                <p>
                  Today, we continue their legacy of innovation and excellence, constantly researching 
                  new ways to improve poultry nutrition while maintaining our commitment to sustainability 
                  and environmental responsibility.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <Card className="border-0 bg-primary/5">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">25+</div>
                  <div className="text-sm text-muted-foreground">Years of Experience</div>
                </CardContent>
              </Card>
              <Card className="border-0 bg-accent/5">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-accent mb-2">10K+</div>
                  <div className="text-sm text-muted-foreground">Partner Farms</div>
                </CardContent>
              </Card>
              <Card className="border-0 bg-green-500/5">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">50M+</div>
                  <div className="text-sm text-muted-foreground">Chickens Fed</div>
                </CardContent>
              </Card>
              <Card className="border-0 bg-orange-500/5">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">95%</div>
                  <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These core values guide everything we do, from product development to customer service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card 
                  key={index}
                  className="border-0 bg-background/80 backdrop-blur-sm hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Journey</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Key milestones that have shaped ChickenFeed Pro into the industry leader we are today.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary"></div>
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div 
                    key={index}
                    className="relative flex items-center animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg shadow-elegant z-10">
                      {milestone.year.slice(-2)}
                    </div>
                    <div className="ml-8 flex-1">
                      <div className="bg-background border border-border rounded-lg p-6 shadow-sm hover:shadow-elegant transition-all duration-300">
                        <div className="text-sm text-primary font-semibold mb-2">{milestone.year}</div>
                        <div className="text-foreground">{milestone.event}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our leadership team combines decades of experience in agriculture, nutrition science, and business management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card 
                key={index}
                className="border-0 bg-background/80 backdrop-blur-sm hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center text-4xl mx-auto mb-6">
                    {member.emoji}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{member.name}</h3>
                  <div className="text-primary font-medium mb-4">{member.role}</div>
                  <p className="text-sm text-muted-foreground">{member.background}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;