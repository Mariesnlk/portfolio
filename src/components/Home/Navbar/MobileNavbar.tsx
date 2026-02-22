"use client";

import React, { useState } from "react";
import { Menu } from "lucide-react";
import { Link, usePathname } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "components/ui/sheet";
import { Button } from "components/ui/button";
import { Separator } from "components/ui/separator";
import { ScrollArea } from "components/ui/scroll-area";
import { useTranslations } from 'next-intl';

interface NavItem {
  name: string;
  href: string;
}

interface MobileNavbarProps {
  navLinks: NavItem[];
}

const MobileNavbar = ({ navLinks }: MobileNavbarProps) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const t = useTranslations('Navbar');

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="size-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        {/* <SheetHeader className="text-left">
          <SheetTitle className="flex items-center gap-2">
            <Zap className="size-5 text-primary" />
            Navigation
          </SheetTitle>
          <SheetDescription>
            Explore my portfolio and services.
          </SheetDescription>
        </SheetHeader> */}

        {/* ScrollArea replaces <div> for better mobile UX */}
        <ScrollArea className="flex-1 pr-4 mt-12">
          <section className="flex flex-col gap-3">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block px-4 py-3 text-lg font-medium rounded-lg transition-all",
                    isActive
                      ? "bg-secondary text-primary shadow-sm"
                      : "text-muted-foreground hover:bg-accent hover:text-foreground"
                  )}
                >
                  {t(link.name)}
                </Link>
              );
            })}
          </section>
        </ScrollArea>

        <Separator />

        {/* Footer section */}
        <footer className="flex flex-col gap-1">
          <small className="text-[10px] text-muted-foreground font-mono">
            BUILD_VERSION: 2026.1.0
          </small>
          <small className="text-xs text-muted-foreground">
            © MARIIA SYNELNYK
          </small>
        </footer>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;
