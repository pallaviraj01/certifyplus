import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AboutUsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <Image
            src="/placeholder.svg?height=300&width=400"
            alt="Revenue Department Office"
            width={400}
            height={300}
            className="rounded-lg shadow-md"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Revenue Department</h2>
          <p className="text-gray-700 mb-4">
            The Revenue Department plays a crucial role in the administration and management of land records, 
            collection of land revenue, and issuance of various certificates to citizens. Our department is 
            committed to providing efficient, transparent, and citizen-centric services to meet the evolving 
            needs of our community.
          </p>
          <p className="text-gray-700">
            Through this online portal, we aim to streamline the process of certificate issuance and 
            verification, making it more accessible and convenient for all citizens.
          </p>
        </div>
      </div>

      <Tabs defaultValue="mission" className="mb-12">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="mission">Our Mission</TabsTrigger>
          <TabsTrigger value="vision">Our Vision</TabsTrigger>
        </TabsList>
        <TabsContent value="mission">
          <Card>
            <CardHeader>
              <CardTitle>Our Mission</CardTitle>
              <CardDescription>Empowering citizens through efficient service delivery</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Our mission is to provide timely, accurate, and transparent services to all citizens, 
                ensuring easy access to essential certificates and documents. We strive to leverage 
                technology to simplify administrative processes and enhance the overall experience of 
                interacting with the Revenue Department.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="vision">
          <Card>
            <CardHeader>
              <CardTitle>Our Vision</CardTitle>
              <CardDescription>A future of seamless, digital governance</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                We envision a future where every citizen can access government services with ease and 
                efficiency. Our goal is to create a fully digital, paperless system that not only 
                simplifies the issuance of certificates but also ensures their authenticity and security. 
                We aim to set new standards in e-governance and public service delivery.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <h2 className="text-2xl font-semibold mb-6">How Our Portal Benefits You</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            title: "Convenience",
            description: "Apply for certificates from the comfort of your home, 24/7.",
          },
          {
            title: "Transparency",
            description: "Track your application status in real-time at every stage.",
          },
          {
            title: "Efficiency",
            description: "Faster processing and issuance of certificates through digital workflows.",
          },
          {
            title: "Accessibility",
            description: "Easy access to information and services for all citizens, including those with disabilities.",
          },
          {
            title: "Reduced Paperwork",
            description: "Minimized need for physical documents, promoting a greener environment.",
          },
          {
            title: "Secure Verification",
            description: "Quick and reliable verification of certificates for various purposes.",
          },
        ].map((benefit, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{benefit.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{benefit.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}