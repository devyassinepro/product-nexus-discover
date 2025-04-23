
import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";

export function HeroSection() {
  return (
    <section className="text-center space-y-8">
      <div className="inline-flex items-center bg-primary/10 px-4 py-2 rounded-full text-primary">
        <Rocket className="mr-2 h-5 w-5" />
        <span className="text-sm font-medium">Affiliate Program</span>
      </div>
      
      <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl mx-auto">
        Earn 30% Recurring Commission for Life on Every Referral!
      </h1>
      
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
        Transform your audience into a steady passive income stream by promoting our cutting-edge product research SaaS.
      </p>
      
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Button size="lg" variant="default">
          Become an Affiliate
        </Button>
        <Button size="lg" variant="outline">
          Learn More
        </Button>
      </div>
    </section>
  );
}
