
import { CertificateForm } from "@/components/forms/certificate-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const certificateTypes = [
  { id: "caste", label: "Caste Certificate" },
  { id: "income", label: "Income Certificate" },
  { id: "residence", label: "Residence Certificate" },
  { id: "birth", label: "Birth Certificate" },
]

export default function ApplyPage() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Apply for Certificate</h1>
          <p className="text-muted-foreground mt-2">
            Fill out the form below to apply for your certificate. Make sure to provide accurate information.
          </p>
        </div>

        <Tabs defaultValue="caste" className="space-y-4">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
            {certificateTypes.map((type) => (
              <TabsTrigger key={type.id} value={type.id}>
                {type.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {certificateTypes.map((type) => (
            <TabsContent key={type.id} value={type.id}>
              <Card>
                <CardHeader>
                  <CardTitle>{type.label} Application</CardTitle>
                  <CardDescription>
                    Please fill in all required information for your {type.label.toLowerCase()}.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <CertificateForm key={type.id} certificateType={type.id} />
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  )
}