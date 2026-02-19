import React from "react";
//import { cn } from '@/lib/utils'
import Link from "next/link";
import { ContactDock } from "./ContactDock";

function Footer() {
  const currentYear = new Date().getFullYear();
  const resumeLink = process.env.NEXT_PUBLIC_RESUME_LINK;

  return (
    <footer className="relative border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black py-12 mt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
              Navigation
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/experience"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition"
                >
                  Experience
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/playNook"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition"
                >
                  playNooK
                </Link>
              </li>
              <li>
                <Link
                  href="/notsotech"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition"
                >
                  Not So Tech
                </Link>
              </li>
              <li>
                <Link
                  href="/bucketlist"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition"
                >
                  Bucket List
                </Link>
              </li>
              <li>
                <a
                  href={resumeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Dock */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
              Connect
            </h3>
            <ContactDock />
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-800">
          <p className="text-center text-sm text-neutral-600 dark:text-neutral-400">
            © {currentYear} Adarsh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
