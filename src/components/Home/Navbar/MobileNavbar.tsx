"use client";

import React, { useState } from "react";
import { Menu } from "lucide-react";
import { Link } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "components/ui/sheet";
import { Button } from "components/ui/button";
import { Separator } from "components/ui/separator";
import { ScrollArea } from "components/ui/scroll-area";
import { Section } from "components/ui/layout";
import { Text } from "components/ui/text";
import { useTranslations } from "next-intl";
import SiteFooter from "../Footer/SiteFooter";

interface NavItem {
  name: string;
  href: string;
}

interface MobileNavbarProps {
  navLinks: NavItem[];
  activeSection: string;
}

const MobileNavbar = ({ navLinks, activeSection }: MobileNavbarProps) => {
  const [open, setOpen] = useState(false);
  const t = useTranslations("Navbar");
  const isLinkActive = (href: string) => href === `#${activeSection}`;

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label={t("open_menu")}
        >
          <Menu className="size-6" />
          <Text variant="srOnly">{t("toggle_menu")}</Text>
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <SheetHeader className="px-4 pt-12">
          <SheetTitle>{t("navigation")}</SheetTitle>
          <SheetDescription>{t("select_section")}</SheetDescription>
        </SheetHeader>

        <ScrollArea className="mt-2 flex-1 pr-4">
          <Section className="flex flex-col gap-3">
            {navLinks.map((link) => {
              const isActive = isLinkActive(link.href);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "block rounded-lg px-4 py-3 text-lg font-medium transition-all",
                    isActive
                      ? "bg-secondary text-primary shadow-sm"
                      : "text-muted-foreground hover:bg-accent hover:text-foreground"
                  )}
                >
                  {t(link.name)}
                </Link>
              );
            })}
          </Section>
        </ScrollArea>

        <Separator />
        <SheetFooter className="p-0">
          <SiteFooter compact className="border-t-0" />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;
