"use client";

import * as React from "react";
import { Languages } from "lucide-react";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import { isAppLocale, routing, useRouter } from "@/i18n/routing";
import { Button } from "components/ui/button";
import { Text } from "components/ui/text";
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

  const internalPathname = React.useMemo(() => {
    let normalized = pathname || "/";

    // Guard against duplicate locale prefixes like /de/de.
    while (true) {
      const segments = normalized.split("/");
      const firstSegment = segments[1];

      if (!firstSegment || !isAppLocale(firstSegment)) {
        break;
      }

      segments.splice(1, 1);
      normalized = segments.join("/") || "/";
    }

    return normalized;
  }, [pathname]);

  const onLanguageChange = (newLocale: string) => {
    if (newLocale === locale) return;

    router.replace(internalPathname, { locale: newLocale });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="w-10 h-10">
          <Languages className="h-[1.2rem] w-[1.2rem]" />
          <Text variant="srOnly">Toggle language</Text>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {routing.locales.map((loc) => (
          <DropdownMenuItem
            key={loc}
            onSelect={() => onLanguageChange(loc)}
            className={locale === loc ? "bg-accent font-bold" : ""}
          >
            {loc.toUpperCase()}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
