import { useState } from "react";
import SearchFilters from '../SearchFilters';

export default function SearchFiltersExample() {
  const [isOpen, setIsOpen] = useState(false);

  const handleFiltersChange = (filters: any) => {
    console.log('Filters changed:', filters);
  };

  return (
    <div className="p-8 bg-background">
      <SearchFilters
        onFiltersChange={handleFiltersChange}
        isOpen={isOpen}
        onToggle={() => setIsOpen(!isOpen)}
      />
    </div>
  );
}