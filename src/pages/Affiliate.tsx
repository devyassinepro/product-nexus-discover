
import { AffiliateLinkSection } from "@/components/affiliate/affiliate-link-section";
import { AffiliateStats } from "@/components/affiliate/affiliate-stats";
import { EarningsCalculator } from "@/components/affiliate/earnings-calculator";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowRight } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Link } from "react-router-dom";

const Affiliate = () => {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-8 space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Affiliate Dashboard</h1>
          <p className="text-muted-foreground">Manage your affiliate program and track your earnings</p>
        </div>
        
        <AffiliateLinkSection />
        
        <AffiliateStats />
        
        <Card>
          <CardHeader>
            <CardTitle>How Our Affiliate Program Works</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Earn 30% commission on every customer you refer who subscribes to our service.
              Our affiliate program is designed to reward you for sharing our product with your audience.
            </p>
            
            <div className="bg-primary/10 rounded-lg p-4">
              <h3 className="font-medium mb-2">Key Benefits:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Lifetime 30% recurring commission</li>
                <li>Monthly payouts via PayPal or Stripe</li>
                <li>Real-time tracking dashboard</li>
                <li>Marketing materials and support</li>
              </ul>
            </div>
            
            <Button variant="outline" size="sm" className="mt-2">
              Learn more about our affiliate program
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
        
        <EarningsCalculator />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Trial Users</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>User</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>user1@example.com</TableCell>
                    <TableCell>May 1, 2023</TableCell>
                    <TableCell>Active Trial</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>user2@example.com</TableCell>
                    <TableCell>May 5, 2023</TableCell>
                    <TableCell>Active Trial</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <Link to="/affiliate/trial-users">
                <Button variant="link" size="sm" className="mt-4">
                  View all trial users
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Payouts</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>April 30, 2023</TableCell>
                    <TableCell>€120.00</TableCell>
                    <TableCell>Paid</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>March 31, 2023</TableCell>
                    <TableCell>€98.50</TableCell>
                    <TableCell>Paid</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <Link to="/affiliate/payouts">
                <Button variant="link" size="sm" className="mt-4">
                  View all payouts
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Affiliate;
