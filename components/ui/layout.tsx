"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

function Container({
  className,
  ...props
}: React.ComponentProps<"section">) {
  return <section className={cn("container mx-auto", className)} {...props} />;
}

function Row({ className, ...props }: React.ComponentProps<"section">) {
  return <section className={cn("flex items-center", className)} {...props} />;
}

export { Container, Row };
