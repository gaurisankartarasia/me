import { createContext, useContext } from "react";

export interface ThemeContextType {
  theme: "light" | "dark" | "system";
  resolvedTheme: "light" | "dark";
  setTheme: (theme: "light" | "dark" | "system") => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export const useMyTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    // Updated error message for clarity
    throw new Error("useMyTheme must be used within a ThemeProviderWrapper");
  }
  return context;
};
