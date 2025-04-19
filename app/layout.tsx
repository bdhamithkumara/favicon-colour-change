import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider }  from "@/context/theme-context";
import Navbar from "@/components/navbar";
import FaviconUpdater from "@/components/FaviconUpdater";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "favicon colour changer",
  description: "Easily customize and switch between light, dark, or custom themes with our intuitive color changer. Perfect for enhancing your site's appearance and user experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <FaviconUpdater />
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
