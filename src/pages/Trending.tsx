
import { useState } from "react";
import { Grid, List, Filter, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface TrendingProduct {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  storeUrl: string;
}

// Sample data for demonstration
const trendingProducts: TrendingProduct[] = [
  {
    id: "1",
    title: "Portable LED Camping Lantern",
    price: 24.99,
    imageUrl: "https://placehold.co/300x300",
    storeUrl: "https://example-store.com/product-1",
  },
  {
    id: "2",
    title: "Eco-Friendly Water Bottle",
    price: 19.95,
    imageUrl: "https://placehold.co/300x300",
    storeUrl: "https://example-store.com/product-2",
  },
  {
    id: "3",
    title: "Wireless Earbuds Pro",
    price: 89.99,
    imageUrl: "https://placehold.co/300x300",
    storeUrl: "https://example-store.com/product-3",
  },
  {
    id: "4",
    title: "Smart Home Security Camera",
    price: 129.99,
    imageUrl: "https://placehold.co/300x300",
    storeUrl: "https://example-store.com/product-4",
  },
  {
    id: "5",
    title: "Organic Cotton Bedding Set",
    price: 79.50,
    imageUrl: "https://placehold.co/300x300",
    storeUrl: "https://example-store.com/product-5",
  },
  {
    id: "6",
    title: "Fitness Activity Tracker",
    price: 49.95,
    imageUrl: "https://placehold.co/300x300",
    storeUrl: "https://example-store.com/product-6",
  },
];

// Trending keywords
const trendingKeywords = [
  "Summer Essentials",
  "Tech Gadgets",
  "Home Office",
  "Fitness",
  "Eco-Friendly",
  "Kitchen Tools",
  "Pet Accessories",
  "Baby Products",
];

export default function Trending() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedKeyword, setSelectedKeyword] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Filter products based on search query and selected keyword
  const filteredProducts = trendingProducts.filter(product => {
    const matchesSearch = searchQuery === "" || 
      product.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesKeyword = selectedKeyword === null || 
      product.title.toLowerCase().includes(selectedKeyword.toLowerCase());
    return matchesSearch && matchesKeyword;
  });

  return (
    <div className="container py-6">
      <div className="flex flex-col space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Trending Products</h1>
          <div className="flex items-center space-x-2">
            <Button 
              variant={viewMode === "grid" ? "default" : "outline"} 
              size="icon" 
              onClick={() => setViewMode("grid")}
            >
              <Grid size={18} />
            </Button>
            <Button 
              variant={viewMode === "list" ? "default" : "outline"} 
              size="icon" 
              onClick={() => setViewMode("list")}
            >
              <List size={18} />
            </Button>
          </div>
        </div>

        {/* Search and Filter Controls */}
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search products..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter size={16} />
            <span>Filters</span>
          </Button>
        </div>

        {/* Trending Keywords */}
        <div className="flex flex-wrap gap-2 py-2">
          {trendingKeywords.map((keyword) => (
            <Button
              key={keyword}
              variant={selectedKeyword === keyword ? "default" : "outline"}
              size="sm"
              onClick={() => 
                setSelectedKeyword(selectedKeyword === keyword ? null : keyword)
              }
              className="rounded-full"
            >
              {keyword}
            </Button>
          ))}
        </div>

        {/* Product Grid/List View */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.id}>
                <CardContent className="p-4 flex flex-col">
                  <div className="h-48 w-full bg-muted/10 rounded-md overflow-hidden mb-4">
                    <img 
                      src={product.imageUrl} 
                      alt={product.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="font-medium text-lg mb-2 line-clamp-2">{product.title}</h3>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-auto">
                    <Button variant="outline" size="sm">AliExpress</Button>
                    <Button variant="outline" size="sm">Facebook</Button>
                    <Button variant="outline" size="sm">Shopify Import</Button>
                    <Button variant="outline" size="sm">Spy Sales</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="flex flex-col space-y-4">
            {filteredProducts.map((product) => (
              <Card key={product.id}>
                <CardContent className="p-4">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="h-24 w-24 bg-muted/10 rounded-md overflow-hidden flex-shrink-0">
                      <img 
                        src={product.imageUrl} 
                        alt={product.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-lg mb-1">{product.title}</h3>
                      <p className="text-muted-foreground text-sm mb-2">{product.storeUrl}</p>
                      <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 items-start justify-end md:w-1/3">
                      <Button variant="outline" size="sm">AliExpress</Button>
                      <Button variant="outline" size="sm">Facebook</Button>
                      <Button variant="outline" size="sm">Shopify Import</Button>
                      <Button variant="outline" size="sm">Spy Sales</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Pagination */}
        <div className="flex justify-center mt-6">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
}
