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
    <div className="fixed inset-0 z-50 lg:inset-y-0 lg:right-0 lg:w-96">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-sm lg:hidden"
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className="relative ml-auto h-full w-full bg-card border-l shadow-xl lg:w-96 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-semibold">Your Cart</h2>
            <Badge variant="secondary">{items.length}</Badge>
          </div>
          <Button
            data-testid="button-close-cart"
            size="icon"
            variant="ghost"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingBag className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">Your cart is empty</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-3 p-3 border rounded-lg">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                    data-testid={`img-cart-item-${item.id}`}
                  />
                  
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
                    
                    {/* Quantity Controls */}
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-2">
                        <Button
                          data-testid={`button-decrease-${item.id}`}
                          size="icon"
                          variant="outline"
                          className="h-6 w-6"
                          onClick={() => onUpdateQuantity(item.id, Math.max(0, item.quantity - 1))}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="text-sm font-medium w-8 text-center">{item.quantity}</span>
                        <Button
                          data-testid={`button-increase-${item.id}`}
                          size="icon"
                          variant="outline"
                          className="h-6 w-6"
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                      
                      <Button
                        data-testid={`button-remove-${item.id}`}
                        size="sm"
                        variant="ghost"
                        className="text-xs text-destructive hover:text-destructive"
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