"use client";

import React, { useEffect, useState } from "react";
import MainNavbar from "./MainNavbar";
import MobileNavbar from "./MobileNavbar";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggler from "../../Theme/ThemeToggler";
import { cn } from "@/lib/utils";
import { useWindowScroll } from "react-use";
import { Box, Container, Header, Row } from "components/ui/layout";

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
    const sections = Array.from(document.querySelectorAll<HTMLElement>("section[id]"));
    if (!sections.length) return;

    const updateActiveSection = () => {
      const viewportMiddle = window.innerHeight * 0.5;
      const current =
        sections.find((section) => {
          const { top, bottom } = section.getBoundingClientRect();
          return top <= viewportMiddle && bottom >= viewportMiddle;
        }) ?? sections[sections.length - 1];

      setActiveSection(current.id);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <Header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border shadow-md py-3"
          : "bg-transparent border-b border-transparent py-5"
      )}
    >
      <Container className="px-4 sm:px-8">
        <Row className="h-16">
          <Box className="hidden flex-1 justify-center md:flex">
            <MainNavbar navLinks={NavLinks} activeSection={activeSection} />
          </Box>

          <Row className="flex-1 justify-end gap-2 md:gap-4">
            <LanguageSwitcher />
            <ThemeToggler />

            <Box className="md:hidden">
              <MobileNavbar navLinks={NavLinks} activeSection={activeSection} />
            </Box>
          </Row>
        </Row>
      </Container>
    </Header>
  );
};

export default Navbar;
