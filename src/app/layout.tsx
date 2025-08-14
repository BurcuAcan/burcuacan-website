import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers/theme-provider";
import CursorLight from "@/components/atoms/CursorLight";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Burcu Acan - Portfolio",
  description: "Kişisel portfolyo web sitesi",
  icons: {
    icon: [
      {
        url: '/favicon.png?v=' + Date.now(),
        sizes: 'any',
        type: 'image/png',
      },
    ],
    shortcut: '/favicon.png?v=' + Date.now(),
    apple: '/favicon.png?v=' + Date.now(),
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
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
