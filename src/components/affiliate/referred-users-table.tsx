
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const referredUsers = [
  {
    id: 1,
    email: "user1@example.com",
    status: "Active",
    signupDate: "2024-04-01",
    plan: "Pro",
    revenue: "€49",
  },
  {
    id: 2,
    email: "user2@example.com",
    status: "Trial",
    signupDate: "2024-04-15",
    plan: "Basic",
    revenue: "€0",
  },
];

export function ReferredUsersTable() {
  return (
    <section className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold">Referred Users</h2>
        <p className="text-muted-foreground mt-2">Track your referrals and their status</p>
      </div>

      <div className="rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Email</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Signup Date</TableHead>
              <TableHead>Plan</TableHead>
              <TableHead className="text-right">Monthly Revenue</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {referredUsers.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <span
                    className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                      user.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {user.status}
                  </span>
                </TableCell>
                <TableCell>{user.signupDate}</TableCell>
                <TableCell>{user.plan}</TableCell>
                <TableCell className="text-right">{user.revenue}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
}
