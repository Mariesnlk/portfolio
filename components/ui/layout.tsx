"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

function Main({ className, ...props }: React.ComponentProps<"main">) {
  return <main className={cn(className)} {...props} />;
}

function Section({ className, ...props }: React.ComponentProps<"section">) {
  return <section className={cn(className)} {...props} />;
}

function Header({ className, ...props }: React.ComponentProps<"header">) {
  return <header className={cn(className)} {...props} />;
}

function Article({ className, ...props }: React.ComponentProps<"article">) {
  return <article className={cn(className)} {...props} />;
}

function Nav({ className, ...props }: React.ComponentProps<"nav">) {
  return <nav className={cn(className)} {...props} />;
}

function Form({ className, ...props }: React.ComponentProps<"form">) {
  return <form className={cn(className)} {...props} />;
}

function Fieldset({ className, ...props }: React.ComponentProps<"fieldset">) {
  return <fieldset className={cn(className)} {...props} />;
}

function Container({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("container mx-auto", className)} {...props} />;
}

function Box({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn(className)} {...props} />;
}

function Row({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("flex items-center", className)} {...props} />;
}

function Stack({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("flex flex-col", className)} {...props} />;
}

export {
  Main,
  Section,
  Header,
  Article,
  Nav,
  Form,
  Fieldset,
  Container,
  Box,
  Row,
  Stack,
};
