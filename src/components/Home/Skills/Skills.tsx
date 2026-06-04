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
      title: t("frontend"),
      skills: [
        "TypeScript", "JavaScript", "GraphQL", "React", "Next.js", "CSS3", 
        "Ant Design", "Chakra UI", "Chart.js", "Web3.js", "Figma"
      ],
    },
    {
      title: t("backend"),
      skills: [
        "Java", "Spring", "NestJS", "Express.js", "Solidity", "Rust", "Kotlin", "Python", 
        "Apollo GraphQL", "FastAPI", "JWT", 
        "PostgreSQL", "MongoDB", "Prisma", "MySQL"
      ],
    },
    {
      title: t("tools"),
      skills: [
        "AWS", "Azure", "Vercel", "Git", "NPM", "Vitest", "Jest", "Mocha", 
        "Postman", "Apache", "Jira", "Notion", "Trello"
      ],
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
                {group.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    initial={sharedMotion.initial}
                    animate={sharedMotion.animate}
                    whileHover={sharedMotion.whileHover}
                    whileTap={sharedMotion.whileTap}
                    transition={sharedMotion.transition}
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
