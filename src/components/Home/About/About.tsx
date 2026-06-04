"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { Article, Box, Container, Row, Section, Stack } from "components/ui/layout";
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
    { icon: <Briefcase className="w-5 h-5" />, text: t("work_status") },
  ];

  return (
    <Section className="flex min-h-screen items-center px-4 py-20">
      <Container className="max-w-4xl">
        <Stack className="mb-12 items-center gap-4 text-center">
          <Text variant="h2" className="border-none text-3xl md:text-5xl">
            {t("title")}
          </Text>
          <Box className="h-1 w-20 rounded-full bg-[rgb(148,187,233)] dark:bg-[rgb(45,73,128)]" />
        </Stack>

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
            <Section className="mx-auto grid w-fit grid-cols-1 gap-x-12 gap-y-4 sm:grid-cols-2">
              {highlights.map((item, index) => (
                <Article key={index} className="flex items-center gap-3 text-left">
                  <Row className="shrink-0" aria-hidden="true">
                    {item.icon}
                  </Row>
                  <Text variant="small" className="text-muted-foreground">{item.text}</Text>
                </Article>
              ))}
            </Section>
          </Footer>
        </Article>
      </Container>
    </Section>
  );
};

export default About;
