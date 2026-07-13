"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

function Timeline({ className, ...props }: React.ComponentProps<typeof motion.section>) {
  return <motion.section className={cn("relative", className)} {...props} />;
}

function TimelineLine({ className, ...props }: React.ComponentProps<typeof motion.section>) {
  return (
    <motion.section
      aria-hidden="true"
      className={cn("absolute left-4 top-0 h-full w-px origin-top bg-border md:left-1/2", className)}
      {...props}
    />
  );
}

function TimelineItems({ className, ...props }: React.ComponentProps<typeof motion.section>) {
  return <motion.section className={cn("space-y-10", className)} {...props} />;
}

function TimelineItem({
  className,
  ...props
}: React.ComponentProps<typeof motion.article>) {
  return (
    <motion.article
      className={cn("relative grid gap-4 pl-12 md:grid-cols-2 md:gap-10 md:pl-0", className)}
      {...props}
    />
  );
}

function TimelineMarker({ className, ...props }: React.ComponentProps<typeof motion.section>) {
  return (
    <motion.section
      className={cn(
        "absolute left-4 top-1 z-10 flex size-8 -translate-x-1/2 items-center justify-center rounded-full border",
        "border-[rgb(148,187,233)] bg-background text-[rgb(100,150,210)] shadow-sm md:left-1/2",
        "dark:border-[rgb(45,73,128)] dark:text-[rgb(148,187,233)]",
        className
      )}
      {...props}
    />
  );
}

function TimelineCard({
  align = "left",
  className,
  ...props
}: React.ComponentProps<typeof motion.section> & { align?: "left" | "right" }) {
  return (
    <motion.section
      className={cn(
        "space-y-4 rounded-lg border border-border/60 bg-background/60 p-5 shadow-sm backdrop-blur-sm",
        "transition-colors duration-300 hover:border-[rgb(148,187,233)] dark:hover:border-white/40",
        align === "right" ? "md:col-start-2" : "md:col-start-1",
        className
      )}
      {...props}
    />
  );
}

function TimelineList({ className, ...props }: React.ComponentProps<typeof motion.ul>) {
  return <motion.ul className={cn("space-y-2 text-sm leading-6 text-muted-foreground", className)} {...props} />;
}

function TimelineListItem({
  className,
  children,
  ...props
}: Omit<React.ComponentProps<typeof motion.li>, "children"> & {
  children: React.ReactNode;
}) {
  return (
    <motion.li className={cn("flex gap-2", className)} {...props}>
      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[rgb(148,187,233)] dark:bg-[rgb(45,73,128)]" />
      <span>{children}</span>
    </motion.li>
  );
}

export {
  Timeline,
  TimelineCard,
  TimelineItem,
  TimelineItems,
  TimelineLine,
  TimelineList,
  TimelineListItem,
  TimelineMarker,
};
