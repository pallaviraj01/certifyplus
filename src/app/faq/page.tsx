"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useState } from "react"

const faqs = [
  {
    category: "Application Process",
    questions: [
      {
        q: "How do I apply for a certificate?",
        a: "You can apply for a certificate by visiting our 'Apply' page, selecting the type of certificate you need, and filling out the required information in the application form."
      },
      {
        q: "What documents do I need to submit?",
        a: "Required documents vary by certificate type. Generally, you'll need proof of identity (Aadhaar/PAN), proof of address, and relevant supporting documents specific to the certificate type."
      },
      {
        q: "How long does the process take?",
        a: "Most applications are processed within 7-10 working days, depending on the type of certificate and completeness of submitted documents."
      }
    ]
  },
  {
    category: "Tracking & Status",
    questions: [
      {
        q: "How can I track my application?",
        a: "You can track your application status using the application ID provided during submission on our 'Track Status' page."
      },
      {
        q: "What do the different status messages mean?",
        a: "Common status messages include: 'Pending' (application received), 'In Progress' (under review), 'Additional Documents Required', and 'Completed'."
      }
    ]
  },
  {
    category: "Technical Support",
    questions: [
      {
        q: "What should I do if I face technical issues?",
        a: "If you encounter technical issues, try refreshing the page or clearing your browser cache. If the problem persists, contact our support team."
      },
      {
        q: "How can I recover my application ID?",
        a: "You can recover your application ID by contacting support with your registered email address and phone number."
      }
    ]
  }
]

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredFaqs = faqs.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => 
        q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.a.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0)

  return (
    <div className="container py-10">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Frequently Asked Questions</h1>
          <p className="text-muted-foreground mt-2">
            Find answers to common questions about our certificate services
          </p>
        </div>

        <div className="mb-8">
          <Input
            placeholder="Search FAQs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="max-w-md"
          />
        </div>

        <div className="space-y-6">
          {filteredFaqs.map((category) => (
            <Card key={category.category}>
              <CardHeader>
                <CardTitle>{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger>{faq.q}</AccordionTrigger>
                      <AccordionContent>{faq.a}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}