"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckCircle2, XCircle } from "lucide-react"

export default function VerifyPage() {
  const [certificateId, setCertificateId] = useState("")
  const [verificationResult, setVerificationResult] = useState<"valid" | "invalid" | null>(null)

  const handleVerify = () => {
    // In a real application, this would make an API call to verify the certificate
    // For this example, we'll just simulate a response
    setVerificationResult(Math.random() > 0.5 ? "valid" : "invalid")
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Verify Certificate</h1>
      <Card>
        <CardHeader>
          <CardTitle>Certificate Verification</CardTitle>
          <CardDescription>Enter the certificate ID to verify its authenticity</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="certificateId">Certificate ID</Label>
            <Input
              id="certificateId"
              placeholder="Enter Certificate ID"
              value={certificateId}
              onChange={(e) => setCertificateId(e.target.value)}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleVerify} className="w-full">Verify Certificate</Button>
        </CardFooter>
      </Card>

      {verificationResult && (
        <Card>
          <CardHeader>
            <CardTitle>Verification Result</CardTitle>
          </CardHeader>
          <CardContent>
            
            {verificationResult === "valid" ? (
              <div className="flex items-center text-green-600">
                <CheckCircle2 className="mr-2 h-6 w-6" />
                <span>This certificate is valid and authentic.</span>
              </div>
            ) : (
              <div className="flex items-center text-red-600">
                <XCircle className="mr-2 h-6 w-6" />
                <span>This certificate is not valid or not found in our records.</span>
              </div>
            )}
          </CardContent>
          <CardFooter>
            <p className="text-sm text-muted-foreground">
              If you believe this result is incorrect, please contact the issuing authority.
            </p>
          </CardFooter>
        </Card>
      )}
    </div>
  )
}