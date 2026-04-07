"use strict";

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const routes = [
  { name: "Home", path: "/" },
  { name: "Experience", path: "/experience" },
  { name: "Projects", path: "/projects" },
  { name: "Blog", path: "/blog" },
  { name: "Non-Tech", path: "/nontech" },
  { name: "Bucket List", path: "/bucketlist" },
  { name: "Misc", path: "/misc" },
]

export function NavMenu() {
  const pathname = usePathname()

  return (
    <NavigationMenu className="max-w-full justify-start">
      <NavigationMenuList>
        {routes.map((route) => (
          <NavigationMenuItem key={route.path}>
            <Link href={route.path} legacyBehavior passHref>
              <NavigationMenuLink className={cn(
                navigationMenuTriggerStyle(),
                pathname === route.path && "bg-accent text-accent-foreground"
              )}>
                {route.name}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}