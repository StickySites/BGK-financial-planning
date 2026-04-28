import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)", marginTop: "4rem", padding: "2rem 0" }}>
      <Container>
        <p style={{ color: "var(--muted)" }}>© {new Date().getFullYear()} BGK Financial Planning. All rights reserved.</p>
      </Container>
    </footer>
  );
}
