import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Mic, ShoppingCart, User, Sun, Moon } from "lucide-react";

interface HeaderProps {
  cartCount: number;
  onCartToggle: () => void;
  onVoiceToggle: () => void;
  isVoiceActive: boolean;
  isDarkMode: boolean;
  onThemeToggle: () => void;
}

export default function Header({ 
  cartCount, 
  onCartToggle, 
  onVoiceToggle, 
  isVoiceActive,
  isDarkMode,
  onThemeToggle 
}: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-sm">🛒</span>
          </div>
          <span className="font-bold text-xl bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Smart Cart</span>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-md relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            data-testid="input-search"
            placeholder="Search eco-friendly products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-4"
          />
        </div>

        {/* Navigation Actions */}
        <div className="flex items-center gap-2">
          <Button
            data-testid="button-voice-search"
            size="icon"
            variant={isVoiceActive ? "default" : "ghost"}
            className={`${isVoiceActive ? 'bg-green-500 hover:bg-green-600 text-white' : 'hover:bg-green-100 dark:hover:bg-green-900'}`}
            onClick={onVoiceToggle}
          >
            <Mic className="h-4 w-4" />
          </Button>
          
          <Button
            data-testid="button-theme-toggle"
            size="icon"
            variant="ghost"
            onClick={onThemeToggle}
          >
            {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
          
          <Button
            data-testid="button-profile"
            size="icon"
            variant="ghost"
          >
            <User className="h-4 w-4" />
          </Button>

          <Button
            data-testid="button-cart"
            size="icon"
            variant="ghost"
            className="relative"
            onClick={onCartToggle}
          >
            <ShoppingCart className="h-4 w-4" />
            {cartCount > 0 && (
              <Badge
                data-testid="badge-cart-count"
                className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-chart-2 text-xs flex items-center justify-center"
              >
                {cartCount}
              </Badge>
            )}
          </Button>
        </div>
      </div>
    </header>
  );
}