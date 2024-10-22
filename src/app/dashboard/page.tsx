// import { Suspense } from 'react'
// import DashboardOverview from '@/components/DashboardOverview'
// import ResourceAllocation from '@/components/ResourceAllocation'
// import ApplicationTrends from '@/components/ApplicationTrends'
// import AlertsSection from '@/components/AlertsSection'
// import FilterSearch from '@/components/FilterSearch'
// import { Skeleton } from '@/components/ui/skeleton'

// export default function DashboardPage() {
//   return (
//     <div className="container mx-auto p-6 space-y-8">
//       <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      
//       <Suspense fallback={<Skeleton className="w-full h-[200px]" />}>
//         <DashboardOverview />
//       </Suspense>
      
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <Suspense fallback={<Skeleton className="w-full h-[300px]" />}>
//           <ResourceAllocation />
//         </Suspense>
//         <Suspense fallback={<Skeleton className="w-full h-[300px]" />}>
//           <ApplicationTrends />
//         </Suspense>
//       </div>
      
//       <AlertsSection />
      
//       <FilterSearch />
//     </div>
//   )
// }

"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Overview } from "@/components/dashboard/Overview"
import { RecentApplications } from "@/components/dashboard/Recent-applications"
import { DistrictStats } from "@/components/dashboard/district-stats"

export default function DashboardPage() {
  return (
    <div className="container py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground mt-2">
          Overview of certificate applications and processing statistics
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Total Applications</CardTitle>
            <CardDescription>Last 30 days</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">12,345</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Processing Time</CardTitle>
            <CardDescription>Average time to process</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">3.2 days</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Success Rate</CardTitle>
            <CardDescription>Applications approved</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">94.2%</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 mt-6 md:grid-cols-2">
        <Overview />
        <DistrictStats />
      </div>

      <div className="mt-6">
        <RecentApplications />
      </div>
    </div>
  )
}