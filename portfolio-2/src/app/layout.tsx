'use client'

import { Nunito } from "next/font/google";
import { PT_Sans } from "next/font/google";
import "./globals.css";
import { NavMenu } from "@/components/nav-menu";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const ptSans = PT_Sans({
  variable: "--font-pt-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito.variable} ${ptSans.variable} antialiased relative`}
      >
        <div className="texture" />
        {/* <NavMenu /> */}
        {children}
      </body>
    </html>
  );
}

export default RootLayout;