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
    <Card className="group hover:shadow-lg transition-all duration-300 hover-elevate overflow-hidden">
      <CardContent className="p-0">
        {/* Product Image */}
        <div className="relative aspect-square overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            data-testid={`img-product-${id}`}
          />
          
          {/* Quick Actions */}
          <div className="absolute top-2 right-2 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <Button
              data-testid={`button-wishlist-${id}`}
              size="icon"
              variant="secondary"
              className="h-8 w-8 rounded-full"
              onClick={handleWishlist}
            >
              <Heart className={`h-4 w-4 ${isWishlisted ? 'fill-current text-chart-3' : ''}`} />
            </Button>
            <Button
              data-testid={`button-quick-view-${id}`}
              size="icon"
              variant="secondary"
              className="h-8 w-8 rounded-full"
              onClick={() => onQuickView(id)}
            >
              <Eye className="h-4 w-4" />
            </Button>
          </div>

          {/* Carbon Footprint Badge */}
          <Badge 
            className={`absolute top-2 left-2 ${getCarbonBadgeColor(carbonFootprint)} text-white`}
            data-testid={`badge-carbon-${id}`}
          >
            {carbonFootprint}kg CO₂
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
        <div className="p-4 space-y-3">
          <div>
            <div className="text-sm text-muted-foreground">{brand}</div>
            <h3 className="font-semibold text-foreground line-clamp-2" data-testid={`text-product-name-${id}`}>
              {name}
            </h3>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(rating) ? 'fill-chart-2 text-chart-2' : 'text-muted'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">({reviewCount})</span>
          </div>

          {/* Price and Carbon Impact */}
          <div className="flex items-center justify-between">
            <div>
              <div className="text-lg font-bold text-foreground" data-testid={`text-price-${id}`}>
                ₹{price}
              </div>
              <div className="text-xs text-muted-foreground">
                {getCarbonLabel(carbonFootprint)}
              </div>
            </div>
          </div>

          {/* Add to Cart Button */}
          <Button
            data-testid={`button-add-to-cart-${id}`}
            className="w-full"
            onClick={() => onAddToCart(id)}
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}