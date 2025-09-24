import ProductCard from '../ProductCard';
import ecoToteImage from "@assets/generated_images/Eco_tote_bag_product_d8b19c56.png";

export default function ProductCardExample() {
  const handleAddToCart = (id: string) => {
    console.log(`Added product ${id} to cart`);
  };

  const handleWishlist = (id: string) => {
    console.log(`Toggled wishlist for product ${id}`);
  };

  const handleQuickView = (id: string) => {
    console.log(`Quick view for product ${id}`);
  };

  return (
    <div className="p-4 bg-background">
      <ProductCard
        id="eco-tote-1"
        name="Eco-Friendly Cotton Tote Bag"
        brand="GreenLife"
        price={299}
        carbonFootprint={0.8}
        rating={4.5}
        reviewCount={127}
        image={ecoToteImage}
        tags={["Eco-Friendly", "Best Seller"]}
        onAddToCart={handleAddToCart}
        onWishlist={handleWishlist}
        onQuickView={handleQuickView}
      />
    </div>
  );
}