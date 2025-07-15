import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to transform your poultry operation? Contact our experts for personalized feed recommendations 
            and start seeing results in weeks, not months.
          </p>
        </div>

        <div className="flex justify-center">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in-up max-w-2xl">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Our team of poultry nutrition experts is here to help you achieve optimal results. 
                Reach out to us through any of the following channels.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="border-0 bg-background/80 backdrop-blur-sm hover:shadow-elegant transition-all duration-300 group">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Phone</h4>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-background/80 backdrop-blur-sm hover:shadow-elegant transition-all duration-300 group">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <p className="text-muted-foreground">info@chickenfeedpro.com</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-background/80 backdrop-blur-sm hover:shadow-elegant transition-all duration-300 group">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MapPin className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Address</h4>
                    <p className="text-muted-foreground">123 Farm Road<br />Agriculture Valley, AV 12345</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-background/80 backdrop-blur-sm hover:shadow-elegant transition-all duration-300 group">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Clock className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Business Hours</h4>
                    <p className="text-muted-foreground">
                      Mon - Fri: 8:00 AM - 6:00 PM<br />
                      Sat: 9:00 AM - 4:00 PM<br />
                      Sun: Closed
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Emergency Contact */}
            <div className="bg-accent/10 rounded-xl p-6 border border-accent/20">
              <h4 className="font-semibold text-foreground mb-3 flex items-center">
                <Phone className="h-5 w-5 text-accent mr-2" />
                24/7 Emergency Support
              </h4>
              <p className="text-muted-foreground text-sm">
                For urgent feeding issues or emergencies, call our 24/7 hotline: 
                <span className="font-semibold text-accent ml-1">+1 (555) 911-FEED</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;