import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconArticle,
  IconCode,
  IconBriefcase,
  IconPlayCardA,
} from "@tabler/icons-react";

export function ContactDock() {
  const links = [
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/adarshrazor",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/adarsh007/",
    },
    {
      title: "Blog",
      icon: (
        <IconArticle className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/blog",
    },
    {
      title: "Projects",
      icon: (
        <IconCode className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/projects",
    },
    {
      title: "Experience",
      icon: (
        <IconBriefcase className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/experience",
    },
    {
      title: "playNooK",
      icon: (
        <IconPlayCardA className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/playNook",
    },
  ];
  return (
    <div className="flex items-center justify-center mt-4">
      <FloatingDock items={links} />
    </div>
  );
}

export default ContactDock;
