"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/src/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

interface NavItem {
  name: string;
  href: string;
}

interface MainNavbarProps {
  navLinks: NavItem[];
}

const MainNavbar = ({ navLinks }: MainNavbarProps) => {
  const pathname = usePathname();

  return (
    <NavigationMenu>
      <NavigationMenuList className="gap-2">
        {navLinks.map((link) => (
          <NavigationMenuItem key={link.name}>
            <Link href={link.href} passHref>
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  "bg-transparent hover:bg-accent/50 transition-all",
                  pathname === link.href && "bg-accent/50 font-semibold"
                )}
              >
                {link.name}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default MainNavbar;
