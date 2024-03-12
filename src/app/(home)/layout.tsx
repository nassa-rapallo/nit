import type { Metadata } from "next";

import { TTNorms } from "@/fonts";
import "../globals.css";
import { Header } from "@/components/header";

export const metadata: Metadata = {
  title: "Nassa Rapallo",
  description: "Nassa - Rapallo APS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body className={TTNorms.className}>
        <main className="min-h-screen flex flex-col gap-4 relative">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
