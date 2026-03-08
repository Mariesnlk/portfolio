"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
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
  const pathname = usePathname();

  const t = useTranslations("Navbar");

  return (
    <NavigationMenu>
      <NavigationMenuList className="gap-2">
        {navLinks.map((link) => {
          // const isActive =
          //   pathname === link.href || pathname === `/${link.href}`;

          const isActive =
            (link.href === "#" && activeSection === "home") ||
            link.href === `#${activeSection}`;

          return (
            <NavigationMenuItem key={link.name}>
              <NavigationMenuLink asChild active={isActive}>
                <Link
                  href={link.href}
                  className={cn(
                    // navigationMenuTriggerStyle(),
                    // "transition-colors duration-200",
                    isActive
                      ? "text-[rgb(100,150,210)] font-semibold"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {t(link.name)}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default MainNavbar;
