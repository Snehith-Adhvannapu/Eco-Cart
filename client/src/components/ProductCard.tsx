import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, ShoppingCart, Star, Eye } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  brand: string;
  price: number;
  carbonFootprint: number;
  rating: number;
  reviewCount: number;
  image: string;
  tags: string[];
  onAddToCart: (id: string) => void;
  onWishlist: (id: string) => void;
  onQuickView: (id: string) => void;
}

export default function ProductCard({
  id,
  name,
  brand,
  price,
  carbonFootprint,
  rating,
  reviewCount,
  image,
  tags,
  onAddToCart,
  onWishlist,
  onQuickView
}: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const getCarbonBadgeColor = (footprint: number) => {
    if (footprint <= 1) return "bg-chart-1";
    if (footprint <= 3) return "bg-chart-2";
    return "bg-chart-3";
  };

  const getCarbonLabel = (footprint: number) => {
    if (footprint <= 1) return "Low Impact";
    if (footprint <= 3) return "Medium Impact";
    return "High Impact";
  };

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    onWishlist(id);
  };

  return (
    <Card className="group hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 hover:-translate-y-2 overflow-hidden border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <CardContent className="p-0">
        {/* Product Image */}
        <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700 ease-out filter group-hover:brightness-110 group-hover:contrast-105"
            data-testid={`img-product-${id}`}
          />
          
          {/* Zoom Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Quick Actions */}
          <div className="absolute top-2 right-2 space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
            <Button
              data-testid={`button-wishlist-${id}`}
              size="icon"
              variant="secondary"
              className="h-8 w-8 rounded-full backdrop-blur-sm bg-white/90 dark:bg-black/90 hover:bg-pink-100 dark:hover:bg-pink-900 transition-all duration-200 hover:scale-110"
              onClick={handleWishlist}
            >
              <Heart className={`h-4 w-4 transition-colors ${isWishlisted ? 'fill-current text-red-500' : 'text-gray-600 dark:text-gray-300'}`} />
            </Button>
            <Button
              data-testid={`button-quick-view-${id}`}
              size="icon"
              variant="secondary"
              className="h-8 w-8 rounded-full backdrop-blur-sm bg-white/90 dark:bg-black/90 hover:bg-blue-100 dark:hover:bg-blue-900 transition-all duration-200 hover:scale-110"
              onClick={() => onQuickView(id)}
            >
              <Eye className="h-4 w-4 text-gray-600 dark:text-gray-300" />
            </Button>
          </div>

          {/* Carbon Footprint Badge */}
          <Badge 
            className={`absolute top-2 left-2 ${getCarbonBadgeColor(carbonFootprint)} text-white backdrop-blur-sm border-white/20 shadow-lg animate-pulse hover:animate-none transition-all duration-200 hover:scale-105`}
            data-testid={`badge-carbon-${id}`}
          >
            🌱 {carbonFootprint}kg CO₂
          </Badge>

          {/* Tags */}
          {tags.length > 0 && (
            <div className="absolute bottom-2 left-2 flex gap-1">
              {tags.slice(0, 2).map((tag, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="text-xs"
                  data-testid={`tag-${tag.toLowerCase().replace(' ', '-')}-${id}`}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="p-4 space-y-3 transform group-hover:translate-y-[-2px] transition-transform duration-300">
          <div>
            <div className="text-sm text-muted-foreground font-medium">{brand}</div>
            <h3 className="font-semibold text-foreground line-clamp-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-200" data-testid={`text-product-name-${id}`}>
              {name}
            </h3>
          </div>

          {/* Rating with Glow Effect */}
          <div className="flex items-center gap-2">
            <div className="flex items-center space-x-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 transition-all duration-150 ${
                    i < Math.floor(rating) 
                      ? 'fill-yellow-400 text-yellow-400 drop-shadow-sm' 
                      : 'text-gray-300 dark:text-gray-600'
                  } hover:scale-110`}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground font-medium">({reviewCount})</span>
          </div>

          {/* Price and Carbon Impact */}
          <div className="flex items-center justify-between">
            <div>
              <div className="text-lg font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent" data-testid={`text-price-${id}`}>
                ₹{price}
              </div>
              <div className="text-xs font-medium px-2 py-1 rounded-full bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 inline-block">
                {getCarbonLabel(carbonFootprint)}
              </div>
            </div>
          </div>

          {/* Add to Cart Button with Hover Animation */}
          <Button
            data-testid={`button-add-to-cart-${id}`}
            className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200"
            onClick={() => onAddToCart(id)}
          >
            <ShoppingCart className="h-4 w-4 mr-2 group-hover:animate-bounce" />
            Add to Smart Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}