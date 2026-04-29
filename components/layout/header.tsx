import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { MobileNav } from "@/components/layout/mobile-nav";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { getServices } from "@/lib/content";

export async function Header() {
  const services = await getServices();

  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/90 shadow-soft backdrop-blur">
      <Container>
        <nav aria-label="Main navigation" className="flex min-h-[78px] items-center justify-between gap-4 py-2 md:min-h-[82px] md:py-3">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2 font-heading text-base font-semibold text-primary md:text-lg">
              {/* <Image
                src="/media/bgk-logo-nobg.png"
                alt="BGK Financial Planning logo"
                width={32}
                height={32}
                className="object-contain"
              /> */}
              <span>BGK Financial Planning</span>
            </Link>
          </div>

          <ul className="hidden items-center gap-5 text-sm font-medium text-primary md:flex">
            <li><Link href="/" className="hover:text-[#00509E]">Home</Link></li>
            <li className="group relative">
              <div className="inline-flex items-center gap-1">
                <Link href="/services" className="hover:text-[#00509E]">Services</Link>
                <ChevronDown className="h-3.5 w-3.5" />
              </div>
              <div className="absolute left-0 top-full z-40 hidden pt-2 group-hover:block group-focus-within:block">
                <div className="min-w-[250px] rounded-lg border border-border bg-card p-2 shadow-soft">
                {services.map((service) => (
                  <Link key={service.slug} className="block rounded-md px-3 py-2 text-sm hover:bg-muted" href={`/services/${service.slug}`}>
                    {service.title}
                  </Link>
                ))}
                </div>
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
