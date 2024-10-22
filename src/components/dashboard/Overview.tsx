"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { name: "Jan", applications: 400 },
  { name: "Feb", applications: 300 },
  { name: "Mar", applications: 600 },
  { name: "Apr", applications: 800 },
  { name: "May", applications: 500 },
  { name: "Jun", applications: 700 },
]

export function Overview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Application Overview</CardTitle>
        <CardDescription>Number of applications over time</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="applications" stroke="hsl(var(--primary))" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}