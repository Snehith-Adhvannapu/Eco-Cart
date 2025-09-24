import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Filter, X } from "lucide-react";

interface SearchFiltersProps {
  onFiltersChange: (filters: any) => void;
  isOpen: boolean;
  onToggle: () => void;
}

export default function SearchFilters({ onFiltersChange, isOpen, onToggle }: SearchFiltersProps) {
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [carbonRange, setCarbonRange] = useState([0, 5]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [ecoRating, setEcoRating] = useState("");
  const [sortBy, setSortBy] = useState("");

  // TODO: remove mock functionality - replace with real filter data
  const categories = ["Bags", "Clothing", "Bottles", "Electronics", "Organic", "Recycled"];
  const brands = ["GreenLife", "NaturalWear", "EcoSmile", "HydroGreen", "ZeroWaste"];
  const ecoRatings = ["Excellent", "Good", "Fair"];

  const handleCategoryChange = (category: string, checked: boolean) => {
    const updated = checked 
      ? [...selectedCategories, category]
      : selectedCategories.filter(c => c !== category);
    setSelectedCategories(updated);
    updateFilters({ categories: updated });
  };

  const handleBrandChange = (brand: string, checked: boolean) => {
    const updated = checked 
      ? [...selectedBrands, brand]
      : selectedBrands.filter(b => b !== brand);
    setSelectedBrands(updated);
    updateFilters({ brands: updated });
  };

  const updateFilters = (newFilters: any) => {
    const filters = {
      priceRange,
      carbonRange,
      categories: selectedCategories,
      brands: selectedBrands,
      ecoRating,
      sortBy,
      ...newFilters
    };
    onFiltersChange(filters);
  };

  const clearFilters = () => {
    setPriceRange([0, 1000]);
    setCarbonRange([0, 5]);
    setSelectedCategories([]);
    setSelectedBrands([]);
    setEcoRating("");
    setSortBy("");
    updateFilters({});
  };

  const activeFiltersCount = 
    (priceRange[0] > 0 || priceRange[1] < 1000 ? 1 : 0) +
    (carbonRange[1] < 5 ? 1 : 0) +
    selectedCategories.length +
    selectedBrands.length +
    (ecoRating ? 1 : 0) +
    (sortBy ? 1 : 0);

  return (
    <div className="relative">
      {/* Filter Toggle Button */}
      <Button
        data-testid="button-toggle-filters"
        variant="outline"
        onClick={onToggle}
        className="mb-4"
      >
        <Filter className="h-4 w-4 mr-2" />
        Filters
        {activeFiltersCount > 0 && (
          <Badge variant="destructive" className="ml-2 h-5 w-5 rounded-full text-xs">
            {activeFiltersCount}
          </Badge>
        )}
      </Button>

      {/* Filter Panel */}
      {isOpen && (
        <Card className="absolute top-full left-0 w-80 z-40 shadow-lg">
          <CardContent className="p-4">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Filters</h3>
              <div className="flex gap-2">
                <Button
                  data-testid="button-clear-filters"
                  size="sm"
                  variant="ghost"
                  onClick={clearFilters}
                >
                  Clear
                </Button>
                <Button
                  data-testid="button-close-filters"
                  size="icon"
                  variant="ghost"
                  className="h-8 w-8"
                  onClick={onToggle}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              {/* Sort By */}
              <div>
                <h4 className="text-sm font-medium mb-2">Sort By</h4>
                <Select value={sortBy} onValueChange={(value) => { setSortBy(value); updateFilters({ sortBy: value }); }}>
                  <SelectTrigger data-testid="select-sort">
                    <SelectValue placeholder="Select sorting" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="eco-score">Eco Score</SelectItem>
                    <SelectItem value="popularity">Popularity</SelectItem>
                    <SelectItem value="rating">Rating</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Price Range */}
              <div>
                <h4 className="text-sm font-medium mb-2">
                  Price Range: ₹{priceRange[0]} - ₹{priceRange[1]}
                </h4>
                <Slider
                  data-testid="slider-price"
                  value={priceRange}
                  onValueChange={(value) => { setPriceRange(value); updateFilters({ priceRange: value }); }}
                  max={1000}
                  step={50}
                  className="w-full"
                />
              </div>

              {/* Carbon Footprint */}
              <div>
                <h4 className="text-sm font-medium mb-2">
                  Max Carbon Footprint: {carbonRange[1]}kg CO₂
                </h4>
                <Slider
                  data-testid="slider-carbon"
                  value={carbonRange}
                  onValueChange={(value) => { setCarbonRange(value); updateFilters({ carbonRange: value }); }}
                  max={5}
                  step={0.1}
                  className="w-full"
                />
              </div>

              {/* Categories */}
              <div>
                <h4 className="text-sm font-medium mb-2">Categories</h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category} className="flex items-center space-x-2">
                      <Checkbox
                        data-testid={`checkbox-category-${category.toLowerCase()}`}
                        id={`category-${category}`}
                        checked={selectedCategories.includes(category)}
                        onCheckedChange={(checked) => handleCategoryChange(category, checked as boolean)}
                      />
                      <label htmlFor={`category-${category}`} className="text-sm">
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Brands */}
              <div>
                <h4 className="text-sm font-medium mb-2">Brands</h4>
                <div className="space-y-2">
                  {brands.map((brand) => (
                    <div key={brand} className="flex items-center space-x-2">
                      <Checkbox
                        data-testid={`checkbox-brand-${brand.toLowerCase()}`}
                        id={`brand-${brand}`}
                        checked={selectedBrands.includes(brand)}
                        onCheckedChange={(checked) => handleBrandChange(brand, checked as boolean)}
                      />
                      <label htmlFor={`brand-${brand}`} className="text-sm">
                        {brand}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Eco Rating */}
              <div>
                <h4 className="text-sm font-medium mb-2">Eco Rating</h4>
                <Select value={ecoRating} onValueChange={(value) => { setEcoRating(value); updateFilters({ ecoRating: value }); }}>
                  <SelectTrigger data-testid="select-eco-rating">
                    <SelectValue placeholder="Select eco rating" />
                  </SelectTrigger>
                  <SelectContent>
                    {ecoRatings.map((rating) => (
                      <SelectItem key={rating} value={rating.toLowerCase()}>
                        {rating}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}