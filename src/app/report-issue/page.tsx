"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { AlertCircle } from 'lucide-react'

export default function ReportIssuePage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [issueType, setIssueType] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    // Handle issue submission
    console.log('Issue reported:', { name, email, issueType, description })
    // Reset form fields
    setName('')
    setEmail('')
    setIssueType('')
    setDescription('')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Report an Issue</h1>
      <Card>
        <CardHeader>
          <CardTitle>Issue Reporting Form</CardTitle>
          <CardDescription>Please provide details about the issue you have encountered</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="issueType">Issue Type</Label>
              <Select value={issueType} onValueChange={setIssueType}>
                <SelectTrigger id="issueType">
                  <SelectValue placeholder="Select issue type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="technical">Technical Problem</SelectItem>
                  <SelectItem value="application">Application Process</SelectItem>
                  <SelectItem value="certificate">Certificate Error</SelectItem>
                  <SelectItem value="account">Account Issues</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Issue Description</Label>
              <Textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Please provide as much detail as possible about the issue"
                required
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button type="submit" className="w-full">Submit Issue Report</Button>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <AlertCircle className="h-4 w-4" />
              <p>Your report will be reviewed by our support team and we will get back to you as soon as possible.</p>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}