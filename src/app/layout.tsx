import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers/theme-provider";
import CursorLight from "@/components/atoms/CursorLight";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Burcu Acan - Portfolio",
  description: "Kişisel portfolyo web sitesi",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <CursorLight />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
