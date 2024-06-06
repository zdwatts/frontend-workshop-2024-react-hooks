import type { Metadata } from "next";
import { Victor_Mono } from "next/font/google";
import "./globals.css";

const inter = Victor_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kobayashi Maru",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
