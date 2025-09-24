import CategoryShortcuts from '../CategoryShortcuts';

export default function CategoryShortcutsExample() {
  const handleCategorySelect = (categoryId: string) => {
    console.log(`Selected category: ${categoryId}`);
  };

  return (
    <CategoryShortcuts onCategorySelect={handleCategorySelect} />
  );
}