
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart, Search, ShoppingCart, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

export function QuickActions() {
  const actions = [
    {
      title: "Track Sales",
      description: "Monitor store performance",
      icon: <BarChart className="h-5 w-5" />,
      href: "/sales-tracker",
    },
    {
      title: "Research Products",
      description: "Find winning products",
      icon: <Search className="h-5 w-5" />,
      href: "/research",
    },
    {
      title: "View Trends",
      description: "See what's trending",
      icon: <TrendingUp className="h-5 w-5" />,
      href: "/trending",
    },
    {
      title: "Import to Shopify",
      description: "Add products to your store",
      icon: <ShoppingCart className="h-5 w-5" />,
      href: "/shopify-importer",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {actions.map((action) => (
            <Button
              key={action.title}
              variant="outline"
              className="h-auto flex-col p-4 items-start justify-start gap-2 text-left"
              asChild
            >
              <Link to={action.href}>
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 text-primary">
                  {action.icon}
                </div>
                <div>
                  <div className="font-medium">{action.title}</div>
                  <div className="text-xs text-muted-foreground mt-1">{action.description}</div>
                </div>
              </Link>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
