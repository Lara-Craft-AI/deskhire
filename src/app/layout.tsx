import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "DeskHire | Your AI Desk Hire",
  description:
    "DeskHire builds managed AI employees for insurance agents, accountants, and real estate teams.",
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
