"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { Text } from "components/ui/text";
import { Button } from "components/ui/button";
import { cn } from "@/lib/utils";
import { sharedMotion } from "@/lib/motion";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact = () => {
  const t = useTranslations("Contact");
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const onChange =
    (field: keyof FormState) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: event.target.value }));
    };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setFeedback(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Failed");
      }

      setFeedback({ type: "success", text: t("success") });
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setFeedback({ type: "error", text: t("error") });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 px-4">
      <article className="container mx-auto max-w-3xl">
        <header className="mb-8 space-y-4">
          <Text
            variant="h2"
            className="text-3xl md:text-5xl font-bold border-none text-center"
          >
            {t("title")}
          </Text>
          <Text variant="lead" className="text-muted-foreground text-center">
            {t("subtitle")}
          </Text>
        </header>

        <form
          onSubmit={onSubmit}
          className="rounded-xl border border-border/60 bg-background/60 p-6 shadow-sm backdrop-blur-sm"
        >
          <fieldset className="grid grid-cols-1 gap-4 sm:grid-cols-2" disabled={isSubmitting}>
            <label className="space-y-2">
              <Text variant="small">{t("name")}</Text>
              <input
                required
                value={form.name}
                onChange={onChange("name")}
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring/60"
                type="text"
                name="name"
                autoComplete="name"
              />
            </label>

            <label className="space-y-2">
              <Text variant="small">{t("email")}</Text>
              <input
                required
                value={form.email}
                onChange={onChange("email")}
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring/60"
                type="email"
                name="email"
                autoComplete="email"
              />
            </label>

            <label className="space-y-2 sm:col-span-2">
              <Text variant="small">{t("subject")}</Text>
              <input
                required
                value={form.subject}
                onChange={onChange("subject")}
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring/60"
                type="text"
                name="subject"
              />
            </label>

            <label className="space-y-2 sm:col-span-2">
              <Text variant="small">{t("message")}</Text>
              <textarea
                required
                value={form.message}
                onChange={onChange("message")}
                className="min-h-36 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring/60"
                name="message"
              />
            </label>
          </fieldset>

          <footer className="mt-4 flex flex-col items-center gap-3">
            <motion.span
              whileHover={isSubmitting ? undefined : sharedMotion.whileHover}
              whileTap={isSubmitting ? undefined : sharedMotion.whileTap}
              transition={sharedMotion.transition}
              className="inline-flex"
            >
              <Button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "flex items-center gap-2 text-white transition-all duration-300 active:scale-95 shadow-lg px-6",
                  "bg-[rgb(51,65,85)] hover:bg-[rgb(30,41,59)] shadow-[rgba(51,65,85,0.2)]",
                  "dark:bg-[rgb(39,39,42)] dark:hover:bg-[rgb(63,63,70)] dark:border dark:border-[rgb(82,82,91)] dark:shadow-[rgba(0,0,0,0.5)]"
                )}
              >
                {isSubmitting ? t("submitting") : t("submit")}
              </Button>
            </motion.span>

            {feedback && (
              <Text
                variant="small"
                className={
                  feedback.type === "success"
                    ? "text-green-600 dark:text-green-400"
                    : "text-red-600 dark:text-red-400"
                }
              >
                {feedback.text}
              </Text>
            )}
          </footer>
        </form>

        <nav aria-label="Follow me" className="mt-8 flex flex-col items-center gap-3">
          <Text variant="large" className="text-center">
            {t("follow_me")}
          </Text>
          <p className="flex items-center gap-3">
            <motion.span
              initial={sharedMotion.initial}
              animate={sharedMotion.animate}
              whileHover={sharedMotion.whileHover}
              whileTap={sharedMotion.whileTap}
              transition={{ ...sharedMotion.transition, delay: 0.05 }}
              className="inline-flex"
            >
              <Button variant="outline" className="flex items-center gap-2" asChild>
                <a
                  href="https://www.linkedin.com/in/mariia-synelnyk/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="size-4" />
                  <strong>LinkedIn</strong>
                </a>
              </Button>
            </motion.span>

            <motion.span
              initial={sharedMotion.initial}
              animate={sharedMotion.animate}
              whileHover={sharedMotion.whileHover}
              whileTap={sharedMotion.whileTap}
              transition={{ ...sharedMotion.transition, delay: 0.12 }}
              className="inline-flex"
            >
              <Button variant="outline" className="flex items-center gap-2" asChild>
                <a
                  href="https://github.com/Mariesnlk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="size-4" />
                  <strong>GitHub</strong>
                </a>
              </Button>
            </motion.span>
          </p>
        </nav>
      </article>
    </section>
  );
};

export default Contact;
