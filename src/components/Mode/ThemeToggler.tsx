"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

const ThemeToggler = () => {
  const [toggled, setToggled] = useState(false);

  const { theme, setTheme, systemTheme } = useTheme();

  useEffect(() => {
    const toggleCheck = () => {
      setToggled(true);
    };

    toggleCheck();
  }, []);

  if (!toggled) return null;

  const currentThema = theme === "system" ? systemTheme : theme;

  return (
    <Button
      onClick={() => setTheme(currentThema === "dark" ? "light" : "dark")}
      variant="outline"
      size="icon"
      aria-label="Toggle theme"
      className="bg-gray-10/50 dark:bg-zinc-800/50 backdrop-blur-sm border-white/10"
    >
      {currentThema === "dark" ? (
        <Sun className="size-5 text-yellow-500 transition-all duration-300" />
      ) : (
        <Moon className="size-5 text-zinc-900 transition-all duration-300" />
      )}
    </Button>
  );
};

export default ThemeToggler;
