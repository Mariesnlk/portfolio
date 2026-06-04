"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "components/ui/navigation-menu";
import { useTranslations } from "next-intl";

interface NavItem {
  name: string;
  href: string;
}

interface MainNavbarProps {
  navLinks: NavItem[];
  activeSection: string;
}

const MainNavbar = ({ navLinks, activeSection }: MainNavbarProps) => {
  const t = useTranslations("Navbar");
  const isLinkActive = (href: string) => href === `#${activeSection}`;

  return (
    <NavigationMenu>
      <NavigationMenuList className="gap-2">
        {navLinks.map((link) => {
          const isActive = isLinkActive(link.href);

          return (
            <NavigationMenuItem key={link.name}>
              <Link
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "inline-flex rounded-sm px-3 py-2 text-sm transition-colors outline-none",
                  isActive
                    ? "text-[rgb(100,150,210)] font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {t(link.name)}
              </Link>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default MainNavbar;
