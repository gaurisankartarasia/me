// src/components/ResumeDownload.tsx
import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { resume_urls } from "@/config/personal_data";
import { PiHandshakeLight } from "react-icons/pi";

export default function ResumeDownload(): JSX.Element {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        variant="contained"
        size="large"
        onClick={handleMenuOpen}
        aria-controls={isMenuOpen ? "resume-download-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={isMenuOpen ? "true" : undefined}
        id="download-button"
        sx={{
          height: "68px",
          minWidth: "250px",
          textTransform: "none",
          fontSize: "1.3rem",
          fontWeight: 500,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 1,
          bgcolor: "primary.main",
          "&:hover": {
            bgcolor: "primary.dark",
            boxShadow: "none",
          },
        }}
      >
        <PiHandshakeLight size={30} />
        Handshake
      </Button>
      <Menu
        id="resume-download-menu"
        anchorEl={anchorEl}
        open={isMenuOpen}
        onClose={handleMenuClose}
        slotProps={{
          list: {
            "aria-labelledby": "download-button",
          },
        }}
       
      >
        <MenuItem
          onClick={handleMenuClose}
          component="a"
          href={resume_urls?.resumeLiveUrl}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "text.secondary" }}
        >
          View Live Resume
        </MenuItem>
        <MenuItem
          onClick={handleMenuClose}
          component="a"
          href={resume_urls?.resumePdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          download
          sx={{ color: "text.secondary" }}
        >
          Download Resume PDF
        </MenuItem>
      </Menu>
    </>
  );
}
