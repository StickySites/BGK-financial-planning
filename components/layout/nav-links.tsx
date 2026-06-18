"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

type ServiceLink = {
  title: string;
  slug: string;
};

export function NavLinks({ services }: { services: ServiceLink[] }) {
  const pathname = usePathname();
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname === href);
  const servicesActive = pathname.startsWith("/services");

  const linkClass = (active: boolean) =>
    `transition-colors hover:text-[#00509E] ${active ? "text-[#00509E] font-semibold underline underline-offset-4" : ""}`;

  return (
    <ul className="hidden items-center gap-6 text-sm font-medium text-primary md:flex">
      <li>
        <Link href="/" className={linkClass(isActive("/"))}>
          Home
        </Link>
      </li>
      <li className="group relative">
        <div className="inline-flex items-center gap-1">
          <Link href="/services" className={linkClass(servicesActive)}>
            Services
          </Link>
          <ChevronDown className="h-3.5 w-3.5" />
        </div>
        <div className="absolute left-0 top-full z-40 hidden pt-2 group-hover:block group-focus-within:block">
          <div className="min-w-[250px] rounded-xl border border-slate-200 bg-white p-2 shadow-soft">
            {services.map((service) => (
              <Link
                key={service.slug}
                className={`block rounded-md px-3 py-2 text-sm transition-colors hover:bg-muted ${
                  pathname === `/services/${service.slug}` ? "bg-muted font-semibold text-[#00509E]" : ""
                }`}
                href={`/services/${service.slug}`}
              >
                {service.title}
              </Link>
            ))}
          </div>
        </div>
      </li>
      <li>
        <Link href="/about" className={linkClass(isActive("/about"))}>
          About
        </Link>
      </li>
      <li>
        <Link href="/resources" className={linkClass(isActive("/resources"))}>
          Resources
        </Link>
      </li>
      <li>
        <Button asChild size="sm" className="h-10 rounded-lg px-5">
          <Link href="/contact">Contact</Link>
        </Button>
      </li>
    </ul>
  );
}
