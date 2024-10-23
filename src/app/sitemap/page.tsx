"use client"

import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const sitemapStructure = [
  {
    title: 'Main Pages',
    items: [
      { title: 'Home', href: '/' },
      { title: 'About', href: '/about' },
      { title: 'Services', href: '/services' },
      { title: 'Contact', href: '/contact' },
    ]
  },
  {
    title: 'Certificate Services',
    items: [
      { title: 'Apply for Certificate', href: '/apply' },
      { title: 'Track Application', href: '/track' },
      { title: 'Download Certificate', href: '/downloads' },
      { title: 'Verify Certificate', href: '/verify' },
    ]
  },
  {
    title: 'User Resources',
    items: [
      { title: 'User Guide', href: '/guide' },
      { title: 'FAQ', href: '/faq' },
      { title: 'Support', href: '/support' },
      { title: 'Report an Issue', href: '/report-issue' },
    ]
  },
  {
    title: 'Administrative',
    items: [
      { title: 'Dashboard', href: '/dashboard' },
      { title: 'Manage Applications', href: '/manage' },
      { title: 'Reports', href: '/reports' },
      { title: 'User Management', href: '/user-management' },
    ]
  },
  {
    title: 'Legal & Policies',
    items: [
      { title: 'Privacy Policy', href: '/privacy' },
      { title: 'Terms of Service', href: '/terms' },
      { title: 'Disclaimer', href: '/disclaimer' },
      { title: 'Accessibility', href: '/accessibility' },
      { title: 'Cookie Policy', href: '/cookie-policy' },
    ]
  },
  {
    title: 'Other Pages',
    items: [
      { title: 'News & Updates', href: '/news' },
      { title: 'Alerts', href: '/alerts' },
      { title: 'Resource Allocation', href: '/resource-allocation' },
      { title: 'District Breakdown', href: '/district-breakdown' },
      { title: 'Grievance Redressal', href: '/grievance' },
    ]
  },
]

export default function SitemapPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Sitemap</h1>
      <Card>
        <CardHeader>
          <CardTitle>Sitemap</CardTitle>
          <CardDescription>Navigate our website easily with this sitemap</CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {sitemapStructure.map((section, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger>{section.title}</AccordionTrigger>
                <AccordionContent>
                  <ul className="grid gap-2 sm:grid-cols-2 md:grid-cols-3">
                    {section.items.map((link) => (
                      <li key={link.href}>
                        <Link href={link.href} className="text-blue-600 hover:underline">
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  )
}
