
// import { useEffect, useState } from "react";
// import { Moon, Sun } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { MonitorSmartphone } from 'lucide-react';


// type Theme = "light" | "dark" | "system";

// export function ThemeSwitch() {
//   // Initialize state from localStorage or system preference
//   const getInitialTheme = (): Theme => {
//     const storedTheme = localStorage.getItem("theme") as Theme | null;
//     if (storedTheme) return storedTheme;
//     return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
//   };

//   const [theme, setTheme] = useState<Theme>(getInitialTheme);

//   // Function to apply the theme
//   const applyTheme = (theme: Theme) => {
//     const root = window.document.documentElement;
//     root.classList.remove("light", "dark");

//     const themeToApply =
//       theme === "system"
//         ? window.matchMedia("(prefers-color-scheme: dark)").matches
//           ? "dark"
//           : "light"
//         : theme;

//     root.classList.add(themeToApply);
//     localStorage.setItem("theme", theme);
//   };

//   // Apply theme on mount
//   useEffect(() => {
//     applyTheme(theme);
//   }, [theme]);

//   // Update theme when user selects a new option
//   useEffect(() => {
//     applyTheme(theme);
//   }, [theme]);

//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger asChild>
//         <Button
//           variant="ghost"
//           size="icon"
//           className="rounded-lg border border-transparent hover:border-[#832c12]/20 dark:hover:border-[#e6d5c3]/20 transition-all duration-300 text-[#8B4513] dark:text-[#e6d5c3]"
//         >
//           <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
//           <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
//           <span className="sr-only">Toggle theme</span>
//         </Button>
//       </DropdownMenuTrigger>
//       <DropdownMenuContent align="end" className="font-serif bg-[#fefaf5] dark:bg-[#2a2420] border border-[#832c12]/20 dark:border-[#e6d5c3]/20">
//         <DropdownMenuItem
//           onClick={() => setTheme("light")}
//           className={`${theme === "light" ? "text-[#832c12] bg-[#e6d5c3]/50 dark:text-[#e6d5c3] font-medium" : "text-[#8B4513] dark:text-[#e6d5c3]/80"}`}
//         >
//           <Sun className="mr-2 h-4 w-4" />
//           <span>Light</span>
//         </DropdownMenuItem>
//         <DropdownMenuItem
//           onClick={() => setTheme("dark")}
//           className={`${theme === "dark" ? "text-[#832c12] border dark:bg-[#e6d5c3]/10 dark:text-[#e6d5c3] font-medium" : "text-[#8B4513] dark:text-[#e6d5c3]/80"}`}
//         >
//           <Moon className="mr-2 h-4 w-4" />
//           <span>Dark</span>
//         </DropdownMenuItem>
//         <DropdownMenuItem
//           onClick={() => setTheme("system")}
//           className={`${theme === "system" ? "text-[#832c12] bg-[#e6d5c3]/50 dark:text-[#e6d5c3] font-medium" : "text-[#8B4513] dark:text-[#e6d5c3]/80"}`}
//         >
//           <div className="mr-2 h-4 w-4 flex items-center justify-center">
//           <MonitorSmartphone/>
//           </div>
//           <span>System</span>
//         </DropdownMenuItem>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   );
// }

// export default ThemeSwitch;






import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

// Define the possible theme states
type Theme = "light" | "dark" | "system";

export function ThemeSwitch() {
  // --- State Initialization ---

  // Function to get the initial theme preference
  const getInitialTheme = (): Theme => {
    // 1. Check localStorage for a previously saved theme ("light", "dark", or "system")
    const storedTheme = localStorage.getItem("theme") as Theme | null;
    if (storedTheme && ["light", "dark", "system"].includes(storedTheme)) {
      return storedTheme;
    }
    // 2. If no valid theme is stored, default to "system"
    return "system";
  };

  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  // Determine the theme actually applied to the document (resolves "system")
  const getEffectiveTheme = (t: Theme): "light" | "dark" => {
    if (t === "system") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return t;
  };

  const [effectiveTheme, setEffectiveTheme] = useState<"light" | "dark">(() => getEffectiveTheme(theme));

  // --- Theme Application Logic ---

  // Function to apply the theme class to <html> and save preference
  const applyTheme = (newTheme: Theme) => {
    const root = window.document.documentElement;
    const resolvedTheme = getEffectiveTheme(newTheme);

    // Update the class on the root element
    root.classList.remove("light", "dark");
    root.classList.add(resolvedTheme);

    // Save the *chosen* preference (light, dark, or system) to localStorage
    localStorage.setItem("theme", newTheme);

    // Update the effective theme state
    setEffectiveTheme(resolvedTheme);
  };

  // --- Effects ---

  // Apply the theme whenever the 'theme' state changes
  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  // Listen for system theme changes *only* if the current theme is 'system'
  useEffect(() => {
    if (theme !== "system") {
      return; // Don't listen if the theme is explicitly set to light or dark
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = () => {
      console.log("System theme changed, reapplying system theme setting.");
      applyTheme("system"); // Re-apply to potentially change the effective theme
    };

    mediaQuery.addEventListener("change", handleChange);
    console.log("Added system theme change listener.");

    // Cleanup listener on component unmount or when theme changes away from 'system'
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
      console.log("Removed system theme change listener.");
    };
  }, [theme]); // Re-run this effect if the theme state changes

  // --- Event Handler ---

  // Toggle between light and dark mode directly
  const handleToggle = () => {
    // When toggling, explicitly set to light or dark, overriding 'system'
    setTheme(effectiveTheme === "dark" ? "light" : "dark");
  };

  // --- Render ---

  return (
    <Button
      variant="outline" // Use standard Shadcn variant
      size="icon"
      onClick={handleToggle}
      aria-label={`Switch to ${effectiveTheme === 'dark' ? 'light' : 'dark'} mode`} // More specific label
    >
      {/* Conditional rendering based on the *effective* theme */}
      {effectiveTheme === "light" ? (
        <Sun className="h-[1.2rem] w-[1.2rem] transition-all" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem] transition-all" />
      )}
      {/* Removed the absolute positioning and complex rotate/scale transitions for simplicity */}
      {/* You can add back transitions if desired, but ensure they work without interfering */}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

export default ThemeSwitch;