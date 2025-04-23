
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StatsCard } from "@/components/dashboard/stats-card";
import { BarChart, TrendingUp, Users } from "lucide-react";

export function AffiliateStats() {
  return (
    <section className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold">Your Performance</h2>
        <p className="text-muted-foreground mt-2">Track your affiliate success in real-time</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Clicks"
          value="1,234"
          icon={<BarChart className="h-4 w-4 text-muted-foreground" />}
          trend={{ value: 12, positive: true }}
        />
        <StatsCard
          title="Registrations"
          value="56"
          icon={<Users className="h-4 w-4 text-muted-foreground" />}
          trend={{ value: 8, positive: true }}
        />
        <StatsCard
          title="Active Trials"
          value="23"
          icon={<Users className="h-4 w-4 text-muted-foreground" />}
          description="Converting users"
        />
        <StatsCard
          title="Monthly Revenue"
          value="€892"
          icon={<TrendingUp className="h-4 w-4 text-muted-foreground" />}
          trend={{ value: 15, positive: true }}
        />
      </div>
    </section>
  );
}
