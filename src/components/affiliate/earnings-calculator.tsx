
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function EarningsCalculator() {
  const [referrals, setReferrals] = useState(10);
  const monthlyPlan = 49;
  const commissionRate = 0.3;

  const monthlyEarnings = referrals * monthlyPlan * commissionRate;
  const yearlyEarnings = monthlyEarnings * 12;

  return (
    <section className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold">Calculate Your Earnings</h2>
        <p className="text-muted-foreground mt-2">See how much you can earn as an affiliate</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Earnings Calculator</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="referrals">Number of Referrals</Label>
            <Input
              id="referrals"
              type="number"
              value={referrals}
              onChange={(e) => setReferrals(Number(e.target.value))}
              min={1}
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

          <p className="text-sm text-muted-foreground">
            Based on €{monthlyPlan}/month plan with {(commissionRate * 100)}% commission rate
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
