'use client'

import { useToast } from '@/hooks/use-toast'
import { useEffect } from 'react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { AlertCircle } from 'lucide-react'

export default function AlertsSection() {
  const { toast } = useToast()

  useEffect(() => {
    const checkAlerts = () => {
      if (Math.random() > 0.7) {
        toast({
          title: 'High Backlog Alert',
          description: 'Backlog in District A has crossed the threshold!',
          variant: 'destructive',
        })
      }
    }

    const interval = setInterval(checkAlerts, 10000)

    return () => clearInterval(interval)
  }, [toast])

  return (
    <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Alert</AlertTitle>
      <AlertDescription>
        High processing times detected in multiple subdivisions. Please check the Alerts & Notifications page for details.
      </AlertDescription>
    </Alert>
  )
}