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
  Zap
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Import stock images
import electronicsImage1 from "@assets/stock_images/electronics_gadgets__ead9e10b.jpg";
import electronicsImage2 from "@assets/stock_images/electronics_gadgets__0d71bb00.jpg";
import electronicsImage3 from "@assets/stock_images/electronics_gadgets__9d104263.jpg";

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
  energyEfficient?: boolean;
}

const mockProducts: Product[] = [
  {
    id: "1",
    name: "Eco-Smart Wireless Headphones",
    description: "Premium wireless headphones made from recycled materials with solar charging",
    price: 149.99,
    originalPrice: 199.99,
    image: electronicsImage1,
    rating: 4.6,
    reviews: 342,
    carbonFootprint: 'low',
    ecoFriendly: true,
    energyEfficient: true,
    inStock: true
  },
  {
    id: "2", 
    name: "Solar Power Bank",
    description: "Portable power bank with solar charging capability and recycled housing",
    price: 79.99,
    originalPrice: 99.99,
    image: electronicsImage2,
    rating: 4.8,
    reviews: 128,
    carbonFootprint: 'low',
    ecoFriendly: true,
    energyEfficient: true,
    inStock: true
  },
  {
    id: "3",
    name: "Energy-Efficient Smart Speaker",
    description: "AI-powered smart speaker with low-power consumption and sustainable materials",
    price: 89.99,
    image: electronicsImage3,
    rating: 4.4,
    reviews: 267,
    carbonFootprint: 'medium',
    ecoFriendly: true,
    energyEfficient: true,
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

export default function ElectronicsPage() {
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
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Electronics Collection
          </h1>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto">
            Discover cutting-edge electronics designed with sustainability in mind and energy-efficient technology.
          </p>
        </div>
      </div>

      {/* Filter and Sort Bar */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="gap-2">
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
            <option value="energy">Most Energy Efficient</option>
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
                    data-testid={`wishlist-${product.id}`}
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

                  {/* Energy Efficient Badge */}
                  {product.energyEfficient && (
                    <Badge 
                      className="absolute bottom-3 left-3 bg-blue-500 text-white"
                      data-testid={`energy-badge-${product.id}`}
                    >
                      <Zap className="h-3 w-3 mr-1" />
                      Energy Efficient
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
                    className="w-full bg-blue-600 hover:bg-blue-700"
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