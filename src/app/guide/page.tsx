"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { FileText, Search, Download, HelpCircle } from "lucide-react"
import Link from "next/link"

const guides = {
  application: [
    {
      title: "Preparing Required Documents",
      content: "Before starting your application, ensure you have the following documents ready:",
      steps: [
        "Valid ID proof (Aadhaar Card/PAN Card)",
        "Recent passport-size photograph",
        "Proof of address (Electricity Bill/Voter ID)",
        "Previous certificates (if applicable)",
      ]
    },
    {
      title: "Filling the Application Form",
      content: "Follow these steps to complete your application:",
      steps: [
        "Select the type of certificate you need",
        "Fill in your personal details accurately",
        "Upload clear scans of all required documents",
        "Review all information before submission",
      ]
    },
  ],
  tracking: [
    {
      title: "Track Your Application",
      content: "Keep track of your application status:",
      steps: [
        "Note down your application ID after submission",
        "Visit the Track Status page",
        "Enter your application ID",
        "View real-time status updates",
      ]
    },
  ],
  support: [
    {
      title: "Getting Help",
      content: "If you need assistance:",
      steps: [
        "Check our FAQ section for common questions",
        "Contact our support team via email or phone",
        "Visit your nearest Revenue office",
        "Use the online chat support during business hours",
      ]
    },
  ],
}

export default function GuidePage() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">User Guide</h1>
          <p className="text-muted-foreground mt-2">
            Learn how to use our certificate services effectively
          </p>
        </div>

        <Tabs defaultValue="application" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="application">Application Process</TabsTrigger>
            <TabsTrigger value="tracking">Tracking Applications</TabsTrigger>
            <TabsTrigger value="support">Getting Support</TabsTrigger>
          </TabsList>

          <TabsContent value="application">
            {guides.application.map((guide, index) => (
              <Card key={index} className="mb-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    {guide.title}
                  </CardTitle>
                  <CardDescription>{guide.content}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-6 space-y-2">
                    {guide.steps.map((step, stepIndex) => (
                      <li key={stepIndex}>{step}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="tracking">
            {guides.tracking.map((guide, index) => (
              <Card key={index} className="mb-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Search className="h-5 w-5" />
                    {guide.title}
                  </CardTitle>
                  <CardDescription>{guide.content}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-6 space-y-2">
                    {guide.steps.map((step, stepIndex) => (
                      <li key={stepIndex}>{step}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="support">
            {guides.support.map((guide, index) => (
              <Card key={index} className="mb-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <HelpCircle className="h-5 w-5" />
                    {guide.title}
                  </CardTitle>
                  <CardDescription>{guide.content}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-6 space-y-2">
                    {guide.steps.map((step, stepIndex) => (
                      <li key={stepIndex}>{step}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>

        <div className="mt-8 flex justify-center gap-4">
          <Button variant="outline" asChild>
            <Link href="/documents">
              <Download className="mr-2 h-4 w-4" />
              Download Complete Guide
            </Link>
          </Button>
          <Button asChild>
            <Link href="/support">
              <HelpCircle className="mr-2 h-4 w-4" />
              Get Help
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}