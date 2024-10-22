'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from '@/components/ui/navigation-menu'
import { ModeToggle } from '@/components/mode-toggle'
import { GanttChart, FileText, Search, Users, HelpCircle, BookOpen } from 'lucide-react'

const navigation = [
  { 
    name: 'Services', 
    items: [
      { name: 'Apply for Certificate', href: '/apply', description: 'Submit applications for various certificates', icon: FileText },
      { name: 'Track Status', href: '/track', description: 'Check your application status', icon: Search },
      { name: 'Resource Management', href: '/resources', description: 'View and manage resources', icon: Users },
    ]
  },
  {
    name: 'Help & Support',
    items: [
      { name: 'User Guide', href: '/guide', description: 'Learn how to use our services', icon: BookOpen },
      { name: 'Support', href: '/support', description: 'Get help with your applications', icon: HelpCircle },
      { name: 'FAQ', href: '/faq', description: 'Frequently asked questions', icon: HelpCircle },
    ]
  },
]

export default function Header() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <GanttChart className="h-6 w-6" />
          <span className="hidden font-bold sm:inline-block">CertifyPlus</span>
        </Link>

        {/* Mobile Menu Toggle Button */}
        <div className="relative md:hidden">
          <Button onClick={() => setMenuOpen(!menuOpen)}>
            Menu
          </Button>
        </div>

        {/* Desktop Navigation Menu */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={cn(
                  "px-4 py-2 hover:text-primary",
                  pathname === "/" && "text-primary"
                )}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            {navigation.map((category) => (
              <NavigationMenuItem key={category.name}>
                <NavigationMenuTrigger>{category.name}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {category.items.map((item) => (
                      <li key={item.href}>
                        <Link href={item.href} legacyBehavior passHref>
                          <NavigationMenuLink className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                            pathname === item.href && "bg-accent"
                          )}>
                            <div className="flex items-center gap-2">
                              <item.icon className="h-4 w-4" />
                              <div className="text-sm font-medium leading-none">{item.name}</div>
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {item.description}
                            </p>
                          </NavigationMenuLink>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Navigation Menu */}
        {menuOpen && (
          <div className={`absolute top-16 left-0 w-full bg-background md:hidden`}>
            <NavigationMenu>
              <NavigationMenuList>
                {navigation.map((category) => (
                  <NavigationMenuItem key={category.name}>
                    <NavigationMenuTrigger>{category.name}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-full gap-3 p-4">
                        {category.items.map((item) => (
                          <li key={item.href}>
                            <Link href={item.href} legacyBehavior passHref>
                              <NavigationMenuLink onClick={() => setMenuOpen(false)} className={cn(
                                "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                                pathname === item.href && "bg-accent"
                              )}>
                                <div className="flex items-center gap-2">
                                  <item.icon className="h-4 w-4" />
                                  <div className="text-sm font-medium leading-none">{item.name}</div>
                                </div>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                  {item.description}
                                </p>
                              </NavigationMenuLink>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        )}

        {/* Auth and Mode Toggle Buttons */}
        {/* Show these only if the mobile menu is not open */}
        {!menuOpen && (
          <div className="ml-auto flex items-center space-x-4">
            <Button variant="outline" asChild>
              <Link href="/signin">Login</Link>
            </Button>
            <ModeToggle />
          </div>
        )}
      </div>
    </header>
  )
}
