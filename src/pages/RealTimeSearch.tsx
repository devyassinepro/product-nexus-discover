
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Search, ShoppingCart, Star } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const RealTimeSearch = () => {
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [rating, setRating] = useState([3]);
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Real-Time Search</h1>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Search Products</CardTitle>
          <CardDescription>Find products across marketplaces in real-time</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="col-span-1 md:col-span-2">
              <label className="text-sm font-medium leading-none mb-2 block">Keyword</label>
              <div className="flex">
                <Input placeholder="Enter product keyword..." />
                <Button className="ml-2" type="submit">
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
              </div>
            </div>
            
            <div>
              <label className="text-sm font-medium leading-none mb-2 block">Country</label>
              <Select defaultValue="us">
                <SelectTrigger>
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="us">United States</SelectItem>
                  <SelectItem value="uk">United Kingdom</SelectItem>
                  <SelectItem value="ca">Canada</SelectItem>
                  <SelectItem value="au">Australia</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="text-sm font-medium leading-none mb-2 block">Language</label>
              <Select defaultValue="en">
                <SelectTrigger>
                  <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="fr">French</SelectItem>
                  <SelectItem value="es">Spanish</SelectItem>
                  <SelectItem value="de">German</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div>
              <label className="text-sm font-medium leading-none mb-2 block">Sort By</label>
              <Select defaultValue="best">
                <SelectTrigger>
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="best">Best Match</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="text-sm font-medium leading-none mb-2 block">
                Price Range: ${priceRange[0]} - ${priceRange[1]}
              </label>
              <Slider
                defaultValue={[0, 1000]}
                min={0}
                max={1000}
                step={10}
                value={priceRange}
                onValueChange={setPriceRange}
                className="mt-3"
              />
            </div>
            
            <div>
              <label className="text-sm font-medium leading-none mb-2 block">
                Min Rating: {rating[0]}⭐
              </label>
              <Slider
                defaultValue={[3]}
                min={1}
                max={5}
                step={0.5}
                value={rating}
                onValueChange={setRating}
                className="mt-3"
              />
            </div>
            
            <div>
              <label className="text-sm font-medium leading-none mb-2 block">Condition</label>
              <Select defaultValue="any">
                <SelectTrigger>
                  <SelectValue placeholder="Condition" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any</SelectItem>
                  <SelectItem value="new">New</SelectItem>
                  <SelectItem value="used">Used</SelectItem>
                  <SelectItem value="refurbished">Refurbished</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 gap-6">
        {Array.from({ length: 3 }).map((_, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="aspect-square bg-slate-200 dark:bg-slate-800 rounded-md flex items-center justify-center">
                  <div className="text-center text-muted-foreground">Product Image</div>
                </div>
                
                <div className="col-span-1 md:col-span-3 space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold">Product {index + 1} Title</h3>
                    <p className="text-muted-foreground mt-1">
                      This is a detailed product description that explains what the product is,
                      its key features, and why it might be appealing to consumers.
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < 4 ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground"}`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm">4.0 (120 reviews)</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold">
                      Category: Electronics
                    </div>
                    <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold">
                      Size: Medium
                    </div>
                    <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold">
                      Color: White
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div>
                      <div className="text-2xl font-bold">${59.99 + index * 10}</div>
                      <div className="text-sm text-muted-foreground">Free Shipping</div>
                    </div>
                    
                    <Button className="ml-auto">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Import to Shopify
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t">
                    <div>
                      <h4 className="text-sm font-medium">Store Information</h4>
                      <p className="text-sm text-muted-foreground">Store {index + 1} • 98% Positive Feedback</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium">Product Condition</h4>
                      <p className="text-sm text-muted-foreground">New with tags</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium">Availability</h4>
                      <p className="text-sm text-muted-foreground">In Stock • 100+ sold</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="flex justify-center mt-6">
        <Button variant="outline" size="sm" className="mx-1">1</Button>
        <Button variant="outline" size="sm" className="mx-1">2</Button>
        <Button variant="outline" size="sm" className="mx-1">3</Button>
        <Button variant="ghost" size="sm" disabled className="mx-1">...</Button>
        <Button variant="outline" size="sm" className="mx-1">10</Button>
      </div>
    </div>
  );
};

export default RealTimeSearch;
