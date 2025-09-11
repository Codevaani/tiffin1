import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Filter, Search, ArrowLeft, Star, Clock, Users } from "lucide-react";
import northIndianTiffin from "@/assets/north-indian-tiffin.jpg";
import southIndianTiffin from "@/assets/south-indian-tiffin.jpg";
import healthyTiffin from "@/assets/healthy-tiffin.jpg";
import gujaratiTiffin from "@/assets/gujarati-tiffin.jpg";

const tiffins = [
  {
    id: 1,
    name: "North Indian Special",
    price: 249,
    originalPrice: 299,
    rating: 4.8,
    reviews: 234,
    cookTime: "25 min",
    serves: "1-2",
    category: "North Indian",
    image: northIndianTiffin,
    description: "Butter chicken, naan, basmati rice, dal makhani, raita, pickle",
    tags: ["Popular", "Spicy"],
    isVeg: false,
    calories: 650
  },
  {
    id: 2,
    name: "South Indian Classic",
    price: 199,
    originalPrice: 249,
    rating: 4.9,
    reviews: 189,
    cookTime: "20 min",
    serves: "1-2",
    category: "South Indian",
    image: southIndianTiffin,
    description: "Sambar, rasam, coconut rice, vegetable curry, papadum, chutney",
    tags: ["Vegetarian", "Traditional"],
    isVeg: true,
    calories: 520
  },
  {
    id: 3,
    name: "Healthy Delight",
    price: 299,
    originalPrice: 349,
    rating: 4.7,
    reviews: 156,
    cookTime: "30 min",
    serves: "1",
    category: "Healthy",
    image: healthyTiffin,
    description: "Grilled chicken, quinoa salad, roasted vegetables, clear soup, fruits",
    tags: ["Healthy", "Protein Rich"],
    isVeg: false,
    calories: 480
  },
  {
    id: 4,
    name: "Gujarati Thali",
    price: 229,
    originalPrice: 279,
    rating: 4.6,
    reviews: 98,
    cookTime: "25 min",
    serves: "1-2",
    category: "Gujarati",
    image: gujaratiTiffin,
    description: "Dhokla, khichdi, kadhi, bhindi, roti, pickle, sweet dish",
    tags: ["Sweet & Savory", "Traditional"],
    isVeg: true,
    calories: 580
  },
  {
    id: 5,
    name: "Punjabi Feast",
    price: 279,
    originalPrice: 329,
    rating: 4.8,
    reviews: 167,
    cookTime: "35 min",
    serves: "2",
    category: "Punjabi",
    image: northIndianTiffin,
    description: "Chole bhature, rajma, jeera rice, lassi, pickle, papad",
    tags: ["Hearty", "Popular"],
    isVeg: true,
    calories: 720
  },
  {
    id: 6,
    name: "Executive Special",
    price: 349,
    originalPrice: 399,
    rating: 4.9,
    reviews: 203,
    cookTime: "30 min",
    serves: "1",
    category: "Premium",
    image: healthyTiffin,
    description: "Grilled fish, brown rice, exotic salad, soup, dessert, fresh juice",
    tags: ["Premium", "Executive"],
    isVeg: false,
    calories: 520
  }
];

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const TiffinCatalog = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 w-full bg-background/80 backdrop-blur-lg border-b border-border z-50"
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            TiffinDelight
          </div>
          <Link to="/admin" className="text-muted-foreground hover:text-primary transition-colors">
            Admin
          </Link>
        </div>
      </motion.nav>

      {/* Header */}
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold text-white mb-4">Our Menu</h1>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Discover our carefully curated selection of authentic and modern tiffin options
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-muted/30 border-b border-border">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col lg:flex-row gap-4 items-center justify-between"
          >
            <div className="flex items-center gap-4 flex-1">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search tiffins..." 
                  className="pl-10 bg-background shadow-soft"
                />
              </div>
              <Select>
                <SelectTrigger className="w-40 bg-background shadow-soft">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="north-indian">North Indian</SelectItem>
                  <SelectItem value="south-indian">South Indian</SelectItem>
                  <SelectItem value="healthy">Healthy</SelectItem>
                  <SelectItem value="gujarati">Gujarati</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-32 bg-background shadow-soft">
                  <SelectValue placeholder="Sort" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">Popular</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Rating</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button variant="outline" className="flex items-center gap-2 shadow-soft">
              <Filter className="h-4 w-4" />
              More Filters
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Tiffin Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {tiffins.map((tiffin) => (
              <motion.div key={tiffin.id} variants={fadeInUp}>
                <Card className="overflow-hidden shadow-soft hover:shadow-premium transition-all duration-300 cursor-pointer group bg-gradient-card">
                  <div className="relative overflow-hidden">
                    <img 
                      src={tiffin.image} 
                      alt={tiffin.name}
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3 flex gap-2">
                      {tiffin.tags.map((tag) => (
                        <Badge key={tag} className="bg-primary/90 text-primary-foreground text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="absolute top-3 right-3">
                      <Badge className="bg-white/90 text-primary border-0">
                        <Star className="h-3 w-3 mr-1 fill-current" />
                        {tiffin.rating}
                      </Badge>
                    </div>
                    <div className="absolute bottom-3 right-3">
                      <Badge variant={tiffin.isVeg ? "secondary" : "destructive"} className="text-xs">
                        {tiffin.isVeg ? "VEG" : "NON-VEG"}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                        {tiffin.name}
                      </h3>
                      <div className="text-right">
                        <div className="flex items-center gap-2">
                          <span className="text-xl font-bold text-primary">₹{tiffin.price}</span>
                          {tiffin.originalPrice > tiffin.price && (
                            <span className="text-sm text-muted-foreground line-through">
                              ₹{tiffin.originalPrice}
                            </span>
                          )}
                        </div>
                        {tiffin.originalPrice > tiffin.price && (
                          <Badge variant="secondary" className="text-xs mt-1">
                            Save ₹{tiffin.originalPrice - tiffin.price}
                          </Badge>
                        )}
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {tiffin.description}
                    </p>
                    
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {tiffin.cookTime}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        Serves {tiffin.serves}
                      </div>
                      <div>{tiffin.calories} cal</div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-muted-foreground">
                        {tiffin.reviews} reviews
                      </div>
                      <Button 
                        className="bg-gradient-primary shadow-glow hover:shadow-premium transition-all duration-300" 
                        asChild
                      >
                        <Link to={`/tiffin/${tiffin.id}`}>View Details</Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TiffinCatalog;