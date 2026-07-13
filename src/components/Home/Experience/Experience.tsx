"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { Briefcase, GraduationCap } from "lucide-react";
import { sharedMotion } from "@/lib/motion";
import { Badge } from "components/ui/badge";
import { Container, Row, Stack } from "components/ui/layout";
import { Text } from "components/ui/text";
import {
  Timeline,
  TimelineCard,
  TimelineItem,
  TimelineItems,
  TimelineLine,
  TimelineList,
  TimelineListItem,
  TimelineMarker,
} from "components/ui/timeline";

type TimelineItem = {
  type: "work" | "education";
  title: string;
  organization: string;
  period: string;
  meta?: string;
  details?: string[];
};

const timelineLineVariants = {
  hidden: { opacity: 0, scaleY: 0 },
  visible: { opacity: 1, scaleY: 1 },
};

const timelineItemVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const markerVariants = {
  hidden: { opacity: 0, scale: 0.35 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 420,
      damping: 22,
    },
  },
};

const leftCardVariants = {
  hidden: { opacity: 0, x: -28, y: 10 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" as const },
  },
};

const rightCardVariants = {
  hidden: { opacity: 0, x: 28, y: 10 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" as const },
  },
};

const detailsVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.035,
      delayChildren: 0.12,
    },
  },
};

const detailVariants = {
  hidden: { opacity: 0, x: -8 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.18, ease: "easeOut" as const },
  },
};

const Experience = () => {
  const t = useTranslations("Experience");
  const items = t.raw("items") as TimelineItem[];

  return (
    <Container id="experience" className="max-w-5xl px-4 py-20">
      <Stack className="mb-16 items-center gap-4 text-center">
        <Text variant="h2" className="border-none text-3xl md:text-5xl">
          {t("title")}
        </Text>
        <Text variant="lead" className="max-w-2xl text-base md:text-lg">
          {t("subtitle")}
        </Text>
        <Row className="h-1 w-20 rounded-full bg-[rgb(148,187,233)] dark:bg-[rgb(45,73,128)]" />
      </Stack>

      <Timeline>
        <TimelineLine
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={timelineLineVariants}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        <TimelineItems>
          {items.map((item, index) => {
            const Icon = item.type === "education" ? GraduationCap : Briefcase;
            const alignRight = index % 2 === 0;

            return (
              <TimelineItem
                key={`${item.title}-${item.period}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={timelineItemVariants}
              >
                <TimelineMarker variants={markerVariants}>
                  <Icon className="size-4" />
                </TimelineMarker>

                <TimelineCard
                  align={alignRight ? "right" : "left"}
                  variants={alignRight ? rightCardVariants : leftCardVariants}
                  whileHover={sharedMotion.whileHover}
                  whileTap={sharedMotion.whileTap}
                >
                  <Stack className="gap-3">
                    <Row className="flex-wrap gap-2">
                      <Badge
                        variant="outline"
                        className="border-[rgb(148,187,233)] text-[rgb(100,150,210)] dark:border-[rgb(45,73,128)] dark:text-[rgb(148,187,233)]"
                      >
                        {item.type === "education" ? t("education") : t("work")}
                      </Badge>
                      <Text variant="small" className="text-muted-foreground">
                        {item.period}
                      </Text>
                    </Row>

                    <Stack>
                      <Text variant="h3" className="border-none text-xl">
                        {item.title}
                      </Text>
                      <Text variant="p" className="mt-2 text-sm text-muted-foreground">
                        {item.organization}
                      </Text>
                      {item.meta ? (
                        <Text variant="small" className="mt-2 block text-muted-foreground">
                          {item.meta}
                        </Text>
                      ) : null}
                    </Stack>
                  </Stack>

                  {item.details?.length ? (
                    <TimelineList variants={detailsVariants}>
                      {item.details.map((detail) => (
                        <TimelineListItem key={detail} variants={detailVariants}>
                          {detail}
                        </TimelineListItem>
                      ))}
                    </TimelineList>
                  ) : null}
                </TimelineCard>
              </TimelineItem>
            );
          })}
        </TimelineItems>
      </Timeline>
    </Container>
  );
};

export default Experience;
