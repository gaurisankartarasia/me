import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Box, useMediaQuery, useTheme } from "@mui/material";

import { DesktopNavbar } from "./DesktopNavbar";
import { MobileNavbar } from "./MobileNavbar";
import { MobileDrawer } from "./MobileDrawer";
import { useScrolled } from "../../hooks/useScrolled";

const Navbar: React.FC = () => {
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const isScrolled = useScrolled(20);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    setDrawerOpen(false);
  }, [location]);

  const handleDrawerToggle = () => {
    setDrawerOpen((prev) => !prev);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      {/* Desktop Navbar */}
      {!isMobile && <DesktopNavbar isScrolled={isScrolled} />}

      {/* Mobile Navigation */}
      {isMobile && (
        <>
          <MobileNavbar
            isScrolled={isScrolled}
            onMenuClick={handleDrawerToggle}
          />
          <MobileDrawer open={drawerOpen} onClose={handleDrawerClose} />
        </>
      )}

      {/* Spacer for fixed navbar */}
      <Box sx={{ height: 64 }} />
    </>
  );
};

export default Navbar;
