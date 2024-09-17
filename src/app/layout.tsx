import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { SessionProvider } from "next-auth/react";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Auth",
  description: "Auth Template",
  icons:{
    icon:'/favicon.svg',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SessionProvider>
        <body className={inter.className}>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <Navbar />
            {children}
            <Toaster />
          </ThemeProvider>
        </body>
      </SessionProvider>
    </html>
  );
}
