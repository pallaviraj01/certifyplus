import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { FileText } from 'lucide-react'

export function HeroSection() {
  return (
    <div className="relative isolate overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
          <div className="mt-24 sm:mt-32 lg:mt-16">
            <Button variant="outline" asChild>
              <Link href="/apply" className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Apply for Certificates
              </Link>
            </Button>
          </div>
          <h1 className="mt-10 text-4xl font-bold tracking-tight sm:text-6xl">
            Revenue Department Certificate Portal
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Apply for and track your certificates online. Our streamlined process
            makes it easy to submit applications and monitor their status in
            real-time.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Button size="lg" asChild>
              <Link href="/apply">Get Started</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/track">Track Application</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}