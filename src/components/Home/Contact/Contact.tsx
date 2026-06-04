"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { Button } from "components/ui/button";
import {
  Article,
  Fieldset,
  Form,
  Nav,
  Section,
  Stack,
} from "components/ui/layout";
import { Footer } from "components/ui/footer";
import { Text } from "components/ui/text";
import { Label } from "components/ui/label";
import { Input } from "components/ui/input";
import { Textarea } from "components/ui/textarea";
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
    <Section className="px-4 py-20">
      <Article className="container mx-auto max-w-3xl">
        <Stack className="mb-8 gap-4">
          <Text variant="h2" className="border-none text-center text-3xl font-bold md:text-5xl">
            {t("title")}
          </Text>
          <Text variant="lead" className="text-center">
            {t("subtitle")}
          </Text>
        </Stack>

        <Form
          onSubmit={onSubmit}
          className="rounded-xl border border-border/60 bg-background/60 p-6 shadow-sm backdrop-blur-sm"
        >
          <Fieldset className="grid grid-cols-1 gap-4 sm:grid-cols-2" disabled={isSubmitting}>
            <Stack className="gap-2">
              <Label htmlFor="contact-name">{t("name")}</Label>
              <Input
                id="contact-name"
                required
                value={form.name}
                onChange={onChange("name")}
                type="text"
                name="name"
                autoComplete="name"
              />
            </Stack>

            <Stack className="gap-2">
              <Label htmlFor="contact-email">{t("email")}</Label>
              <Input
                id="contact-email"
                required
                value={form.email}
                onChange={onChange("email")}
                type="email"
                name="email"
                autoComplete="email"
              />
            </Stack>

            <Stack className="gap-2 sm:col-span-2">
              <Label htmlFor="contact-subject">{t("subject")}</Label>
              <Input
                id="contact-subject"
                required
                value={form.subject}
                onChange={onChange("subject")}
                type="text"
                name="subject"
              />
            </Stack>

            <Stack className="gap-2 sm:col-span-2">
              <Label htmlFor="contact-message">{t("message")}</Label>
              <Textarea
                id="contact-message"
                required
                value={form.message}
                onChange={onChange("message")}
                className="min-h-36"
                name="message"
              />
            </Stack>
          </Fieldset>

          <Footer className="mt-4 flex flex-col items-center gap-3">
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
          </Footer>
        </Form>

        <Nav aria-label="Follow me" className="mt-8 flex flex-col items-center gap-3">
          <Text variant="large" className="text-center">{t("follow_me")}</Text>
          <Stack className="flex-row items-center gap-3">
            <motion.span
              initial={sharedMotion.initial}
              animate={sharedMotion.animate}
              whileHover={sharedMotion.whileHover}
              whileTap={sharedMotion.whileTap}
              transition={{ ...sharedMotion.transition, delay: 0.05 }}
              className="inline-flex"
            >
              <Button variant="outline" className="flex items-center gap-2" asChild>
                <Link
                  href="https://www.linkedin.com/in/mariia-synelnyk/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="size-4" />
                  <strong>LinkedIn</strong>
                </Link>
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
                <Link
                  href="https://github.com/Mariesnlk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="size-4" />
                  <strong>GitHub</strong>
                </Link>
              </Button>
            </motion.span>
          </Stack>
        </Nav>
      </Article>
    </Section>
  );
};

export default Contact;
