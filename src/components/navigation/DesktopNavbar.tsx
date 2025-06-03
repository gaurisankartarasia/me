import React from "react";
import { NavLink } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";
import { NavItem } from "./NavItem";
import { navItems } from "@/constants/navigation";

interface DesktopNavbarProps {
  isScrolled: boolean;
}

export const DesktopNavbar: React.FC<DesktopNavbarProps> = ({ isScrolled }) => {
  return (
    <Box
      component="nav"
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1100,
        bgcolor: "background.paper",
        boxShadow: isScrolled ? 2 : 0,
        transition: "box-shadow 0.3s, padding-top 0.3s, padding-bottom 0.3s",
        py: isScrolled ? 1 : 2,
      }}
    >
      <Box
        sx={{
          maxWidth: "lg",
          mx: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: 2,
        }}
      >
        <Typography
          variant="h6"
          component={NavLink}
          to="/"
          sx={{
            textDecoration: "none",
            color: "text.primary",
            fontWeight: "bold",
          }}
        >
          GT
        </Typography>
        <Box sx={{ display: "flex", gap: 1 }}>
          {navItems.map((item) => (
            <NavItem
              key={item.path}
              path={item.path}
              name={item.name}
              icon={item.icon}
              size={item.size}
            />
          ))}
        </Box>
        <ThemeToggle />
      </Box>
    </Box>
  );
};
