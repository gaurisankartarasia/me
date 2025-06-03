import React from "react";
import { NavLink } from "react-router-dom";
import { Box, IconButton, Typography } from "@mui/material";
import { MdMenu } from "react-icons/md";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";

interface MobileNavbarProps {
  isScrolled: boolean;
  onMenuClick: () => void;
}

export const MobileNavbar: React.FC<MobileNavbarProps> = ({
  isScrolled,
  onMenuClick,
}) => {
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
        transition: "box-shadow 0.3s",
        py: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px: 3,
      }}
    >
      <IconButton
        aria-label="open drawer"
        edge="start"
        onClick={onMenuClick}
      >
        <MdMenu />
      </IconButton>
      <Typography
        variant="h6"
        component={NavLink}
        to="/"
        sx={{
          flexGrow: 1,
          textDecoration: "none",
          color: "text.primary",
          textAlign: "left",
          ml: 1,
          fontWeight: "bold",
        }}
      >
        GT
      </Typography>
      <ThemeToggle />
    </Box>
  );
};
