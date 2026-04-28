import { Section } from "@/components/ui/section";

type ServiceDetailPageProps = { params: Promise<{ slug: string }> };

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;

  return <Section title="Service Detail"><p>Dynamic service route scaffold for: <strong>{slug}</strong></p></Section>;
}
