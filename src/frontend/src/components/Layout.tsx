import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link, Outlet, useRouterState } from "@tanstack/react-router";
import { Mail, Menu, Phone } from "lucide-react";
import { useState } from "react";

export default function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/sessions", label: "Sessions & Prices" },
    { href: "/booking", label: "Book Now" },
    { href: "/instructors", label: "Instructors" },
    { href: "/mission", label: "Our Mission" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => currentPath === path;

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/assets/generated/driving-school-logo-transparent.dim_200x200.png"
              alt="J Atwal Driving School Logo"
              className="h-10 w-10"
            />
            <span className="text-xl font-bold text-primary">
              J Atwal Driving School
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-1">
            {navLinks.map((link) => (
              <Link key={link.href} to={link.href}>
                <Button
                  variant={isActive(link.href) ? "default" : "ghost"}
                  className="text-sm font-medium"
                >
                  {link.label}
                </Button>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Button
                      variant={isActive(link.href) ? "default" : "ghost"}
                      className="w-full justify-start text-base"
                    >
                      {link.label}
                    </Button>
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/50">
        <div className="container py-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* About Section */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img
                  src="/assets/generated/driving-school-logo-transparent.dim_200x200.png"
                  alt="J Atwal Driving School Logo"
                  className="h-8 w-8"
                />
                <span className="text-lg font-bold text-primary">
                  J Atwal Driving School
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Your trusted partner in learning to drive safely and
                confidently. Professional instruction, modern vehicles, and
                flexible scheduling.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="mb-4 text-sm font-semibold">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="mb-4 text-sm font-semibold">Contact Us</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start space-x-2">
                  <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>778-916-0055</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>jatwaldrivingschool@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
            <p>© 2025 J Atwal Driving School. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
