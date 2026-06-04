"use client";

import React from "react";
import Link from "next/link";
import { CodeSquareIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Box } from "components/ui/layout";
import { Text } from "components/ui/text";

interface LogoProps {
  className?: string;
}

const Logo = ({ className }: LogoProps) => {
  return (
    <Link
      href="/"
      className={cn(
        "flex items-center gap-2.5 group hover:opacity-90 transition-opacity",
        className
      )}
    >
      <Box className="flex size-10 items-center justify-center rounded-xl bg-primary shadow-lg shadow-primary/20 transition-transform group-hover:scale-105 dark:shadow-primary/10">
        <CodeSquareIcon className="size-6 text-primary-foreground" />
      </Box>

      <Text variant="large" className="hidden text-xl tracking-tight sm:block md:text-2xl">
        <Text variant="large" className="inline text-primary">
          &lt;
        </Text>
        Dev
        <Text variant="large" className="inline text-primary">
          /&gt;
        </Text>
      </Text>
    </Link>
  );
};

export default Logo;
