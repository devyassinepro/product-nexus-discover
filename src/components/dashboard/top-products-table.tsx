
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Product {
  id: string;
  image: string;
  name: string;
  store: string;
  price: string;
  sales: number;
  revenue: string;
  date: string;
}

const products: Product[] = [
  {
    id: "1",
    image: "https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?auto=format&fit=crop&q=80&w=60&h=60",
    name: "Wireless Bluetooth Earbuds",
    store: "tech-gadgets.myshopify.com",
    price: "$59.99",
    sales: 235,
    revenue: "$14,097.65",
    date: "Today"
  },
  {
    id: "2",
    image: "https://images.unsplash.com/photo-1600861194942-f883de0dfe96?auto=format&fit=crop&q=80&w=60&h=60",
    name: "Portable Phone Charger",
    store: "mobilepro.myshopify.com",
    price: "$34.99",
    sales: 187,
    revenue: "$6,543.13",
    date: "Today"
  },
  {
    id: "3",
    image: "https://images.unsplash.com/photo-1593998066526-65fcab3021a2?auto=format&fit=crop&q=80&w=60&h=60",
    name: "Fitness Tracker Watch",
    store: "health-gear.myshopify.com",
    price: "$89.95",
    sales: 162,
    revenue: "$14,571.90",
    date: "Today"
  },
  {
    id: "4",
    image: "https://images.unsplash.com/photo-1560343776-97e7d202ff0e?auto=format&fit=crop&q=80&w=60&h=60",
    name: "Smart LED Light Strip",
    store: "homedecor.myshopify.com",
    price: "$29.99",
    sales: 142,
    revenue: "$4,258.58",
    date: "Today"
  },
  {
    id: "5",
    image: "https://images.unsplash.com/photo-1603816245457-fe9c80b740ff?auto=format&fit=crop&q=80&w=60&h=60",
    name: "Collapsible Water Bottle",
    store: "eco-products.myshopify.com",
    price: "$24.95",
    sales: 139,
    revenue: "$3,468.05",
    date: "Today"
  }
];

export function TopProductsTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Top 5 Products of the Day</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Sales</TableHead>
              <TableHead>Revenue</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell className="font-medium">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded overflow-hidden mr-3 flex-shrink-0">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-medium">{product.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {product.store}
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>{product.sales}</TableCell>
                <TableCell>{product.revenue}</TableCell>
                <TableCell>{product.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
