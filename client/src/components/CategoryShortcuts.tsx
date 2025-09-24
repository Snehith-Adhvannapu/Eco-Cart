import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { User, Users, Baby, Home, Laptop, Shirt } from "lucide-react";

interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
  count: number;
  hasPage: boolean;
  link?: string;
}

interface CategoryShortcutsProps {
  onCategorySelect?: (categoryId: string) => void;
}

export default function CategoryShortcuts({ onCategorySelect }: CategoryShortcutsProps) {
  const categories: Category[] = [
    {
      id: "men",
      name: "Men",
      icon: <User className="h-6 w-6" />,
      count: 145,
      hasPage: true,
      link: "/men"
    },
    {
      id: "women",
      name: "Women", 
      icon: <Users className="h-6 w-6" />,
      count: 289,
      hasPage: true,
      link: "/women"
    },
    {
      id: "kids",
      name: "Kids",
      icon: <Baby className="h-6 w-6" />,
      count: 167,
      hasPage: true,
      link: "/kids"
    },
    {
      id: "electronics",
      name: "Electronics",
      icon: <Laptop className="h-6 w-6" />,
      count: 234,
      hasPage: true,
      link: "/electronics"
    },
    {
      id: "home-kitchen",
      name: "Home & Kitchen",
      icon: <Home className="h-6 w-6" />,
      count: 178,
      hasPage: true,
      link: "/home-kitchen"
    },
    {
      id: "clothing",
      name: "All Clothing",
      icon: <Shirt className="h-6 w-6" />,
      count: 423,
      hasPage: false
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
          {categories.map((category) => {
            if (category.hasPage && category.link) {
              return (
                <Link key={category.id} href={category.link}>
                  <Card
                    className="hover-elevate cursor-pointer group border-0 bg-card/50 backdrop-blur"
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
                </Link>
              );
            } else {
              return (
                <Card
                  key={category.id}
                  className="hover-elevate cursor-pointer group border-0 bg-card/50 backdrop-blur"
                  onClick={() => onCategorySelect?.(category.id)}
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
              );
            }
          })}
        </div>
      </div>
    </section>
  );
}