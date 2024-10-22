import { Suspense } from 'react'
import DistrictTable from '@/components/DistrictTable'
import { Skeleton } from '@/components/ui/skeleton'

export default function DistrictBreakdownPage() {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold mb-6">District/Subdivision Breakdown</h1>
      
      <Suspense fallback={<Skeleton className="w-full h-[600px]" />}>
        <DistrictTable />
      </Suspense>
    </div>
  )
}