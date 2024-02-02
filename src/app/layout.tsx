import type { Metadata } from "next";
import { inter } from "@/app/ui/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Antoni Gaudí",
  description:
    "Antoni Gaudí was a Catalan architect and designer from Spain, known as the greatest exponent of Catalan Modernism. Gaudí's works have a highly individualized, sui generis style. Most are located in Barcelona, including his main work, the church of the Sagrada Família.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
