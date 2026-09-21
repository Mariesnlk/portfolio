"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { sharedMotion } from "@/lib/motion";
import { Badge } from "components/ui/badge";
import { Box, Container, Section, Stack } from "components/ui/layout";
import { Text } from "components/ui/text";

const Skills = () => {
  const t = useTranslations("Skills");

  const skillGroups = [
    {
      title: t("backend"),
      skills: [
        "TypeScript", "JavaScript", "Node.js", "Express.js",
        "Java", "Spring Boot", "Spring Security", "Python", "FastAPI", "REST APIs", "JWT",
        "Solidity", "Rust",
        "PostgreSQL", "MySQL", "MongoDB", "Prisma"
      ],
    },
    {
      title: t("frontend"),
      skills: [
        "React", "Next.js", "React Native", "TypeScript", "JavaScript", "GraphQL", "Apollo Client", "Ant Design",
        "Chakra UI", "Storybook", "Material UI", "TailwindCSS"
      ],
    },
    {
      title: t("testing"),
      skills: ["JUnit", "Mockito", "Vitest", "Jest", "Playwright", "Unit Testing", "E2E Testing"],
    },
        {
      title: t("cloud"),
      skills: ["AWS", "Azure", "Vercel", "GitHub Pages", "Docker"],
    },
    {
      title: t("tools"),
      skills: ["Git", "Figma", "Jira", "Jenkins", "Vite", "Postman", "Grafana", "Agile/Scrum"],
    },
  ];

  return (
    <Section className="px-4 py-20">
      <Container className="max-w-4xl">
        <Stack className="mb-16 gap-4 text-center">
          <Text variant="h2" className="border-none text-3xl md:text-5xl">
            {t("title")}
          </Text>
          <Box className="mx-auto h-1 w-20 rounded-full bg-[rgb(148,187,233)] dark:bg-[rgb(45,73,128)]" />
        </Stack>

        <Stack className="gap-12">
          {skillGroups.map((group, index) => (
            <Section key={index} className="space-y-6">
              <Text
                variant="large"
                className="text-center font-bold uppercase tracking-widest text-[rgb(100,150,210)] dark:text-[rgb(148,187,233)] md:text-left"
              >
                {group.title}
              </Text>

              <Box className="flex flex-wrap justify-center gap-3 md:justify-start">
                {group.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={sharedMotion.initial}
                    whileInView={sharedMotion.animate}
                    viewport={{ once: true, amount: 0.2 }}
                    whileHover={sharedMotion.whileHover}
                    whileTap={sharedMotion.whileTap}
                    transition={{ ...sharedMotion.transition, delay: skillIndex * 0.03 }}
                    className="inline-flex"
                  >
                    <Badge
                      variant="outline"
                      className={cn(
                        "border-border/50 bg-background/50 px-4 py-1.5 text-sm font-medium shadow-sm backdrop-blur-sm transition-all duration-300",
                        "hover:border-[rgb(148,187,233)] hover:text-[rgb(100,150,210)] dark:hover:border-white/50 dark:hover:text-white",
                        "cursor-default"
                      )}
                    >
                      {skill}
                    </Badge>
                  </motion.span>
                ))}
              </Box>
            </Section>
          ))}
        </Stack>
      </Container>
    </Section>
  );
};

export default Skills;
