"use client";

import React, { useState, useEffect } from "react";
import MainNavbar from "./MainNavbar";
import MobileNavbar from "./MobileNavbar";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggler from "../../Theme/ThemeToggler";
import { cn } from "@/lib/utils";
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
  // const [activeSection, setActiveSection] = useState("home");

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
      <nav className="container mx-auto flex h-16 items-center px-4 sm:px-8">
        <div className="hidden md:flex flex-1 justify-center">
          <MainNavbar navLinks={NavLinks} />
        </div>

        <div className="flex flex-1 items-center justify-end gap-2 md:gap-4">
          <LanguageSwitcher />
          <ThemeToggler />

          <div className="md:hidden">
            <MobileNavbar navLinks={NavLinks} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
