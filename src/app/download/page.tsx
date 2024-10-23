"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Download } from 'lucide-react'

export default function DownloadPage() {
  const [certificateId, setCertificateId] = useState('')
  //eslint-disable-next-line
  const [searchResults, setSearchResults] = useState<any[]>([])

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault()
    // Simulated API call
    setSearchResults([
      { id: 'CERT001', type: 'Caste Certificate', issueDate: '2023-06-15' },
      { id: 'CERT002', type: 'Income Certificate', issueDate: '2023-05-20' },
    ])
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Download Certificates</h1>
      <Card>
        <CardHeader>
          <CardTitle>Certificate Search</CardTitle>
          <CardDescription>Enter your certificate ID to download</CardDescription>
        </CardHeader>
        <form onSubmit={handleSearch}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="certificateId">Certificate ID</Label>
              <Input
                id="certificateId"
                value={certificateId}
                onChange={(e) => setCertificateId(e.target.value)}
                placeholder="Enter Certificate ID"
                required
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full">Search</Button>
          </CardFooter>
        </form>
      </Card>

      {searchResults.length > 0 && (
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Search Results</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Certificate ID</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Issue Date</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {searchResults.map((cert) => (
                  <TableRow key={cert.id}>
                    <TableCell>{cert.id}</TableCell>
                    <TableCell>{cert.type}</TableCell>
                    <TableCell>{cert.issueDate}</TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}
    </div>
  )
}