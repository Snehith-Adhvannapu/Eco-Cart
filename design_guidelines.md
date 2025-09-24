# Smart Cart Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from modern e-commerce leaders like Shopify and sustainable brands like Patagonia, focusing on clean aesthetics with eco-conscious visual language.

## Core Design Elements

### Color Palette
**Primary Colors:**
- Forest Green: 142 69% 25% (main brand color)
- Light Green: 120 40% 70% (secondary/accent)
- Sage Green: 140 20% 85% (subtle backgrounds)

**Supporting Colors:**
- Yellow: 48 95% 65% (badges, highlights)
- White: 0 0% 100% (clean backgrounds)
- Charcoal: 220 15% 20% (text, dark mode)

**Carbon Footprint Badge Colors:**
- Green (Low): 142 69% 35%
- Yellow (Medium): 45 100% 50%
- Red (High): 0 75% 50%

### Typography
- **Primary Font**: Inter (Google Fonts) - clean, modern, accessible
- **Headers**: Inter 600-700 weight
- **Body**: Inter 400-500 weight
- **Accents**: Inter 300 weight for subtle text

### Layout System
**Tailwind Spacing**: Use units of 2, 4, 8, 12, 16 for consistent rhythm
- Small gaps: p-2, m-2
- Medium spacing: p-4, gap-4, mb-8
- Large sections: p-8, py-12, mb-16

### Component Library

**Cards & Containers:**
- Rounded corners: rounded-xl (12px)
- Soft shadows: shadow-lg with subtle green tint
- Hover states: gentle lift with shadow-xl

**Buttons:**
- Primary: Forest green background, white text, rounded-lg
- Secondary: Light green outline, forest green text
- Eco Action: Yellow background for carbon offset buttons

**Navigation:**
- Clean horizontal nav with subtle hover states
- Breadcrumbs with eco-friendly iconography
- Sticky cart sidebar with slide animations

**Product Cards:**
- Clean white background with subtle border
- Carbon footprint badge prominently displayed
- Smooth hover animations (scale and shadow)
- Quick action buttons with micro-interactions

**Forms & Inputs:**
- Rounded input fields with soft focus states
- Green accent colors for valid states
- Consistent with eco theme throughout

### Visual Elements

**Eco Badges:**
- Circular design with leaf iconography
- Color-coded system for carbon impact
- Animated counters for environmental stats

**Icons:**
- Heroicons for consistency
- Nature-themed custom icons for eco features
- Subtle animations on interaction

### Images
**Hero Section:**
- Large hero image showcasing sustainable products in natural setting
- Overlay with semi-transparent forest green for text readability
- Images should feel authentic, not overly polished

**Product Images:**
- Clean white backgrounds for consistency
- High-quality lifestyle shots showing products in use
- Focus on natural materials and textures

**Supporting Graphics:**
- Subtle nature-inspired patterns for backgrounds
- Minimalist illustrations for empty states
- Icons emphasizing sustainability themes

### Animations
**Minimal & Purposeful:**
- Smooth slide-in for cart sidebar
- Gentle hover states on product cards
- Counter animations for eco stats
- Fade transitions between sections
- Micro-animations for button interactions

**Performance Focus:**
- CSS transforms over position changes
- Reduced motion respect for accessibility
- 60fps smooth animations

### Accessibility
- High contrast ratios (4.5:1 minimum)
- ARIA labels for screen readers
- Keyboard navigation support
- Voice navigation integration
- Focus indicators with green accent
- Alternative text for all images
- Semantic HTML structure

### Responsive Behavior
- Mobile-first approach
- Collapsible navigation on smaller screens
- Stackable product grid (4→3→2→1 columns)
- Touch-friendly button sizes (44px minimum)
- Swipeable product carousel on mobile

This design system creates a cohesive, eco-conscious brand experience that balances environmental messaging with modern e-commerce functionality, ensuring accessibility and performance across all devices.