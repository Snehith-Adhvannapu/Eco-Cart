import { useState, useEffect } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useToast } from "@/hooks/use-toast";

// Import our components
import Header from "@/components/Header";
import MainNavigation from "@/components/MainNavigation";
import HeroSection from "@/components/HeroSection";
import CategoryShortcuts from "@/components/CategoryShortcuts";
import ProductGrid from "@/components/ProductGrid";
import CartSidebar from "@/components/CartSidebar";
import VoiceModal from "@/components/VoiceModal";
import SearchFilters from "@/components/SearchFilters";
import Footer from "@/components/Footer";

// Import page components
import ElectronicsPage from "@/pages/electronics-page";
import MenPage from "@/pages/men-page";
import WomenPage from "@/pages/women-page";
import KidsPage from "@/pages/kids-page";
import HomeKitchenPage from "@/pages/home-kitchen-page";
import LoginPage from "@/pages/login-page";
import SignupPage from "@/pages/signup-page";
import NotFound from "@/pages/not-found";

// Import images for cart items
import ecoToteImage from "@assets/generated_images/Eco_tote_bag_product_d8b19c56.png";
import organicShirtImage from "@assets/generated_images/Organic_cotton_t-shirt_e5e42f48.png";

interface CartItem {
  id: string;
  name: string;
  brand: string;
  price: number;
  quantity: number;
  carbonFootprint: number;
  image: string;
}

function HomePage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isVoiceModalOpen, setIsVoiceModalOpen] = useState(false);
  const [isVoiceActive, setIsVoiceActive] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const { toast } = useToast();

  // Apply dark mode to document
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // TODO: remove mock functionality - replace with real cart management
  const handleAddToCart = (productId: string) => {
    // Mock product data
    const productMap: Record<string, Omit<CartItem, 'quantity'>> = {
      "eco-tote-1": {
        id: "eco-tote-1",
        name: "Eco-Friendly Cotton Tote Bag",
        brand: "GreenLife",
        price: 299,
        carbonFootprint: 0.8,
        image: ecoToteImage
      },
      "organic-shirt-1": {
        id: "organic-shirt-1",
        name: "Organic Cotton T-Shirt",
        brand: "NaturalWear",
        price: 499,
        carbonFootprint: 1.2,
        image: organicShirtImage
      }
    };

    const product = productMap[productId];
    if (!product) return;

    const existingItem = cartItems.find(item => item.id === productId);
    
    if (existingItem) {
      setCartItems(items => 
        items.map(item => 
          item.id === productId 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems(items => [...items, { ...product, quantity: 1 }]);
    }

    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const handleUpdateCartQuantity = (id: string, quantity: number) => {
    if (quantity === 0) {
      setCartItems(items => items.filter(item => item.id !== id));
    } else {
      setCartItems(items => 
        items.map(item => 
          item.id === id ? { ...item, quantity } : item
        )
      );
    }
  };

  const handleRemoveFromCart = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
    toast({
      title: "Removed from cart",
      description: "Item has been removed from your cart.",
    });
  };

  const handleWishlist = (productId: string) => {
    toast({
      title: "Added to wishlist",
      description: "Product has been added to your wishlist.",
    });
  };

  const handleQuickView = (productId: string) => {
    toast({
      title: "Quick view",
      description: "Opening quick view modal...",
    });
  };

  const handleStartVoiceShopping = () => {
    setIsVoiceModalOpen(true);
    setIsVoiceActive(true);
  };

  const handleVoiceToggle = () => {
    if (isVoiceActive) {
      setIsVoiceModalOpen(false);
      setIsVoiceActive(false);
    } else {
      setIsVoiceModalOpen(true);
      setIsVoiceActive(true);
    }
  };

  const handleVoiceCommand = (command: string) => {
    // TODO: remove mock functionality - implement real voice command processing
    toast({
      title: "Voice command processed",
      description: `Command: "${command}"`,
    });
    
    // Mock command processing
    if (command.toLowerCase().includes('bottle')) {
      toast({
        title: "Search results",
        description: "Showing eco-friendly bottles...",
      });
    } else if (command.toLowerCase().includes('cart')) {
      setIsCartOpen(true);
    }
  };

  const handleCategorySelect = (categoryId: string, subcategoryId?: string) => {
    const categoryName = subcategoryId ? `${categoryId} > ${subcategoryId}` : categoryId;
    toast({
      title: "Category selected",
      description: `Filtering products by ${categoryName}...`,
    });
  };

  const handleFiltersChange = (filters: any) => {
    console.log('Filters applied:', filters);
    toast({
      title: "Filters applied",
      description: "Product list has been updated.",
    });
  };

  const handleOffsetCarbon = () => {
    const totalCarbon = cartItems.reduce((sum, item) => sum + (item.carbonFootprint * item.quantity), 0);
    const offsetCost = Math.ceil(totalCarbon * 20);
    
    toast({
      title: "Carbon offset initiated",
      description: `Offsetting ${totalCarbon.toFixed(1)}kg CO₂ for ₹${offsetCost}`,
    });
  };

  const handleCheckout = () => {
    toast({
      title: "Checkout",
      description: "Redirecting to secure checkout...",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header
        cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        onCartToggle={() => setIsCartOpen(!isCartOpen)}
        onVoiceToggle={handleVoiceToggle}
        isVoiceActive={isVoiceActive}
        isDarkMode={isDarkMode}
        onThemeToggle={() => setIsDarkMode(!isDarkMode)}
      />

      <MainNavigation onCategorySelect={handleCategorySelect} />

      <main>
        <HeroSection onStartVoiceShopping={handleStartVoiceShopping} />
        <CategoryShortcuts onCategorySelect={handleCategorySelect} />
        
        {/* Search and Filters Section */}
        <section className="py-8 bg-background">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 items-start justify-between">
              <SearchFilters
                onFiltersChange={handleFiltersChange}
                isOpen={isFiltersOpen}
                onToggle={() => setIsFiltersOpen(!isFiltersOpen)}
              />
            </div>
          </div>
        </section>

        <ProductGrid
          onAddToCart={handleAddToCart}
          onWishlist={handleWishlist}
          onQuickView={handleQuickView}
        />
      </main>

      <Footer />

      {/* Modals and Sidebars */}
      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveFromCart}
        onOffsetCarbon={handleOffsetCarbon}
        onCheckout={handleCheckout}
      />

      <VoiceModal
        isOpen={isVoiceModalOpen}
        onClose={() => {
          setIsVoiceModalOpen(false);
          setIsVoiceActive(false);
        }}
        onVoiceCommand={handleVoiceCommand}
      />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/signup" component={SignupPage} />
      <Route path="/electronics" component={ElectronicsPage} />
      <Route path="/men" component={MenPage} />
      <Route path="/women" component={WomenPage} />
      <Route path="/kids" component={KidsPage} />
      <Route path="/home-kitchen" component={HomeKitchenPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;