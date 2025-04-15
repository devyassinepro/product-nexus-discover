
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { PlusCircle, MessageSquare } from "lucide-react";

const SupportTickets = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Support Tickets</h1>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <PlusCircle className="h-4 w-4 mr-2" />
              Open New Ticket
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[525px]">
            <DialogHeader>
              <DialogTitle>Open Support Ticket</DialogTitle>
              <DialogDescription>
                Describe your issue and our support team will assist you as soon as possible.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <label htmlFor="title" className="text-sm font-medium leading-none">Title</label>
                <Input id="title" placeholder="Brief description of your issue" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <label htmlFor="category" className="text-sm font-medium leading-none">Category</label>
                  <Select>
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="account">Account</SelectItem>
                      <SelectItem value="billing">Billing</SelectItem>
                      <SelectItem value="technical">Technical Issue</SelectItem>
                      <SelectItem value="feature">Feature Request</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <label htmlFor="priority" className="text-sm font-medium leading-none">Priority</label>
                  <Select>
                    <SelectTrigger id="priority">
                      <SelectValue placeholder="Select priority" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid gap-2">
                <label htmlFor="message" className="text-sm font-medium leading-none">Message</label>
                <Textarea
                  id="message"
                  placeholder="Please provide details about your issue..."
                  rows={5}
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setDialogOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" onClick={() => setDialogOpen(false)}>
                Open Ticket
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Open Tickets</CardTitle>
          <CardDescription>View and manage your current support tickets</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Created</TableHead>
                  <TableHead>Last Update</TableHead>
                  <TableHead className="w-[100px]">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Array.from({ length: 3 }).map((_, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">TKT-{1000 + index}</TableCell>
                    <TableCell>
                      {["Issue with product import", "Billing question", "Feature suggestion"][index]}
                    </TableCell>
                    <TableCell>
                      {["Technical", "Billing", "Feature"][index]}
                    </TableCell>
                    <TableCell>
                      <div className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold
                        ${index === 0 ? "bg-yellow-50 border-yellow-200 text-yellow-800 dark:bg-yellow-900/30 dark:border-yellow-900 dark:text-yellow-500" : 
                          index === 1 ? "bg-green-50 border-green-200 text-green-700 dark:bg-green-900/30 dark:border-green-900 dark:text-green-400" :
                          "bg-blue-50 border-blue-200 text-blue-700 dark:bg-blue-900/30 dark:border-blue-900 dark:text-blue-400"}`
                      }>
                        {["In Progress", "Completed", "New"][index]}
                      </div>
                    </TableCell>
                    <TableCell>April {10 + index}, 2023</TableCell>
                    <TableCell>April {12 + index}, 2023</TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Resolved Tickets</CardTitle>
          <CardDescription>View your previously resolved support tickets</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Resolved</TableHead>
                  <TableHead className="w-[100px]">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Array.from({ length: 2 }).map((_, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">TKT-{900 + index}</TableCell>
                    <TableCell>
                      {["Login issue", "API connection problem"][index]}
                    </TableCell>
                    <TableCell>
                      {["Account", "Technical"][index]}
                    </TableCell>
                    <TableCell>April {1 + index}, 2023</TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        View
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

export default SupportTickets;
