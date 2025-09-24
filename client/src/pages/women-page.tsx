import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ShoppingCart, 
  Heart, 
  Star, 
  Filter,
  Leaf 
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Import stock images
import womenImage1 from "@assets/stock_images/women's_fashion_clot_69ea4535.jpg";
import womenImage2 from "@assets/stock_images/women's_fashion_clot_76873acd.jpg";
import womenImage3 from "@assets/stock_images/women's_fashion_clot_b474426e.jpg";

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
}

const mockProducts: Product[] = [
  {
    id: "1",
    name: "Sustainable Summer Dress",
    description: "Elegant summer dress made from organic cotton and TENCEL™ fibers",
    price: 89.99,
    originalPrice: 119.99,
    image: womenImage1,
    rating: 4.7,
    reviews: 203,
    carbonFootprint: 'low',
    ecoFriendly: true,
    inStock: true
  },
  {
    id: "2", 
    name: "Eco-Friendly Blouse",
    description: "Stylish blouse crafted from recycled polyester and organic materials",
    price: 59.99,
    originalPrice: 79.99,
    image: womenImage2,
    rating: 4.4,
    reviews: 156,
    carbonFootprint: 'low',
    ecoFriendly: true,
    inStock: true
  },
  {
    id: "3",
    name: "Organic Cotton Top",
    description: "Comfortable everyday top made from 100% organic fair-trade cotton",
    price: 34.99,
    image: womenImage3,
    rating: 4.6,
    reviews: 94,
    carbonFootprint: 'low',
    ecoFriendly: true,
    inStock: true
  },
  {
    id: "4",
    name: "Recycled Denim Skirt",
    description: "Trendy A-line skirt made from upcycled denim with vintage wash",
    price: 64.99,
    originalPrice: 84.99,
    image: womenImage1,
    rating: 4.5,
    reviews: 167,
    carbonFootprint: 'medium',
    ecoFriendly: true,
    inStock: true
  },
  {
    id: "5",
    name: "Bamboo Yoga Leggings",
    description: "High-waisted leggings made from bamboo fiber blend for comfort and stretch",
    price: 49.99,
    originalPrice: 69.99,
    image: womenImage2,
    rating: 4.8,
    reviews: 234,
    carbonFootprint: 'low',
    ecoFriendly: true,
    inStock: true
  },
  {
    id: "6",
    name: "TENCEL™ Cardigan",
    description: "Lightweight cardigan made from sustainably sourced TENCEL™ fiber",
    price: 79.99,
    image: womenImage3,
    rating: 4.6,
    reviews: 145,
    carbonFootprint: 'low',
    ecoFriendly: true,
    inStock: true
  },
  {
    id: "7",
    name: "Organic Linen Pants",
    description: "Breathable wide-leg pants made from organic linen with natural dyes",
    price: 74.99,
    originalPrice: 99.99,
    image: womenImage1,
    rating: 4.4,
    reviews: 128,
    carbonFootprint: 'low',
    ecoFriendly: true,
    inStock: true
  },
  {
    id: "8",
    name: "Eco Sneakers",
    description: "Stylish sneakers made from organic cotton and recycled rubber",
    price: 89.99,
    originalPrice: 119.99,
    image: womenImage2,
    rating: 4.7,
    reviews: 198,
    carbonFootprint: 'low',
    ecoFriendly: true,
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

export default function WomenPage() {
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
      <div className="bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
            Women's Collection
          </h1>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto">
            Explore our curated women's fashion collection featuring sustainable fabrics and conscious design.
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

                  {/* Eco-Friendly Badge */}
                  {product.ecoFriendly && (
                    <Badge 
                      className="absolute bottom-3 left-3 bg-green-500 text-white"
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
                    className="w-full bg-pink-600 hover:bg-pink-700"
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