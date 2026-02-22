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
}

const MainNavbar = ({ navLinks }: MainNavbarProps) => {
  const pathname = usePathname();

  const t = useTranslations("Navbar");

  return (
    <NavigationMenu>
      <NavigationMenuList className="gap-2">
        {navLinks.map((link) => {
          const isActive =
            pathname === link.href || pathname === `/${link.href}`;

          return (
            <NavigationMenuItem key={link.name}>
              <NavigationMenuLink asChild active={isActive}>
                <Link
                  href={link.href}
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent transition-all",
                    isActive && "bg-accent/50 font-semibold"
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
