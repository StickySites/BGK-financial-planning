import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Separator } from "@/components/ui/separator";
import { localSiteSettings } from "@/lib/content/local/settings";

export const metadata: Metadata = {
  title: "Terms of Business | BGK Financial Planning",
  description: "Terms of business for BGK Financial Planning services.",
  robots: { index: false },
};

export default function TermsOfBusinessPage() {
  return (
    <section className="section-shell">
      <Container>
        <div className="mx-auto w-full max-w-3xl">
          <h1 className="section-title mb-2">Terms of Business</h1>
          <p className="text-sm text-muted-foreground mb-8">Last updated: June 2025</p>

          <div className="prose prose-slate max-w-none space-y-8 text-sm leading-relaxed text-muted-foreground">

            <div>
              <h2 className="font-heading text-lg font-semibold text-primary mb-3">1. About us</h2>
              <p>
                BGK Financial Planning is a trading style of Bruce Kennedy, an Appointed Representative
                of 2plan wealth management Ltd. 2plan wealth management Ltd is authorised and regulated
                by the Financial Conduct Authority (FCA Register No:{" "}
                <strong>[FCA REGISTER NUMBER - TO BE CONFIRMED]</strong>).
              </p>
              <p className="mt-3">
                As an Appointed Representative, Bruce Kennedy acts on behalf of 2plan wealth management
                Ltd and operates within the regulatory permissions granted to them. 2plan wealth
                management Ltd is responsible for the regulated activities undertaken by Bruce Kennedy.
              </p>
              <address className="not-italic mt-3 rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm">
                Bruce Kennedy, BGK Financial Planning<br />
                <strong>{localSiteSettings.address}</strong><br />
                Email: <strong>{localSiteSettings.email}</strong><br />
                Phone: <strong>{localSiteSettings.phone}</strong>
              </address>
            </div>

            <Separator />

            <div>
              <h2 className="font-heading text-lg font-semibold text-primary mb-3">2. Services we provide</h2>
              <p>We provide advice and/or arrange the following regulated services:</p>
              <ul className="mt-3 space-y-2 list-disc pl-5">
                <li>Investment advice and planning</li>
                <li>Retirement and pension planning (including pension transfers where applicable)</li>
                <li>Protection planning (life assurance, critical illness, income protection)</li>
              </ul>
              <p className="mt-3">
                We do not provide regulated mortgage advice or arrange mortgages. Where appropriate, we may refer you
                to our trusted partner, Hansard Owens, for specialist mortgage and protection planning. Any mortgage
                advice is provided by Hansard Owens under their own terms of business and regulatory permissions.
              </p>
              <p className="mt-3">
                We will confirm the scope of services applicable to you in writing before providing advice.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="font-heading text-lg font-semibold text-primary mb-3">3. Restricted advice</h2>
              <p>
                Bruce Kennedy provides <strong>restricted advice</strong> as an Appointed Representative of
                2plan wealth management Ltd. This means recommendations are limited to the range of
                products and providers available through 2plan&apos;s approved panel. We will always tell
                you the basis of advice we are providing before making any recommendation.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="font-heading text-lg font-semibold text-primary mb-3">4. How we are paid</h2>
              <p>We are remunerated in the following ways, depending on the service provided:</p>
              <ul className="mt-3 space-y-2 list-disc pl-5">
                <li><strong>Adviser charges:</strong> A fee agreed with you in advance, payable by you directly or facilitated from your investment/pension.</li>
                <li><strong>Ongoing service charges:</strong> Where you take up an ongoing service, a recurring charge will apply as agreed and documented in your suitability report.</li>
                <li><strong>Partner referrals:</strong> We do not receive mortgage procuration fees or arrange mortgages. Any fees for mortgage advice are agreed directly with our partner, Hansard Owens.</li>
              </ul>
              <p className="mt-3">
                All charges will be clearly explained and confirmed in writing (in your suitability report or
                a separate fee agreement) before any regulated activity is undertaken on your behalf.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="font-heading text-lg font-semibold text-primary mb-3">5. Your responsibilities</h2>
              <p>To enable us to provide suitable advice, you must:</p>
              <ul className="mt-3 space-y-2 list-disc pl-5">
                <li>Provide accurate and complete information about your financial circumstances, goals, and any relevant changes.</li>
                <li>Inform us promptly of any material changes to your circumstances that may affect advice previously given.</li>
                <li>Read all documents we provide carefully, including key information documents, illustrations, and suitability reports.</li>
              </ul>
              <p className="mt-3">
                We cannot be held responsible for the accuracy of advice if it was based on incomplete or
                inaccurate information you provided.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="font-heading text-lg font-semibold text-primary mb-3">6. Risk warnings</h2>
              <p>
                The value of investments and the income from them can fall as well as rise. You may
                get back less than you invest. Past performance is not a reliable indicator of future
                results. The value of pensions is not guaranteed and depends on contributions made and
                investment returns. Tax treatment depends on individual circumstances and may change.
              </p>
              <p className="mt-3 font-semibold text-foreground">
                YOUR HOME MAY BE REPOSSESSED IF YOU DO NOT KEEP UP REPAYMENTS ON YOUR MORTGAGE.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="font-heading text-lg font-semibold text-primary mb-3">7. Cancellation rights</h2>
              <p>
                You have the right to cancel certain financial products within a cooling-off period
                (typically 14 to 30 days depending on the product). We will provide full details of
                your cancellation rights in the relevant product documentation and key information
                documents before you proceed.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="font-heading text-lg font-semibold text-primary mb-3">8. Complaints</h2>
              <p>
                If you are unhappy with any aspect of our service, please contact us using the details
                in section 1. We will acknowledge your complaint within three business days and provide
                a final response within eight weeks. If we cannot resolve your complaint to your
                satisfaction, you have the right to refer it to the Financial Ombudsman Service (FOS).
              </p>
              <p className="mt-3">
                Please see our <a href="/complaints-policy" className="text-primary underline">Complaints Policy</a> for
                full details of our complaints handling procedure.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="font-heading text-lg font-semibold text-primary mb-3">9. Financial Services Compensation Scheme (FSCS)</h2>
              <p>
                We are covered by the FSCS. The FSCS can pay compensation to eligible claimants
                if an authorised firm cannot meet its obligations. Most investment business is
                covered up to a maximum of £85,000 per eligible claim. Further information is
                available at{" "}
                <a href="https://www.fscs.org.uk" className="text-primary underline" target="_blank" rel="noopener noreferrer">
                  www.fscs.org.uk
                </a>.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="font-heading text-lg font-semibold text-primary mb-3">10. Conflicts of interest</h2>
              <p>
                We maintain a conflicts of interest policy. Where a conflict cannot be avoided, we
                will disclose it to you before proceeding. A copy of our conflicts of interest
                policy is available on request.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="font-heading text-lg font-semibold text-primary mb-3">11. Data protection</h2>
              <p>
                We process your personal data in accordance with our{" "}
                <a href="/privacy-policy" className="text-primary underline">Privacy Policy</a> and
                applicable data protection legislation. By engaging our services, you acknowledge that
                we may share your data with 2plan wealth management Ltd and relevant product providers
                as necessary to provide advice.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="font-heading text-lg font-semibold text-primary mb-3">12. Governing law</h2>
              <p>
                These Terms of Business are governed by the laws of England and Wales. Any disputes
                will be subject to the exclusive jurisdiction of the courts of England and Wales.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="font-heading text-lg font-semibold text-primary mb-3">13. Changes to these terms</h2>
              <p>
                We may update these Terms of Business from time to time. We will notify you of any
                material changes in writing. Your continued use of our services after notification
                constitutes acceptance of the updated terms.
              </p>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}
