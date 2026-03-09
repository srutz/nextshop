import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ViewTransitions } from "next-view-transitions";
import { Menubar } from "@/components/Menubar";
import { cn } from "@/lib/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My shop",
  description: "the shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body
          className={cn(
            `${geistSans.variable} ${geistMono.variable} antialiased`,
            "w-screen h-screen bg-background text-foreground",
            "flex flex-col overflow-y-auto",
          )}
        >
          <Menubar></Menubar>
          {children}
        </body>
      </html>
    </ViewTransitions>
  );
}
