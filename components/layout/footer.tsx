import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="site-footer">
      <Container>
        <p className="muted">© {new Date().getFullYear()} BGK Financial Planning. All rights reserved.</p>
      </Container>
    </footer>
  );
}
