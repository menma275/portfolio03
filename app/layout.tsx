import React from "react";
import "./globals.css";
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Kusuke Sakamura",
  description: "Kusuke Sakamura's Portfolio",
}

export default function RootLayout({
  children,
  modal
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        {modal}
      </body>
    </html>
  );
}
