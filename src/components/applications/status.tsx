"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Clock } from "lucide-react"

interface TimelineEvent {
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
  timeline: TimelineEvent[]
}

interface ApplicationStatusProps {
  application: ApplicationData
}

export function ApplicationStatus({ application }: ApplicationStatusProps) {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "completed":
        return "bg-green-500"
      case "in-progress":
        return "bg-blue-500"
      case "pending":
        return "bg-yellow-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Application Details</CardTitle>
              <CardDescription>Application ID: {application.id}</CardDescription>
            </div>
            <Badge variant="outline" className={getStatusColor(application.status)}>
              {application.status}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <dt className="text-sm font-medium text-muted-foreground">Certificate Type</dt>
              <dd className="text-sm font-semibold mt-1">{application.type}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-muted-foreground">Applicant Name</dt>
              <dd className="text-sm font-semibold mt-1">{application.applicant}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-muted-foreground">Submission Date</dt>
              <dd className="text-sm font-semibold mt-1">{application.submittedAt}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-muted-foreground">Current Stage</dt>
              <dd className="text-sm font-semibold mt-1">{application.currentStage}</dd>
            </div>
          </dl>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Application Timeline</CardTitle>
          <CardDescription>Track the progress of your application</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative space-y-4">
            {application.timeline.map((event, index) => (
              <div key={index} className="flex items-start">
                {event.completed ? (
                  <CheckCircle2 className="h-5 w-5 mt-0.5 text-green-500" />
                ) : (
                  <Clock className="h-5 w-5 mt-0.5 text-muted-foreground" />
                )}
                <div className="ml-4">
                  <p className="text-sm font-medium">{event.status}</p>
                  {event.date && (
                    <p className="text-sm text-muted-foreground">{event.date}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}