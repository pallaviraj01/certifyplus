import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FileQuestion, FileText, HelpCircle, Book } from 'lucide-react'

const links = [
  {
    title: 'User Guide',
    description: 'Step-by-step guide for applying certificates',
    icon: Book,
    href: '/guide',
  },
  {
    title: 'Help Documents',
    description: 'Detailed documentation and requirements',
    icon: FileText,
    href: '/documents',
  },
  {
    title: 'FAQ',
    description: 'Frequently asked questions',
    icon: FileQuestion,
    href: '/faq',
  },
  {
    title: 'Support',
    description: 'Get help with your application',
    icon: HelpCircle,
    href: '/support',
  },
]

export function ImportantLinksSection() {
  return (
    <section className="py-12">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
          Important Links
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {links.map((link) => {
            const Icon = link.icon
            return (
              <Link key={link.href} href={link.href}>
                <Card className="h-full hover:bg-muted/50 transition-colors">
                  <CardHeader>
                    <Icon className="h-8 w-8 mb-2" />
                    <CardTitle className="text-xl">{link.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {link.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}