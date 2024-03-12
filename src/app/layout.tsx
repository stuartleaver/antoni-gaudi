import type { Metadata } from "next";
import { inter } from "../ui/fonts";
import "./globals.css";
import { Header } from "../components/header";
import { Nav } from "../components/nav";

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
      <body className={inter.className}>
        <Header />
        <div className="leftpart fixed z-10 flex h-[100vh] w-[450px] items-center bg-white px-24 py-0">
          <div className="leftpart_inner h-auto w-full">
            <div>
              <h1 className="text-3xl font-bold">Antoni Gaudi</h1>
            </div>
            <Nav />
          </div>
        </div>
        <main className="rightpart relative float-left min-h-[100vh] w-full bg-[#f8f8f8] pl-[450px]">
          {children}
        </main>
      </body>
    </html>
  );
}
