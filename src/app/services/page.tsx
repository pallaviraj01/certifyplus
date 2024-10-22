import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const services = [
  {
    title: "Caste Certificate",
    description: "Apply for a caste certificate to avail various government benefits and schemes.",
    link: "/apply/caste-certificate",
  },
  {
    title: "Income Certificate",
    description: "Get an income certificate for proof of annual income for various purposes.",
    link: "/apply/income-certificate",
  },
  {
    title: "Domicile Certificate",
    description: "Apply for a domicile certificate to prove your residency status.",
    link: "/apply/domicile-certificate",
  },
  {
    title: "Birth Certificate",
    description: "Obtain a birth certificate for official records and identification.",
    link: "/apply/birth-certificate",
  },
  {
    title: "Death Certificate",
    description: "Apply for a death certificate for legal and administrative purposes.",
    link: "/apply/death-certificate",
  },
  {
    title: "Land Records",
    description: "Access and verify land records for property-related matters.",
    link: "/services/land-records",
  },
]

export default function ServicesPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Our Services</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Card key={service.title}>
            <CardHeader>
              <CardTitle>{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{service.description}</p>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href={service.link}>Apply Now</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}