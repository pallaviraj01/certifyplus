"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"

// Define the types for a resource request
interface ResourceRequest {
  id: string;
  district: string;
  type: string;
  quantity: number;
  status: "Pending" | "Approved" | "Rejected";
  requestedBy: string;
  date: string; // Format: YYYY-MM-DD
}

// Define the types for filter state
interface FilterState {
  id: string;
  district: string;
  type: string;
  quantity: number | null;
  status: "" | "Pending" | "Approved" | "Rejected";
  requestedBy: string;
  date: string;
}


// Sample data for resource requests
const resourceRequests: ResourceRequest[] = [
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
  // State for filters
  const [filters, setFilters] = useState<FilterState>({
    id: "",
    district: "",
    type: "",
    quantity: null,
    status: "",
    requestedBy: "",
    date: "",
  })

 // Update filter values
 const handleFilterChange = (field: keyof FilterState, value: string | number | null) => {
  setFilters((prevFilters) => ({ ...prevFilters, [field]: value }))
}

  // Filter the requests based on the filter values
  const filteredRequests = resourceRequests.filter((request) => {
    return (
      (filters.id === "" || request.id.toLowerCase().includes(filters.id.toLowerCase())) &&
      (filters.district === "" || request.district.toLowerCase().includes(filters.district.toLowerCase())) &&
      (filters.type === "" || request.type.toLowerCase().includes(filters.type.toLowerCase())) &&
      (filters.quantity === null || request.quantity >= filters.quantity) &&
      (filters.status === "" || request.status.toLowerCase() === filters.status.toLowerCase()) &&
      (filters.requestedBy === "" || request.requestedBy.toLowerCase().includes(filters.requestedBy.toLowerCase())) &&
      (filters.date === "" || request.date === filters.date)
    )
  })

  return (
    <div className="w-full max-w-screen-xl mx-auto px-4"> {/* Full width with max width constraint */}
      <Card className="w-full shadow-md"> {/* Card with full width and shadow for style */}
      <CardHeader>
        <CardTitle>Resource Requests</CardTitle>
        <CardDescription>Review and manage resource allocation requests</CardDescription>
      </CardHeader>
      <CardContent className="p-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>
                <div className="flex items-center space-x-2">
                  <span>Request ID</span>
                  <input
                    type="text"
                    placeholder="Filter by ID"
                    value={filters.id}
                    onChange={(e) => handleFilterChange("id", e.target.value)}
                    className="border rounded px-2 py-1 w-24"
                  />
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center space-x-2">
                  <span>District</span>
                  <input
                    type="text"
                    placeholder="Filter by district"
                    value={filters.district}
                    onChange={(e) => handleFilterChange("district", e.target.value)}
                    className="border rounded px-2 py-1 w-24"
                  />
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center space-x-2">
                  <span>Type</span>
                  <input
                    type="text"
                    placeholder="Filter by type"
                    value={filters.type}
                    onChange={(e) => handleFilterChange("type", e.target.value)}
                    className="border rounded px-2 py-1 w-24"
                  />
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center space-x-2">
                  <span>Quantity</span>
                  <input
                    type="number"
                    placeholder="Min"
                    value={filters.quantity || ""}
                    onChange={(e) => handleFilterChange("quantity", e.target.value ? parseInt(e.target.value) : null)}
                    className="border rounded px-2 py-1 w-16"
                  />
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center space-x-2">
                  <span>Status</span>
                  <select
                    value={filters.status}
                    onChange={(e) => handleFilterChange("status", e.target.value)}
                    className="border rounded px-2 py-1 w-24">
                    <option value="">All</option>
                    <option value="Pending">Pending</option>
                    <option value="Approved">Approved</option>
                    <option value="Rejected">Rejected</option>
                  </select>
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center space-x-2">
                  <span>Requested By</span>
                  <input
                    type="text"
                    placeholder="Filter by requester"
                    value={filters.requestedBy}
                    onChange={(e) => handleFilterChange("requestedBy", e.target.value)}
                    className="border rounded px-2 py-1 w-24"
                  />
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center space-x-2">
                  <span>Date</span>
                  <input
                    type="date"
                    value={filters.date}
                    onChange={(e) => handleFilterChange("date", e.target.value)}
                    className="border rounded px-2 py-1 w-28"
                  />
                </div>
              </TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredRequests.map((request) => (
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
    </div>
  )
}
