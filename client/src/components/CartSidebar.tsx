import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { X, Plus, Minus, TreePine, ShoppingBag } from "lucide-react";

interface CartItem {
  id: string;
  name: string;
  brand: string;
  price: number;
  quantity: number;
  carbonFootprint: number;
  image: string;
}

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
  onOffsetCarbon: () => void;
  onCheckout: () => void;
}

export default function CartSidebar({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onOffsetCarbon,
  onCheckout
}: CartSidebarProps) {
  const totalPrice = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const totalCarbon = items.reduce((sum, item) => sum + (item.carbonFootprint * item.quantity), 0);
  const offsetCost = Math.ceil(totalCarbon * 20); // ₹20 per kg CO₂
  
  // Calculate eco impact progress (lower is better)
  const ecoScore = totalCarbon <= 5 ? 100 : Math.max(0, 100 - (totalCarbon - 5) * 10);

  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 z-50 lg:inset-y-0 lg:right-0 lg:w-96 transition-all duration-300 ${isOpen ? 'visible' : 'invisible'}`}>
      {/* Backdrop with Animation */}
      <div 
        className={`absolute inset-0 bg-gradient-to-r from-green-900/20 to-emerald-900/20 backdrop-blur-md lg:hidden transition-all duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />
      
      {/* Sidebar with Slide Animation */}
      <div className={`relative ml-auto h-full w-full bg-gradient-to-br from-white via-gray-50 to-green-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-green-900/30 border-l border-green-200/50 dark:border-green-800/50 shadow-2xl shadow-green-500/10 lg:w-96 flex flex-col transform transition-all duration-500 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* Header with Gradient */}
        <div className="flex items-center justify-between p-4 border-b border-green-200/50 dark:border-green-800/50 bg-gradient-to-r from-green-50/50 to-emerald-50/50 dark:from-green-900/30 dark:to-emerald-900/30">
          <div className="flex items-center gap-2">
            <div className="relative">
              <ShoppingBag className="h-5 w-5 text-green-600 dark:text-green-400 animate-pulse" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full animate-bounce"></div>
            </div>
            <h2 className="text-lg font-semibold bg-gradient-to-r from-green-700 to-emerald-700 dark:from-green-400 dark:to-emerald-400 bg-clip-text text-transparent">Smart Cart</h2>
            <Badge className="bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900 dark:to-emerald-900 text-green-800 dark:text-green-200 border-green-300 dark:border-green-700 animate-pulse">
              {items.length}
            </Badge>
          </div>
          <Button
            data-testid="button-close-cart"
            size="icon"
            variant="ghost"
            className="hover:bg-green-100 dark:hover:bg-green-900 hover:scale-110 transition-all duration-200"
            onClick={onClose}
          >
            <X className="h-4 w-4 text-gray-600 dark:text-gray-300" />
          </Button>
        </div>

        {/* Cart Items with Staggered Animation */}
        <div className="flex-1 overflow-y-auto p-4 space-y-1">
          {items.length === 0 ? (
            <div className="text-center py-12 animate-fade-in">
              <div className="relative mb-6">
                <ShoppingBag className="h-16 w-16 text-green-300 dark:text-green-700 mx-auto animate-bounce" />
                <div className="absolute inset-0 h-16 w-16 mx-auto border-2 border-green-200 dark:border-green-800 rounded-full animate-ping"></div>
              </div>
              <p className="text-muted-foreground text-lg font-medium">Your Smart Cart is empty</p>
              <p className="text-sm text-muted-foreground mt-2">Add some amazing products to get started!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item, index) => (
                <div 
                  key={item.id} 
                  className="flex gap-3 p-3 border border-green-100 dark:border-green-800 rounded-xl bg-gradient-to-r from-white to-green-50/30 dark:from-gray-800 dark:to-green-900/20 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02] transform animate-slide-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg hover:scale-110 transition-transform duration-300"
                      data-testid={`img-cart-item-${item.id}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-green-500/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-200"></div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-sm line-clamp-2" data-testid={`text-cart-item-name-${item.id}`}>
                      {item.name}
                    </h3>
                    <p className="text-xs text-muted-foreground">{item.brand}</p>
                    
                    <div className="flex items-center justify-between mt-2">
                      <div className="text-sm font-semibold">₹{item.price}</div>
                      <Badge
                        variant="outline"
                        className="text-xs"
                        data-testid={`badge-cart-carbon-${item.id}`}
                      >
                        {item.carbonFootprint}kg CO₂
                      </Badge>
                    </div>
                    
                    {/* Quantity Controls with Enhanced Styling */}
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-2 bg-green-50/50 dark:bg-green-900/20 rounded-full px-2 py-1">
                        <Button
                          data-testid={`button-decrease-${item.id}`}
                          size="icon"
                          variant="ghost"
                          className="h-6 w-6 hover:bg-green-200 dark:hover:bg-green-800 hover:scale-110 transition-all duration-200"
                          onClick={() => onUpdateQuantity(item.id, Math.max(0, item.quantity - 1))}
                        >
                          <Minus className="h-3 w-3 text-green-600 dark:text-green-400" />
                        </Button>
                        <span className="text-sm font-bold w-8 text-center bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                          {item.quantity}
                        </span>
                        <Button
                          data-testid={`button-increase-${item.id}`}
                          size="icon"
                          variant="ghost"
                          className="h-6 w-6 hover:bg-green-200 dark:hover:bg-green-800 hover:scale-110 transition-all duration-200"
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3 text-green-600 dark:text-green-400" />
                        </Button>
                      </div>
                      
                      <Button
                        data-testid={`button-remove-${item.id}`}
                        size="sm"
                        variant="ghost"
                        className="text-xs text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 hover:scale-105 transition-all duration-200"
                        onClick={() => onRemoveItem(item.id)}
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t p-4 space-y-4">
            {/* Eco Impact */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Eco Impact Score</span>
                <span className={ecoScore >= 80 ? "text-chart-1" : ecoScore >= 60 ? "text-chart-2" : "text-chart-3"}>
                  {ecoScore}/100
                </span>
              </div>
              <Progress value={ecoScore} className="h-2" />
              <p className="text-xs text-muted-foreground">
                Total Carbon Footprint: {totalCarbon.toFixed(1)}kg CO₂
              </p>
            </div>

            <Separator />

            {/* Carbon Offset */}
            <Button
              data-testid="button-offset-carbon"
              variant="outline"
              className="w-full"
              onClick={onOffsetCarbon}
            >
              <TreePine className="h-4 w-4 mr-2" />
              Offset Now for ₹{offsetCost}
            </Button>

            {/* Total and Checkout */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-lg font-semibold">
                <span>Total</span>
                <span data-testid="text-cart-total">₹{totalPrice}</span>
              </div>
              
              <Button
                data-testid="button-checkout"
                className="w-full"
                size="lg"
                onClick={onCheckout}
              >
                Checkout
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}