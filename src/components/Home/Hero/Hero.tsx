"use client";

import React from "react";
import NextLink from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { sharedMotion } from "@/lib/motion";
import { Link } from "@/i18n/routing";
import { Button } from "components/ui/button";
import { Badge } from "components/ui/badge";
import { Box, Row, Section, Stack } from "components/ui/layout";
import { Text } from "components/ui/text";
import HeroAnimation from "./HeroAnimation";

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

const Hero = () => {
  const t = useTranslations("HomePage");
  const locale = useLocale();

  const sequence = t.raw("type_sequence");
  const cvHref = `/docs/cv-${locale}.pdf`;

  return (
    <Section className="relative flex min-h-screen items-center justify-center">
      <Stack className="items-center justify-center gap-6 px-4 text-center">
        <Badge asChild variant="outline" className="bg-background/50 px-4 py-1.5 backdrop-blur-sm">
          <Row className="gap-2">
            <Box className="size-2 animate-pulse rounded-full bg-green-500" />
            <Text variant="small">{t("status_available")}</Text>
          </Row>
        </Badge>

        <Text variant="h1" className="border-none text-3xl md:text-5xl">
          {t("title")}
        </Text>

        <HeroAnimation sequence={sequence} />

        <Row className="mt-4 flex-wrap justify-center gap-3">
          <motion.section
            whileHover={sharedMotion.whileHover}
            whileTap={sharedMotion.whileTap}
            transition={sharedMotion.transition}
            className="inline-flex"
          >
            <Button
              variant="default"
              aria-label={t("download_cv")}
              className={cn(
                "flex items-center gap-2 text-white transition-all duration-300 active:scale-95 shadow-lg px-6",
                "bg-[rgb(148,187,233)] hover:bg-[rgb(122,165,216)] shadow-blue-200/50",
                "dark:bg-[rgb(45,73,128)] dark:hover:bg-[rgb(59,92,157)] dark:shadow-black/50"
              )}
              asChild
            >
              <a href={cvHref} download>
                <Download className="size-4" />
                <Text variant="small" className="font-medium text-white">
                  {t("download_cv")}
                </Text>
              </a>
            </Button>
          </motion.section>

          <motion.div
            whileHover={sharedMotion.whileHover}
            whileTap={sharedMotion.whileTap}
            transition={sharedMotion.transition}
            className="inline-flex"
          >
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
                <Text variant="small" className="text-white">
                  {t("contact_me")}
                </Text>
              </Link>
            </Button>
          </motion.div>

          <Row className="gap-1">
            {SOCIAL_LINKS.map(({ href, icon: Icon, label }) => (
              <motion.div
                key={label}
                whileHover={sharedMotion.whileHover}
                whileTap={sharedMotion.whileTap}
                transition={sharedMotion.transition}
                className="inline-flex"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:text-blue-600"
                  asChild
                >
                  <NextLink href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                    <Icon className="size-5" />
                  </NextLink>
                </Button>
              </motion.div>
            ))}
          </Row>
        </Row>
      </Stack>
    </Section>
  );
};

export default Hero;
