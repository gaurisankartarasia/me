import React from "react";
import { NavLink } from "react-router-dom";
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import { NavItem as NavItemType } from "@/types/index";

export const NavItem: React.FC<NavItemType> = ({ path, name, icon, size }) => {
  const theme = useTheme();

  return (
    <ListItemButton
      component={NavLink}
      to={path}
      sx={{
        color: "text.secondary",
        backgroundColor: "transparent",
        "&.active": {
          color: theme.palette.primary.main,
          backgroundColor: theme.palette.action.selected,
        },
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(1, 2),
        borderRadius: "50px",
        textDecoration: "none",
      }}
    >
      <ListItemIcon
        sx={{
          minWidth: "unset",
          color: "inherit",
          fontSize: size,
        }}
      >
        {icon}
      </ListItemIcon>
      <ListItemText
        primary={
          <Typography
            variant="body1"
            sx={{
              ml: 1,
              color: "inherit",
              ".active &": {
                fontWeight: "bold",
              },
              fontWeight: 500,
            }}
          >
            {name}
          </Typography>
        }
      />
    </ListItemButton>
  );
};
