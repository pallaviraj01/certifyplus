'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useEffect, useState } from 'react'

type KPI = {
  title: string
  value: number
  unit?: string
}

export default function DashboardOverview() {
  const [kpis, setKpis] = useState<KPI[]>([])

  useEffect(() => {
    const fetchKPIs = () => {
      const newKPIs: KPI[] = [
        { title: 'Total Applications', value: Math.floor(Math.random() * 10000) },
        { title: 'Applications Processed', value: Math.floor(Math.random() * 8000) },
        { title: 'Pending Applications', value: Math.floor(Math.random() * 2000) },
        { title: 'Average Processing Time', value: Math.floor(Math.random() * 10) + 2, unit: 'days' },
      ]
      setKpis(newKPIs)
    }

    fetchKPIs()
    const interval = setInterval(fetchKPIs, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {kpis.map((kpi, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{kpi.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{kpi.value}{kpi.unit}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}