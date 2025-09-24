import { Separator } from "@/components/ui/separator";
import { Leaf, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">S</span>
              </div>
              <span className="font-bold text-xl text-foreground">Smart Cart</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Making sustainable shopping accessible through voice-powered experiences and carbon footprint tracking.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-semibold mb-4">Shop</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">All Products</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Eco-Friendly</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Best Sellers</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Sale</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Shipping Info</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Size Guide</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Sustainability */}
          <div>
            <h3 className="font-semibold mb-4">Sustainability</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Our Mission</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Carbon Offset</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Eco Certifications</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Impact Report</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Partner Brands</a></li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>© 2024 Smart Cart. All rights reserved.</span>
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-chart-3 fill-current" />
            <span>for the planet</span>
            <Leaf className="h-4 w-4 text-chart-1" />
          </div>
        </div>
      </div>
    </footer>
  );
}