import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { 
  User, 
  Users, 
  Baby, 
  Home, 
  Laptop, 
  Dumbbell, 
  BookOpen, 
  Heart, 
  ShoppingBasket, 
  PawPrint,
  ChevronDown,
  Leaf
} from "lucide-react";

interface SubCategory {
  id: string;
  name: string;
  ecoFriendly?: boolean;
}

interface MainCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  subcategories: SubCategory[];
  ecoHighlight?: string;
}

interface MainNavigationProps {
  onCategorySelect?: (categoryId: string, subcategoryId?: string) => void;
}

export default function MainNavigation({ onCategorySelect }: MainNavigationProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const mainCategories: MainCategory[] = [
    {
      id: "men",
      name: "Men",
      icon: <User className="h-4 w-4" />,
      subcategories: [
        { id: "clothing", name: "Clothing", ecoFriendly: true },
        { id: "shoes", name: "Shoes", ecoFriendly: true },
        { id: "accessories", name: "Accessories" },
        { id: "grooming", name: "Grooming", ecoFriendly: true }
      ],
      ecoHighlight: "Sustainable fashion options"
    },
    {
      id: "women",
      name: "Women",
      icon: <Users className="h-4 w-4" />,
      subcategories: [
        { id: "clothing", name: "Clothing", ecoFriendly: true },
        { id: "shoes", name: "Shoes", ecoFriendly: true },
        { id: "accessories", name: "Accessories" },
        { id: "beauty", name: "Beauty", ecoFriendly: true }
      ],
      ecoHighlight: "Eco-friendly beauty & fashion"
    },
    {
      id: "kids",
      name: "Kids",
      icon: <Baby className="h-4 w-4" />,
      subcategories: [
        { id: "clothing", name: "Clothing", ecoFriendly: true },
        { id: "toys", name: "Toys", ecoFriendly: true },
        { id: "shoes", name: "Shoes", ecoFriendly: true },
        { id: "school-supplies", name: "School Supplies", ecoFriendly: true }
      ],
      ecoHighlight: "Safe & reusable products"
    },
    {
      id: "home-kitchen",
      name: "Home & Kitchen",
      icon: <Home className="h-4 w-4" />,
      subcategories: [
        { id: "cookware", name: "Cookware", ecoFriendly: true },
        { id: "utensils", name: "Utensils", ecoFriendly: true },
        { id: "storage", name: "Storage", ecoFriendly: true },
        { id: "decor", name: "Décor", ecoFriendly: true }
      ],
      ecoHighlight: "Low-carbon alternatives"
    },
    {
      id: "electronics",
      name: "Electronics",
      icon: <Laptop className="h-4 w-4" />,
      subcategories: [
        { id: "phones", name: "Phones" },
        { id: "headphones", name: "Headphones" },
        { id: "accessories", name: "Accessories" },
        { id: "chargers", name: "Chargers", ecoFriendly: true }
      ],
      ecoHighlight: "Energy-efficient options"
    },
    {
      id: "sports-outdoors",
      name: "Sports & Outdoors",
      icon: <Dumbbell className="h-4 w-4" />,
      subcategories: [
        { id: "fitness-gear", name: "Fitness Gear", ecoFriendly: true },
        { id: "outdoor-equipment", name: "Outdoor Equipment", ecoFriendly: true }
      ],
      ecoHighlight: "Durable eco materials"
    },
    {
      id: "books-stationery",
      name: "Books & Stationery",
      icon: <BookOpen className="h-4 w-4" />,
      subcategories: [
        { id: "books", name: "Books", ecoFriendly: true },
        { id: "notebooks", name: "Notebooks", ecoFriendly: true },
        { id: "pens", name: "Pens", ecoFriendly: true },
        { id: "planners", name: "Planners", ecoFriendly: true }
      ],
      ecoHighlight: "Recycled paper products"
    },
    {
      id: "health-personal-care",
      name: "Health & Personal Care",
      icon: <Heart className="h-4 w-4" />,
      subcategories: [
        { id: "skincare", name: "Skincare", ecoFriendly: true },
        { id: "hygiene", name: "Hygiene", ecoFriendly: true },
        { id: "eco-products", name: "Eco-Friendly Products", ecoFriendly: true }
      ],
      ecoHighlight: "Natural & biodegradable"
    },
    {
      id: "grocery-food",
      name: "Grocery & Food",
      icon: <ShoppingBasket className="h-4 w-4" />,
      subcategories: [
        { id: "organic-foods", name: "Organic Foods", ecoFriendly: true },
        { id: "snacks", name: "Snacks", ecoFriendly: true },
        { id: "drinks", name: "Drinks", ecoFriendly: true },
        { id: "packaged-eco", name: "Packaged Eco-Friendly Items", ecoFriendly: true }
      ],
      ecoHighlight: "CO₂ footprint tracking"
    },
    {
      id: "pet-supplies",
      name: "Pet Supplies",
      icon: <PawPrint className="h-4 w-4" />,
      subcategories: [
        { id: "toys", name: "Toys", ecoFriendly: true },
        { id: "food", name: "Food", ecoFriendly: true },
        { id: "accessories", name: "Accessories", ecoFriendly: true }
      ],
      ecoHighlight: "Sustainable pet care"
    }
  ];

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center space-x-1 py-3 overflow-x-auto">
          {mainCategories.map((category) => (
            <DropdownMenu key={category.id}>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex items-center gap-2 hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors"
                  data-testid={`nav-${category.id}`}
                  onMouseEnter={() => setActiveCategory(category.id)}
                >
                  {category.icon}
                  <span className="hidden sm:inline font-medium">{category.name}</span>
                  <ChevronDown className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                className="w-64 p-4" 
                align="start"
                onMouseLeave={() => setActiveCategory(null)}
              >
                <div className="mb-3">
                  <div className="flex items-center gap-2 mb-2">
                    {category.icon}
                    <span className="font-semibold text-green-700 dark:text-green-400">{category.name}</span>
                  </div>
                  {category.ecoHighlight && (
                    <div className="flex items-center gap-1 text-xs text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded-full">
                      <Leaf className="h-3 w-3" />
                      {category.ecoHighlight}
                    </div>
                  )}
                </div>
                
                <DropdownMenuSeparator />
                
                {/* Add main category link for categories with dedicated pages */}
                {(category.id === 'men' || category.id === 'women' || category.id === 'electronics' || category.id === 'kids' || category.id === 'home-kitchen') && (
                  <Link href={`/${category.id}`}>
                    <DropdownMenuItem
                      className="flex items-center justify-between cursor-pointer hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors font-medium"
                      data-testid={`nav-${category.id}-main`}
                    >
                      <span>All {category.name}</span>
                      <Badge 
                        variant="default" 
                        className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs"
                      >
                        View All
                      </Badge>
                    </DropdownMenuItem>
                  </Link>
                )}
                
                <div className="space-y-1 mt-3">
                  {category.subcategories.map((subcategory) => (
                    <DropdownMenuItem
                      key={subcategory.id}
                      className="flex items-center justify-between cursor-pointer hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors"
                      onClick={() => {
                        // Always allow subcategory selection for filtering
                        onCategorySelect?.(category.id, subcategory.id);
                      }}
                      data-testid={`nav-${category.id}-${subcategory.id}`}
                    >
                      <span>{subcategory.name}</span>
                      {subcategory.ecoFriendly && (
                        <Badge 
                          variant="secondary" 
                          className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-xs border-green-300 dark:border-green-700"
                        >
                          Eco
                        </Badge>
                      )}
                    </DropdownMenuItem>
                  ))}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          ))}
        </div>
      </div>
    </nav>
  );
}