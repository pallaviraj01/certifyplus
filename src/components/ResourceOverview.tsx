'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from 'recharts'
import { useEffect, useState } from 'react'

type ResourceData = {
  subdivision: string
  staff: number
  infrastructure: number
  equipment: number
}

export default function ResourceOverview() {
  const [data, setData] = useState<ResourceData[]>([])

  useEffect(() => {
    const fetchData = () => {
      const newData: ResourceData[] = [
        'North', 'South', 'East', 'West', 'Central'
      ].map(subdivision => ({
        subdivision,
        staff: Math.floor(Math.random() * 50) + 10,
        infrastructure: Math.floor(Math.random() * 30) + 5,
        equipment: Math.floor(Math.random() * 40) + 15,
      }))
      setData(newData)
    }

    fetchData()
    const interval = setInterval(fetchData, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Card className="w-full h-[500px]">
      <CardHeader>
        <CardTitle>Current Resource Allocation</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={data}>
            <XAxis dataKey="subdivision" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="staff" fill="var(--chart-1)" name="Staff" />
            <Bar dataKey="infrastructure" fill="var(--chart-2)" name="Infrastructure" />
            <Bar dataKey="equipment" fill="var(--chart-3)" name="Equipment" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}