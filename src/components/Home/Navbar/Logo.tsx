"use client";

import React from "react";
import Link from "next/link";
import { CodeSquareIcon } from "lucide-react";
import { cn } from "@/src/lib/utils";

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
      <div className="flex size-10 items-center justify-center rounded-xl bg-primary shadow-lg shadow-primary/20 dark:shadow-primary/10 transition-transform group-hover:scale-105">
        <CodeSquareIcon className="size-6 text-primary-foreground" />
      </div>

      <span className="hidden text-xl font-bold tracking-tight text-foreground sm:block md:text-2xl">
        <span className="text-primary">&lt;</span>
        Dev
        <span className="text-primary">/&gt;</span>
      </span>
    </Link>
  );
};

export default Logo;
