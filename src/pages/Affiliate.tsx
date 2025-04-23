
import { HeroSection } from "@/components/affiliate/hero-section";
import { BenefitsSection } from "@/components/affiliate/benefits-section";
import { EarningsCalculator } from "@/components/affiliate/earnings-calculator";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Affiliate = () => {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 space-y-16">
        <HeroSection />
        <BenefitsSection />
        <EarningsCalculator />
        
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Earning?</h2>
          <Button size="lg" className="group">
            Join Affiliate Program 
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </section>
      </div>
    </div>
  );
};

export default Affiliate;
