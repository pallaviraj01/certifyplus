import { Suspense } from 'react'
import AlertRules from '@/components/AlertRules'
import NotificationLog from '@/components/NotificationLog'
import { Skeleton } from '@/components/ui/skeleton'

export default function AlertsPage() {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold mb-6">Alerts & Notifications</h1>
      
      <Suspense fallback={<Skeleton className="w-full h-[400px]" />}>
        <AlertRules />
      </Suspense>
      
      <Suspense fallback={<Skeleton className="w-full h-[400px]" />}>
        <NotificationLog />
      </Suspense>
    </div>
  )
}