
import { BarChart3, ShoppingCart, Store, TrendingUp } from "lucide-react";
import { StatsCard } from "@/components/dashboard/stats-card";
import { TopProductsTable } from "@/components/dashboard/top-products-table";
import { QuickActions } from "@/components/dashboard/quick-actions";
import { Progress } from "@/components/ui/progress";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Search Quota"
          value="750/1000"
          description="Products"
          icon={<Search className="h-4 w-4 text-muted-foreground" />}
        />
        <StatsCard
          title="Connected Stores"
          value="7"
          description="Shopify stores"
          icon={<Store className="h-4 w-4 text-muted-foreground" />}
        />
        <StatsCard
          title="Imported Products"
          value="143"
          trend={{ value: 12, positive: true }}
          icon={<ShoppingCart className="h-4 w-4 text-muted-foreground" />}
        />
        <StatsCard
          title="Sales Tracked"
          value="$41,253"
          trend={{ value: 7, positive: true }}
          icon={<TrendingUp className="h-4 w-4 text-muted-foreground" />}
        />
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-full lg:col-span-4">
          <TopProductsTable />
        </div>
        <div className="col-span-full lg:col-span-3">
          <QuickActions />
        </div>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Package Usage</h2>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <div className="font-medium">Search quota</div>
              <div className="text-muted-foreground">750/1000</div>
            </div>
            <Progress value={75} className="h-2" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <div className="font-medium">Store tracking</div>
              <div className="text-muted-foreground">7/10</div>
            </div>
            <Progress value={70} className="h-2" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <div className="font-medium">Product imports</div>
              <div className="text-muted-foreground">143/250</div>
            </div>
            <Progress value={57} className="h-2" />
          </div>
        </div>
        <div className="rounded-lg border p-4 flex flex-col justify-between">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">Current Subscription</h2>
            <p className="text-muted-foreground">You're currently on the <strong>Pro Plan</strong> with premium features.</p>
          </div>
          <div className="space-y-3 mt-4">
            <div className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-primary" />
              <span>Advanced analytics</span>
            </div>
            <div className="flex items-center gap-2">
              <Store className="h-5 w-5 text-primary" />
              <span>10 store connections</span>
            </div>
            <div className="flex items-center gap-2">
              <ShoppingCart className="h-5 w-5 text-primary" />
              <span>250 product imports</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              <span>Trending product suggestions</span>
            </div>
          </div>
          <Button className="w-full mt-4">Upgrade Plan</Button>
        </div>
      </div>
    </div>
  );
}

import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
