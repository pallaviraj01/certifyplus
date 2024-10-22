"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { name: "Patna", applications: 400 },
  { name: "Gaya", applications: 300 },
  { name: "Muzaffarpur", applications: 200 },
  { name: "Bhagalpur", applications: 278 },
  { name: "Darbhanga", applications: 189 },
]

export function DistrictStats() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>District Statistics</CardTitle>
        <CardDescription>Applications by district</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="applications" fill="hsl(var(--primary))" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}