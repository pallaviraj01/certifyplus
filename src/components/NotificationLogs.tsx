'use client'

import { useState, useEffect } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'

type Notification = {
  id: string
  timestamp: string
  message: string
  status: 'Resolved' | 'Unresolved'
}

export default function NotificationLog() {
  const [notifications, setNotifications] = useState<Notification[]>([])

  useEffect(() => {
    // Simulating fetching notifications
    const fetchNotifications = () => {
      const newNotifications: Notification[] = Array.from({ length: 5 }, (_, i) => ({
        id: `notif-${i + 1}`,
        timestamp: new Date(Date.now() - Math.random() * 86400000).toISOString(),
        message: `Alert: High processing time in District ${String.fromCharCode(65 + Math.floor(Math.random() * 3))}`,
        status: Math.random() > 0.5 ? 'Resolved' : 'Unresolved',
      }))
      setNotifications(prev => [...newNotifications, ...prev].slice(0, 20))
    }

    fetchNotifications()
    const interval = setInterval(fetchNotifications, 10000)

    return () => clearInterval(interval)
  }, [])

  const handleResolve = (id: string) => {
    setNotifications(notifications.map(notif =>
      notif.id === id ? { ...notif, status: 'Resolved' } : notif
    ))
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Notification Log</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Timestamp</TableHead>
            <TableHead>Message</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {notifications.map((notif) => (
            <TableRow key={notif.id}>
              <TableCell>{new Date(notif.timestamp).toLocaleString()}</TableCell>
              <TableCell>{notif.message}</TableCell>
              <TableCell>{notif.status}</TableCell>
              <TableCell>
                {notif.status === 'Unresolved' && (
                  <Button onClick={() => handleResolve(notif.id)}>Resolve</Button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}