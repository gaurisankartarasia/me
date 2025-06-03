import { MenuItem, ListItemIcon, ListItemText } from "@mui/material";
import { getThemeIcon, getThemeLabel } from "./Icon";

interface ThemeMenuItemProps {
  themeOption: "light" | "dark" | "system";
  currentTheme: "light" | "dark" | "system";
  onSelect: (theme: "light" | "dark" | "system") => void;
}

export function ThemeMenuItem({
  themeOption,
  currentTheme,
  onSelect,
}: ThemeMenuItemProps) {
  return (
    <MenuItem
      onClick={() => onSelect(themeOption)}
      selected={currentTheme === themeOption}
    >
      <ListItemIcon sx={{ fontSize: "1.3rem", color: "text.secondary" }}>
        {getThemeIcon(themeOption)}
      </ListItemIcon>
      <ListItemText secondary={getThemeLabel(themeOption)} />
    </MenuItem>
  );
}
