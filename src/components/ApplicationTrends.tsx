'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from 'recharts'
import { useEffect, useState } from 'react'

type TrendData = {
  date: string
  applications: number
  processed: number
}

export default function ApplicationTrends() {
  const [data, setData] = useState<TrendData[]>([])

  useEffect(() => {
    const fetchData = () => {
      const newData: TrendData[] = Array.from({ length: 7 }, (_, i) => {
        const date = new Date()
        date.setDate(date.getDate() - i)
        return {
          date: date.toISOString().split('T')[0],
          applications: Math.floor(Math.random() * 100) + 50,
          processed: Math.floor(Math.random() * 80) + 30,
        }
      }).reverse()
      setData(newData)
    }

    fetchData()
    const interval = setInterval(fetchData, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Card className="w-full h-[400px]">
      <CardHeader>
        <CardTitle>Application Trends</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="applications" stroke="var(--chart-1)" name="Applications" />
            <Line type="monotone" dataKey="processed" stroke="var(--chart-2)" name="Processed" />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}