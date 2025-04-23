
import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, TrendingUp, BarChart, Users, CreditCard, MessageSquare } from "lucide-react";

const benefits = [
  {
    title: "30% Lifetime Commission",
    description: "Earn recurring revenue for every referral's lifetime",
    icon: DollarSign,
  },
  {
    title: "Automated Payouts",
    description: "Get paid monthly via PayPal or Stripe",
    icon: TrendingUp,
  },
  {
    title: "Real-time Analytics",
    description: "Track performance with detailed dashboards",
    icon: BarChart,
  },
  {
    title: "High-converting Leads",
    description: "Our product sells itself, you just share the link",
    icon: Users,
  },
  {
    title: "Marketing Resources",
    description: "Banners, email templates, and more",
    icon: MessageSquare,
  },
  {
    title: "Fast Payments",
    description: "Consistent and reliable monthly income",
    icon: CreditCard,
  },
];

export function BenefitsSection() {
  return (
    <section className="space-y-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold">Why Join Our Affiliate Program?</h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          We've designed an affiliate program that rewards your efforts and helps you build a sustainable income stream.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((benefit) => (
          <Card key={benefit.title} className="hover:shadow-lg transition-shadow">
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
