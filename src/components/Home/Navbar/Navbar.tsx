"use client";

import React, { useEffect, useState } from "react";
import MainNavbar from "./MainNavbar";
import MobileNavbar from "./MobileNavbar";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggler from "../../Theme/ThemeToggler";
import { cn } from "@/lib/utils";
import { useWindowScroll } from "react-use";

export const NavLinks = [
  { name: "home", href: "#home" },
  { name: "about", href: "#about" },
  { name: "skills", href: "#skills" },
  { name: "experience", href: "#experience" },
  { name: "contact", href: "#contact" },
];

const Navbar = () => {
  const { y } = useWindowScroll();
  const [activeSection, setActiveSection] = useState("home");
  const isScrolled = y > 20;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-50% 0px -50% 0px" } //the exact middle of the screen
    );

    document.querySelectorAll("section[id]").forEach((s) => observer.observe(s));
    return () => observer.disconnect();
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
          <MainNavbar navLinks={NavLinks} activeSection={activeSection} />
        </div>

        <div className="flex flex-1 items-center justify-end gap-2 md:gap-4">
          <LanguageSwitcher />
          <ThemeToggler />

          <div className="md:hidden">
            <MobileNavbar navLinks={NavLinks} activeSection={activeSection} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
