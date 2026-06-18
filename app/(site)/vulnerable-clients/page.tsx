import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Separator } from "@/components/ui/separator";
import { localSiteSettings } from "@/lib/content/local/settings";

export const metadata: Metadata = {
  title: "Support for Vulnerable Clients | BGK Financial Planning",
  description: "How BGK Financial Planning supports clients in vulnerable circumstances.",
  robots: { index: false },
};

export default function VulnerableClientsPage() {
  return (
    <section className="section-shell">
      <Container>
        <div className="mx-auto w-full max-w-3xl">
          <h1 className="section-title mb-2">Support for Vulnerable Clients</h1>
          <p className="text-sm text-muted-foreground mb-8">Last updated: June 2025</p>

          <div className="prose prose-slate max-w-none space-y-8 text-sm leading-relaxed text-muted-foreground">

            <div>
              <h2 className="font-heading text-lg font-semibold text-primary mb-3">Our commitment</h2>
              <p>
                BGK Financial Planning is committed to treating all clients fairly and with care,
                particularly those who may be in vulnerable circumstances. This is a core part of our
                obligations under the FCA&apos;s Consumer Duty (PS22/9), which requires firms to deliver
                good outcomes for all customers, including those who may need extra support.
              </p>
              <p className="mt-3">
                We recognise that vulnerability is not always visible or permanent. It can affect anyone
                at any time, and we aim to identify and respond to it sensitively and proactively.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="font-heading text-lg font-semibold text-primary mb-3">What is vulnerability?</h2>
              <p>
                The FCA defines a vulnerable customer as someone who, due to their personal circumstances,
                is especially susceptible to detriment, particularly when a firm is not acting with
                appropriate levels of care. Vulnerability can arise from four main drivers:
              </p>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {[
                  {
                    title: "Health",
                    body: "Physical or mental health conditions, disabilities, or serious illness that affect the ability to carry out day-to-day tasks or make financial decisions.",
                  },
                  {
                    title: "Life events",
                    body: "Significant changes such as bereavement, relationship breakdown, job loss, or serious illness in the family.",
                  },
                  {
                    title: "Resilience",
                    body: "Low ability to cope with financial or emotional shocks, including those experiencing financial difficulty or high levels of anxiety.",
                  },
                  {
                    title: "Capability",
                    body: "Low knowledge or confidence in financial matters, literacy or numeracy difficulties, or not having English as a first language.",
                  },
                ].map(({ title, body }) => (
                  <Card key={title} className="service-card-variant">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">{title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{body}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Separator />

            <div>
              <h2 className="font-heading text-lg font-semibold text-primary mb-3">How we support you</h2>
              <p>If you tell us you have needs that require additional support, we will:</p>
              <ul className="mt-3 space-y-2 list-disc pl-5">
                <li>Adapt how we communicate with you, including larger print documents, plain English summaries, or additional time to consider recommendations.</li>
                <li>Allow a trusted person (such as a family member or carer) to be present during meetings or discussions, with your consent.</li>
                <li>Break down complex information into smaller steps and check understanding at each stage.</li>
                <li>Allow additional time between stages of the advice process to ensure you are comfortable before proceeding.</li>
                <li>Offer alternative communication methods (phone, in-person, written) as best suits your needs.</li>
                <li>Signpost you to specialist support organisations where appropriate.</li>
              </ul>
            </div>

            <Separator />

            <div>
              <h2 className="font-heading text-lg font-semibold text-primary mb-3">How to tell us about your needs</h2>
              <p>
                If you have circumstances you would like us to be aware of, or if your situation
                changes at any point during our relationship, please let us know. You do not need to
                share medical details; simply letting us know that you need additional time, a different
                format, or a specific adjustment is enough for us to accommodate your needs.
              </p>
              <p className="mt-3">You can reach us by:</p>
              <address className="not-italic mt-3 rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm space-y-1">
                <p><strong>Email:</strong> <strong>{localSiteSettings.email}</strong></p>
                <p><strong>Phone:</strong> <strong>{localSiteSettings.phone}</strong></p>
                <p><strong>Post:</strong> Bruce Kennedy, BGK Financial Planning, <strong>{localSiteSettings.address}</strong></p>
              </address>
            </div>

            <Separator />

            <div>
              <h2 className="font-heading text-lg font-semibold text-primary mb-3">Third-party support</h2>
              <p>
                If you would like someone to act on your behalf, for example under a Lasting Power of
                Attorney or as a trusted third party, please let us know and we will agree appropriate
                arrangements with you in writing.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="font-heading text-lg font-semibold text-primary mb-3">Useful organisations</h2>
              <div className="mt-3 space-y-3">
                {[
                  {
                    name: "Money and Pensions Service (MaPS)",
                    url: "https://www.moneyandpensionsservice.org.uk",
                    desc: "Free, impartial guidance on money and pensions matters.",
                  },
                  {
                    name: "Citizens Advice",
                    url: "https://www.citizensadvice.org.uk",
                    desc: "Free guidance on debt, benefits, housing, and consumer issues.",
                  },
                  {
                    name: "Mind",
                    url: "https://www.mind.org.uk",
                    desc: "Mental health support and information.",
                  },
                  {
                    name: "Age UK",
                    url: "https://www.ageuk.org.uk",
                    desc: "Support and advice for older people.",
                  },
                ].map(({ name, url, desc }) => (
                  <div key={name} className="rounded-lg border border-slate-200 p-3">
                    <a href={url} className="font-semibold text-primary underline" target="_blank" rel="noopener noreferrer">
                      {name}
                    </a>
                    <p className="mt-0.5">{desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}
