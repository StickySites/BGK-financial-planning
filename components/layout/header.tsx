import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { MobileNav } from "@/components/layout/mobile-nav";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Separator } from "@/components/ui/separator";
import { getServices } from "@/lib/content";

export async function Header() {
  const services = await getServices();

  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/90 backdrop-blur">
      <Container>
        <nav aria-label="Main navigation" className="flex min-h-[82px] items-center justify-between gap-4 py-3">
          <div className="flex items-center gap-3">
            <Link href="/" className="font-heading text-base font-semibold text-primary md:text-lg">
              BGK Financial Planning
            </Link>
            <Badge variant="accent" className="hidden md:inline-flex">UK Advice</Badge>
          </div>

          <ul className="hidden items-center gap-5 text-sm font-medium text-primary md:flex">
            <li><Link href="/" className="hover:text-[#00509E]">Home</Link></li>
            <li className="relative group">
              <button className="inline-flex items-center gap-1 hover:text-[#00509E]">
                Services <ChevronDown className="h-3.5 w-3.5" />
              </button>
              <div className="invisible absolute left-0 top-full mt-3 min-w-[250px] rounded-lg border border-border bg-card p-2 opacity-0 shadow-soft transition-all group-hover:visible group-hover:opacity-100">
                <Link className="block rounded-md px-3 py-2 text-sm hover:bg-muted" href="/services">All Services</Link>
                <Separator className="my-2" />
                {services.map((service) => (
                  <Link key={service.slug} className="block rounded-md px-3 py-2 text-sm hover:bg-muted" href={`/services/${service.slug}`}>
                    {service.title}
                  </Link>
                ))}
              </div>
            </li>
            <li><Link href="/about" className="hover:text-[#00509E]">About</Link></li>
            <li><Link href="/resources" className="hover:text-[#00509E]">Resources</Link></li>
            <li>
              <Button asChild size="sm" className="h-9 px-4">
                <Link href="/contact">Contact</Link>
              </Button>
            </li>
          </ul>

          <MobileNav services={services.map((service) => ({ title: service.title, slug: service.slug }))} />
        </nav>
      </Container>
    </header>
  );
}
