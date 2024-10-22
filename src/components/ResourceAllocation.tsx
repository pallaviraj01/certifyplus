'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from 'recharts'
import { useEffect, useState } from 'react'

type ResourceData = {
  district: string
  demand: number
  allocation: number
}

export default function ResourceAllocation() {
  const [data, setData] = useState<ResourceData[]>([])

  useEffect(() => {
    const fetchData = () => {
      const newData: ResourceData[] = [
        'District A', 'District B', 'District C', 'District D', 'District E'
      ].map(district => ({
        district,
        demand: Math.floor(Math.random() * 100),
        allocation: Math.floor(Math.random() * 80)
      }))
      setData(newData)
    }

    fetchData()
    const interval = setInterval(fetchData, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Card className="w-full h-[400px]">
      <CardHeader>
        <CardTitle>Resource Allocation vs Demand</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="district" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="demand" fill="var(--chart-1)" name="Demand" />
            <Bar dataKey="allocation" fill="var(--chart-2)" name="Allocation" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}