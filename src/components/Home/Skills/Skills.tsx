"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { sharedMotion } from "@/lib/motion";
import { Badge } from "components/ui/badge";
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
    <section id="skills" className="py-20 px-4 bg-transparent">
      <div className="container max-w-4xl mx-auto">

        <div className="flex flex-col items-center text-center mb-16 space-y-4">
          <Text variant="h2" className="text-3xl md:text-5xl font-bold border-none">
            {t("title")}
          </Text>
          <div className="h-1 w-20 bg-[rgb(148,187,233)] dark:bg-[rgb(45,73,128)] rounded-full" />
        </div>

        <div className="grid grid-cols-1 gap-12">
          {skillGroups.map((group, index) => (
            <div key={index} className="space-y-6">
              <Text 
                variant="large" 
                className="text-[rgb(100,150,210)] dark:text-[rgb(148,187,233)] font-bold uppercase tracking-widest text-center md:text-left"
              >
                {group.title}
              </Text>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
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
                        "px-4 py-1.5 text-sm font-medium transition-all duration-300",
                        "bg-background/50 backdrop-blur-sm border-border/50",
                        "hover:border-[rgb(148,187,233)] hover:text-[rgb(100,150,210)] dark:hover:text-white dark:hover:border-white/50",
                        "cursor-default shadow-sm"
                      )}
                    >
                      {skill}
                    </Badge>
                  </motion.span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
