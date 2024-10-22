'use client'

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { useEffect, useState } from 'react'

type DistrictData = {
  name: string
  applications: number
  status: 'In Progress' | 'Completed' | 'Backlog'
}

export default function DistrictBreakdown() {
  const [districts, setDistricts] = useState<DistrictData[]>([])

  useEffect(() => {
    // Simulating real-time data fetching
    const fetchData = () => {
      const statuses: ('In Progress' | 'Completed' | 'Backlog')[] = ['In Progress', 'Completed', 'Backlog']
      const newData: DistrictData[] = [
        'District A', 'District B', 'District C', 'District D', 'District E'
      ].map(name => ({
        name,
        applications: Math.floor(Math.random() * 1000),
        status: statuses[Math.floor(Math.random() * statuses.length)]
      }))
      setDistricts(newData)
    }

    fetchData()
    const interval = setInterval(fetchData, 5000) // Update every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>District</TableHead>
          <TableHead>Applications</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {districts.map((district, index) => (
          <TableRow key={index}>
            <TableCell>{district.name}</TableCell>
            <TableCell>{district.applications}</TableCell>
            <TableCell>{district.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}