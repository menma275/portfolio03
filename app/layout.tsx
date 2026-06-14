import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { TabNavigation } from "@/components/TabNavigation";
import { Footer } from "@/components/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: {
    default: "Kusuke SAKAMURA",
    template: "%s | Kusuke SAKAMURA",
  },
  description:
    "Kusuke SAKAMURA, a designer, developer and artist based in Tokyo.",
  openGraph: {
    title: "Kusuke SAKAMURA / 坂村 空介",
    description:
      "Kusuke SAKAMURA, a designer, developer, artist based in Tokyo.",
    url: "https://sakamura.dev",
    siteName: "Kusuke SAKAMURA",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/ogp.png",
        width: 1200,
        height: 630,
        alt: "Kusuke SAKAMURA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kusuke SAKAMURA",
    description:
      "Kusuke SAKAMURA, a designer, developer and artist based in Tokyo.",
    images: ["/ogp.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="ja" className="antialiased">
      <body className="min-h-screen bg-bg-primary">
        {gaId && <GoogleAnalytics gaId={gaId} />}
        <div className="flex flex-col md:flex-row min-h-screen">
          <div className="sticky top-0 z-40 md:contents bg-bg-primary">
            <aside className="w-full md:w-80 md:h-screen p-6 md:p-8 shrink-0 md:sticky md:top-0 md:overflow-y-auto bg-bg-primary z-40">
              <Header />
            </aside>
            <div className="md:hidden">
              <TabNavigation />
            </div>
          </div>
          <main className="flex-1 flex flex-col min-w-0">
            <div className="hidden md:block sticky top-0 z-50">
              <TabNavigation />
            </div>
            <div className="flex-1 p-6 md:p-8 md:pt-0 pt-0">{children}</div>
            <Footer />
          </main>
        </div>
      </body>
    </html>
  );
}
