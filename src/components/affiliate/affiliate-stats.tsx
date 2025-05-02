
import { Card, CardContent } from "@/components/ui/card";
import { StatsCard } from "@/components/dashboard/stats-card";
import { BarChart, TrendingUp, Users, UserCheck, DollarSign, Check } from "lucide-react";

export function AffiliateStats() {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Statistics Overview</h2>
        <p className="text-muted-foreground text-sm">Track your affiliate performance in real-time</p>
      </div>

      <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        <StatsCard
          title="Total Clicks"
          value="1,234"
          icon={<BarChart className="h-4 w-4 text-muted-foreground" />}
          trend={{ value: 12, positive: true }}
        />
        <StatsCard
          title="Registered Users"
          value="56"
          icon={<Users className="h-4 w-4 text-muted-foreground" />}
          trend={{ value: 8, positive: true }}
        />
        <StatsCard
          title="Active Trials"
          value="23"
          icon={<UserCheck className="h-4 w-4 text-muted-foreground" />}
          description="Converting users"
        />
        <StatsCard
          title="Conversions"
          value="18"
          icon={<Check className="h-4 w-4 text-muted-foreground" />}
          trend={{ value: 4, positive: true }}
        />
        <StatsCard
          title="Total Revenue"
          value="€892"
          icon={<DollarSign className="h-4 w-4 text-muted-foreground" />}
          trend={{ value: 15, positive: true }}
        />
      </div>
    </section>
  );
}
