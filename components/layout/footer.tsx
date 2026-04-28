import Link from "next/link";
import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-[#1d4f81] bg-primary py-10 text-primary-foreground">
      <Container>
        <div className="grid gap-6 md:grid-cols-[1.5fr_1fr]">
          <div>
            <p className="mb-2 font-heading text-lg font-semibold text-white">BGK Financial Planning</p>
            <p className="max-w-2xl text-sm text-blue-100">
              Long-term financial planning support across investments, retirement, protection, and mortgage decisions.
            </p>
          </div>
          <div>
            <p className="mb-2 font-heading text-sm font-semibold uppercase tracking-wide text-white/90">Quick links</p>
            <div className="space-y-1 text-sm text-blue-100">
              <p><Link href="/services" className="hover:text-white">Services</Link></p>
              <p><Link href="/resources" className="hover:text-white">Resources</Link></p>
              <p><Link href="/contact" className="hover:text-white">Contact</Link></p>
            </div>
          </div>
        </div>
        <p className="mt-6 text-xs text-blue-100/90">© {new Date().getFullYear()} BGK Financial Planning. All rights reserved.</p>
      </Container>
    </footer>
  );
}
