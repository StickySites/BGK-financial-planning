import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Separator } from "@/components/ui/separator";
import { localSiteSettings } from "@/lib/content/local/settings";

export const metadata: Metadata = {
  title: "Complaints Policy | BGK Financial Planning",
  description: "How to make a complaint about BGK Financial Planning and what to expect.",
  robots: { index: false },
};

export default function ComplaintsPolicyPage() {
  return (
    <section className="section-shell">
      <Container>
        <div className="mx-auto w-full max-w-3xl">
          <h1 className="section-title mb-2">Complaints Policy</h1>
          <p className="text-sm text-muted-foreground mb-8">Last updated: June 2025</p>

          <Card className="mb-8 border-amber-200 bg-amber-50">
            <CardContent className="pt-5">
              <p className="text-sm font-medium text-amber-900">
                We are committed to providing a high standard of service. If something has gone wrong,
                we want to know about it so we can put it right as quickly as possible.
              </p>
            </CardContent>
          </Card>

          <div className="prose prose-slate max-w-none space-y-8 text-sm leading-relaxed text-muted-foreground">

            <div>
              <h2 className="font-heading text-lg font-semibold text-primary mb-3">1. How to make a complaint</h2>
              <p>You can make a complaint in any of the following ways:</p>

              <address className="not-italic mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm space-y-1">
                <p><strong>By post:</strong></p>
                <p>Bruce Kennedy, BGK Financial Planning</p>
                <p><strong>{localSiteSettings.address}</strong></p>
                <p className="mt-2"><strong>By email:</strong> <strong>{localSiteSettings.email}</strong></p>
                <p className="mt-1"><strong>By telephone:</strong> <strong>{localSiteSettings.phone}</strong></p>
              </address>

              <p className="mt-4">
                When making a complaint, please include:
              </p>
              <ul className="mt-3 space-y-2 list-disc pl-5">
                <li>Your full name, address, and contact details.</li>
                <li>Details of the advice or service you are unhappy with.</li>
                <li>What outcome you are seeking.</li>
                <li>Copies of any relevant documents (if available).</li>
              </ul>
            </div>

            <Separator />

            <div>
              <h2 className="font-heading text-lg font-semibold text-primary mb-3">2. What happens next</h2>
              <div className="mt-3 space-y-4">
                {[
                  {
                    step: "Acknowledgement",
                    timing: "Within 3 business days",
                    detail: "We will write to you to confirm we have received your complaint and tell you who is handling it.",
                  },
                  {
                    step: "Investigation",
                    timing: "Ongoing",
                    detail: "We will investigate your complaint thoroughly and fairly. We may contact you during this process if we need further information.",
                  },
                  {
                    step: "Final response",
                    timing: "Within 8 weeks",
                    detail: "We will send you a written final response explaining our findings, any actions we are taking, and how we have reached our conclusion. If we cannot resolve your complaint within 8 weeks, we will write to explain why and advise you of your right to refer the matter to the Financial Ombudsman Service.",
                  },
                ].map(({ step, timing, detail }) => (
                  <div key={step} className="rounded-lg border border-slate-200 p-4">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                      <p className="font-semibold text-foreground">{step}</p>
                      <span className="w-fit shrink-0 rounded-full bg-primary/10 px-3 py-0.5 text-xs font-medium text-primary">
                        {timing}
                      </span>
                    </div>
                    <p className="mt-2">{detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <Separator />

            <div>
              <h2 className="font-heading text-lg font-semibold text-primary mb-3">3. The Financial Ombudsman Service (FOS)</h2>
              <p>
                If you are not satisfied with our final response, or if more than 8 weeks have passed
                since you made your complaint, you may be entitled to refer your complaint to the
                Financial Ombudsman Service (FOS), free of charge.
              </p>
              <p className="mt-3">
                The FOS is an independent body that resolves disputes between consumers and financial
                services firms. You must refer your complaint to the FOS within 6 months of receiving
                our final response letter.
              </p>
              <address className="not-italic mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm space-y-1">
                <p><strong>Financial Ombudsman Service</strong></p>
                <p>Exchange Tower, London, E14 9SR</p>
                <p className="mt-2">
                  <strong>Website:</strong>{" "}
                  <a href="https://www.financial-ombudsman.org.uk" className="text-primary underline" target="_blank" rel="noopener noreferrer">
                    www.financial-ombudsman.org.uk
                  </a>
                </p>
                <p><strong>Phone:</strong> 0800 023 4 567 (free from landlines and mobiles)</p>
                <p><strong>Phone:</strong> 0300 123 9 123</p>
                <p><strong>Email:</strong> complaint.info@financial-ombudsman.org.uk</p>
              </address>
              <p className="mt-4">
                Referring a complaint to the FOS does not affect your right to take legal action.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="font-heading text-lg font-semibold text-primary mb-3">4. Eligible complainants</h2>
              <p>
                The FOS can only consider complaints from &ldquo;eligible complainants.&rdquo; This includes
                private individuals and certain small businesses. If you are unsure whether you are
                eligible, the FOS can advise you directly.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="font-heading text-lg font-semibold text-primary mb-3">5. Our oversight</h2>
              <p>
                As an Appointed Representative of 2plan wealth management Ltd, our complaints handling
                procedures are subject to oversight by 2plan. In some circumstances, 2plan may handle
                a complaint directly or in conjunction with us. We will notify you if this applies to
                your complaint.
              </p>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}
