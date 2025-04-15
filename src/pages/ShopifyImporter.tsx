
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { PlusCircle, ShoppingCart, Store, X } from "lucide-react";

const ShopifyImporter = () => {
  const [activeTab, setActiveTab] = useState("default");
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Shopify Importer</h1>
      </div>
      
      <Tabs defaultValue="default" className="w-full" onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="default">Connected Stores</TabsTrigger>
          <TabsTrigger value="single">Single Product</TabsTrigger>
          <TabsTrigger value="bulk">Bulk Import</TabsTrigger>
          <TabsTrigger value="imported">Imported Products</TabsTrigger>
        </TabsList>
        
        <TabsContent value="default" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Connected Shopify Stores</CardTitle>
              <CardDescription>Manage your connected Shopify stores</CardDescription>
            </CardHeader>
            <CardContent>
              {Array.from({ length: 2 }).map((_, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-between p-4 rounded-lg border mb-4 last:mb-0"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-slate-200 dark:bg-slate-800 rounded-md flex items-center justify-center">
                      <Store className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="font-medium">Store {index + 1}</div>
                      <div className="text-sm text-muted-foreground">store{index + 1}.myshopify.com</div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline">Import Products</Button>
                    <Button variant="destructive" size="icon">
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
              
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="mt-4 w-full">
                    <PlusCircle className="h-4 w-4 mr-2" />
                    Connect New Shopify Store
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Connect Shopify Store</DialogTitle>
                    <DialogDescription>
                      Enter your Shopify store URL and access token to connect your store.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="space-y-2">
                      <label htmlFor="store-url" className="text-sm font-medium leading-none">Store URL</label>
                      <Input id="store-url" placeholder="yourstorename.myshopify.com" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="access-token" className="text-sm font-medium leading-none">Access Token</label>
                      <Input id="access-token" type="password" placeholder="shpat_..." />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit">Connect Store</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="single" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Import Single Product</CardTitle>
              <CardDescription>Import a single product from any Shopify store</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-end gap-4">
                <div className="flex-1">
                  <label className="text-sm font-medium leading-none mb-2 block">Product URL</label>
                  <Input placeholder="https://store.myshopify.com/products/product-handle" />
                </div>
                <Button>Import Product</Button>
              </div>
              
              <div className="mt-6 p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-center">
                <p className="text-muted-foreground">
                  Paste a product URL from any Shopify store to import it to your connected store.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="bulk" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Bulk Product Import</CardTitle>
              <CardDescription>Import multiple products from a Shopify store</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-end gap-4 mb-6">
                <div className="flex-1">
                  <label className="text-sm font-medium leading-none mb-2 block">Store URL</label>
                  <Input placeholder="https://store.myshopify.com" />
                </div>
                <Button>Fetch Products</Button>
              </div>
              
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-12">
                        <Checkbox id="select-all" />
                      </TableHead>
                      <TableHead>Product</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Inventory</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {Array.from({ length: 5 }).map((_, index) => (
                      <TableRow key={index}>
                        <TableCell>
                          <Checkbox id={`product-${index}`} />
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded bg-slate-200 dark:bg-slate-800"></div>
                            <div>
                              <div className="font-medium">Product {index + 1}</div>
                              <div className="text-xs text-muted-foreground truncate max-w-xs">
                                Product description that is quite long and will be truncated
                              </div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>${(19.99 + index * 5).toFixed(2)}</TableCell>
                        <TableCell>{10 + index * 5} in stock</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              
              <div className="mt-4 flex justify-between">
                <Button variant="outline">
                  Select All Products
                </Button>
                <Button>
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Import Selected Products
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="imported" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Imported Products</CardTitle>
              <CardDescription>View and manage products you've imported</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Product</TableHead>
                      <TableHead>Original Store</TableHead>
                      <TableHead>Import Date</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {Array.from({ length: 5 }).map((_, index) => (
                      <TableRow key={index}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded bg-slate-200 dark:bg-slate-800"></div>
                            <div>
                              <div className="font-medium">Imported Product {index + 1}</div>
                              <div className="text-xs text-muted-foreground">
                                SKU: PRD-{1000 + index}
                              </div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>store{index % 3 + 1}.myshopify.com</TableCell>
                        <TableCell>2023-04-{10 + index}</TableCell>
                        <TableCell>
                          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-green-50 border-green-200 text-green-700 dark:bg-green-900/30 dark:border-green-900 dark:text-green-400">
                            Active
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              
              <div className="mt-4 flex items-center justify-between">
                <div className="text-sm text-muted-foreground">
                  Showing 1-5 of 12 imported products
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" disabled>Previous</Button>
                  <Button variant="outline" size="sm">Next</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ShopifyImporter;
