
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlayCircle } from "lucide-react";

const Tutorials = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Tutorials</h1>
      </div>
      
      <Tabs defaultValue="getting-started">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="getting-started">Getting Started</TabsTrigger>
          <TabsTrigger value="sales-tracker">Sales Tracker</TabsTrigger>
          <TabsTrigger value="product-research">Product Research</TabsTrigger>
          <TabsTrigger value="shopify">Shopify Integration</TabsTrigger>
          <TabsTrigger value="advanced">Advanced Features</TabsTrigger>
        </TabsList>
        
        <TabsContent value="getting-started" className="space-y-4 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Welcome to ProductNexus</CardTitle>
              <CardDescription>Learn how to get started with our platform</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Array.from({ length: 3 }).map((_, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="aspect-video bg-slate-200 dark:bg-slate-800 relative">
                    <PlayCircle className="h-12 w-12 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-80" />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-medium mb-1">Getting Started Tutorial {index + 1}</h3>
                    <p className="text-sm text-muted-foreground">
                      Learn how to navigate the dashboard and use the basic features
                    </p>
                    <div className="text-xs text-muted-foreground mt-2">Duration: {4 + index}:30</div>
                  </CardContent>
                </Card>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="sales-tracker" className="space-y-4 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Sales Tracker Tutorials</CardTitle>
              <CardDescription>Learn how to track sales performance</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Array.from({ length: 3 }).map((_, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="aspect-video bg-slate-200 dark:bg-slate-800 relative">
                    <PlayCircle className="h-12 w-12 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-80" />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-medium mb-1">Sales Tracking Tutorial {index + 1}</h3>
                    <p className="text-sm text-muted-foreground">
                      Learn how to analyze store performance and track products
                    </p>
                    <div className="text-xs text-muted-foreground mt-2">Duration: {6 + index}:45</div>
                  </CardContent>
                </Card>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="product-research" className="space-y-4 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Product Research Tutorials</CardTitle>
              <CardDescription>Learn how to find winning products</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Array.from({ length: 3 }).map((_, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="aspect-video bg-slate-200 dark:bg-slate-800 relative">
                    <PlayCircle className="h-12 w-12 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-80" />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-medium mb-1">Product Research Tutorial {index + 1}</h3>
                    <p className="text-sm text-muted-foreground">
                      Learn how to use filters and trending data to find winning products
                    </p>
                    <div className="text-xs text-muted-foreground mt-2">Duration: {5 + index}:15</div>
                  </CardContent>
                </Card>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="shopify" className="space-y-4 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Shopify Integration Tutorials</CardTitle>
              <CardDescription>Learn how to connect and import to Shopify</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Array.from({ length: 3 }).map((_, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="aspect-video bg-slate-200 dark:bg-slate-800 relative">
                    <PlayCircle className="h-12 w-12 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-80" />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-medium mb-1">Shopify Integration Tutorial {index + 1}</h3>
                    <p className="text-sm text-muted-foreground">
                      Learn how to connect your Shopify store and import products
                    </p>
                    <div className="text-xs text-muted-foreground mt-2">Duration: {7 + index}:20</div>
                  </CardContent>
                </Card>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="advanced" className="space-y-4 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Advanced Feature Tutorials</CardTitle>
              <CardDescription>Learn about advanced platform features</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Array.from({ length: 3 }).map((_, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="aspect-video bg-slate-200 dark:bg-slate-800 relative">
                    <PlayCircle className="h-12 w-12 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-80" />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-medium mb-1">Advanced Tutorial {index + 1}</h3>
                    <p className="text-sm text-muted-foreground">
                      Learn about advanced analytics and automation features
                    </p>
                    <div className="text-xs text-muted-foreground mt-2">Duration: {8 + index}:55</div>
                  </CardContent>
                </Card>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      <Card>
        <CardHeader>
          <CardTitle>Latest Tutorials</CardTitle>
          <CardDescription>Recently added tutorial videos</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="flex items-start gap-4 p-4 rounded-lg border">
                <div className="w-32 h-20 bg-slate-200 dark:bg-slate-800 rounded relative flex-shrink-0">
                  <PlayCircle className="h-8 w-8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-80" />
                </div>
                <div>
                  <h3 className="font-medium">How to {["Use Advanced Filters", "Analyze Product Trends", "Optimize Your Store"][index % 3]}</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Learn how to use our advanced features to find the best products and maximize sales.
                  </p>
                  <div className="text-xs text-muted-foreground mt-2">Added: April {10 + index}, 2023 • Duration: {7 + index}:30</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Tutorials;
