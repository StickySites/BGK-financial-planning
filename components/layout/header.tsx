import Image from "next/image";
import Link from "next/link";
import { MobileNav } from "@/components/layout/mobile-nav";
import { NavLinks } from "@/components/layout/nav-links";
import { Container } from "@/components/ui/container";
import { getServices } from "@/lib/content";
import { bgkBrandImage } from "@/lib/service-media";

export async function Header() {
  const services = await getServices();

  return (
    <header className="sticky top-0 z-30 border-b border-slate-100 bg-white/95 shadow-sm backdrop-blur">
      <Container>
        <nav aria-label="Main navigation" className="flex min-h-[68px] w-full items-center justify-between gap-3 py-2 sm:min-h-[78px] sm:gap-4 md:min-h-[82px] md:py-3">
          <div className="flex min-w-0 items-center gap-2 sm:gap-3">
            <Link href="/" className="flex shrink-0 items-center" aria-label="BGK Financial Planning home">
              <Image
                src={bgkBrandImage}
                alt="BGK Financial Planning"
                width={1134}
                height={803}
                className="h-11 w-auto shrink-0 sm:h-14 md:h-16"
                priority
              />
            </Link>
          </div>

          <NavLinks services={services.map((service) => ({ title: service.title, slug: service.slug }))} />

          <MobileNav services={services.map((service) => ({ title: service.title, slug: service.slug }))} />
        </nav>
      </Container>
    </header>
  );
}
