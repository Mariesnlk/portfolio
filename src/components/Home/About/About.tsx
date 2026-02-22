"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { Text } from "components/ui/text";
import {
  MapPin,
  GraduationCap,
  Briefcase,
  Home as HomeIcon,
} from "lucide-react";

const About = () => {
  const t = useTranslations("About");

  const highlights = [
    { icon: <MapPin className="w-5 h-5" />, text: t("location_munich") },
    { icon: <HomeIcon className="w-5 h-5" />, text: t("origin_kyiv") },
    { icon: <GraduationCap className="w-5 h-5" />, text: t("education") },
    { icon: <Briefcase className="w-5 h-5" />, text: t("work_status") },
  ];

  return (
    <section
      id="about"
      className="relative flex min-h-screen flex-col items-center justify-center py-20 px-4 transition-colors duration-500"
    >
      <div className="container max-w-4xl mx-auto">
        <div className="flex flex-col items-center text-center mb-12 space-y-4">
          <Text
            variant="h2"
            className="text-3xl md:text-5xl font-bold tracking-tight border-none"
          >
            {t("title")}
          </Text>
          <div className="h-1 w-20 bg-[rgb(148,187,233)] dark:bg-[rgb(45,73,128)] rounded-full" />
        </div>

        <div className="space-y-6 text-center md:text-left">
          <Text variant="lead" className="text-xl md:text-2xl font-medium text-foreground">
            {t("greeting")}
          </Text>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <Text variant="p" className="text-lg">{t("bio_p1")}</Text>
            <Text variant="p" className="text-lg">{t("bio_p2")}</Text>
            <Text variant="p" className="text-lg italic">{t("bio_p3")}</Text>
          </div>

          <div className="mt-12 pt-8 border-t border-border/50 flex flex-col items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4 w-fit">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-left">
                  <div className="shrink-0">{item.icon}</div>
                  <Text variant="small" className="text-muted-foreground">
                    {item.text}
                  </Text>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
