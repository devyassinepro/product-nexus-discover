
import { useState } from "react";
import { MainSidebar } from "@/components/main-sidebar";
import { MainHeader } from "@/components/main-header";
import { Sheet, SheetContent } from "@/components/ui/sheet";

interface AppLayoutProps {
  children: React.ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Desktop sidebar */}
      <MainSidebar />

      {/* Mobile sidebar */}
      <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
        <SheetContent side="left" className="p-0">
          <MainSidebar />
        </SheetContent>
      </Sheet>

      <div className="flex flex-col flex-1 md:ml-64">
        <MainHeader onMenuToggle={() => setSidebarOpen(true)} />
        <main className="flex-1 p-4 md:p-6">{children}</main>
      </div>
    </div>
  );
}
