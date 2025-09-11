import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, Shield, Truck } from "lucide-react";
import heroImage from "@/assets/hero-tiffin.jpg";
import northIndianTiffin from "@/assets/north-indian-tiffin.jpg";
import southIndianTiffin from "@/assets/south-indian-tiffin.jpg";
import healthyTiffin from "@/assets/healthy-tiffin.jpg";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 w-full bg-background/80 backdrop-blur-lg border-b border-border z-50"
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            TiffinDelight
          </div>
          <div className="flex items-center gap-6">
            <Link to="/menu" className="text-muted-foreground hover:text-primary transition-colors">
              Menu
            </Link>
            <Link to="/admin" className="text-muted-foreground hover:text-primary transition-colors">
              Admin
            </Link>
            <Button size="sm" className="bg-gradient-primary shadow-glow">
              Order Now
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Delicious tiffin service" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp}>
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                Fresh • Healthy • Delivered Daily
              </Badge>
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent"
            >
              Premium Tiffin
              <br />
              Service
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            >
              Experience authentic homestyle meals delivered fresh to your doorstep. 
              From traditional Indian thalis to healthy modern options.
            </motion.p>
            
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button 
                size="lg" 
                className="bg-gradient-primary shadow-premium hover:shadow-glow transition-all duration-300 text-lg px-8 py-6"
                asChild
              >
                <Link to="/menu">Explore Menu</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary/30 hover:bg-primary/5 text-lg px-8 py-6"
              >
                Learn More
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Why Choose TiffinDelight?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We're committed to delivering the finest quality meals with unmatched convenience
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { icon: Clock, title: "Always Fresh", desc: "Prepared daily with fresh ingredients" },
              { icon: Shield, title: "Quality Assured", desc: "Hygienically prepared in certified kitchens" },
              { icon: Truck, title: "On-Time Delivery", desc: "Delivered hot and fresh to your location" },
              { icon: Star, title: "Premium Quality", desc: "Restaurant-quality meals at home prices" }
            ].map((feature, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="p-6 text-center shadow-soft hover:shadow-glow transition-all duration-300 bg-gradient-card">
                  <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.desc}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Popular Tiffins Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Popular Tiffins</h2>
            <p className="text-muted-foreground text-lg">
              Discover our most loved meal combinations
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { 
                image: northIndianTiffin, 
                name: "North Indian Special", 
                price: "₹249", 
                rating: 4.8,
                description: "Butter chicken, naan, rice, dal, raita"
              },
              { 
                image: southIndianTiffin, 
                name: "South Indian Classic", 
                price: "₹199", 
                rating: 4.9,
                description: "Sambar, rasam, rice, vegetables, chutney"
              },
              { 
                image: healthyTiffin, 
                name: "Healthy Delight", 
                price: "₹299", 
                rating: 4.7,
                description: "Grilled protein, quinoa, fresh salad, soup"
              }
            ].map((tiffin, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="overflow-hidden shadow-soft hover:shadow-premium transition-all duration-300 cursor-pointer group">
                  <div className="relative overflow-hidden">
                    <img 
                      src={tiffin.image} 
                      alt={tiffin.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3">
                      <Badge className="bg-primary text-primary-foreground">
                        ⭐ {tiffin.rating}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-lg">{tiffin.name}</h3>
                      <span className="text-xl font-bold text-primary">{tiffin.price}</span>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4">{tiffin.description}</p>
                    <Button className="w-full bg-gradient-primary shadow-glow" asChild>
                      <Link to={`/tiffin/${index + 1}`}>View Details</Link>
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Start Your Tiffin Journey?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust us for their daily meals
            </p>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 shadow-premium text-lg px-8 py-6"
              asChild
            >
              <Link to="/menu">Order Your First Tiffin</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            TiffinDelight
          </div>
          <p>© 2024 TiffinDelight. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;