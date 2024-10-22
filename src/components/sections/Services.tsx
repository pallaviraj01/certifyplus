import Link from 'next/link'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { FileText, Search, BarChart3, Users } from 'lucide-react'

const services = [
  {
    title: 'Apply for Certificates',
    description: 'Submit applications for various certificates online',
    icon: FileText,
    href: '/apply',
  },
  {
    title: 'Track Application',
    description: 'Check the status of your submitted applications',
    icon: Search,
    href: '/track',
  },
  {
    title: 'Resource Allocation',
    description: 'View and manage district-wise resource allocation',
    icon: Users,
    href: '/resources',
  },
  {
    title: 'Analytics Dashboard',
    description: 'Access real-time statistics and reports',
    icon: BarChart3,
    href: '/dashboard',
  },
]

export function ServicesSection() {
  return (
    <section className="py-12">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Link key={service.href} href={service.href}>
                <Card className="h-full hover:bg-muted/50 transition-colors">
                  <CardHeader>
                    <Icon className="h-8 w-8 mb-2" />
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}