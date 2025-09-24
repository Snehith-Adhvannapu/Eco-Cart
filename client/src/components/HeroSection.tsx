import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Leaf, Users, TreePine } from "lucide-react";
import heroImage from "@assets/generated_images/Eco-friendly_hero_section_background_8885c384.png";

interface HeroSectionProps {
  onStartVoiceShopping: () => void;
}

export default function HeroSection({ onStartVoiceShopping }: HeroSectionProps) {
  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
              EcoCart – Shop Smart. 
              <span className="text-primary block">Shop Green.</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Voice-powered sustainable shopping for everyone.
            </p>
          </div>

          {/* CTA Button */}
          <Button
            data-testid="button-start-voice-shopping"
            size="lg"
            onClick={onStartVoiceShopping}
            className="text-lg px-8 py-3 h-auto bg-primary hover:bg-primary/90"
          >
            Start Voice Shopping
          </Button>

          {/* Eco Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="flex items-center justify-center gap-3 p-6 bg-card/80 backdrop-blur rounded-xl border">
              <div className="p-3 bg-chart-1 rounded-full">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <div className="text-left">
                <div data-testid="text-co2-saved" className="text-2xl font-bold text-foreground">2,450kg</div>
                <div className="text-sm text-muted-foreground">Total CO₂ Saved</div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 p-6 bg-card/80 backdrop-blur rounded-xl border">
              <div className="p-3 bg-chart-2 rounded-full">
                <TreePine className="h-6 w-6 text-white" />
              </div>
              <div className="text-left">
                <div data-testid="text-trees-planted" className="text-2xl font-bold text-foreground">1,234</div>
                <div className="text-sm text-muted-foreground">Trees Planted</div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 p-6 bg-card/80 backdrop-blur rounded-xl border">
              <div className="p-3 bg-primary rounded-full">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div className="text-left">
                <div data-testid="text-customers" className="text-2xl font-bold text-foreground">12,500+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}