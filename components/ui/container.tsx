import { ReactNode } from "react";

type ContainerProps = { children: ReactNode };

export function Container({ children }: ContainerProps) {
  return <div style={{ margin: "0 auto", maxWidth: "var(--container)", padding: "0 1rem" }}>{children}</div>;
}
