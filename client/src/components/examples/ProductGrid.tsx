import ProductGrid from '../ProductGrid';

export default function ProductGridExample() {
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
    <ProductGrid
      onAddToCart={handleAddToCart}
      onWishlist={handleWishlist}
      onQuickView={handleQuickView}
    />
  );
}