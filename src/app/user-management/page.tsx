import { Suspense } from 'react'
import UserTable from '@/components/UserTable'
import { Skeleton } from '@/components/ui/skeleton'

export default function UserManagementPage() {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold mb-6">User Management</h1>
      
      <Suspense fallback={<Skeleton className="w-full h-[600px]" />}>
        <UserTable />
      </Suspense>
    </div>
  )
}