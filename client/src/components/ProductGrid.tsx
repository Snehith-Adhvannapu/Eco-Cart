import ProductCard from "./ProductCard";
import ecoToteImage from "@assets/generated_images/Eco_tote_bag_product_d8b19c56.png";
import organicShirtImage from "@assets/generated_images/Organic_cotton_t-shirt_e5e42f48.png";
import bambooToothbrushImage from "@assets/generated_images/Bamboo_toothbrush_product_2cae6240.png";
import reusableBottleImage from "@assets/generated_images/Reusable_water_bottle_c4f791d9.png";

interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  carbonFootprint: number;
  rating: number;
  reviewCount: number;
  image: string;
  tags: string[];
}

interface ProductGridProps {
  onAddToCart: (id: string) => void;
  onWishlist: (id: string) => void;
  onQuickView: (id: string) => void;
}

export default function ProductGrid({ onAddToCart, onWishlist, onQuickView }: ProductGridProps) {
  // TODO: remove mock functionality - replace with real product data
  const products: Product[] = [
    {
      id: "eco-tote-1",
      name: "Eco-Friendly Cotton Tote Bag",
      brand: "GreenLife",
      price: 299,
      carbonFootprint: 0.8,
      rating: 4.5,
      reviewCount: 127,
      image: ecoToteImage,
      tags: ["Eco-Friendly", "Best Seller"]
    },
    {
      id: "organic-shirt-1",
      name: "Organic Cotton T-Shirt",
      brand: "NaturalWear",
      price: 499,
      carbonFootprint: 1.2,
      rating: 4.3,
      reviewCount: 89,
      image: organicShirtImage,
      tags: ["Organic", "New Arrival"]
    },
    {
      id: "bamboo-brush-1",
      name: "Bamboo Toothbrush",
      brand: "EcoSmile",
      price: 150,
      carbonFootprint: 0.3,
      rating: 4.7,
      reviewCount: 203,
      image: bambooToothbrushImage,
      tags: ["Eco-Friendly", "Zero Waste"]
    },
    {
      id: "reusable-bottle-1",
      name: "Stainless Steel Water Bottle",
      brand: "HydroGreen",
      price: 399,
      carbonFootprint: 0.5,
      rating: 4.6,
      reviewCount: 156,
      image: reusableBottleImage,
      tags: ["Durable", "Best Seller"]
    },
    {
      id: "plastic-bottle-1",
      name: "Single-Use Plastic Bottle",
      brand: "OldWay",
      price: 99,
      carbonFootprint: 5.0,
      rating: 2.1,
      reviewCount: 45,
      image: reusableBottleImage,
      tags: ["Disposable"]
    },
    {
      id: "fast-fashion-1",
      name: "Fast Fashion Shirt",
      brand: "QuickTrend",
      price: 399,
      carbonFootprint: 4.0,
      rating: 3.2,
      reviewCount: 78,
      image: organicShirtImage,
      tags: ["Trending"]
    }
  ];

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Featured Products
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our curated collection of eco-friendly products with detailed carbon footprint information.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              onAddToCart={onAddToCart}
              onWishlist={onWishlist}
              onQuickView={onQuickView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}