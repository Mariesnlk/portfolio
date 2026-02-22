"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { Link } from "@/i18n/routing";
import HeroAnimation from "./HeroAnimation";
import { Button } from "components/ui/button";
import { Badge } from "components/ui/badge";
import { Text } from "components/ui/text";

const SOCIAL_LINKS = [
  {
    href: "https://github.com/Mariesnlk",
    icon: FaGithub,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/mariia-synelnyk/",
    icon: FaLinkedin,
    label: "LinkedIn",
  },
];

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
          className="inline-flex items-center gap-2 px-4 py-1.5 bg-background/50 backdrop-blur-sm"
        >
          <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
          <span>{t("status_available")}</span>
        </Badge>

        <Text variant="h2" className="border-none">
          {t("title")}
        </Text>

        <HeroAnimation sequence={sequence} />

        <div className="flex flex-wrap items-center justify-center gap-3 mt-4">
          <Button
            variant="default"
            className={cn(
              "flex items-center gap-2 text-white transition-all duration-300 active:scale-95 shadow-lg px-6",
              "bg-[rgb(148,187,233)] hover:brightness-95 shadow-blue-200/50",
              "dark:bg-[rgb(45,73,128)] dark:hover:brightness-110 dark:shadow-black/50"
            )}
            asChild
          >
            <Link href={t("cv_path")} target="_blank" prefetch={false}>
              <Download className="size-4" />
              <span className="font-medium">{t("download_cv")}</span>
            </Link>
          </Button>

          <Button
            variant="default"
            className={cn(
              "flex items-center gap-2 text-white transition-all duration-300 active:scale-95 shadow-lg px-6",
              "bg-[rgb(51,65,85)] hover:bg-[rgb(30,41,59)] shadow-[rgba(51,65,85,0.2)]",
              "dark:bg-[rgb(39,39,42)] dark:hover:bg-[rgb(63,63,70)] dark:border dark:border-[rgb(82,82,91)] dark:shadow-[rgba(0,0,0,0.5)]"
            )}
            asChild
          >
            <Link href="#contact">
              <Mail className="size-4" />
              <span className="font-medium">{t("contact_me")}</span>
            </Link>
          </Button>

          <div className="flex items-center gap-1">
            {SOCIAL_LINKS.map(({ href, icon: Icon, label }) => (
              <Button
                key={label}
                variant="ghost"
                size="icon"
                className="rounded-full hover:text-blue-600"
                asChild
              >
                <Link href={href} target="_blank" rel="noopener noreferrer">
                  <Icon className="size-5" />
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Home;
