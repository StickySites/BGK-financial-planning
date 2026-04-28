import { ReactNode } from "react";
import { Container } from "@/components/ui/container";

type SectionProps = { title: string; children: ReactNode };

export function Section({ title, children }: SectionProps) {
  return (
    <section style={{ padding: "4rem 0" }}>
      <Container>
        <h1 style={{ marginBottom: "1rem" }}>{title}</h1>
        {children}
      </Container>
    </section>
  );
}
