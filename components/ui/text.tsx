"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const textVariants = cva("text-foreground transition-colors", {
  variants: {
    variant: {
      h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
      h2: "scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0",
      h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
      p: "leading-7 [&:not(:first-child)]:mt-6",
      lead: "text-xl text-muted-foreground",
      large: "text-lg font-semibold",
      small: "text-sm font-medium leading-none",
      muted: "text-sm text-muted-foreground",
      srOnly: "sr-only",
    },
  },
  defaultVariants: {
    variant: "p",
  },
});

type TextVariant = NonNullable<VariantProps<typeof textVariants>["variant"]>;
type TextTag = "h1" | "h2" | "h3" | "p" | "span";

const textVariantTag: Record<TextVariant, TextTag> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  p: "p",
  lead: "p",
  large: "p",
  small: "span",
  muted: "p",
  srOnly: "span",
};

interface TextProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof textVariants> {
  asChild?: boolean;
}

function Text({ className, variant, asChild = false, ...props }: TextProps) {
  const Comp: React.ElementType = asChild ? Slot : textVariantTag[variant ?? "p"];
  return <Comp className={cn(textVariants({ variant, className }))} {...props} />;
}

export { Text, textVariants };
