"use client";

import React from "react";
import { useTranslations } from "next-intl";
import HeroAnimation from "./HeroAnimation";
import { Badge } from "components/ui/badge";
import { Text } from "components/ui/text";

const Home = () => {
  const t = useTranslations("HomePage");

  const sequence = t.raw("type_sequence");

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center bg-home-light dark:bg-home-dark transition-colors duration-500"
    >
      <section className="flex flex-col items-center justify-center gap-6 px-4 text-center">
        <Badge
          variant="outline"
          className="gap-2 px-4 py-1.5 text-sm font-medium bg-background/50 backdrop-blur-sm border-border/50 shadow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>

          <p className="text-muted-foreground dark:text-gray-300">
            {t("status_available")}
          </p>
        </Badge>

        <Text variant="h2" className="border-none">
          {t("title")}
        </Text>

        <HeroAnimation sequence={sequence} />
      </section>
    </section>
  );
};

export default Home;
