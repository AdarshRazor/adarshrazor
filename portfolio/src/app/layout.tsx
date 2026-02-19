"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import NavClass from "@/components/Navbar";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import { StickyBanner } from "@/components/ui/sticky-banner";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
        <ThemeProvider>
          <StickyBanner className="bg-gradient-to-b from-blue-500 to-blue-600 z-40 relative">
            <p className="mx-0 max-w-[90%] text-white drop-shadow-md">
              💬 SnipChat is Live - Check{" "}
              <span className="font-bold">
                <a
                  href="https://snipchat.playnook.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  [ScanMe].
                </a>
              </span>{" "}
              ⭕ Announcing waitlist open for playNooK, I am sure you dont want
              to miss it.{" "}
              <a
                href="#playNooKHome"
                className="transition duration-200 hover:underline font-bold"
                onClick={(e) => {
                  e.preventDefault();
                  const isHomePage = window.location.pathname === "/";
                  if (isHomePage) {
                    document
                      .getElementById("playNooKHome")
                      ?.scrollIntoView({ behavior: "smooth" });
                  } else {
                    window.location.href = "/#playNooKHome";
                  }
                }}
              >
                Enter Waitlist !
              </a>
            </p>
          </StickyBanner>
          <div className="relative z-30">
            <NavClass />
          </div>
          <div className="">
            <div className="smooth-cursor-wrapper">
              <SmoothCursor />
            </div>
            {children}
            <Analytics />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
