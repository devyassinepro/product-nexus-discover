import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { 
  ArrowLeft, 
  ExternalLink, 
  Facebook, 
  Instagram, 
  MoreHorizontal,
  Store
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

const StoreDetails = () => {
  const { storeId } = useParams();
  
  // Simulated store data
  const storeData = {
    id: storeId,
    name: `Store ${storeId}`,
    shopifyUrl: `store${storeId}.myshopify.com`,
    mainUrl: `www.store${storeId}.com`,
    city: "New York",
    country: "United States",
    currency: "USD",
    dateTracked: `2023-04-${Number(storeId) + 10}`,
    socialMedia: {
      facebook: true,
      instagram: true,
      tiktok: Number(storeId) % 2 === 0,
      pinterest: Number(storeId) % 3 === 0
    },
    productCount: Number(storeId) * 12,
    revenue: {
      today: Number(storeId) * 150,
      yesterday: Number(storeId) * 140,
      day3: Number(storeId) * 160,
      day4: Number(storeId) * 130,
      day5: Number(storeId) * 170,
      day6: Number(storeId) * 120,
      day7: Number(storeId) * 110,
      total: Number(storeId) * 980
    },
    sales: {
      today: Number(storeId) * 15,
      yesterday: Number(storeId) * 14,
      day3: Number(storeId) * 16,
      day4: Number(storeId) * 13,
      day5: Number(storeId) * 17,
      day6: Number(storeId) * 12,
      day7: Number(storeId) * 11,
      total: Number(storeId) * 98
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" asChild>
          <Link to="/sales-tracker">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">Store Details</h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Store Information</CardTitle>
            <CardDescription>Details and statistics for {storeData.name}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-start gap-4">
              <div className="w-24 h-24 rounded bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
                <Store className="h-12 w-12 text-slate-400" />
              </div>
              <div className="flex-1 space-y-1">
                <h2 className="text-2xl font-semibold">{storeData.name}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Shopify URL</p>
                    <p className="flex items-center gap-1">
                      {storeData.shopifyUrl}
                      <Button variant="ghost" size="icon" className="h-4 w-4">
                        <ExternalLink className="h-3 w-3" />
                      </Button>
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Main URL</p>
                    <p className="flex items-center gap-1">
                      {storeData.mainUrl}
                      <Button variant="ghost" size="icon" className="h-4 w-4">
                        <ExternalLink className="h-3 w-3" />
                      </Button>
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p>{storeData.city}, {storeData.country}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Currency</p>
                    <p>{storeData.currency}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Date Tracked</p>
                    <p>{storeData.dateTracked}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Social Media</p>
                    <div className="flex gap-2 mt-1">
                      {storeData.socialMedia.facebook && (
                        <Button variant="outline" size="icon" className="h-8 w-8">
                          <Facebook className="h-4 w-4" />
                        </Button>
                      )}
                      {storeData.socialMedia.instagram && (
                        <Button variant="outline" size="icon" className="h-8 w-8">
                          <Instagram className="h-4 w-4" />
                        </Button>
                      )}
                      {storeData.socialMedia.tiktok && (
                        <Button variant="outline" size="icon" className="h-8 w-8">
                          <span className="text-xs">TT</span>
                        </Button>
                      )}
                      {storeData.socialMedia.pinterest && (
                        <Button variant="outline" size="icon" className="h-8 w-8">
                          <span className="text-xs">Pin</span>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 flex flex-wrap gap-3">
              <Button>Import to Shopify</Button>
              <Button variant="outline" className="text-destructive">Untrack Store</Button>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Store Metrics</CardTitle>
            <CardDescription>Key performance indicators</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <p className="text-sm font-medium mb-2">Products</p>
              <p className="text-3xl font-bold">{storeData.productCount}</p>
            </div>
            
            <div>
              <p className="text-sm font-medium mb-2">Total Sales</p>
              <p className="text-3xl font-bold">{storeData.sales.total}</p>
              <p className="text-sm text-muted-foreground">Last 7 days: {storeData.sales.total - storeData.sales.today}</p>
            </div>
            
            <div>
              <p className="text-sm font-medium mb-2">Total Revenue</p>
              <p className="text-3xl font-bold">${storeData.revenue.total}</p>
              <p className="text-sm text-muted-foreground">Last 7 days: ${storeData.revenue.total - storeData.revenue.today}</p>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Top Products</CardTitle>
          <CardDescription>Best-selling products from this store</CardDescription>
        </CardHeader>
        <CardContent>
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
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div>${(index + 1) * 20}</div>
                      <div className="text-sm text-muted-foreground">{(index + 1) * 2} sales</div>
                    </TableCell>
                    <TableCell>
                      <div>${(index + 1) * 18}</div>
                      <div className="text-sm text-muted-foreground">{(index + 1) * 2 - 1} sales</div>
                    </TableCell>
                    <TableCell>
                      <div>${(index + 1) * 120}</div>
                      <div className="text-sm text-muted-foreground">{(index + 1) * 12} sales</div>
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
                          <DropdownMenuItem asChild>
                            <Link to={`/sales-tracker/product/${index + 1}`}>View Details</Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem>Import to Shopify</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          
          <div className="mt-4 flex justify-center">
            <Button variant="outline">View All Products</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StoreDetails;
