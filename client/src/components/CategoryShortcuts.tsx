import { Card, CardContent } from "@/components/ui/card";
import { ShoppingBag, Shirt, Coffee, Laptop, Leaf, Recycle } from "lucide-react";

interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
  count: number;
}

interface CategoryShortcutsProps {
  onCategorySelect: (categoryId: string) => void;
}

export default function CategoryShortcuts({ onCategorySelect }: CategoryShortcutsProps) {
  // TODO: remove mock functionality - replace with real category data
  const categories: Category[] = [
    {
      id: "bags",
      name: "Bags",
      icon: <ShoppingBag className="h-6 w-6" />,
      count: 145
    },
    {
      id: "clothing",
      name: "Clothing", 
      icon: <Shirt className="h-6 w-6" />,
      count: 289
    },
    {
      id: "bottles",
      name: "Bottles",
      icon: <Coffee className="h-6 w-6" />,
      count: 67
    },
    {
      id: "electronics",
      name: "Electronics",
      icon: <Laptop className="h-6 w-6" />,
      count: 234
    },
    {
      id: "organic",
      name: "Organic",
      icon: <Leaf className="h-6 w-6" />,
      count: 178
    },
    {
      id: "recycled",
      name: "Recycled",
      icon: <Recycle className="h-6 w-6" />,
      count: 123
    }
  ];

  return (
    <section className="py-8 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Shop by Category
          </h2>
          <p className="text-muted-foreground">
            Explore our eco-friendly product categories
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Card
              key={category.id}
              className="hover-elevate cursor-pointer group border-0 bg-card/50 backdrop-blur"
              onClick={() => onCategorySelect(category.id)}
              data-testid={`card-category-${category.id}`}
            >
              <CardContent className="p-6 text-center">
                <div className="mb-3 flex justify-center">
                  <div className="p-3 bg-primary/10 rounded-full text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {category.icon}
                  </div>
                </div>
                <h3 className="font-semibold text-foreground mb-1" data-testid={`text-category-name-${category.id}`}>
                  {category.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {category.count} items
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}