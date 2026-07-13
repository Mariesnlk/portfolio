"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { Footer } from "components/ui/footer";
import { Text } from "components/ui/text";
import { Container } from "components/ui/layout";

interface SiteFooterProps {
  className?: string;
  compact?: boolean;
}

const SiteFooter = ({ className, compact = false }: SiteFooterProps) => {
  const t = useTranslations("Navbar");

  return (
    <Footer
      className={cn(
        "w-full border-t border-border/50",
        compact ? "px-3 py-3" : "px-4 py-8",
        className
      )}
    >
      <Container className="flex flex-col items-center justify-center gap-3 text-center">
        <Text variant="small" className="text-muted-foreground">
          {t("build_version")}: 2026.1.0
        </Text>
        <Text variant="small" className="text-muted-foreground">
          © MARIIA SYNELNYK
        </Text>
      </Container>
    </Footer>
  );
};

export default SiteFooter;
