import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Star, Clock, Users, Heart, Minus, Plus, ShoppingCart } from "lucide-react";
import { useState } from "react";
import northIndianTiffin from "@/assets/north-indian-tiffin.jpg";
import southIndianTiffin from "@/assets/south-indian-tiffin.jpg";
import healthyTiffin from "@/assets/healthy-tiffin.jpg";

const tiffinData = {
  1: {
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
    description: "A perfect blend of rich North Indian flavors featuring tender butter chicken in a creamy tomato-based sauce, served with fresh naan bread, aromatic basmati rice, and classic dal makhani. Complemented with cooling raita and traditional pickles.",
    tags: ["Popular", "Spicy"],
    isVeg: false,
    calories: 650,
    ingredients: [
      "Butter Chicken (200g)",
      "Naan Bread (2 pieces)",
      "Basmati Rice (150g)",
      "Dal Makhani (100g)",
      "Mixed Raita (50g)",
      "Pickle & Papad"
    ],
    nutritionFacts: {
      protein: "35g",
      carbs: "45g",
      fat: "25g",
      fiber: "8g"
    },
    allergens: ["Dairy", "Gluten"],
    preparationTime: "25 minutes",
    storage: "Consume within 2 hours of delivery"
  },
  2: {
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
    description: "Authentic South Indian comfort food featuring traditional sambar with vegetables, tangy rasam, coconut rice, seasonal vegetable curry, crispy papadum, and coconut chutney. A wholesome vegetarian meal.",
    tags: ["Vegetarian", "Traditional"],
    isVeg: true,
    calories: 520,
    ingredients: [
      "Sambar with Vegetables (150g)",
      "Rasam (100g)",
      "Coconut Rice (150g)",
      "Vegetable Curry (100g)",
      "Coconut Chutney (30g)",
      "Papadum (2 pieces)"
    ],
    nutritionFacts: {
      protein: "15g",
      carbs: "75g",
      fat: "12g",
      fiber: "12g"
    },
    allergens: ["None"],
    preparationTime: "20 minutes",
    storage: "Consume within 3 hours of delivery"
  },
  3: {
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
    description: "A nutritionist-designed meal featuring grilled chicken breast, protein-rich quinoa salad with fresh vegetables, roasted seasonal vegetables, clear vegetable soup, and fresh seasonal fruits.",
    tags: ["Healthy", "Protein Rich"],
    isVeg: false,
    calories: 480,
    ingredients: [
      "Grilled Chicken Breast (150g)",
      "Quinoa Salad (100g)",
      "Roasted Vegetables (100g)",
      "Clear Vegetable Soup (150ml)",
      "Fresh Seasonal Fruits (80g)",
      "Mixed Greens"
    ],
    nutritionFacts: {
      protein: "40g",
      carbs: "35g",
      fat: "15g",
      fiber: "10g"
    },
    allergens: ["None"],
    preparationTime: "30 minutes",
    storage: "Consume within 4 hours of delivery"
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

            <p className="text-muted-foreground leading-relaxed">
              {tiffin.description}
            </p>

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
          className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {/* Ingredients */}
          <Card className="p-6 bg-gradient-card shadow-soft">
            <h3 className="font-bold text-lg mb-4">What's Included</h3>
            <ul className="space-y-2">
              {tiffin.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-center gap-2 text-sm">
                  <div className="h-1.5 w-1.5 bg-primary rounded-full" />
                  {ingredient}
                </li>
              ))}
            </ul>
          </Card>

          {/* Nutrition Facts */}
          <Card className="p-6 bg-gradient-card shadow-soft">
            <h3 className="font-bold text-lg mb-4">Nutrition Facts</h3>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="flex justify-between">
                <span>Protein</span>
                <span className="font-semibold">{tiffin.nutritionFacts.protein}</span>
              </div>
              <div className="flex justify-between">
                <span>Carbs</span>
                <span className="font-semibold">{tiffin.nutritionFacts.carbs}</span>
              </div>
              <div className="flex justify-between">
                <span>Fat</span>
                <span className="font-semibold">{tiffin.nutritionFacts.fat}</span>
              </div>
              <div className="flex justify-between">
                <span>Fiber</span>
                <span className="font-semibold">{tiffin.nutritionFacts.fiber}</span>
              </div>
            </div>
          </Card>

          {/* Additional Info */}
          <Card className="p-6 bg-gradient-card shadow-soft">
            <h3 className="font-bold text-lg mb-4">Additional Info</h3>
            <div className="space-y-3 text-sm">
              <div>
                <span className="font-medium">Preparation Time:</span>
                <p className="text-muted-foreground">{tiffin.preparationTime}</p>
              </div>
              <div>
                <span className="font-medium">Allergens:</span>
                <p className="text-muted-foreground">
                  {tiffin.allergens.length > 0 ? tiffin.allergens.join(', ') : 'None'}
                </p>
              </div>
              <div>
                <span className="font-medium">Storage:</span>
                <p className="text-muted-foreground">{tiffin.storage}</p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default TiffinDetail;