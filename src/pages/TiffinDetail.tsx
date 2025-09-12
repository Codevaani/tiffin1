import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Star, Clock, Users, Heart, Minus, Plus, ShoppingCart, Award, Zap, Leaf } from "lucide-react";
import { useState } from "react";
import northIndianTiffin from "@/assets/north-indian-tiffin.jpg";
import southIndianTiffin from "@/assets/south-indian-tiffin.jpg";
import healthyTiffin from "@/assets/healthy-tiffin.jpg";
import NutritionCard from "@/components/NutritionCard";

const tiffinData = {
  1: {
    id: 1,
    name: "North Indian Royal",
    price: 249,
    originalPrice: 299,
    rating: 4.8,
    reviews: 2534,
    cookTime: "25 min",
    serves: "1-2",
    category: "North Indian",
    image: northIndianTiffin,
    description: "A perfect blend of rich North Indian flavors featuring tender butter chicken in a creamy tomato-based sauce, served with fresh handmade naan bread, aromatic basmati rice, and classic dal makhani. Complemented with cooling mint raita and traditional pickles for an authentic experience.",
    longDescription: "Our signature North Indian Royal tiffin is crafted by master chefs with over 20 years of experience in traditional Indian cuisine. Each component is prepared with premium ingredients sourced directly from organic farms. The butter chicken features free-range chicken marinated in yogurt and spices for 24 hours, while our naan is made fresh every 2 hours using traditional tandoor ovens.",
    tags: ["Chef's Special", "Most Popular"],
    isVeg: false,
    calories: 650,
    ingredients: [
      "Premium Butter Chicken (200g) - Free-range chicken in tomato cream sauce",
      "Handmade Naan Bread (2 pieces) - Fresh from tandoor oven",
      "Aromatic Basmati Rice (150g) - Premium aged rice",
      "Dal Makhani (100g) - Black lentils slow-cooked for 6 hours",
      "Mint Raita (50g) - Fresh yogurt with mint and cucumber",
      "Traditional Pickle & Papad - Homemade pickles and crispy papad"
    ],
    nutritionFacts: {
      protein: "35g",
      carbs: "45g",
      fat: "25g",
      fiber: "8g"
    },
    allergens: ["Dairy", "Gluten"],
    preparationTime: "25-30 minutes",
    storage: "Consume within 2 hours of delivery for best taste",
    chefNote: "Best paired with our signature mint lassi for the complete experience",
    sustainability: "Eco-friendly packaging, locally sourced ingredients"
  },
  2: {
    id: 2,
    name: "South Indian Authentic",
    price: 199,
    originalPrice: 249,
    rating: 4.9,
    reviews: 3127,
    cookTime: "20 min",
    serves: "1-2",
    category: "South Indian",
    image: southIndianTiffin,
    description: "Authentic South Indian comfort food featuring traditional sambar with seasonal vegetables, tangy rasam, aromatic coconut rice, seasonal vegetable curry, crispy papadum, and coconut chutney. A wholesome vegetarian meal that brings the taste of South India to your table.",
    longDescription: "Our South Indian Authentic tiffin is prepared following traditional recipes passed down through generations. The sambar uses tamarind sourced from Tamil Nadu farms, while our coconut chutney is made fresh every morning using coconuts from Kerala. Each spice is roasted and ground in-house to preserve authentic flavors.",
    tags: ["Vegetarian", "Traditional"],
    isVeg: true,
    calories: 520,
    ingredients: [
      "Traditional Sambar (150g) - Lentil curry with mixed vegetables",
      "Tangy Rasam (100g) - Spiced tamarind broth with tomatoes",
      "Coconut Rice (150g) - Basmati rice with fresh coconut",
      "Seasonal Vegetable Curry (100g) - Daily fresh vegetables",
      "Fresh Coconut Chutney (30g) - Ground fresh coconut with curry leaves",
      "Crispy Papadum (2 pieces) - Traditional lentil wafers"
    ],
    nutritionFacts: {
      protein: "15g",
      carbs: "75g",
      fat: "12g",
      fiber: "12g"
    },
    allergens: [],
    preparationTime: "20-25 minutes",
    storage: "Consume within 3 hours of delivery",
    chefNote: "Traditionally served on banana leaf for enhanced flavor",
    sustainability: "100% plant-based, zero-waste cooking methods"
  },
  3: {
    id: 3,
    name: "Wellness Pro",
    price: 299,
    originalPrice: 349,
    rating: 4.7,
    reviews: 1876,
    cookTime: "30 min",
    serves: "1",
    category: "Healthy",
    image: healthyTiffin,
    description: "A nutritionist-designed meal featuring grilled chicken breast, protein-rich quinoa salad with fresh vegetables, roasted seasonal vegetables, clear vegetable soup, and fresh seasonal fruits. Perfect for health-conscious individuals and fitness enthusiasts.",
    longDescription: "Designed in collaboration with certified nutritionists and fitness experts, our Wellness Pro tiffin provides optimal macro and micronutrient balance. The grilled chicken is sourced from free-range farms, quinoa is imported from Peru, and vegetables are organic and locally sourced within 24 hours of preparation.",
    tags: ["High Protein", "Keto Friendly"],
    isVeg: false,
    calories: 480,
    ingredients: [
      "Grilled Chicken Breast (150g) - Free-range, herb-marinated",
      "Quinoa Power Bowl (100g) - Superfood grain with mixed vegetables",
      "Roasted Seasonal Vegetables (100g) - Broccoli, bell peppers, zucchini",
      "Clear Vegetable Soup (150ml) - Light, nutrient-rich broth",
      "Fresh Seasonal Fruits (80g) - Vitamin-rich seasonal selection",
      "Mixed Greens Salad - Spinach, arugula, cherry tomatoes"
    ],
    nutritionFacts: {
      protein: "40g",
      carbs: "35g",
      fat: "15g",
      fiber: "10g"
    },
    allergens: [],
    preparationTime: "25-35 minutes",
    storage: "Consume within 4 hours of delivery",
    chefNote: "Perfectly balanced for post-workout recovery",
    sustainability: "Sustainable protein sources, minimal processing"
  }
};

const TiffinDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  
  const tiffin = id ? tiffinData[parseInt(id) as keyof typeof tiffinData] : null;
  
  if (!tiffin) {
    return <div>Tiffin not found</div>;
  }

  const totalPrice = tiffin.price * quantity;
  const savings = (tiffin.originalPrice - tiffin.price) * quantity;

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 w-full bg-background/80 backdrop-blur-lg border-b border-border z-50"
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/menu" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Menu
          </Link>
          <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            TiffinDelight
          </div>
          <div className="w-20" />
        </div>
      </motion.nav>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <img 
                src={tiffin.image} 
                alt={tiffin.name}
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-premium"
              />
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className="absolute top-4 right-4 p-3 bg-white/90 rounded-full shadow-soft hover:shadow-glow transition-all duration-300"
              >
                <Heart 
                  className={`h-5 w-5 ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-muted-foreground'}`} 
                />
              </button>
              <div className="absolute bottom-4 left-4 flex gap-2">
                {tiffin.tags.map((tag) => (
                  <Badge key={tag} className="bg-primary/90 text-primary-foreground">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Details Section */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant={tiffin.isVeg ? "secondary" : "destructive"}>
                  {tiffin.isVeg ? "VEG" : "NON-VEG"}
                </Badge>
                <Badge variant="outline">{tiffin.category}</Badge>
              </div>
              <h1 className="text-4xl font-bold mb-2">{tiffin.name}</h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 fill-primary text-primary" />
                  <span className="font-semibold">{tiffin.rating}</span>
                  <span className="text-muted-foreground">({tiffin.reviews} reviews)</span>
                </div>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {tiffin.cookTime}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    Serves {tiffin.serves}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl font-bold text-primary">₹{tiffin.price}</span>
                {tiffin.originalPrice > tiffin.price && (
                  <>
                    <span className="text-xl text-muted-foreground line-through">
                      ₹{tiffin.originalPrice}
                    </span>
                    <Badge className="bg-success text-success-foreground">
                      {Math.round(((tiffin.originalPrice - tiffin.price) / tiffin.originalPrice) * 100)}% OFF
                    </Badge>
                  </>
                )}
              </div>
              <p className="text-muted-foreground">{tiffin.calories} calories per serving</p>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-4">
              {tiffin.description}
            </p>
            
            <Card className="p-4 bg-primary/5 border-primary/20 mb-6">
              <div className="flex items-start gap-3">
                <Award className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm mb-1">Chef's Note</h4>
                  <p className="text-muted-foreground text-sm">{tiffin.chefNote}</p>
                </div>
              </div>
            </Card>

            <div className="text-sm text-muted-foreground mb-6 leading-relaxed">
              {tiffin.longDescription}
            </div>

            {/* Quantity Selector */}
            <Card className="p-4 bg-gradient-card">
              <div className="flex items-center justify-between">
                <span className="font-semibold">Quantity</span>
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="h-8 w-8"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="font-semibold text-lg w-8 text-center">{quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                    className="h-8 w-8"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <Separator className="my-3" />
              <div className="space-y-1">
                <div className="flex justify-between">
                  <span>Subtotal ({quantity} item{quantity > 1 ? 's' : ''})</span>
                  <span className="font-semibold">₹{totalPrice}</span>
                </div>
                {savings > 0 && (
                  <div className="flex justify-between text-success">
                    <span>You save</span>
                    <span className="font-semibold">₹{savings}</span>
                  </div>
                )}
              </div>
            </Card>

            <div className="flex gap-4">
              <Button 
                size="lg" 
                className="flex-1 bg-gradient-primary shadow-glow hover:shadow-premium transition-all duration-300"
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="flex-1 border-primary/30 hover:bg-primary/5"
              >
                Order Now
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Additional Details */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid lg:grid-cols-3 gap-8"
        >
          {/* Ingredients */}
          <Card className="p-6 bg-gradient-card shadow-luxury border-0">
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="h-5 w-5 text-primary" />
              <h3 className="font-bold text-lg">Premium Ingredients</h3>
            </div>
            <ul className="space-y-3">
              {tiffin.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-start gap-3 text-sm">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="leading-relaxed">{ingredient}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Nutrition Card */}
          <NutritionCard 
            calories={tiffin.calories}
            protein={tiffin.nutritionFacts.protein}
            carbs={tiffin.nutritionFacts.carbs}
            fat={tiffin.nutritionFacts.fat}
            fiber={tiffin.nutritionFacts.fiber}
            isVeg={tiffin.isVeg}
            allergens={tiffin.allergens}
          />

          {/* Additional Info */}
          <Card className="p-6 bg-gradient-card shadow-luxury border-0">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="h-5 w-5 text-accent" />
              <h3 className="font-bold text-lg">Delivery & Care</h3>
            </div>
            <div className="space-y-4 text-sm">
              <div>
                <span className="font-medium text-primary">Preparation Time:</span>
                <p className="text-muted-foreground mt-1">{tiffin.preparationTime}</p>
              </div>
              <div>
                <span className="font-medium text-primary">Storage Instructions:</span>
                <p className="text-muted-foreground mt-1">{tiffin.storage}</p>
              </div>
              <div>
                <span className="font-medium text-primary">Sustainability:</span>
                <p className="text-muted-foreground mt-1">{tiffin.sustainability}</p>
              </div>
              <div className="pt-2 border-t border-border">
                <div className="flex items-center gap-2 text-success text-xs">
                  <Award className="h-4 w-4" />
                  <span>ISO 22000 Certified Kitchen</span>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Reviews Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16"
        >
          <Card className="p-8 bg-gradient-card shadow-luxury border-0">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-2xl">Customer Reviews</h3>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <span className="font-semibold text-lg">{tiffin.rating}</span>
                <span className="text-muted-foreground">({tiffin.reviews.toLocaleString()} reviews)</span>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-primary/5 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <span className="font-semibold text-sm">Excellent!</span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    "The taste is absolutely authentic! Reminds me of my grandmother's cooking. 
                    The packaging keeps everything fresh and warm."
                  </p>
                  <div className="text-xs text-muted-foreground mt-2">- Verified Customer</div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-primary/5 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <span className="font-semibold text-sm">Amazing Quality!</span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    "Perfect portion sizes and the ingredients are clearly premium quality. 
                    Delivery is always on time!"
                  </p>
                  <div className="text-xs text-muted-foreground mt-2">- Verified Customer</div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default TiffinDetail;