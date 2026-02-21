"use client";

import React, { useState, useEffect } from "react";
import MainNavbar from "./MainNavbar";
import MobileNavbar from "./MobileNavbar";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggler from "../../Theme/ThemeToggler";
import { cn } from "@/src/lib/utils";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { Link } from "@/src/i18n/routing";
import { useTranslations } from "next-intl";

export const NavLinks = [
  { name: "home", href: "/" },
  { name: "about", href: "#about" },
  { name: "skills", href: "#skills" },
  { name: "experience", href: "#experience" },
  { name: "contact", href: "#contact" },
];

const Navbar = () => {
  const t = useTranslations("Navbar");

  const [isScrolled, setIsScrolled] = useState(false);

  // Effect to handle scroll background change
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 border-b",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-border py-3 shadow-sm"
          : "bg-transparent border-transparent py-5"
      )}
    >
      <nav className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-8">
        {/* <section className="flex-shrink-0">
          <Logo />
        </section> */}

        <section className="hidden md:flex items-center justify-center flex-1">
          <MainNavbar navLinks={NavLinks} />
        </section>

        <section className="flex items-center justify-end gap-2 md:gap-4">
          {/* Download CV Button - Hidden on very small screens, visible from 'sm' up */}
          <Button
            variant="default"
            size="sm"
            className="hidden sm:flex items-center gap-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white shadow-md transition-transform active:scale-95"
            asChild
          >
            <Link href={t("cv_path")} target="_blank" prefetch={false}>
              <Download className="size-4" />
              <span className="font-medium">{t("download_cv")}</span>
            </Link>
          </Button>

          <aside className="flex items-center gap-1 sm:gap-2 pl-2 sm:pl-3">
            <LanguageSwitcher />
            <ThemeToggler />

            <div className="md:hidden">
              <MobileNavbar navLinks={NavLinks} />
            </div>
          </aside>
        </section>
      </nav>
    </header>
  );
};

export default Navbar;
