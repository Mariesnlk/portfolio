"use client";

import * as React from "react";
import { Languages } from "lucide-react";
import { useLocale } from "next-intl";
import { useRouter, usePathname, routing } from "@/i18n/routing";
import { Button } from "components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "components/ui/dropdown-menu";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const onLanguageChange = (newLocale: string) => {
    // router.replace keeps the same scroll position and path
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="w-10 h-10">
          <Languages className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {routing.locales.map((loc) => (
          <DropdownMenuItem
            key={loc}
            onClick={() => onLanguageChange(loc)}
            className={locale === loc ? "bg-accent font-bold" : ""}
          >
            {loc.toUpperCase()}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
