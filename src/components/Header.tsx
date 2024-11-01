"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from '@/components/ui/navigation-menu';
import { ModeToggle } from '@/components/mode-toggle';
import {
  GanttChart,
  FileText,
  Search,
  Users,
  HelpCircle,
  BookOpen,
  Bell,
  Globe,
  Phone,
  FileCheck,
  Building2,
  ClipboardCheck,
  UserCog,
  LayoutDashboard
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import {useEffect, useRef } from 'react'; // Ensure these imports are here
import searchOptions, { SearchOption } from '@/components/SearchLogic';


const navigation = [
  {
    name: 'Certificate Services',
    items: [
      { name: 'Apply for Certificates', href: '/apply', description: 'Apply for various certificates and documents', icon: FileText },
      { name: 'Track Application', href: '/track', description: 'Track your application status', icon: Search },
      { name: 'Download Certificate', href: '/download', description: 'Download your issued certificates', icon: FileCheck },
      { name: 'Verify Certificate', href: '/verify', description: 'Verify authenticity of certificates', icon: ClipboardCheck },
    ]
  },
  {
    name: 'Department Services',
    items: [
      { name: 'District Resources', href: '/resources', description: 'View and manage district resources', icon: Building2 },
      { name: 'Officer Dashboard', href: '/officer', description: 'Officer-specific dashboard and tasks', icon: UserCog },
      { name: 'Reports & Analytics', href: '/reports', description: 'View detailed reports and statistics', icon: LayoutDashboard },
      { name: 'Resource Management', href: '/manage', description: 'Manage department resources', icon: Users },
    ]
  },
  {
    name: 'Help & Support',
    items: [
      { name: 'User Manual', href: '/guide', description: 'Detailed guide for using our services', icon: BookOpen },
      { name: 'Contact Support', href: '/support', description: '24x7 support for all services', icon: Phone },
      { name: 'FAQs', href: '/faq', description: 'Frequently asked questions', icon: HelpCircle },
    ]
  },
];


const languages = [
  { code: 'en', name: 'English' },
  { code: 'hi', name: 'हिंदी' },
  { code: 'mr', name: 'मराठी' },
  { code: 'gu', name: 'ગુજરાતી' },
];


export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currentLang, setCurrentLang] = useState('en');


  const [query, setQuery] = useState('');
  const [filteredOptions, setFilteredOptions] = useState<SearchOption[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);
  const suggestionsRef = useRef<HTMLUListElement>(null);

  //search filter logic
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    const filtered = value
      ? searchOptions.filter(option => option.name.toLowerCase().includes(value.toLowerCase()))
      : [];

    setFilteredOptions(filtered);
  };

  const handleOptionClick = (route: string) => {
    // Navigate to the search result page 
    window.location.href = route;
    setQuery(''); // Clear the input after selection
    setFilteredOptions([]); // Clear the suggestions
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current && 
        !searchRef.current.contains(event.target as Node) && 
        suggestionsRef.current && 
        !suggestionsRef.current.contains(event.target as Node)
      ) {
        setFilteredOptions([]); // Hide suggestions
        setQuery(''); // Optionally clear the search bar
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);



  return (
    <header className="w-full border-b bg-background">
      {/* Top Bar */}
      <div className="container border-b">
        <div className="flex h-10 items-center justify-between text-sm">
          <div className="flex-1 flex justify-center">
            <div className="text-center">
              <span className="text-muted-foreground">Welcome to Revenue Department Services</span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="h-8 w-8 px-0">
                  <Globe className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setCurrentLang(lang.code)}
                  >
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <ModeToggle />
          </div>
        </div>

      </div>

      {/* Main Navigation : Search bar, notification icon, menu button*/} 
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="flex items-center space-x-2">
          <GanttChart className="h-6 w-6" />
          <span className="hidden font-bold sm:inline-block">CertifyPlus</span>
        </Link>



        {/** Search */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex relative w-96" ref={searchRef}>
            <Input
              placeholder="Search services, track application..."
              className="pr-10"
              value={query} // Ensure the input value is controlled
              onChange={handleChange} // Attach the change handler
            />
            <Search className="absolute right-3 top-2.5 h-4 w-4 text-muted-foreground" />

            {filteredOptions.length > 0 && (
              <ul className=" suggestion-box bg-white border border-gray-200 shadow-lg" ref={suggestionsRef}>
                {filteredOptions.map((option) => (
                  <li key={option.name} className="hover:bg-gray-100">
                    <a 
                      onClick={() => handleOptionClick(option.route)} 
                      className="block p-2 cursor-pointer"
                    >
                      {option.name}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>


          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-600" />
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          className="md:hidden"
          variant="outline"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          Menu
        </Button>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
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
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
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
          <div className="absolute top-[6.5rem] left-0 w-full bg-background border-b md:hidden z-50">
            <div className="container py-4">
              <div className="mb-4">
                <Input
                  placeholder="Search services, track application..."
                  className="w-full"
                />
              </div>
              {navigation.map((category) => (
                <div key={category.name} className="mb-4">
                  <h3 className="font-medium mb-2">{category.name}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className={cn(
                            "flex items-center space-x-2 text-sm p-2 rounded-md hover:bg-accent",
                            pathname === item.href && "bg-accent"
                          )}
                          onClick={() => setMenuOpen(false)}
                        >
                          <item.icon className="h-4 w-4" />
                          <span>{item.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}