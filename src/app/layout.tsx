import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ClientPath CRM Lite",
  description: "Lead conversion system for small service businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-[var(--background)] text-[var(--foreground)]">
        {children}
      </body>
    </html>
  );
}
