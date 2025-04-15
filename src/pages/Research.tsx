
import { useState } from "react";
import { Search, ChevronDown, Download, ExternalLink, ShoppingCart, LineChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

// Sample product data
const products = [
  {
    id: "1",
    title: "Eco-Friendly Water Bottle",
    image: "https://placehold.co/100x100",
    storeUrl: "eco-store.com",
    productCount: 24,
    currency: "USD",
    country: "United States",
  },
  {
    id: "2",
    title: "Portable Bluetooth Speaker",
    image: "https://placehold.co/100x100",
    storeUrl: "techgadgets.com",
    productCount: 56,
    currency: "EUR",
    country: "Germany",
  },
  {
    id: "3",
    title: "Yoga Mat with Position Lines",
    image: "https://placehold.co/100x100",
    storeUrl: "fitnessworld.com",
    productCount: 18,
    currency: "GBP",
    country: "United Kingdom",
  },
  {
    id: "4",
    title: "Smart Home Security Camera",
    image: "https://placehold.co/100x100",
    storeUrl: "smarthome.com",
    productCount: 42,
    currency: "CAD",
    country: "Canada",
  },
  {
    id: "5",
    title: "Kids Educational Tablet",
    image: "https://placehold.co/100x100",
    storeUrl: "learnplay.com",
    productCount: 31,
    currency: "AUD",
    country: "Australia",
  },
];

// Sample data for filters
const countries = ["United States", "Canada", "United Kingdom", "Germany", "Australia", "France", "Japan"];
const currencies = ["USD", "EUR", "GBP", "CAD", "AUD", "JPY"];
const channels = ["Facebook", "Snapchat", "Google Ads", "TikTok Ads", "Pinterest"];

export default function Research() {
  const [itemsPerPage, setItemsPerPage] = useState("10");
  
  return (
    <div className="container py-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Product Research</h1>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Advanced Search</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="title">Title & Description</Label>
              <Input id="title" placeholder="Search by keywords..." />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="domain">Domain Name</Label>
              <Input id="domain" placeholder="e.g. example.com" />
            </div>
            
            <div className="space-y-2">
              <Label>Channel</Label>
              <Select defaultValue="all">
                <SelectTrigger>
                  <SelectValue placeholder="Select channel" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Channels</SelectItem>
                  {channels.map((channel) => (
                    <SelectItem key={channel} value={channel.toLowerCase()}>{channel}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label>Price Range</Label>
              <div className="flex gap-2">
                <Input placeholder="Min" type="number" className="flex-1" />
                <Input placeholder="Max" type="number" className="flex-1" />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label>Product Quantity</Label>
              <div className="flex gap-2">
                <Input placeholder="Min" type="number" className="flex-1" />
                <Input placeholder="Max" type="number" className="flex-1" />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label>Country</Label>
              <Select defaultValue="all">
                <SelectTrigger>
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Countries</SelectItem>
                  {countries.map((country) => (
                    <SelectItem key={country} value={country.toLowerCase()}>{country}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label>Currency</Label>
              <Select defaultValue="all">
                <SelectTrigger>
                  <SelectValue placeholder="Select currency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Currencies</SelectItem>
                  {currencies.map((currency) => (
                    <SelectItem key={currency} value={currency.toLowerCase()}>{currency}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex items-center space-x-2 pt-6">
              <Checkbox id="dropshipping" defaultChecked />
              <Label htmlFor="dropshipping">Dropshipping</Label>
            </div>
          </div>
          
          <div className="mt-6 flex justify-end">
            <Button className="flex items-center gap-2">
              <Search size={16} />
              <span>Search Products</span>
            </Button>
          </div>
        </CardContent>
      </Card>
      
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead>Store</TableHead>
              <TableHead>Products</TableHead>
              <TableHead>Currency</TableHead>
              <TableHead>Country</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-md overflow-hidden bg-muted/20">
                      <img 
                        src={product.image} 
                        alt={product.title} 
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium">{product.title}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <span>{product.storeUrl}</span>
                    <div className="flex gap-1">
                      <Button variant="ghost" size="icon" className="h-6 w-6">
                        <ExternalLink size={14} />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-6 w-6">
                        <ShoppingCart size={14} />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-6 w-6">
                        <ExternalLink size={14} />
                      </Button>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{product.productCount}</TableCell>
                <TableCell>{product.currency}</TableCell>
                <TableCell>{product.country}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm" className="flex items-center gap-1">
                        Actions
                        <ChevronDown size={14} />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem className="flex items-center gap-2">
                        <ExternalLink size={14} />
                        <span>Show Product</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="flex items-center gap-2">
                        <Download size={14} />
                        <span>Export CSV</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="flex items-center gap-2">
                        <ShoppingCart size={14} />
                        <span>Import to Shopify</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="flex items-center gap-2">
                        <LineChart size={14} />
                        <span>Track Sales</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      
      {/* Pagination Controls */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Items per page:</span>
          <Select value={itemsPerPage} onValueChange={setItemsPerPage}>
            <SelectTrigger className="h-8 w-[70px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="5">5</SelectItem>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="20">20</SelectItem>
              <SelectItem value="50">50</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
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
  );
}
