
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CreditCard, Download, Plus, Star } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Billing = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Billing</h1>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Current Subscription</CardTitle>
              <CardDescription>Manage your subscription plan</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg border p-4">
                <div className="flex flex-col lg:flex-row justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-semibold">Pro Plan</h3>
                      <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-green-50 border-green-200 text-green-700 dark:bg-green-900/30 dark:border-green-900 dark:text-green-400">
                        Active
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">$49.99 billed monthly</p>
                    
                    <div className="mt-4">
                      <h4 className="text-sm font-medium mb-2">Plan Features</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                        <li className="flex items-center">
                          <Star className="h-3 w-3 text-primary mr-2" />
                          500 product searches per month
                        </li>
                        <li className="flex items-center">
                          <Star className="h-3 w-3 text-primary mr-2" />
                          50 stores tracking
                        </li>
                        <li className="flex items-center">
                          <Star className="h-3 w-3 text-primary mr-2" />
                          Unlimited product imports
                        </li>
                        <li className="flex items-center">
                          <Star className="h-3 w-3 text-primary mr-2" />
                          Priority support
                        </li>
                        <li className="flex items-center">
                          <Star className="h-3 w-3 text-primary mr-2" />
                          Real-time search
                        </li>
                        <li className="flex items-center">
                          <Star className="h-3 w-3 text-primary mr-2" />
                          Trending algorithm access
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-4 lg:mt-0 lg:text-right">
                    <p className="text-sm">Next billing date: <span className="font-medium">May 15, 2023</span></p>
                    <div className="mt-4 space-y-2">
                      <Button>Change Plan</Button>
                      <Button variant="outline">Cancel Subscription</Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Payment Methods</CardTitle>
              <CardDescription>Manage your payment methods</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-8 bg-slate-200 dark:bg-slate-800 rounded flex items-center justify-center">
                        <CreditCard className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="font-medium">Visa ending in 4242</p>
                        <p className="text-sm text-muted-foreground">Expires 12/2025</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                        Default
                      </div>
                      <Button variant="ghost" size="sm">Edit</Button>
                      <Button variant="ghost" size="sm">Remove</Button>
                    </div>
                  </div>
                </div>
                
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full">
                      <Plus className="h-4 w-4 mr-2" />
                      Add New Payment Method
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Add Payment Method</DialogTitle>
                      <DialogDescription>
                        Enter your card details to add a new payment method
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="space-y-2">
                        <Label htmlFor="card-name">Cardholder Name</Label>
                        <Input id="card-name" placeholder="Name on card" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="card-number">Card Number</Label>
                        <Input id="card-number" placeholder="1234 5678 9012 3456" />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="expiry">Expiration Date</Label>
                          <Input id="expiry" placeholder="MM/YY" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cvc">CVC</Label>
                          <Input id="cvc" placeholder="123" />
                        </div>
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="submit">Add Card</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Usage Overview</CardTitle>
              <CardDescription>Current plan usage summary</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <p className="text-sm font-medium">Product Searches</p>
                    <p className="text-sm font-medium">320 / 500</p>
                  </div>
                  <div className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: "64%" }}></div>
                  </div>
                  <p className="text-xs text-muted-foreground">64% of monthly limit used</p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <p className="text-sm font-medium">Store Tracking</p>
                    <p className="text-sm font-medium">18 / 50</p>
                  </div>
                  <div className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: "36%" }}></div>
                  </div>
                  <p className="text-xs text-muted-foreground">36% of tracking limit used</p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <p className="text-sm font-medium">API Requests</p>
                    <p className="text-sm font-medium">1,240 / 5,000</p>
                  </div>
                  <div className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: "25%" }}></div>
                  </div>
                  <p className="text-xs text-muted-foreground">25% of monthly limit used</p>
                </div>
                
                <div className="pt-4 border-t">
                  <h4 className="text-sm font-medium mb-2">Upgrade Options</h4>
                  <Select defaultValue="pro">
                    <SelectTrigger>
                      <SelectValue placeholder="Select a plan" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="starter">Starter - $19.99/mo</SelectItem>
                      <SelectItem value="pro">Pro - $49.99/mo (Current)</SelectItem>
                      <SelectItem value="business">Business - $99.99/mo</SelectItem>
                      <SelectItem value="enterprise">Enterprise - Contact us</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button className="w-full mt-2">Upgrade Plan</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Billing History</CardTitle>
          <CardDescription>View and download your past invoices</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Invoice</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Payment Method</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="w-[100px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Array.from({ length: 5 }).map((_, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">INV-{2023 - index}</TableCell>
                    <TableCell>
                      {["April 1, 2023", "March 1, 2023", "February 1, 2023", "January 1, 2023", "December 1, 2022"][index]}
                    </TableCell>
                    <TableCell>$49.99</TableCell>
                    <TableCell>Visa •••• 4242</TableCell>
                    <TableCell>
                      <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-green-50 border-green-200 text-green-700 dark:bg-green-900/30 dark:border-green-900 dark:text-green-400">
                        Paid
                      </div>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        PDF
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Billing;
