
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { Bell, CreditCard, LogOut, Settings, User } from "lucide-react";

const Profile = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">My Profile</h1>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <Card className="lg:col-span-1">
          <CardContent className="p-6">
            <div className="flex flex-col items-center">
              <Avatar className="h-24 w-24">
                <AvatarImage src="" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <h2 className="mt-4 text-xl font-semibold">John Doe</h2>
              <p className="text-sm text-muted-foreground">john.doe@example.com</p>
              <p className="mt-2 text-sm">
                <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-primary text-primary-foreground">
                  Pro Plan
                </span>
              </p>
            </div>
            
            <div className="mt-6">
              <nav className="space-y-1">
                <Button variant="ghost" className="w-full justify-start">
                  <User className="h-4 w-4 mr-2" />
                  Profile
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Settings className="h-4 w-4 mr-2" />
                  Settings
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Bell className="h-4 w-4 mr-2" />
                  Notifications
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <CreditCard className="h-4 w-4 mr-2" />
                  Billing
                </Button>
                <Separator />
                <Button variant="ghost" className="w-full justify-start text-muted-foreground">
                  <LogOut className="h-4 w-4 mr-2" />
                  Log Out
                </Button>
              </nav>
            </div>
            
            <div className="mt-6 rounded-lg bg-slate-50 dark:bg-slate-800 p-3">
              <h3 className="text-sm font-medium">Account Status</h3>
              <div className="mt-2">
                <div className="flex items-center mb-1">
                  <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                  <p className="text-sm text-muted-foreground">Email verified</p>
                </div>
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-yellow-500 mr-2"></div>
                  <p className="text-sm text-muted-foreground">2FA not enabled</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="lg:col-span-3 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>Update your personal details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input id="first-name" defaultValue="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input id="last-name" defaultValue="Doe" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" defaultValue="john.doe@example.com" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="Enter your phone number" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="country">Country</Label>
                  <Input id="country" defaultValue="United States" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input id="city" defaultValue="New York" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea 
                  id="bio" 
                  placeholder="Tell us about yourself"
                  rows={4}
                  defaultValue="E-commerce entrepreneur focusing on trending products and market analysis."
                />
              </div>
            </CardContent>
            <CardFooter>
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
                <Input id="current-password" type="password" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="new-password">New Password</Label>
                  <Input id="new-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm New Password</Label>
                  <Input id="confirm-password" type="password" />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Update Password</Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Connected Accounts</CardTitle>
              <CardDescription>Manage your connected services</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "Shopify", status: "Connected", date: "Connected on April 12, 2023" },
                  { name: "Google Analytics", status: "Not Connected" },
                  { name: "Facebook Ads", status: "Connected", date: "Connected on March 28, 2023" }
                ].map((service, index) => (
                  <div key={index} className="flex justify-between items-center p-4 border rounded-lg">
                    <div>
                      <h3 className="font-medium">{service.name}</h3>
                      <p className="text-sm text-muted-foreground">{service.date}</p>
                    </div>
                    <div>
                      {service.status === "Connected" ? (
                        <div className="flex items-center gap-2">
                          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-green-50 border-green-200 text-green-700 dark:bg-green-900/30 dark:border-green-900 dark:text-green-400">
                            Connected
                          </div>
                          <Button variant="outline" size="sm">Disconnect</Button>
                        </div>
                      ) : (
                        <Button size="sm">Connect</Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;
