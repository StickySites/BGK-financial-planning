import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { ServicePartner } from "@/lib/content/types";

type ServicePartnerCardProps = {
  partner: ServicePartner;
  ctaLabel?: string;
};

export function ServicePartnerCard({ partner, ctaLabel = "Visit partner website" }: ServicePartnerCardProps) {
  return (
    <Card className="service-card-variant border-primary/20 bg-[#f7fafc]">
      <CardHeader>
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">Trusted partner</p>
        <CardTitle className="text-lg">{partner.name}</CardTitle>
        {partner.tagline ? <p className="text-sm font-medium text-muted-foreground">{partner.tagline}</p> : null}
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm leading-relaxed text-muted-foreground">{partner.description}</p>
        <Button asChild className="h-11">
          <a href={partner.url} target="_blank" rel="noopener noreferrer">
            {ctaLabel}
            <ExternalLink className="ml-2 h-4 w-4" aria-hidden />
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}
