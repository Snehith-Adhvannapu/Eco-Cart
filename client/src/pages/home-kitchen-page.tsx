import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ShoppingCart, 
  Heart, 
  Star, 
  Filter,
  Leaf,
  Home
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Using existing generated images for home & kitchen products
import bambooBrushImage from "@assets/generated_images/Bamboo_toothbrush_product_2cae6240.png";
import waterBottleImage from "@assets/generated_images/Reusable_water_bottle_c4f791d9.png";
import ecoToteImage from "@assets/generated_images/Eco_tote_bag_product_d8b19c56.png";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  carbonFootprint: 'low' | 'medium' | 'high';
  ecoFriendly: boolean;
  inStock: boolean;
  material?: string;
  dishwasherSafe?: boolean;
}

const mockProducts: Product[] = [
  {
    id: "1",
    name: "Bamboo Kitchen Utensil Set",
    description: "Complete 6-piece bamboo utensil set including spoons, forks, and serving tools",
    price: 28.99,
    originalPrice: 39.99,
    image: bambooBrushImage,
    rating: 4.7,
    reviews: 189,
    carbonFootprint: 'low',
    ecoFriendly: true,
    material: "Sustainable Bamboo",
    dishwasherSafe: false,
    inStock: true
  },
  {
    id: "2", 
    name: "Stainless Steel Food Storage Set",
    description: "Leak-proof stainless steel containers perfect for meal prep and leftovers",
    price: 45.99,
    originalPrice: 65.99,
    image: waterBottleImage,
    rating: 4.8,
    reviews: 267,
    carbonFootprint: 'low',
    ecoFriendly: true,
    material: "304 Stainless Steel",
    dishwasherSafe: true,
    inStock: true
  },
  {
    id: "3",
    name: "Organic Cotton Kitchen Towel Set",
    description: "Super absorbent organic cotton kitchen towels with natural antimicrobial properties",
    price: 24.99,
    image: ecoToteImage,
    rating: 4.6,
    reviews: 145,
    carbonFootprint: 'low',
    ecoFriendly: true,
    material: "100% Organic Cotton",
    dishwasherSafe: false,
    inStock: true
  },
  {
    id: "4",
    name: "Glass Food Storage Jars",
    description: "Airtight glass storage jars with bamboo lids for pantry organization",
    price: 32.99,
    originalPrice: 42.99,
    image: waterBottleImage,
    rating: 4.9,
    reviews: 203,
    carbonFootprint: 'medium',
    ecoFriendly: true,
    material: "Borosilicate Glass",
    dishwasherSafe: true,
    inStock: true
  },
  {
    id: "5",
    name: "Compost Bin with Charcoal Filter",
    description: "Countertop compost bin with replaceable charcoal filter to eliminate odors",
    price: 39.99,
    originalPrice: 55.99,
    image: ecoToteImage,
    rating: 4.5,
    reviews: 178,
    carbonFootprint: 'low',
    ecoFriendly: true,
    material: "Recycled Plastic",
    dishwasherSafe: true,
    inStock: true
  },
  {
    id: "6",
    name: "Reusable Silicone Food Wraps",
    description: "Plastic-free food storage wraps made from food-grade silicone",
    price: 19.99,
    originalPrice: 29.99,
    image: bambooBrushImage,
    rating: 4.4,
    reviews: 124,
    carbonFootprint: 'low',
    ecoFriendly: true,
    material: "Food-Grade Silicone",
    dishwasherSafe: true,
    inStock: true
  },
  {
    id: "7",
    name: "Cast Iron Dutch Oven",
    description: "Pre-seasoned cast iron dutch oven perfect for one-pot meals and bread baking",
    price: 89.99,
    originalPrice: 129.99,
    image: waterBottleImage,
    rating: 4.8,
    reviews: 312,
    carbonFootprint: 'medium',
    ecoFriendly: true,
    material: "Cast Iron",
    dishwasherSafe: false,
    inStock: true
  },
  {
    id: "8",
    name: "Bamboo Cutting Board Set",
    description: "Three-piece bamboo cutting board set with juice grooves and easy-grip handles",
    price: 42.99,
    image: bambooBrushImage,
    rating: 4.6,
    reviews: 198,
    carbonFootprint: 'low',
    ecoFriendly: true,
    material: "Sustainable Bamboo",
    dishwasherSafe: false,
    inStock: true
  }
];

const getCarbonBadgeColor = (footprint: string) => {
  switch (footprint) {
    case 'low': return 'bg-green-100 text-green-700 border-green-300';
    case 'medium': return 'bg-yellow-100 text-yellow-700 border-yellow-300';
    case 'high': return 'bg-red-100 text-red-700 border-red-300';
    default: return 'bg-gray-100 text-gray-700 border-gray-300';
  }
};

export default function HomeKitchenPage() {
  const [products] = useState<Product[]>(mockProducts);
  const [sortBy, setSortBy] = useState<string>('popular');
  const { toast } = useToast();

  const handleAddToCart = (product: Product) => {
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const handleWishlist = (product: Product) => {
    toast({
      title: "Added to wishlist",
      description: `${product.name} has been added to your wishlist.`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            Home & Kitchen Collection
          </h1>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto">
            Transform your kitchen with sustainable, durable products that reduce waste and support eco-friendly living.
          </p>
        </div>
      </div>

      {/* Filter and Sort Bar */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="gap-2" data-testid="button-filters">
              <Filter className="h-4 w-4" />
              Filters
            </Button>
            <span className="text-sm text-muted-foreground">
              {products.length} products found
            </span>
          </div>
          <select 
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-3 py-2 border rounded-md text-sm bg-background"
            data-testid="select-sort"
          >
            <option value="popular">Most Popular</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
            <option value="eco">Most Eco-Friendly</option>
            <option value="material">By Material</option>
          </select>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card 
              key={product.id}
              className="group hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] bg-card border-0 shadow-lg"
              data-testid={`product-card-${product.id}`}
            >
              <CardContent className="p-0">
                {/* Product Image */}
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    data-testid={`product-image-${product.id}`}
                  />
                  
                  {/* Wishlist Button */}
                  <Button
                    size="icon"
                    variant="secondary"
                    className="absolute top-3 right-3 h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 hover:bg-white"
                    onClick={() => handleWishlist(product)}
                    data-testid={`button-wishlist-${product.id}`}
                  >
                    <Heart className="h-4 w-4" />
                  </Button>

                  {/* Carbon Footprint Badge */}
                  <Badge 
                    className={`absolute top-3 left-3 ${getCarbonBadgeColor(product.carbonFootprint)}`}
                    data-testid={`carbon-badge-${product.id}`}
                  >
                    <Leaf className="h-3 w-3 mr-1" />
                    {product.carbonFootprint} CO₂
                  </Badge>

                  {/* Dishwasher Safe Badge */}
                  {product.dishwasherSafe && (
                    <Badge 
                      className="absolute top-12 left-3 bg-blue-500 text-white"
                      data-testid={`dishwasher-badge-${product.id}`}
                    >
                      <Home className="h-3 w-3 mr-1" />
                      Dishwasher Safe
                    </Badge>
                  )}

                  {/* Eco-Friendly Badge */}
                  {product.ecoFriendly && (
                    <Badge 
                      className="absolute bottom-12 left-3 bg-green-500 text-white"
                      data-testid={`eco-badge-${product.id}`}
                    >
                      Eco-Friendly
                    </Badge>
                  )}

                  {/* Material Badge */}
                  {product.material && (
                    <Badge 
                      className="absolute bottom-3 left-3 bg-purple-500 text-white text-xs"
                      data-testid={`material-badge-${product.id}`}
                    >
                      {product.material}
                    </Badge>
                  )}

                  {/* Discount Badge */}
                  {product.originalPrice && (
                    <Badge 
                      className="absolute bottom-3 right-3 bg-red-500 text-white"
                      data-testid={`discount-badge-${product.id}`}
                    >
                      {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                    </Badge>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2" data-testid={`product-name-${product.id}`}>
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i}
                          className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      ({product.reviews})
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl font-bold text-primary" data-testid={`product-price-${product.id}`}>
                      ${product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>

                  {/* Add to Cart Button */}
                  <Button 
                    className="w-full bg-emerald-600 hover:bg-emerald-700"
                    onClick={() => handleAddToCart(product)}
                    disabled={!product.inStock}
                    data-testid={`add-to-cart-${product.id}`}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}