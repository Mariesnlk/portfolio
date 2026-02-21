"use client";

import React, { useState, useEffect } from "react";
import MainNavbar from "./MainNavbar";
import MobileNavbar from "./MobileNavbar";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggler from "../../Theme/ThemeToggler";
import { cn } from "@/src/lib/utils";

export const NavLinks = [
  { name: "home", href: "/" },
  { name: "about", href: "#about" },
  { name: "skills", href: "#skills" },
  { name: "experience", href: "#experience" },
  { name: "contact", href: "#contact" },
];

const Navbar = () => {
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
          <aside className="hidden sm:flex items-center gap-2">
            <LanguageSwitcher />
            <ThemeToggler />
          </aside>

          <aside className="flex items-center gap-2 md:hidden">
            <MobileNavbar navLinks={NavLinks} />
          </aside>
        </section>
      </nav>
    </header>
  );
};

export default Navbar;
