import { MdLightMode, MdDarkMode, MdBrightnessAuto } from "react-icons/md";

type ThemeType = "light" | "dark" | "system";

export const getThemeIcon = (themeType: ThemeType) => {
  switch (themeType) {
    case "light":
      return <MdLightMode size={20} />;
    case "dark":
      return <MdDarkMode size={20} />;
    case "system":
      return <MdBrightnessAuto size={20} />;
    default:
      return <MdBrightnessAuto size={20} />;
  }
};

export const getThemeLabel = (themeType: ThemeType) => {
  switch (themeType) {
    case "light":
      return "Light";
    case "dark":
      return "Dark";
    case "system":
      return "System";
    default:
      return "System";
  }
};
