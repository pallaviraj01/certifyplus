"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'

const utilizationData = [
  {
    name: "Patna",
    allocated: 25,
    utilized: 22,
  },
  {
    name: "Gaya",
    allocated: 20,
    utilized: 18,
  },
  {
    name: "Muzaffarpur",
    allocated: 16,
    utilized: 15,
  },
  {
    name: "Bhagalpur",
    allocated: 18,
    utilized: 14,
  },
  {
    name: "Darbhanga",
    allocated: 15,
    utilized: 12,
  },
]

export function ResourceUtilization() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Resource Utilization</CardTitle>
        <CardDescription>Compare allocated vs utilized resources by district</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={utilizationData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="allocated" name="Allocated Resources" fill="hsl(var(--primary))" />
              <Bar dataKey="utilized" name="Utilized Resources" fill="hsl(var(--secondary))" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}