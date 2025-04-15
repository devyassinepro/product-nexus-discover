
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Download, PlusCircle, CreditCard } from "lucide-react";

const Settings = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Settings</h1>
      </div>
      
      <Tabs defaultValue="profile" className="w-full">
        <TabsList>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="api">API</TabsTrigger>
        </TabsList>
        
        <TabsContent value="profile" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>Update your personal information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <Avatar className="h-20 w-20">
                  <AvatarImage src="" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="space-y-1.5">
                  <Button variant="outline">Change Avatar</Button>
                  <p className="text-xs text-muted-foreground">
                    Recommended: Square JPG, PNG, or GIF, at least 300x300px.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input id="first-name" placeholder="First Name" defaultValue="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input id="last-name" placeholder="Last Name" defaultValue="Doe" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="Email" defaultValue="john.doe@example.com" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="company">Company Name</Label>
                <Input id="company" placeholder="Company Name" defaultValue="Acme Inc" />
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>Change your password</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-password">Current Password</Label>
                <Input id="current-password" type="password" placeholder="Current Password" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="new-password">New Password</Label>
                  <Input id="new-password" type="password" placeholder="New Password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm New Password</Label>
                  <Input id="confirm-password" type="password" placeholder="Confirm Password" />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button>Update Password</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="account" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
              <CardDescription>Manage your account preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-base font-medium">Time Zone</h3>
                  <p className="text-sm text-muted-foreground">Set your preferred time zone</p>
                </div>
                <div className="w-[200px]">
                  <select className="w-full p-2 border rounded-md bg-transparent">
                    <option value="utc">UTC (Coordinated Universal Time)</option>
                    <option value="est">EST (Eastern Standard Time)</option>
                    <option value="pst" selected>PST (Pacific Standard Time)</option>
                    <option value="gmt">GMT (Greenwich Mean Time)</option>
                  </select>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-base font-medium">Two-Factor Authentication</h3>
                  <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                </div>
                <div>
                  <Button variant="outline">Enable 2FA</Button>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-base font-medium">Dark Mode</h3>
                  <p className="text-sm text-muted-foreground">Switch between light and dark themes</p>
                </div>
                <div>
                  <Switch id="dark-mode" />
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-base font-medium">Language</h3>
                  <p className="text-sm text-muted-foreground">Select your preferred language</p>
                </div>
                <div className="w-[200px]">
                  <select className="w-full p-2 border rounded-md bg-transparent">
                    <option value="en" selected>English</option>
                    <option value="fr">French</option>
                    <option value="es">Spanish</option>
                    <option value="de">German</option>
                  </select>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button>Save Preferences</Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Danger Zone</CardTitle>
              <CardDescription>Destructive actions for your account</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center p-4 border rounded-md border-destructive/30">
                <div>
                  <h3 className="text-base font-medium">Delete Account</h3>
                  <p className="text-sm text-muted-foreground">Permanently delete your account and all data</p>
                </div>
                <div>
                  <Button variant="destructive">Delete Account</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="billing" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Subscription Overview</CardTitle>
              <CardDescription>Manage your subscription plan</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg border p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-semibold">Pro Plan</h3>
                    <p className="text-sm text-muted-foreground">$49.99 per month</p>
                    <div className="mt-2 text-sm">
                      <ul className="list-disc pl-5 space-y-1">
                        <li>500 product searches per month</li>
                        <li>50 stores tracking</li>
                        <li>Unlimited product imports</li>
                        <li>Priority support</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-green-50 border-green-200 text-green-700 dark:bg-green-900/30 dark:border-green-900 dark:text-green-400 mb-2">
                      Active
                    </div>
                    <p className="text-xs text-muted-foreground">Renews on May 15, 2023</p>
                    <Button variant="outline" size="sm" className="mt-2">Change Plan</Button>
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
            <CardContent className="space-y-4">
              <div className="rounded-lg border p-4 flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <div className="h-8 w-12 rounded bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
                    <CreditCard className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-medium">Visa ending in 4242</p>
                    <p className="text-sm text-muted-foreground">Expires 12/2025</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">Edit</Button>
                  <Button variant="outline" size="sm">Remove</Button>
                </div>
              </div>
              
              <Button variant="outline" className="w-full">
                <PlusCircle className="h-4 w-4 mr-2" />
                Add New Payment Method
              </Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Invoices</CardTitle>
              <CardDescription>View and download your invoices</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Invoice</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="w-[100px]"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {Array.from({ length: 3 }).map((_, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">INV-{2000 + index}</TableCell>
                        <TableCell>April {1 + index}, 2023</TableCell>
                        <TableCell>$49.99</TableCell>
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
        </TabsContent>
        
        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>Manage how you receive notifications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b">
                  <div>
                    <h3 className="font-medium">Email Notifications</h3>
                    <p className="text-sm text-muted-foreground">Receive notifications via email</p>
                  </div>
                  <Switch id="email-notifications" defaultChecked />
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <Label htmlFor="notify-product-updates">Product Updates</Label>
                    <Switch id="notify-product-updates" defaultChecked />
                  </div>
                  <div className="flex justify-between items-center">
                    <Label htmlFor="notify-trending">Trending Products</Label>
                    <Switch id="notify-trending" defaultChecked />
                  </div>
                  <div className="flex justify-between items-center">
                    <Label htmlFor="notify-sales">Sales Reports</Label>
                    <Switch id="notify-sales" defaultChecked />
                  </div>
                  <div className="flex justify-between items-center">
                    <Label htmlFor="notify-security">Security Alerts</Label>
                    <Switch id="notify-security" defaultChecked />
                  </div>
                  <div className="flex justify-between items-center">
                    <Label htmlFor="notify-marketing">Marketing & Promotions</Label>
                    <Switch id="notify-marketing" />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button>Save Preferences</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="api" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>API Access</CardTitle>
              <CardDescription>Manage your API keys and access</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg border p-4">
                <h3 className="font-medium mb-2">Your API Key</h3>
                <div className="flex">
                  <Input type="password" value="api_key_12345678" className="font-mono" readOnly />
                  <Button variant="outline" className="ml-2">Show</Button>
                  <Button variant="outline" className="ml-2">Copy</Button>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  This key grants full access to your account. Keep it secure!
                </p>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-medium">API Usage</h3>
                <div className="rounded-lg border p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm font-medium">This Month</p>
                      <p className="text-sm text-muted-foreground">5,230 / 10,000 requests</p>
                    </div>
                    <div className="w-32 h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: "52%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="rounded-lg border p-4">
                <h3 className="font-medium mb-2">Regenerate API Key</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Regenerating your key will invalidate your existing key immediately.
                  Make sure to update any applications using your current key.
                </p>
                <Button variant="outline">Regenerate API Key</Button>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>API Documentation</CardTitle>
              <CardDescription>Resources for developers</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg border p-4">
                <h3 className="font-medium mb-2">Documentation Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Button variant="link" className="p-0 h-auto">
                      API Reference Guide
                    </Button>
                  </li>
                  <li>
                    <Button variant="link" className="p-0 h-auto">
                      Sample Code & SDKs
                    </Button>
                  </li>
                  <li>
                    <Button variant="link" className="p-0 h-auto">
                      Integration Examples
                    </Button>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;
