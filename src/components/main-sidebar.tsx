
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  BarChart,
  LineChart,
  Search,
  ShoppingCart,
  TrendingUp,
  Home,
  Settings,
  HelpCircle,
  CreditCard,
  User,
  Users,
} from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

interface SidebarItemProps {
  icon: React.ElementType;
  title: string;
  to: string;
  active?: boolean;
}

const SidebarItem = ({ icon: Icon, title, to, active }: SidebarItemProps) => {
  return (
    <Link
      to={to}
      className={cn("sidebar-item", active && "active")}
    >
      <Icon size={20} />
      <span>{title}</span>
    </Link>
  );
};

export function MainSidebar() {
  // Use the location to determine the current route
  const location = useLocation();
  const currentRoute = location.pathname;

  return (
    <aside className="hidden md:flex h-screen w-64 flex-col bg-sidebar border-r fixed left-0 top-0 z-30">
      <div className="flex h-14 items-center border-b px-4">
        <Link to="/" className="flex items-center gap-2 font-semibold">
          <TrendingUp size={24} className="text-primary" />
          <span className="text-xl">ProductNexus</span>
        </Link>
      </div>
      
      <div className="flex-1 overflow-auto py-2 px-3">
        <nav className="flex flex-col gap-1">
          <p className="text-sm font-medium text-muted-foreground px-3 py-2">Overview</p>
          <SidebarItem icon={Home} title="Dashboard" to="/" active={currentRoute === "/"} />
          
          <p className="text-sm font-medium text-muted-foreground px-3 py-2 mt-4">Analysis</p>
          <SidebarItem icon={BarChart} title="Sales Tracker" to="/sales-tracker" active={currentRoute === "/sales-tracker"} />
          <SidebarItem icon={TrendingUp} title="Trending" to="/trending" active={currentRoute === "/trending"} />
          <SidebarItem icon={Search} title="Product Research" to="/research" active={currentRoute === "/research"} />
          <SidebarItem icon={LineChart} title="Real-Time Search" to="/realtime" active={currentRoute === "/realtime"} />
          <SidebarItem icon={ShoppingCart} title="Shopify Importer" to="/shopify-importer" active={currentRoute === "/shopify-importer"} />
          
          <p className="text-sm font-medium text-muted-foreground px-3 py-2 mt-4">Monetization</p>
          <SidebarItem icon={Users} title="Affiliate Program" to="/affiliate" active={currentRoute === "/affiliate"} />
          
          <p className="text-sm font-medium text-muted-foreground px-3 py-2 mt-4">Support</p>
          <SidebarItem icon={HelpCircle} title="Tutorials" to="/tutorials" active={currentRoute === "/tutorials"} />
          <SidebarItem icon={HelpCircle} title="Support Tickets" to="/tickets" active={currentRoute === "/tickets"} />
          
          <p className="text-sm font-medium text-muted-foreground px-3 py-2 mt-4">Account</p>
          <SidebarItem icon={User} title="Profile" to="/profile" active={currentRoute === "/profile"} />
          <SidebarItem icon={CreditCard} title="Billing" to="/billing" active={currentRoute === "/billing"} />
          <SidebarItem icon={Settings} title="Settings" to="/settings" active={currentRoute === "/settings"} />
        </nav>
      </div>
      
      <div className="flex items-center border-t p-4 gap-2">
        <ThemeToggle />
        <div className="ml-auto flex items-center gap-2">
          <span className="text-xs text-muted-foreground">Pro Plan</span>
        </div>
      </div>
    </aside>
  );
}
