
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { AppLayout } from "@/components/app-layout";

import Dashboard from "./pages/Dashboard";
import Trending from "./pages/Trending";
import Research from "./pages/Research";
import NotFound from "./pages/NotFound";
import SalesTracker from "./pages/SalesTracker";
import RealTimeSearch from "./pages/RealTimeSearch";
import ShopifyImporter from "./pages/ShopifyImporter";
import Tutorials from "./pages/Tutorials";
import SupportTickets from "./pages/SupportTickets";
import Settings from "./pages/Settings";
import Billing from "./pages/Billing";
import Profile from "./pages/Profile";
import StoreDetails from "./pages/StoreDetails";
import ProductDetails from "./pages/ProductDetails";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="system">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route 
              path="/" 
              element={
                <AppLayout>
                  <Dashboard />
                </AppLayout>
              } 
            />
            <Route 
              path="/trending" 
              element={
                <AppLayout>
                  <Trending />
                </AppLayout>
              } 
            />
            <Route 
              path="/research" 
              element={
                <AppLayout>
                  <Research />
                </AppLayout>
              } 
            />
            <Route 
              path="/sales-tracker" 
              element={
                <AppLayout>
                  <SalesTracker />
                </AppLayout>
              } 
            />
            <Route 
              path="/sales-tracker/store/:storeId" 
              element={
                <AppLayout>
                  <StoreDetails />
                </AppLayout>
              } 
            />
            <Route 
              path="/sales-tracker/product/:productId" 
              element={
                <AppLayout>
                  <ProductDetails />
                </AppLayout>
              } 
            />
            <Route 
              path="/realtime" 
              element={
                <AppLayout>
                  <RealTimeSearch />
                </AppLayout>
              } 
            />
            <Route 
              path="/shopify-importer" 
              element={
                <AppLayout>
                  <ShopifyImporter />
                </AppLayout>
              } 
            />
            <Route 
              path="/tutorials" 
              element={
                <AppLayout>
                  <Tutorials />
                </AppLayout>
              } 
            />
            <Route 
              path="/tickets" 
              element={
                <AppLayout>
                  <SupportTickets />
                </AppLayout>
              } 
            />
            <Route 
              path="/settings" 
              element={
                <AppLayout>
                  <Settings />
                </AppLayout>
              } 
            />
            <Route 
              path="/billing" 
              element={
                <AppLayout>
                  <Billing />
                </AppLayout>
              } 
            />
            <Route 
              path="/profile" 
              element={
                <AppLayout>
                  <Profile />
                </AppLayout>
              } 
            />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
