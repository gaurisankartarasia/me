import { ThemeOptions } from "@mui/material/styles";

export const commonThemeOptions: ThemeOptions = {
  typography: {
    fontFamily: "var(--font-roboto)",
  },
  components: {
    MuiTouchRipple: {
      styleOverrides: {
        root: {
          "&& .MuiTouchRipple-rippleVisible": {
            animationDuration: "150ms",
          },
        },
      },
    },

    MuiInputBase: {
      styleOverrides: {
        input: {
          "&:-webkit-autofill": {
            WebkitBoxShadow: "0 0 0 30px transparent inset",
            backgroundColor: "transparent",
            transition: "background-color 5000s ease-in-out 0s",
          },
          "&:-webkit-autofill:hover": {
            WebkitBoxShadow: "0 0 0 30px transparent inset",
            backgroundColor: "transparent",
          },
          "&:-webkit-autofill:focus": {
            WebkitBoxShadow: "0 0 0 30px transparent inset",
            backgroundColor: "transparent",
          },
          "&:-webkit-autofill:active": {
            WebkitBoxShadow: "0 0 0 30px transparent inset",
            backgroundColor: "transparent",
          },
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 50,
          textTransform: "none",
          padding: "8px 16px",
          boxShadow: "none",
        },
        outlined: ({ theme }) => ({
          border:
            theme.palette.mode === "dark"
              ? "1px solid #ffffff8f"
              : "1px solid #0000008f",
          "$:hover": {
            backgroundColor: theme.palette.action.selected,
          },
        }),
        contained: ({ theme }) => ({
          backgroundColor: theme.palette.primary.main,
        }),
      },
    },
    MuiCard: {
      styleOverrides: {
        root: () => ({
          borderRadius: 25,
          boxShadow: "none",
        }),
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none",
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 25,
        },
      },
    },

    MuiMenu: {
      defaultProps: {
        disableScrollLock: true,
         transitionDuration: 100
      },
      styleOverrides: {
      paper: ({ theme }) => ({
          borderRadius: 4,
          width: "auto",
          boxShadow: theme.shadows[3], // Uses theme.shadows[3] for boxShadow: 3
        }),
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          paddingTop: 12,
          paddingBottom: 12,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 50,
          fontSize: "0.875rem",
          padding: "4px 8px",
          height: "auto",
          minHeight: "unset",
        },
        label: {
          paddingLeft: 8,
          paddingRight: 8,
        },
      },
    },
    MuiPopover:{
      defaultProps: {
        disableScrollLock: true,
          transitionDuration: 100
      },
      styleOverrides: {
      paper: ({ theme }) => ({
          borderRadius:4,
          boxShadow: theme.shadows[3], 
          color: theme.palette.text.secondary,
        }),
      },
    }
  },
};