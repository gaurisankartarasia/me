import React, { useState, useMemo, useEffect, useCallback } from "react";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { lightThemeOptions } from "./theme/light";
import { darkThemeOptions } from "./theme/dark";
import { ThemeContext, type ThemeContextType } from "./ThemeContext";

interface ThemeProviderWrapperProps {
  children: React.ReactNode;
}

const muiLightTheme = createTheme(lightThemeOptions);
const muiDarkTheme = createTheme(darkThemeOptions);

const ThemeProviderWrapper: React.FC<ThemeProviderWrapperProps> = ({
  children,
}) => {
  const [currentThemeSetting, setCurrentThemeSetting] = useState<
    "light" | "dark" | "system"
  >(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme");
      if (
        storedTheme === "light" ||
        storedTheme === "dark" ||
        storedTheme === "system"
      ) {
        return storedTheme;
      }
    }
    return "system";
  });

  const [isMounted, setIsMounted] = useState(false);

  const getSystemPreference = useCallback((): "light" | "dark" => {
    if (typeof window !== "undefined" && window.matchMedia) {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    return "light";
  }, []);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const resolvedTheme = useMemo((): "light" | "dark" => {
    if (!isMounted || typeof window === "undefined") {
      const initialSetting =
        (typeof window !== "undefined"
          ? (localStorage.getItem("theme") as ThemeContextType["theme"] | null)
          : null) || currentThemeSetting;

      if (initialSetting === "system") {
        return typeof window !== "undefined" && isMounted
          ? getSystemPreference()
          : "light";
      }
      return initialSetting as "light" | "dark";
    }
    return currentThemeSetting === "system"
      ? getSystemPreference()
      : currentThemeSetting;
  }, [currentThemeSetting, isMounted, getSystemPreference]);

  const setTheme = useCallback((newTheme: "light" | "dark" | "system") => {
    setCurrentThemeSetting(newTheme);
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", newTheme);
    }
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(resolvedTheme);

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemThemeChange = () => {
      if (currentThemeSetting === "system") {
        setCurrentThemeSetting("system");
      }
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, [resolvedTheme, currentThemeSetting, isMounted]); // Re-run if resolvedTheme or currentThemeSetting changes, or on mount

  const muiTheme = useMemo(() => {
    return resolvedTheme === "dark" ? muiDarkTheme : muiLightTheme;
  }, [resolvedTheme]);

  const themeContextValue: ThemeContextType = useMemo(
    () => ({
      theme: currentThemeSetting,
      resolvedTheme: resolvedTheme,
      setTheme,
    }),
    [currentThemeSetting, resolvedTheme, setTheme]
  );

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <MuiThemeProvider theme={muiTheme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProviderWrapper;
