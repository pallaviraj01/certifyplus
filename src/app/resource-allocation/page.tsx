import { Suspense } from 'react'
import ResourceOverview from '@/components/ResourceOverview'
import ResourceAllocationForm from '@/components/ResourceAllocationForm'
import { Skeleton } from '@/components/ui/skeleton'

export default function ResourceAllocationPage() {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold mb-6">Resource Allocation</h1>
      
      <Suspense fallback={<Skeleton className="w-full h-[400px]" />}>
        <ResourceOverview />
      </Suspense>
      
      <Suspense fallback={<Skeleton className="w-full h-[400px]" />}>
        <ResourceAllocationForm />
      </Suspense>
    </div>
  )
}