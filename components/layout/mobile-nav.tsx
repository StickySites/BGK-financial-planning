"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

type ServiceLink = {
  title: string;
  slug: string;
};

type MobileNavProps = {
  services: ServiceLink[];
};

export function MobileNav({ services }: MobileNavProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open navigation menu">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[85%] max-w-sm">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <div className="mt-4 space-y-4">
          <nav className="space-y-3 text-sm font-medium text-primary">
            <Link href="/" className="block">Home</Link>
            <Link href="/services" className="block">Services</Link>
            <div className="pl-3 text-muted-foreground">
              {services.map((service) => (
                <Link key={service.slug} href={`/services/${service.slug}`} className="block py-1">
                  {service.title}
                </Link>
              ))}
            </div>
            <Link href="/about" className="block">About</Link>
            <Link href="/resources" className="block">Resources</Link>
            <Link href="/contact" className="block">Contact</Link>
          </nav>
          <Separator />
          <p className="text-xs text-muted-foreground">BGK Financial Planning</p>
        </div>
      </SheetContent>
    </Sheet>
  );
}
