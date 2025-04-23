
import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, TrendingUp, BarChart, Users } from "lucide-react";

const benefits = [
  {
    title: "Lifetime 30% Commission",
    description: "Earn recurring revenue for the lifetime of your referrals",
    icon: DollarSign,
  },
  {
    title: "Automatic Payouts",
    description: "Get paid monthly via PayPal or Stripe",
    icon: TrendingUp,
  },
  {
    title: "Real-time Dashboard",
    description: "Track your performance with detailed analytics",
    icon: BarChart,
  },
  {
    title: "Dedicated Support",
    description: "Get help from our affiliate success team",
    icon: Users,
  },
];

export function BenefitsSection() {
  return (
    <section className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold">Affiliate Program Benefits</h2>
        <p className="text-muted-foreground mt-2">Everything you need to succeed</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {benefits.map((benefit) => (
          <Card key={benefit.title}>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
