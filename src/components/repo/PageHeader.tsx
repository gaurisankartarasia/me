import React from "react";
import { Box, Typography, Link } from "@mui/material";

interface PageHeaderProps {
  username: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ username }) => (
  <Box sx={{ mb: 4, textAlign: "center" }}>
    <Typography variant="h5" component="h1" gutterBottom>
      GitHub Repositories
    </Typography>
    <Typography variant="h6" color="text.secondary" component="p">
      from{" "}
      <Link
        href={`https://github.com/${username}`}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          fontFamily: "monospace",
          color: "primary.main",
          "&:hover": { textDecoration: "underline" },
        }}
      >
        {username}
      </Link>
    </Typography>
  </Box>
);
