"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";

export default function NavClass() {
    return (
        <div className="relative w-full flex items-center justify-center">
            <Navbar className="top-4" />
        </div>
    );
  }

export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const resumeLink = process.env.NEXT_PUBLIC_RESUME_LINK;
  
  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl md:mx-auto z-50 mx-2", className)}>
      <div className="my-6">
      <Menu setActive={setActive}>
        <HoveredLink href="/">Home</HoveredLink>
        <MenuItem setActive={setActive} active={active} item="Experience">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/experience">Industry</HoveredLink>
            <HoveredLink href="/experience">Personal</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Projects">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/projects">Standalone</HoveredLink>
            <HoveredLink href="/projects">Mini-Projects</HoveredLink>
            <HoveredLink href="/projects">Requested 📞</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="ME-3M">
          <div className="  text-sm grid md:grid-cols-2 gap-10 p-4 grid-cols-1">
            <ProductItem
              title="Blog"
              href="/blog"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="Serious Subjects, Subtly Silly Sidelines"
            />
            <ProductItem
              title="Not so Tech"
              href="/notsotech"
              src="/images/website/notsotech.png"
              description="Beyond the Binary & Brimming with Banality, Where Circuits Rest & Curiosities Reign."
            />
            <ProductItem
              title="Playground"
              href="/playground"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="under_thinking, under_construction, under_review 😜"
            />
            <ProductItem
              title="Bucket List"
              href="/bucketlist"
              src="/images/website/bucketlist.png"
              description="My To-Do List Before I'm To-Done 🏁"
            />
            <HoveredLink href="/#contact" onClick={(e) => {
              e.preventDefault();
              const isHomePage = window.location.pathname === '/';
              if (isHomePage) {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              } else {
                window.location.href = '/#contact';
              }
            }}>know me better 💬</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Misc">
            <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href={resumeLink} target="_blank" rel="noopener noreferrer">📜 Resume</HoveredLink>
                <ThemeToggle />
            </div>  
        </MenuItem>
        <div className="px-4">
        <HoveredLink href="/store">Store ⚡</HoveredLink>
        </div>
      </Menu>
      </div>
    </div>
  );
}