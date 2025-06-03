import React from "react";
import { NavLink } from "react-router-dom";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import { MdMenuOpen } from "react-icons/md";
import { navItems } from "../../constants/navigation";

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({
  open,
  onClose,
}) => {
  const theme = useTheme();

  const drawerList = (
    <Box sx={{ width: "100%", height: "100%" }}>
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: theme.spacing(2, 3),
          borderBottom: `1px solid ${theme.palette.divider}`,
          minHeight: 64,
        }}
      >
        <IconButton
          onClick={onClose}
          aria-label="close drawer"
          sx={{
            color: "text.secondary",
            "&:hover": {
              backgroundColor: alpha(theme.palette.action.hover, 0.08),
            },
          }}
        >
          <MdMenuOpen />
        </IconButton>
      </Box>

      {/* Navigation List */}
      <Box sx={{ flex: 1, pt: 2 }}>
        <List sx={{ px: 2, py: 0 }}>
          {navItems.map((item) => (
            <ListItemButton
              key={item.path}
              component={NavLink}
              to={item.path}
              onClick={onClose}
              sx={{
                px: 1,
                borderRadius: 50,
                color: theme.palette.text.secondary,
                textDecoration: "none",
                transition: "all 0.2s ease-in-out",
                "&:hover": {
                  backgroundColor: alpha(theme.palette.action.hover, 0.08),
                },
                "&.active": {
                  color: theme.palette.primary.main,
                  backgroundColor: theme.palette.action.selected,
                  "& .MuiListItemText-primary": {
                    fontWeight: "bold",
                  },
                },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 40,
                  color: "inherit",
                  fontSize: item.size,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.name}
                slotProps={{
                  primary: {
                    fontSize: "1rem",
                    lineHeight: 1.5,
                    fontWeight: 500,
                  },
                }}
              />
            </ListItemButton>
          ))}
        </List>
      </Box>
    </Box>
  );

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      slotProps={{
        paper: {
          sx: {
            width: 280,
            borderTopRightRadius: 16,
            borderBottomRightRadius: 16,
            bgcolor: "background.paper",
          },
        },
      }}
    >
      {drawerList}
    </Drawer>
  );
};
