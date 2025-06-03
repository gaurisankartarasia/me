// src/theme/presets.ts
import { PaletteOptions, ThemeOptions } from '@mui/material/styles';
import { commonThemeOptions } from './index'; // Assuming common.ts is in the same directory
import { lightThemeOptions as defaultLightThemeOptions } from './light';
import { darkThemeOptions as defaultDarkThemeOptions } from './dark';
import { deepmerge } from '@mui/utils';

// Define a structure for our named color schemes
export interface ColorScheme {
  id: string;
  name: string;
  light: { // Palette colors for light mode
    primaryMain: string;
    secondaryMain: string;
    // You can add more specific overrides if needed, e.g., background, text
  };
  dark: { // Palette colors for dark mode
    primaryMain: string;
    secondaryMain: string;
    // You can add more specific overrides if needed
  };
}

export const colorSchemes: ColorScheme[] = [
  {
    id: 'default',
    name: 'Default',
    light: {
      primaryMain: defaultLightThemeOptions.palette!.primary!.main as string,
      secondaryMain: defaultLightThemeOptions.palette!.secondary!.main as string,
    },
    dark: {
      primaryMain: defaultDarkThemeOptions.palette!.primary!.main as string,
      secondaryMain: defaultDarkThemeOptions.palette!.secondary!.main as string,
    },
  },
  {
    id: 'oceanBlue',
    name: 'Ocean Blue',
    light: {
      primaryMain: '#0077cc', // A nice blue
      secondaryMain: '#005fa3',
    },
    dark: {
      primaryMain: '#33aaff', // Lighter blue for dark mode
      secondaryMain: '#1a8cff',
    },
  },
  {
    id: 'forestGreen',
    name: 'Forest Green',
    light: {
      primaryMain: '#2e7d32', // Green
      secondaryMain: '#1b5e20',
    },
    dark: {
      primaryMain: '#66bb6a', // Lighter green for dark mode
      secondaryMain: '#4caf50',
    },
  },
  // Add more presets here
  {
    id: 'sunsetOrange',
    name: 'Sunset Orange',
    light: {
      primaryMain: '#ff8f00', // Orange
      secondaryMain: '#e65100',
    },
    dark: {
      primaryMain: '#ffcc80', // Lighter orange for dark mode
      secondaryMain: '#ffa726',
    },
  }
];

// Function to generate theme options for a given scheme and mode
export const generateThemeOptions = (
  scheme: ColorScheme,
  mode: 'light' | 'dark',
  customPrimary?: string, // For dynamic color picker
  customSecondary?: string // For dynamic color picker
): ThemeOptions => {
  const baseModeOptions = mode === 'dark' ? defaultDarkThemeOptions : defaultLightThemeOptions;
  
  let primaryMain = mode === 'light' ? scheme.light.primaryMain : scheme.dark.primaryMain;
  let secondaryMain = mode === 'light' ? scheme.light.secondaryMain : scheme.dark.secondaryMain;

  if (scheme.id === 'custom' && customPrimary && customSecondary) {
    primaryMain = customPrimary;
    secondaryMain = customSecondary;
    // For custom, we might want to intelligently derive dark mode colors if not provided
    // Or, for simplicity, use the same custom colors for both modes and let MUI's mode
    // handle background/text contrast. Let's go with simplicity for now.
    // If mode is dark for custom, we could potentially adjust the custom colors:
    // For example:
    // if (mode === 'dark') {
    //   primaryMain = lighten(customPrimary, 0.2); // Placeholder, use a real color lib
    //   secondaryMain = lighten(customSecondary, 0.2);
    // }
  }

  const paletteOverrides: PaletteOptions = {
    primary: { main: primaryMain },
    secondary: { main: secondaryMain },
  };

  // Merge:
  // 1. Common options (typography, component styles)
  // 2. Base light/dark options (backgrounds, default text colors, mode)
  // 3. Specific scheme's color overrides (primary, secondary)
  return deepmerge(
    commonThemeOptions,
    deepmerge(baseModeOptions, { palette: paletteOverrides })
  );
};