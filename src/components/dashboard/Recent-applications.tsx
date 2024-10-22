"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const recentApplications = [
  {
    id: "APP-2024-001",
    applicant: "John Doe",
    type: "Caste Certificate",
    district: "Patna",
    status: "In Progress",
    date: "2024-03-20",
  },
  {
    id: "APP-2024-002",
    applicant: "Jane Smith",
    type: "Income Certificate",
    district: "Gaya",
    status: "Completed",
    date: "2024-03-19",
  },
  {
    id: "APP-2024-003",
    applicant: "Robert Johnson",
    type: "Residence Certificate",
    district: "Muzaffarpur",
    status: "Pending",
    date: "2024-03-18",
  },
]

export function RecentApplications() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Applications</CardTitle>
        <CardDescription>Latest certificate applications received</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Application ID</TableHead>
              <TableHead>Applicant</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>District</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentApplications.map((application) => (
              <TableRow key={application.id}>
                <TableCell className="font-medium">{application.id}</TableCell>
                <TableCell>{application.applicant}</TableCell>
                <TableCell>{application.type}</TableCell>
                <TableCell>{application.district}</TableCell>
                <TableCell>
                  <Badge variant="outline" className="capitalize">
                    {application.status}
                  </Badge>
                </TableCell>
                <TableCell>{application.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}