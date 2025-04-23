
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { TrendingUp } from "lucide-react";

export function EarningsCalculator() {
  const [referrals, setReferrals] = useState(10);
  const monthlyPlan = 49;
  const commissionRate = 0.3;

  const monthlyEarnings = referrals * monthlyPlan * commissionRate;
  const yearlyEarnings = monthlyEarnings * 12;

  return (
    <section className="space-y-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold">Potential Earnings Calculator</h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          See how much you can potentially earn by referring our product research SaaS.
        </p>
      </div>

      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center">
            <TrendingUp className="mr-2 h-6 w-6 text-primary" />
            Earnings Projection
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Number of Referrals</span>
              <span className="font-semibold">{referrals}</span>
            </div>
            <Slider
              defaultValue={[referrals]}
              max={50}
              min={1}
              step={1}
              onValueChange={(value) => setReferrals(value[0])}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 rounded-lg bg-secondary">
              <p className="text-sm text-muted-foreground">Monthly Earnings</p>
              <p className="text-2xl font-bold">€{monthlyEarnings.toFixed(2)}</p>
            </div>
            <div className="p-4 rounded-lg bg-secondary">
              <p className="text-sm text-muted-foreground">Yearly Earnings</p>
              <p className="text-2xl font-bold">€{yearlyEarnings.toFixed(2)}</p>
            </div>
          </div>

          <p className="text-sm text-muted-foreground text-center">
            Based on €{monthlyPlan}/month plan with {(commissionRate * 100)}% commission rate
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
