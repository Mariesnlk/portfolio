"use client";

import React, { useState, useEffect } from "react";
import MainNavbar from "./MainNavbar";
import MobileNavbar from "./MobileNavbar";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggler from "../../Theme/ThemeToggler";
import { cn } from "@/lib/utils";
import { Button } from "components/ui/button";
import { Download } from "lucide-react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export const NavLinks = [
  { name: "home", href: "/" },
  { name: "about", href: "/about" },
  { name: "skills", href: "/skills" },
  { name: "experience", href: "/experience" },
  { name: "contact", href: "/contact" },
];

const Navbar = () => {
  const t = useTranslations("Navbar");

  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Effect to handle scroll background change
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border shadow-md py-3"
          : "bg-transparent border-b border-transparent py-5"
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
          <Button
            variant="default"
            size="sm"
            className={cn(
              "hidden sm:flex items-center gap-2 text-white transition-all duration-300 active:scale-95 shadow-lg",
              // Light Mode
              "bg-[rgb(148,187,233)] hover:brightness-90 shadow-blue-200/50",
              // Dark Mode
              "dark:bg-[rgb(45,73,128)] dark:hover:bg-[rgb(55,83,138)] dark:shadow-black/50"
            )}
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
