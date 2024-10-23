import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, ArrowRight } from 'lucide-react'

const footerLinks = {
  services: [
    { name: 'Apply for Certificate', href: '/apply' },
    { name: 'Track Application', href: '/track' },
    { name: 'Resource Management', href: '/resources' },
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Download Certificates', href: '/download' },
    { name: 'Verify Certificates', href: '/verify' },
  ],
  support: [
    { name: 'User Guide', href: '/guide' },
    { name: 'Help Documents', href: '/documents' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Support', href: '/support' },
    { name: 'Report an Issue', href: '/report-issue' },
    { name: 'Feedback', href: '/feedback' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Disclaimer', href: '/disclaimer' },
    { name: 'Accessibility', href: '/accessibility' },
    { name: 'Cookie Policy', href: '/cookie-policy' },
    { name: 'Sitemap', href: '/sitemap' },
  ],
}

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'YouTube' },
]

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold">About Us</h3>
            <p className="mt-4 text-sm text-muted-foreground">
              The Revenue Department Certificate Portal provides efficient online services
              for certificate applications and processing across Bihar. Our mission is to
              simplify administrative procedures and enhance service delivery for citizens.
            </p>
            <div className="mt-6 flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <Button key={label} variant="ghost" size="icon" asChild>
                  <Link href={href} aria-label={label}>
                    <Icon className="h-4 w-4" />
                  </Link>
                </Button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Support</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Contact</h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>support@certificateportal.gov.in</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>Toll Free: 1800-XXX-XXXX</span>
              </li>
              <li className="flex items-start space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-1" />
                <span>Revenue Department, Secretariat, Patna, Bihar - 800015</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Stay Updated</CardTitle>
              <CardDescription>Subscribe to our newsletter for the latest updates and announcements.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="flex space-x-2">
                <Input type="email" placeholder="Enter your email" className="flex-grow" />
                <Button type="submit">Subscribe</Button>
              </form>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Links</CardTitle>
              <CardDescription>Frequently accessed pages and resources</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="grid grid-cols-2 gap-2">
                <li>
                  <Link href="/apply" className="flex items-center text-sm text-muted-foreground hover:text-primary">
                    <ArrowRight className="mr-2 h-4 w-4" /> Apply for Certificate
                  </Link>
                </li>
                <li>
                  <Link href="/track" className="flex items-center text-sm text-muted-foreground hover:text-primary">
                    <ArrowRight className="mr-2 h-4 w-4" /> Track Application
                  </Link>
                </li>
                <li>
                  <Link href="/download" className="flex items-center text-sm text-muted-foreground hover:text-primary">
                    <ArrowRight className="mr-2 h-4 w-4" /> Download Certificate
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="flex items-center text-sm text-muted-foreground hover:text-primary">
                    <ArrowRight className="mr-2 h-4 w-4" /> FAQ
                  </Link>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Revenue Department, Government of Bihar. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-4">
            {footerLinks.legal.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}