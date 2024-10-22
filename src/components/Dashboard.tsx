import { Suspense } from 'react'
import DashboardOverview from '@/components/DashboardOverview'
import ResourceAllocation from '@/components/ResourceAllocation'
import DistrictBreakdown from '@/components/DistrictBreakdown'
import AlertsNotifications from '@/components/AlertNotification'
import FilterSearch from '@/components/FilterSearch'
import AdminControls from '@/components/AdminControls'
import { Skeleton } from '@/components/ui/skeleton'

export default function DashboardPage() {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold mb-6">Certificate Issuance Monitoring Dashboard</h1>
      
      <Suspense fallback={<Skeleton className="w-full h-[200px]" />}>
        <DashboardOverview />
      </Suspense>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Suspense fallback={<Skeleton className="w-full h-[300px]" />}>
          <ResourceAllocation />
        </Suspense>
        <Suspense fallback={<Skeleton className="w-full h-[300px]" />}>
          <DistrictBreakdown />
        </Suspense>
      </div>
      
      <AlertsNotifications />
      
      <FilterSearch />
      
      <Suspense fallback={<Skeleton className="w-full h-[400px]" />}>
        <AdminControls />
      </Suspense>
    </div>
  )
}