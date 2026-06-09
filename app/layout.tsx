import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Kusuke SAKAMURA",
  description: "Kusuke SAKAMURA, a designder, developer, artist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="h-full flex flex-col md:flex-row overflow-hidden">
        <aside className="w-full md:w-80 h-auto md:h-full p-6 md:p-8 shrink-0 overflow-y-auto">
          <Header />
        </aside>
        <main className="flex-1 h-full overflow-y-auto  flex flex-col">
          <div className="flex-1 p-6 md:p-8 md:pt-0 pt-0">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
