"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Plus, Minus } from "lucide-react"
import { useState } from "react"

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
              <TableHead>District</TableHead>
              <TableHead>Officers</TableHead>
              <TableHead>Clerks</TableHead>
              <TableHead>Workload</TableHead>
              <TableHead>Efficiency</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {resources.map((resource) => (
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