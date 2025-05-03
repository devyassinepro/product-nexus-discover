
import { Button } from "@/components/ui/button";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  Pagination, 
  PaginationContent, 
  PaginationEllipsis, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from "@/components/ui/pagination";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { ArrowLeft, Download } from "lucide-react";

// Sample payouts data
const payouts = [
  {
    id: 1,
    date: "April 30, 2023",
    amount: "€120.00",
    status: "Paid",
    method: "PayPal",
    reference: "PAY-2023-04-001"
  },
  {
    id: 2,
    date: "March 31, 2023",
    amount: "€98.50",
    status: "Paid",
    method: "PayPal",
    reference: "PAY-2023-03-001"
  },
  {
    id: 3,
    date: "February 28, 2023",
    amount: "€75.20",
    status: "Paid",
    method: "PayPal",
    reference: "PAY-2023-02-001"
  },
  {
    id: 4,
    date: "January 31, 2023",
    amount: "€62.80",
    status: "Paid",
    method: "Bank Transfer",
    reference: "PAY-2023-01-001"
  },
  {
    id: 5,
    date: "December 31, 2022",
    amount: "€110.40",
    status: "Paid",
    method: "PayPal",
    reference: "PAY-2022-12-001"
  },
  {
    id: 6,
    date: "May 31, 2023",
    amount: "€145.30",
    status: "Scheduled",
    method: "PayPal",
    reference: "PAY-2023-05-001"
  }
];

// Sample earnings data
const pendingEarnings = [
  {
    id: 1,
    customer: "user7@example.com",
    date: "May 15, 2023",
    amount: "€35.70",
    status: "Pending"
  },
  {
    id: 2,
    customer: "user8@example.com",
    date: "May 18, 2023",
    amount: "€49.00",
    status: "Pending"
  },
  {
    id: 3,
    customer: "user9@example.com",
    date: "May 22, 2023",
    amount: "€29.50",
    status: "Pending"
  }
];

const AffiliatePayouts = () => {
  return (
    <div className="container mx-auto px-4 py-8 space-y-6">
      <div className="flex items-center">
        <Link to="/affiliate" className="mr-4">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Affiliate Dashboard
          </Button>
        </Link>
        <h1 className="text-3xl font-bold">Payouts</h1>
      </div>

      <p className="text-muted-foreground">
        Track your commission payouts and pending earnings.
      </p>

      <div className="grid gap-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Payout Summary</CardTitle>
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Download Tax Report
            </Button>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-primary/10 rounded-lg p-4">
                <p className="text-sm font-medium text-muted-foreground">Total Paid</p>
                <p className="text-2xl font-bold">€466.90</p>
              </div>
              <div className="bg-primary/10 rounded-lg p-4">
                <p className="text-sm font-medium text-muted-foreground">Pending</p>
                <p className="text-2xl font-bold">€114.20</p>
              </div>
              <div className="bg-primary/10 rounded-lg p-4">
                <p className="text-sm font-medium text-muted-foreground">Next Payout</p>
                <p className="text-2xl font-bold">May 31, 2023</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="history">
          <TabsList>
            <TabsTrigger value="history">Payout History</TabsTrigger>
            <TabsTrigger value="pending">Pending Earnings</TabsTrigger>
          </TabsList>
          <TabsContent value="history">
            <Card>
              <CardContent className="pt-6">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Method</TableHead>
                      <TableHead>Reference</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {payouts.map((payout) => (
                      <TableRow key={payout.id}>
                        <TableCell>{payout.date}</TableCell>
                        <TableCell>{payout.amount}</TableCell>
                        <TableCell>{payout.method}</TableCell>
                        <TableCell>{payout.reference}</TableCell>
                        <TableCell>
                          <span
                            className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                              payout.status === "Paid"
                                ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                                : "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                            }`}
                          >
                            {payout.status}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>

                <div className="mt-6">
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
                        <PaginationEllipsis />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationNext href="#" />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="pending">
            <Card>
              <CardContent className="pt-6">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Customer</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {pendingEarnings.map((earning) => (
                      <TableRow key={earning.id}>
                        <TableCell>{earning.customer}</TableCell>
                        <TableCell>{earning.date}</TableCell>
                        <TableCell>{earning.amount}</TableCell>
                        <TableCell>
                          <span className="inline-flex items-center rounded-full bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400 px-2 py-1 text-xs font-medium">
                            {earning.status}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AffiliatePayouts;
