"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FileText, Download, Search } from "lucide-react"
import { useState } from "react"

const documents = [
  {
    category: "Application Guidelines",
    items: [
      {
        title: "Complete Application Guide",
        description: "Step-by-step guide for applying various certificates",
        size: "2.5 MB",
        format: "PDF",
      },
      {
        title: "Document Checklist",
        description: "List of required documents for each certificate type",
        size: "1.2 MB",
        format: "PDF",
      },
    ],
  },
  {
    category: "Forms & Templates",
    items: [
      {
        title: "Affidavit Template",
        description: "Standard affidavit format for certificate applications",
        size: "500 KB",
        format: "DOC",
      },
      {
        title: "Supporting Documents Format",
        description: "Acceptable formats and specifications for documents",
        size: "800 KB",
        format: "PDF",
      },
    ],
  },
  {
    category: "Policies & Procedures",
    items: [
      {
        title: "Certificate Issuance Policy",
        description: "Official policy document for certificate issuance",
        size: "1.8 MB",
        format: "PDF",
      },
      {
        title: "Verification Process",
        description: "Document verification and processing guidelines",
        size: "1.5 MB",
        format: "PDF",
      },
    ],
  },
]

export default function DocumentsPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredDocuments = documents.map(category => ({
    ...category,
    items: category.items.filter(
      item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter(category => category.items.length > 0)

  return (
    <div className="container py-10">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Help Documents</h1>
          <p className="text-muted-foreground mt-2">
            Download official guides, templates, and policy documents
          </p>
        </div>

        <div className="mb-8 flex items-center gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search documents..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <div className="space-y-6">
          {filteredDocuments.map((category) => (
            <Card key={category.category}>
              <CardHeader>
                <CardTitle>{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  {category.items.map((item, index) => (
                    <Card key={index}>
                      <CardHeader className="pb-2">
                        <div className="flex items-start justify-between">
                          <div className="space-y-1">
                            <CardTitle className="text-base">
                              <div className="flex items-center gap-2">
                                <FileText className="h-4 w-4" />
                                {item.title}
                              </div>
                            </CardTitle>
                            <CardDescription>{item.description}</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <div className="text-sm text-muted-foreground">
                            {item.size} • {item.format}
                          </div>
                          <Button variant="outline" size="sm">
                            <Download className="mr-2 h-4 w-4" />
                            Download
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}