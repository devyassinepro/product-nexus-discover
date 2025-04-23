
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  isAffiliate: boolean;
}

export function HeroSection({ isAffiliate }: HeroSectionProps) {
  return (
    <section className="text-center space-y-6">
      <h1 className="text-4xl md:text-5xl font-bold leading-tight">
        Earn 30% Recurring Commission for Life on Every Referral!
      </h1>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
        Turn your traffic into monthly passive income by promoting our winning product research SaaS.
      </p>
      <div className="flex justify-center gap-4">
        {isAffiliate ? (
          <Button size="lg" variant="default">
            Copy My Affiliate Link
          </Button>
        ) : (
          <Button size="lg" variant="default">
            Become an Affiliate
          </Button>
        )}
      </div>
    </section>
  );
}
