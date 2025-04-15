
import { useParams, Link } from "react-router-dom";
import { 
  ArrowLeft, 
  ExternalLink, 
  ShoppingBag,
  Facebook, 
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useState } from "react";

const ProductDetails = () => {
  const { productId } = useParams();
  const [activeImage, setActiveImage] = useState(0);
  
  // Simulated product data
  const productData = {
    id: productId,
    title: `Premium Product ${productId}`,
    description: "This is a high-quality product with excellent features. It's designed to meet all your needs and exceed your expectations. Our customers love it for its durability, style, and functionality.",
    price: 29.99 + Number(productId) * 10,
    images: Array.from({ length: 5 }, (_, i) => ({ id: i })),
    store: {
      name: `Store ${Math.floor(Number(productId) / 2) + 1}`,
      url: `store${Math.floor(Number(productId) / 2) + 1}.myshopify.com`
    },
    revenue: {
      today: Number(productId) * 50,
      yesterday: Number(productId) * 45,
      day3: Number(productId) * 55,
      day4: Number(productId) * 40,
      day5: Number(productId) * 60,
      day6: Number(productId) * 35,
      day7: Number(productId) * 30,
      weekly: Number(productId) * 315,
      monthly: Number(productId) * 1200,
      total: Number(productId) * 3500
    },
    sales: {
      today: Number(productId) * 5,
      yesterday: Number(productId) * 4,
      day3: Number(productId) * 6,
      day4: Number(productId) * 4,
      day5: Number(productId) * 7,
      day6: Number(productId) * 3,
      day7: Number(productId) * 3,
      weekly: Number(productId) * 32,
      monthly: Number(productId) * 120,
      total: Number(productId) * 350
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
        <h1 className="text-3xl font-bold">Product Details</h1>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Product Images</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="relative aspect-square rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                <div className="w-full h-full flex items-center justify-center">
                  <ShoppingBag className="h-24 w-24 text-slate-400" />
                </div>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="absolute left-2 top-1/2 transform -translate-y-1/2"
                  onClick={() => setActiveImage(prev => (prev > 0 ? prev - 1 : productData.images.length - 1))}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="absolute right-2 top-1/2 transform -translate-y-1/2"
                  onClick={() => setActiveImage(prev => (prev < productData.images.length - 1 ? prev + 1 : 0))}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="flex justify-center gap-2">
                {productData.images.map((image, index) => (
                  <button 
                    key={image.id} 
                    className={`w-2 h-2 rounded-full transition-all ${index === activeImage ? 'bg-primary w-4' : 'bg-muted'}`}
                    onClick={() => setActiveImage(index)}
                  />
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>{productData.title}</CardTitle>
            <CardDescription>
              From <Link to={`/sales-tracker/store/${Math.floor(Number(productId) / 2) + 1}`} className="underline">{productData.store.name}</Link>
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">Description</h3>
              <p className="text-muted-foreground">{productData.description}</p>
            </div>
            
            <div>
              <h3 className="font-medium mb-2">Price</h3>
              <p className="text-2xl font-semibold">${productData.price.toFixed(2)}</p>
            </div>
            
            <div className="flex flex-wrap gap-3 pt-4">
              <Button className="flex gap-2">
                <ExternalLink className="h-4 w-4" />
                View on Shopify
              </Button>
              <Button variant="outline" className="flex gap-2">
                <ExternalLink className="h-4 w-4" />
                Search on AliExpress
              </Button>
              <Button variant="outline" className="flex gap-2">
                <Facebook className="h-4 w-4" />
                Search on Facebook
              </Button>
              <Button variant="secondary">Import Product</Button>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Revenue Analytics</CardTitle>
            <CardDescription>Performance over time</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-60 bg-muted/20 rounded-md flex items-center justify-center">
              <p className="text-muted-foreground">Revenue chart will be displayed here</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Sales Analytics</CardTitle>
            <CardDescription>Units sold over time</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-60 bg-muted/20 rounded-md flex items-center justify-center">
              <p className="text-muted-foreground">Sales chart will be displayed here</p>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Detailed Sales Metrics</CardTitle>
          <CardDescription>Day-by-day performance</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Sales</TableHead>
                  <TableHead>Revenue</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Today</TableCell>
                  <TableCell>${productData.price.toFixed(2)}</TableCell>
                  <TableCell>{productData.sales.today}</TableCell>
                  <TableCell>${productData.revenue.today}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Yesterday</TableCell>
                  <TableCell>${productData.price.toFixed(2)}</TableCell>
                  <TableCell>{productData.sales.yesterday}</TableCell>
                  <TableCell>${productData.revenue.yesterday}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Day 3</TableCell>
                  <TableCell>${productData.price.toFixed(2)}</TableCell>
                  <TableCell>{productData.sales.day3}</TableCell>
                  <TableCell>${productData.revenue.day3}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Day 4</TableCell>
                  <TableCell>${productData.price.toFixed(2)}</TableCell>
                  <TableCell>{productData.sales.day4}</TableCell>
                  <TableCell>${productData.revenue.day4}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Day 5</TableCell>
                  <TableCell>${productData.price.toFixed(2)}</TableCell>
                  <TableCell>{productData.sales.day5}</TableCell>
                  <TableCell>${productData.revenue.day5}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Day 6</TableCell>
                  <TableCell>${productData.price.toFixed(2)}</TableCell>
                  <TableCell>{productData.sales.day6}</TableCell>
                  <TableCell>${productData.revenue.day6}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Day 7</TableCell>
                  <TableCell>${productData.price.toFixed(2)}</TableCell>
                  <TableCell>{productData.sales.day7}</TableCell>
                  <TableCell>${productData.revenue.day7}</TableCell>
                </TableRow>
                <TableRow className="bg-muted/20">
                  <TableCell className="font-medium">Weekly Total</TableCell>
                  <TableCell>-</TableCell>
                  <TableCell>{productData.sales.weekly}</TableCell>
                  <TableCell>${productData.revenue.weekly}</TableCell>
                </TableRow>
                <TableRow className="bg-muted/20">
                  <TableCell className="font-medium">Monthly Total</TableCell>
                  <TableCell>-</TableCell>
                  <TableCell>{productData.sales.monthly}</TableCell>
                  <TableCell>${productData.revenue.monthly}</TableCell>
                </TableRow>
                <TableRow className="bg-muted/20">
                  <TableCell className="font-medium">All Time</TableCell>
                  <TableCell>-</TableCell>
                  <TableCell>{productData.sales.total}</TableCell>
                  <TableCell>${productData.revenue.total}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductDetails;
