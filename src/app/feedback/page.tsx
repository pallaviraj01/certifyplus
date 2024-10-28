"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useToast,toast } from '@/hooks/use-toast'

export default function FeedbackPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [feedback, setFeedback] = useState('')
  const { toast } = useToast()

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    if(!name || !email || !feedback){
      toast({
        title: 'All fields are required',
        type: 'background',
        duration: 3000,
      })
    }
    // Handle feedback submission
    console.log('Feedback submitted:', { name, email, feedback })
    // Reset form fields
    setName('')
    setEmail('')
    setFeedback('')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Provide Feedback</h1>
      <Card>
        <CardHeader>
          <CardTitle>Feedback</CardTitle>
          <CardDescription>We value your opinion. Let us know how we can improve our services.</CardDescription>
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
              <Label htmlFor="feedback">Feedback</Label>
              <Textarea
                id="feedback"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                required
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full">Submit Feedback</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
