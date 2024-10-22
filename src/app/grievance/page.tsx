"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function GrievancePage() {
  const [grievanceType, setGrievanceType] = useState("")

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Grievance Redressal</h1>
      <Card>
        <CardHeader>
          <CardTitle>Submit a Grievance</CardTitle>
          <CardDescription>Please provide details about your grievance. We will address it as soon as possible.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="grievanceType">Grievance Type</Label>
            <Select value={grievanceType} onValueChange={setGrievanceType}>
              <SelectTrigger id="grievanceType">
                <SelectValue placeholder="Select grievance type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="service">Service Related</SelectItem>
                <SelectItem value="certificate">Certificate Issue</SelectItem>
                <SelectItem value="portal">Portal Functionality</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Input id="subject" placeholder="Brief subject of your grievance" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" placeholder="Provide a detailed description of your grievance" />
          </div>
          <div className="space-y-2">
            
            <Label htmlFor="name">Your Name</Label>
            <Input id="name" placeholder="Enter your full name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Enter your email address" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" type="tel" placeholder="Enter your phone number" />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Submit Grievance</Button>
        </CardFooter>
      </Card>
    </div>
  )
}