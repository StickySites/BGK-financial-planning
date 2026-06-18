import { Container } from "@/components/ui/container";

const warnings: Record<string, { text: string; prominent?: boolean }> = {
  "investment-guidance": {
    text: "The value of investments and the income from them can fall as well as rise. You may get back less than you invest. Past performance is not a reliable indicator of future results. The value of tax reliefs depends on your individual circumstances. Tax laws can change."
  },
  "retirement-planning": {
    text: "The value of pensions and the income from them can fall as well as rise. You may get back less than you invest. A pension is a long-term investment and is not normally accessible until age 55 (rising to 57 from 2028). Tax treatment depends on individual circumstances and may be subject to change."
  },
  protection: {
    text: "Premiums and terms are subject to individual underwriting and your personal circumstances. Policy exclusions and terms and conditions apply. Please read any policy documentation carefully before proceeding."
  },
  "mortgage-advice": {
    text: "BGK Financial Planning does not provide regulated mortgage advice. Mortgage advice is provided by our partner Hansard Owens. YOUR HOME MAY BE REPOSSESSED IF YOU DO NOT KEEP UP REPAYMENTS ON YOUR MORTGAGE. The Financial Conduct Authority does not regulate some forms of Buy-to-Let mortgages.",
    prominent: true
  }
};

export function ServiceRiskWarning({ slug }: { slug: string }) {
  const warning = warnings[slug];
  if (!warning) return null;

  return (
    <section className="border-t border-amber-200 bg-amber-50 py-6">
      <Container>
        <p className={`text-sm text-amber-900 ${warning.prominent ? "font-semibold" : ""}`}>
          <span className="font-semibold">Risk warning: </span>
          {warning.text}
        </p>
      </Container>
    </section>
  );
}
