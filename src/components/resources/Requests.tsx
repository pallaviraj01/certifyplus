"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const resourceRequests = [
  {
    id: "REQ-001",
    district: "Patna",
    type: "Additional Officers",
    quantity: 2,
    status: "Pending",
    requestedBy: "District Magistrate",
    date: "2024-03-20",
  },
  {
    id: "REQ-002",
    district: "Gaya",
    type: "Clerks",
    quantity: 3,
    status: "Approved",
    requestedBy: "SDO",
    date: "2024-03-19",
  },
  {
    id: "REQ-003",
    district: "Muzaffarpur",
    type: "Technical Staff",
    quantity: 1,
    status: "Rejected",
    requestedBy: "District Magistrate",
    date: "2024-03-18",
  },
]

export function ResourceRequests() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Resource Requests</CardTitle>
        <CardDescription>Review and manage resource allocation requests</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Request ID</TableHead>
              <TableHead>District</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Requested By</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {resourceRequests.map((request) => (
              <TableRow key={request.id}>
                <TableCell className="font-medium">{request.id}</TableCell>
                <TableCell>{request.district}</TableCell>
                <TableCell>{request.type}</TableCell>
                <TableCell>{request.quantity}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      request.status === "Approved"
                        ? "outline"
                        : request.status === "Rejected"
                        ? "destructive"
                        : "default"
                    }
                  >
                    {request.status}
                  </Badge>
                </TableCell>
                <TableCell>{request.requestedBy}</TableCell>
                <TableCell>{request.date}</TableCell>
                <TableCell>
                  <div className="space-x-2">
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                    {request.status === "Pending" && (
                      <>
                        <Button variant="default" size="sm">
                          Approve
                        </Button>
                        <Button variant="destructive" size="sm">
                          Reject
                        </Button>
                      </>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}