import { HeroSection } from '@/components/sections/Hero'
import { ServicesSection } from '@/components/sections/Services'
import { StatsSection } from '@/components/sections/Stats'
import { ImportantLinksSection } from '@/components/sections/Important-link'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { Button } from '@/components/ui/button' // Use the correct Button component
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-16">
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <ImportantLinksSection />

      {/* Latest updates */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Latest Updates</h2>
        <Card>
          <CardHeader>
            <CardTitle>News and Announcements</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>
                <Link href="/news/1" className="text-blue-600 hover:underline">
                  New online service launched for birth certificates
                </Link>
              </li>
              <li>
                <Link href="/news/2" className="text-blue-600 hover:underline">
                  Upcoming maintenance: System will be down on July 15th from 10 PM to 2 AM
                </Link>
              </li>
              <li>
                <Link href="/news/3" className="text-blue-600 hover:underline">
                  Updated document requirements for caste certificates
                </Link>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button size='lg' variant="outline">
              <Link href="/news">View All Updates</Link>
            </Button>
          </CardFooter>
        </Card>
      </section>

      {/* Quick Application Tracking */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Quick Application Tracking</h2>
        <Card>
          <CardHeader>
            <CardTitle>Track Your Application</CardTitle>
            <CardDescription>Enter your application ID to check its status</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="flex space-x-2">
              <div className="flex-grow">
                <Label htmlFor="applicationId" className="sr-only">Application ID</Label>
                <Input id="applicationId" placeholder="Enter your application ID" />
              </div>
              <Button type="submit">Track</Button>
            </form>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
