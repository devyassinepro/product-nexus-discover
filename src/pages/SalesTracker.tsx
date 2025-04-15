
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { ExternalLink, Download, MoreHorizontal, Search } from "lucide-react";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

const SalesTracker = () => {
  const [activeTab, setActiveTab] = useState("stores");
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Sales Tracker</h1>
      </div>
      
      <Tabs defaultValue="stores" className="w-full" onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="stores">Stores</TabsTrigger>
          <TabsTrigger value="products">Products</TabsTrigger>
        </TabsList>
        
        <TabsContent value="stores" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Track a Store</CardTitle>
              <CardDescription>Enter a store URL to start tracking</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Input placeholder="Enter Store URL" />
                <Select defaultValue="all">
                  <SelectTrigger>
                    <SelectValue placeholder="Select Niche" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Niches</SelectItem>
                    <SelectItem value="fashion">Fashion</SelectItem>
                    <SelectItem value="electronics">Electronics</SelectItem>
                    <SelectItem value="home">Home & Garden</SelectItem>
                    <SelectItem value="beauty">Beauty</SelectItem>
                  </SelectContent>
                </Select>
                <Button>Start Tracking</Button>
              </div>
              <div className="mt-4 text-sm text-muted-foreground">
                Tracking: 12/50 stores (38 remaining)
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Tracked Stores</CardTitle>
              <CardDescription>Manage your tracked stores</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row justify-between mb-4 gap-4">
                <div className="flex gap-2">
                  <Input placeholder="Search stores..." className="w-full md:w-64" />
                  <Button variant="outline" size="icon">
                    <Search className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex gap-2">
                  <Select defaultValue="10">
                    <SelectTrigger className="w-[120px]">
                      <SelectValue placeholder="Page Size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="10">10 per page</SelectItem>
                      <SelectItem value="20">20 per page</SelectItem>
                      <SelectItem value="50">50 per page</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select defaultValue="revenue">
                    <SelectTrigger className="w-[150px]">
                      <SelectValue placeholder="Sort By" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="revenue">Revenue (High-Low)</SelectItem>
                      <SelectItem value="orders">Orders (High-Low)</SelectItem>
                      <SelectItem value="date">Date Added</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-12">Store</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Currency</TableHead>
                      <TableHead>Date Tracked</TableHead>
                      <TableHead>Products</TableHead>
                      <TableHead>Sales</TableHead>
                      <TableHead>Revenue</TableHead>
                      <TableHead className="w-12"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {Array.from({ length: 5 }).map((_, index) => (
                      <TableRow key={index}>
                        <TableCell>
                          <div className="w-10 h-10 rounded bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
                            {String.fromCharCode(65 + index)}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <div className="font-medium">Store {index + 1}</div>
                            <div className="text-sm text-muted-foreground">store{index + 1}.myshopify.com</div>
                          </div>
                        </TableCell>
                        <TableCell>USD</TableCell>
                        <TableCell>2023-04-{10 + index}</TableCell>
                        <TableCell>{(index + 1) * 12}</TableCell>
                        <TableCell>{(index + 1) * 28}</TableCell>
                        <TableCell>${(index + 1) * 420}</TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Actions</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>View Details</DropdownMenuItem>
                              <DropdownMenuItem>Import to Shopify</DropdownMenuItem>
                              <DropdownMenuItem className="text-destructive">Untrack Store</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              
              <div className="mt-4 flex items-center justify-between">
                <div className="text-sm text-muted-foreground">
                  Showing 1-5 of 12 stores
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" disabled>Previous</Button>
                  <Button variant="outline" size="sm">Next</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="products" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Product Sales</CardTitle>
              <CardDescription>Track sales performance of products</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row justify-between mb-4 gap-4">
                <div className="flex gap-2">
                  <Input placeholder="Search products..." className="w-full md:w-64" />
                  <Button variant="outline" size="icon">
                    <Search className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex gap-2">
                  <Select defaultValue="sales">
                    <SelectTrigger className="w-[150px]">
                      <SelectValue placeholder="Sort By" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sales">Sales (High-Low)</SelectItem>
                      <SelectItem value="revenue">Revenue (High-Low)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-12">Image</TableHead>
                      <TableHead>Product</TableHead>
                      <TableHead>Today</TableHead>
                      <TableHead>Yesterday</TableHead>
                      <TableHead>Total</TableHead>
                      <TableHead className="w-12"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {Array.from({ length: 5 }).map((_, index) => (
                      <TableRow key={index}>
                        <TableCell>
                          <div className="w-10 h-10 rounded bg-slate-200 dark:bg-slate-800"></div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <div className="font-medium">Product {index + 1}</div>
                            <div className="text-sm text-muted-foreground flex gap-2">
                              <Button variant="link" size="sm" className="p-0 h-auto">
                                <ExternalLink className="h-3 w-3 mr-1" />
                                Shopify
                              </Button>
                              <Button variant="link" size="sm" className="p-0 h-auto">
                                <ExternalLink className="h-3 w-3 mr-1" />
                                AliExpress
                              </Button>
                              <Button variant="link" size="sm" className="p-0 h-auto">
                                <ExternalLink className="h-3 w-3 mr-1" />
                                Facebook
                              </Button>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>${(index + 1) * 50}</div>
                          <div className="text-sm text-muted-foreground">{(index + 1) * 5} sales</div>
                        </TableCell>
                        <TableCell>
                          <div>${(index + 1) * 45}</div>
                          <div className="text-sm text-muted-foreground">{(index + 1) * 4} sales</div>
                        </TableCell>
                        <TableCell>
                          <div>${(index + 1) * 250}</div>
                          <div className="text-sm text-muted-foreground">{(index + 1) * 25} sales</div>
                        </TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Actions</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>View Details</DropdownMenuItem>
                              <DropdownMenuItem>Import to Shopify</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              
              <div className="mt-4 flex items-center justify-between">
                <div className="text-sm text-muted-foreground">
                  Showing 1-5 of 24 products
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

export default SalesTracker;
