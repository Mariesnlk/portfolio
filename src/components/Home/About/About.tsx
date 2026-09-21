"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { sharedMotion } from "@/lib/motion";
import { Article, Box, Container, Section, Stack } from "components/ui/layout";
import { Footer } from "components/ui/footer";
import { Text } from "components/ui/text";
import {
  MapPin,
  GraduationCap,
  Briefcase,
  Home as HomeIcon,
} from "lucide-react";

const About = () => {
  const t = useTranslations("About");

  const highlights = [
    { icon: <MapPin className="w-5 h-5" />, text: t("location_munich") },
    { icon: <HomeIcon className="w-5 h-5" />, text: t("origin_kyiv") },
    { icon: <GraduationCap className="w-5 h-5" />, text: t("education") },
    { icon: <Briefcase className="w-5 h-5" />, text: t("work_permission") },
  ];

  return (
    <Section className="flex min-h-screen items-center px-4 py-20">
      <Container className="max-w-6xl">
        <Stack className="mb-12 items-center gap-4 text-center">
          <Text variant="h2" className="border-none text-3xl md:text-5xl">
            {t("title")}
          </Text>
          <Box className="h-1 w-20 rounded-full bg-[rgb(148,187,233)] dark:bg-[rgb(45,73,128)]" />
        </Stack>

        <Section className="grid items-center gap-10 md:grid-cols-[minmax(220px,300px)_1fr] md:items-start md:gap-14">
          <motion.div
            initial={sharedMotion.initial}
            whileInView={sharedMotion.animate}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={sharedMotion.whileHover}
            whileTap={sharedMotion.whileHover}
            transition={sharedMotion.transition}
            className="relative mx-auto aspect-square w-full max-w-72 overflow-hidden rounded-full border-2 border-[rgb(148,187,233)] shadow-lg dark:border-[rgb(45,73,128)]"
          >
            <Image
              src="/images/avatar.png"
              alt={t("photo_alt")}
              fill
              sizes="(max-width: 767px) 288px, 300px"
              className="object-cover object-[center_20%]"
            />
          </motion.div>

          <Article className="space-y-6 text-center md:text-left">
            <Text variant="lead" className="text-xl md:text-2xl">
              {t("greeting")}
            </Text>

            <Stack className="gap-6 text-muted-foreground">
              <Text variant="p" className="text-lg">{t("bio_p1")}</Text>
              <Text variant="p" className="text-lg">{t("bio_p2")}</Text>
              <Text variant="p" className="text-lg italic">{t("bio_p3")}</Text>
            </Stack>

            <Footer className="mt-12 border-t border-border/50 pt-8">
              <Section className="mx-auto grid w-fit grid-cols-1 gap-x-12 gap-y-4 sm:grid-cols-2 md:mx-0">
                {highlights.map((item, index) => (
                  <Article key={index} className="flex items-center gap-3 text-left">
                    <motion.div
                      initial={sharedMotion.initial}
                      whileInView={sharedMotion.animate}
                      viewport={{ once: true, amount: 0.2 }}
                      whileHover={sharedMotion.whileHover}
                      whileTap={sharedMotion.whileTap}
                      transition={{ ...sharedMotion.transition, delay: index * 0.06 }}
                      className="flex shrink-0 items-center"
                      aria-hidden="true"
                    >
                      {item.icon}
                    </motion.div>
                    <Text variant="small" className="text-muted-foreground">{item.text}</Text>
                  </Article>
                ))}
              </Section>
            </Footer>
          </Article>
        </Section>
      </Container>
    </Section>
  );
};

export default About;
