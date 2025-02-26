

// import  { useEffect, useState } from "react";
// import { Moon, Sun } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";

// type Theme = "light" | "dark" | "system";

// export function ThemeSwitch() {
//   const [theme, setTheme] = useState<Theme>("system");
  
//   useEffect(() => {
//     // Initialize theme from localStorage or system preference
//     const storedTheme = localStorage.getItem("theme") as Theme;
//     if (storedTheme) {
//       setTheme(storedTheme);
//     } else {
//       // Check system preference
//       if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
//         setTheme("dark");
//       } else {
//         setTheme("light");
//       }
//     }
//   }, []);

//   useEffect(() => {
//     // Apply theme changes
//     const root = window.document.documentElement;
    
//     // Remove old theme
//     root.classList.remove("light", "dark");
    
//     // Determine which theme to apply
//     let themeToApply: "light" | "dark";
    
//     if (theme === "system") {
//       themeToApply = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
//     } else {
//       themeToApply = theme;
//     }
    
//     // Apply new theme
//     root.classList.add(themeToApply);
    
//     // Store in localStorage
//     localStorage.setItem("theme", theme);
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
//           className={` ${theme === "light" ? "text-[#832c12] bg-[#e6d5c3]/50 dark:text-[#e6d5c3] font-medium" : "text-[#8B4513] dark:text-[#e6d5c3]/80"}`}
//         >
//           <Sun className="mr-2 h-4 w-4" />
//           <span>Light</span>
//         </DropdownMenuItem>
//         <DropdownMenuItem 
//           onClick={() => setTheme("dark")}
//           className={` ${theme === "dark" ? "text-[#832c12] border dark:bg-[#e6d5c3]/10 dark:text-[#e6d5c3] font-medium" : "text-[#8B4513] dark:text-[#e6d5c3]/80"}`}
//         >
//           <Moon className="mr-2 h-4 w-4" />
//           <span>Dark</span>
//         </DropdownMenuItem>


//         <DropdownMenuItem 
//           onClick={() => setTheme("system")}
//           className={` ${theme === "system" ? "text-[#832c12] bg-[#e6d5c3]/50 dark:text-[#e6d5c3] font-medium" : "text-[#8B4513] dark:text-[#e6d5c3]/80"}`}
//         >
//           <div className="mr-2 h-4 w-4 flex items-center justify-center">
//             <Sun className="h-3 w-3 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
//             <Moon className="absolute h-3 w-3 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Theme = "light" | "dark" | "system";

export function ThemeSwitch() {
  // Initialize state from localStorage or system preference
  const getInitialTheme = (): Theme => {
    const storedTheme = localStorage.getItem("theme") as Theme | null;
    if (storedTheme) return storedTheme;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  };

  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  // Function to apply the theme
  const applyTheme = (theme: Theme) => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");

    const themeToApply =
      theme === "system"
        ? window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
        : theme;

    root.classList.add(themeToApply);
    localStorage.setItem("theme", theme);
  };

  // Apply theme on mount
  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  // Update theme when user selects a new option
  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-lg border border-transparent hover:border-[#832c12]/20 dark:hover:border-[#e6d5c3]/20 transition-all duration-300 text-[#8B4513] dark:text-[#e6d5c3]"
        >
          <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="font-serif bg-[#fefaf5] dark:bg-[#2a2420] border border-[#832c12]/20 dark:border-[#e6d5c3]/20">
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className={`${theme === "light" ? "text-[#832c12] bg-[#e6d5c3]/50 dark:text-[#e6d5c3] font-medium" : "text-[#8B4513] dark:text-[#e6d5c3]/80"}`}
        >
          <Sun className="mr-2 h-4 w-4" />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className={`${theme === "dark" ? "text-[#832c12] border dark:bg-[#e6d5c3]/10 dark:text-[#e6d5c3] font-medium" : "text-[#8B4513] dark:text-[#e6d5c3]/80"}`}
        >
          <Moon className="mr-2 h-4 w-4" />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className={`${theme === "system" ? "text-[#832c12] bg-[#e6d5c3]/50 dark:text-[#e6d5c3] font-medium" : "text-[#8B4513] dark:text-[#e6d5c3]/80"}`}
        >
          <div className="mr-2 h-4 w-4 flex items-center justify-center">
            <Sun className="h-3 w-3 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-3 w-3 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </div>
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default ThemeSwitch;
