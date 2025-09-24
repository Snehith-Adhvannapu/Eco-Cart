import { useState } from "react";
import CartSidebar from '../CartSidebar';
import ecoToteImage from "@assets/generated_images/Eco_tote_bag_product_d8b19c56.png";
import organicShirtImage from "@assets/generated_images/Organic_cotton_t-shirt_e5e42f48.png";

export default function CartSidebarExample() {
  const [isOpen, setIsOpen] = useState(true);
  const [items, setItems] = useState([
    {
      id: "eco-tote-1",
      name: "Eco-Friendly Cotton Tote Bag",
      brand: "GreenLife",
      price: 299,
      quantity: 2,
      carbonFootprint: 0.8,
      image: ecoToteImage
    },
    {
      id: "organic-shirt-1",
      name: "Organic Cotton T-Shirt",
      brand: "NaturalWear",
      price: 499,
      quantity: 1,
      carbonFootprint: 1.2,
      image: organicShirtImage
    }
  ]);

  const handleUpdateQuantity = (id: string, quantity: number) => {
    if (quantity === 0) {
      setItems(items.filter(item => item.id !== id));
    } else {
      setItems(items.map(item => 
        item.id === id ? { ...item, quantity } : item
      ));
    }
    console.log(`Updated quantity for ${id} to ${quantity}`);
  };

  const handleRemoveItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
    console.log(`Removed item ${id}`);
  };

  const handleOffsetCarbon = () => {
    console.log('Carbon offset initiated');
  };

  const handleCheckout = () => {
    console.log('Checkout initiated');
  };

  return (
    <div className="h-screen bg-background">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="p-4 bg-primary text-white"
      >
        Toggle Cart
      </button>
      <CartSidebar
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        items={items}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onOffsetCarbon={handleOffsetCarbon}
        onCheckout={handleCheckout}
      />
    </div>
  );
}