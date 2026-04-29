import { Figtree, Poppins } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap"
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600", "700"],
  display: "swap"
});

export const metadata: Metadata = {
  icons: {
    icon: "/media/bgk-logo-nobg.png",
    shortcut: "/media/bgk-logo-nobg.png",
    apple: "/media/bgk-logo-nobg.png"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB">
      <body className={`${figtree.variable} ${poppins.variable}`}>{children}</body>
    </html>
  );
}
