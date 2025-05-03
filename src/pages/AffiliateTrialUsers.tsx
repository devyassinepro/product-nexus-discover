
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
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

// Sample trial users data
const trialUsers = [
  {
    id: 1,
    email: "user1@example.com",
    date: "May 1, 2023",
    status: "Active Trial",
    signupDate: "2023-05-01",
    plan: "Pro Trial",
    daysLeft: 12
  },
  {
    id: 2,
    email: "user2@example.com",
    date: "May 5, 2023",
    status: "Active Trial",
    signupDate: "2023-05-05",
    plan: "Basic Trial",
    daysLeft: 8
  },
  {
    id: 3,
    email: "user3@example.com",
    date: "April 28, 2023",
    status: "Trial Expired",
    signupDate: "2023-04-28",
    plan: "Pro Trial",
    daysLeft: 0
  },
  {
    id: 4,
    email: "user4@example.com",
    date: "May 10, 2023",
    status: "Active Trial",
    signupDate: "2023-05-10",
    plan: "Pro Trial",
    daysLeft: 14
  },
  {
    id: 5,
    email: "user5@example.com",
    date: "May 8, 2023",
    status: "Active Trial",
    signupDate: "2023-05-08",
    plan: "Basic Trial",
    daysLeft: 10
  },
  {
    id: 6,
    email: "user6@example.com",
    date: "April 25, 2023",
    status: "Trial Expired",
    signupDate: "2023-04-25",
    plan: "Pro Trial",
    daysLeft: 0
  }
];

const AffiliateTrialUsers = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="container mx-auto px-4 py-8 space-y-6">
      <div className="flex items-center">
        <Link to="/affiliate" className="mr-4">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Affiliate Dashboard
          </Button>
        </Link>
        <h1 className="text-3xl font-bold">Trial Users</h1>
      </div>

      <p className="text-muted-foreground">
        Track all the users who signed up through your affiliate link and are currently in trial period.
      </p>

      <Card>
        <CardHeader>
          <CardTitle>All Trial Users</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Email</TableHead>
                <TableHead>Signup Date</TableHead>
                <TableHead>Plan</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Days Left</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {trialUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.date}</TableCell>
                  <TableCell>{user.plan}</TableCell>
                  <TableCell>
                    <span
                      className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                        user.status === "Active Trial"
                          ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                          : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                      }`}
                    >
                      {user.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    {user.daysLeft > 0 ? `${user.daysLeft} days` : "Expired"}
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
        </CardContent>
      </Card>
    </div>
  );
};

export default AffiliateTrialUsers;
