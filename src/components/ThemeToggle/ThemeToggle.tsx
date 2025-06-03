import { useState } from "react";
import { useMyTheme } from "@/ThemeContext";
import { IconButton, Menu } from "@mui/material";
import { getThemeIcon } from "./Icon";
import { ThemeMenuItem } from "./MenuItem";

export function ThemeToggle() {
  const { theme, setTheme } = useMyTheme();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleThemeSelect = (selectedTheme: "light" | "dark" | "system") => {
    setTheme(selectedTheme);
    handleClose();
  };

  return (
    <>
      <IconButton
        onClick={handleClick}
        size="large"
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 0.5,
        }}
      >
        {getThemeIcon(theme)}
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            "aria-labelledby": "theme-button",
          },
        }}
      >
        {(["light", "dark", "system"] as const).map((themeOption) => (
          <ThemeMenuItem
            key={themeOption}
            themeOption={themeOption}
            currentTheme={theme}
            onSelect={handleThemeSelect}
          />
        ))}
      </Menu>
    </>
  );
}
