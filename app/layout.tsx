import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { App } from "./app";
import Navbar from "@/components/common/Navbar";
import Sidebar from "@/components/common/LeftSidebar";
import RightSidebar from "@/components/common/RightSidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Reddit Search Clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <App>
          <Navbar />
          <div className="min-h-screen bg-background flex justify-evenly w-full">
            <Sidebar />
            <main className="flex-1 max-w-3xl w-full py-6 px-4">
              {children}
            </main>
            <RightSidebar />
          </div>
        </App>
      </body>
    </html>
  );
}
