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
          <nav className="space-y-2 text-sm font-medium text-primary">
            <Link href="/" className="block rounded-md px-2 py-2 hover:bg-muted">Home</Link>
            <Link href="/services" className="block rounded-md px-2 py-2 hover:bg-muted">Services</Link>
            <div className="space-y-1 border-l border-border pl-4 text-muted-foreground">
              {services.map((service) => (
                <Link key={service.slug} href={`/services/${service.slug}`} className="block rounded-md px-2 py-1.5 hover:bg-muted">
                  {service.title}
                </Link>
              ))}
            </div>
            <Link href="/about" className="block rounded-md px-2 py-2 hover:bg-muted">About</Link>
            <Link href="/resources" className="block rounded-md px-2 py-2 hover:bg-muted">Resources</Link>
            <Link href="/contact" className="block rounded-md px-2 py-2 hover:bg-muted">Contact</Link>
          </nav>
          <Separator />
          <p className="text-xs text-muted-foreground">BGK Financial Planning</p>
        </div>
      </SheetContent>
    </Sheet>
  );
}
