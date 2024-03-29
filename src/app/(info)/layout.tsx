import type { Metadata } from "next";

import { TTNorms } from "@/fonts";
import "../globals.css";
import { Header } from "@/components/header";
import { InfoHeader } from "@/components/info-header";

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
        <main className="min-h-screen flex flex-col gap-4 relative bg-nassa-0 text-nassa-900">
          <Header />
          <InfoHeader />
          <section className="flex flex-col gap-4 w-4/5 lg:w-3/4 mx-auto">
            {children}
          </section>
        </main>
      </body>
    </html>
  );
}
