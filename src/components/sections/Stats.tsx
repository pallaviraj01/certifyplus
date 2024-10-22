"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FileCheck, FileText, Timer, Users } from 'lucide-react'

const stats = [
  {
    title: 'Total Applications',
    value: '12,345',
    description: 'Applications received',
    icon: FileText,
  },
  {
    title: 'Processed',
    value: '10,234',
    description: 'Applications completed',
    icon: FileCheck,
  },
  {
    title: 'Pending',
    value: '2,111',
    description: 'Under review',
    icon: Timer,
  },
  {
    title: 'Active Users',
    value: '5,432',
    description: 'Last 30 days',
    icon: Users,
  },
]

export function StatsSection() {
  return (
    <section className="py-12">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
          Real-Time Statistics
        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <Card key={stat.title}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    {stat.title}
                  </CardTitle>
                  <Icon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className="text-xs text-muted-foreground">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}