"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Plus, Minus } from "lucide-react"
import { useState } from "react"

interface Filters {
  district: string;
  officers: number | null;
  clerks: number | null;
  workload: string;
  efficiency: number | null;
}

const initialResources = [
  {
    district: "Patna",
    officers: 10,
    clerks: 15,
    workload: "High",
    efficiency: "85%",
  },
  {
    district: "Gaya",
    officers: 8,
    clerks: 12,
    workload: "Medium",
    efficiency: "78%",
  },
  {
    district: "Muzaffarpur",
    officers: 6,
    clerks: 10,
    workload: "Low",
    efficiency: "92%",
  },
]

export function ResourceAllocation() {
  const [resources, setResources] = useState(initialResources)
  
  const [filters, setFilters] = useState<Filters>({
    district: "",
    officers: null,
    clerks: null,
    workload: "",
    efficiency: null,
  });
  
  
  const adjustStaff = (district: string, type: 'officers' | 'clerks', increment: boolean) => {
    setResources(resources.map(resource => {
      if (resource.district === district) {
        return {
          ...resource,
          [type]: increment ? resource[type] + 1 : Math.max(0, resource[type] - 1)
        }
      }
      return resource
    }))
  }


  const handleFilterChange = (field: keyof Filters, value: string | number | null) => {
    setFilters(prevFilters => ({ ...prevFilters, [field]: value }));
  };
  

  const filteredResources = resources.filter(resource => {
    return (
      (filters.district === "" || resource.district.toLowerCase().includes(filters.district.toLowerCase())) &&
      (filters.officers === null || resource.officers >= filters.officers) &&
      (filters.clerks === null || resource.clerks >= filters.clerks) &&
      (filters.workload === "" || resource.workload === filters.workload) &&
      (filters.efficiency === null || parseFloat(resource.efficiency) >= filters.efficiency)
    )
  })



  return (
    <Card>
      <CardHeader>
        <CardTitle>District Resource Allocation</CardTitle>
        <CardDescription>Manage staff allocation across districts</CardDescription>
      </CardHeader>

      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              {/* Filter for District */}
              <TableHead>
                <div className="flex items-center space-x-2">
                  <span>District</span>
                  <input
                    type="text"
                    placeholder="Filter by district"
                    value={filters.district}
                    onChange={(e) => handleFilterChange("district", e.target.value)}
                    className="border rounded px-2 py-1 mt-1 w-25" // Set width to 24
                  />
                </div>
              </TableHead>

              {/* Filter for Officers */}
              <TableHead>
                <div className="flex items-center space-x-2">
                  <span>Officers</span>
                  <input
                    type="number"
                    placeholder="Min"
                    value={filters.officers || ""}
                    onChange={(e) => handleFilterChange("officers", e.target.value ? parseInt(e.target.value) : null)}
                    className="border rounded px-2 py-1 w-17" // Set width to 16
                  />
                </div>
              </TableHead>

              {/* Filter for Clerks */}
              <TableHead>
                <div className="flex items-center space-x-2">
                  <span>Clerks</span>
                  <input
                    type="number"
                    placeholder="Min"
                    value={filters.clerks || ""}
                    onChange={(e) => handleFilterChange("clerks", e.target.value ? parseInt(e.target.value) : null)}
                    className="border rounded px-2 py-1 w-17" // Set width to 16
                  />
                </div>
              </TableHead>

              {/* Filter for Workload */}
              <TableHead>
                <div className="flex items-center space-x-2">
                  <span>Workload</span>
                  <select
                    value={filters.workload}
                    onChange={(e) => handleFilterChange("workload", e.target.value)}
                    className="border rounded px-2 py-1 w-24" // Set width to 24
                  >
                    <option value="">All</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </select>
                </div>
              </TableHead>

              {/* Filter for Efficiency */}
              <TableHead>
                <div className="flex items-center space-x-2">
                  <span>Efficiency</span>
                  <input
                    type="number"
                    placeholder="%"
                    value={filters.efficiency || ""}
                    onChange={(e) => handleFilterChange("efficiency", e.target.value ? parseFloat(e.target.value) : null)}
                    className="border rounded px-2 py-1 w-16" // Set width to 16
                  />
                </div>
              </TableHead>

              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredResources.map((resource) => (
              <TableRow key={resource.district}>
                <TableCell className="font-medium">{resource.district}</TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <span>{resource.officers}</span>
                    <div className="space-x-1">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => adjustStaff(resource.district, 'officers', true)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => adjustStaff(resource.district, 'officers', false)}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <span>{resource.clerks}</span>
                    <div className="space-x-1">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => adjustStaff(resource.district, 'clerks', true)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => adjustStaff(resource.district, 'clerks', false)}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{resource.workload}</TableCell>
                <TableCell>{resource.efficiency}</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}