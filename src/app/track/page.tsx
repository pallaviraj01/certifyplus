"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ApplicationStatus } from "@/components/applications/status"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Search } from "lucide-react"

// Define the types for application data
interface TimelineItem {
  status: string
  date: string | null
  completed: boolean
}

interface ApplicationData {
  id: string
  status: string
  type: string
  applicant: string
  submittedAt: string
  currentStage: string
  timeline: TimelineItem[]
}

export default function TrackPage() {
  const [applicationId, setApplicationId] = useState<string>("")
  const [isSearching, setIsSearching] = useState<boolean>(false)
  const [applicationData, setApplicationData] = useState<ApplicationData | null>(null)

  const handleSearch = async () => {
    setIsSearching(true)
    // Simulated API call
    setTimeout(() => {
      setApplicationData({
        id: applicationId,
        status: "in-progress",
        type: "Caste Certificate",
        applicant: "John Doe",
        submittedAt: "2024-03-20",
        currentStage: "Document Verification",
        timeline: [
          { status: "Submitted", date: "2024-03-20", completed: true },
          { status: "Document Verification", date: "2024-03-21", completed: true },
          { status: "Officer Review", date: "2024-03-22", completed: false },
          { status: "Final Approval", date: null, completed: false },
        ],
      })
      setIsSearching(false)
    }, 1000)
  }

  return (
    <div className="container py-10">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Track Application</h1>
          <p className="text-muted-foreground mt-2">
            Enter your application ID to track the status of your certificate application.
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Search Application</CardTitle>
            <CardDescription>
              Enter the application ID that was provided when you submitted your application.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <Input
                placeholder="Enter Application ID"
                value={applicationId}
                onChange={(e) => setApplicationId(e.target.value)}
              />
              <Button onClick={handleSearch} disabled={!applicationId || isSearching}>
                <Search className="mr-2 h-4 w-4" />
                Track
              </Button>
            </div>
          </CardContent>
        </Card>

        {applicationData && <ApplicationStatus application={applicationData} />}
      </div>
    </div>
  )
}
