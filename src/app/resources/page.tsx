import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ResourceAllocation } from "@/components/resources/Allocation"
import { ResourceUtilization } from "@/components/resources/Utilization"
import { ResourceRequests } from "@/components/resources/Requests"

export default function ResourcesPage() {
  return (
    <div className="container py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Resource Management</h1>
        <p className="text-muted-foreground mt-2">
          Monitor and manage resource allocation across districts
        </p>
      </div>

      <Tabs defaultValue="allocation" className="space-y-6">
        <TabsList>
          <TabsTrigger value="allocation">Resource Allocation</TabsTrigger>
          <TabsTrigger value="utilization">Resource Utilization</TabsTrigger>
          <TabsTrigger value="requests">Resource Requests</TabsTrigger>
        </TabsList>

        <TabsContent value="allocation">
          <ResourceAllocation />
        </TabsContent>

        <TabsContent value="utilization">
          <ResourceUtilization />
        </TabsContent>

        <TabsContent value="requests">
          <ResourceRequests />
        </TabsContent>
      </Tabs>
    </div>
  )
}