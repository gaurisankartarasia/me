import React from "react";
import { Box, CircularProgress } from "@mui/material";

export const LoadingSpinner: React.FC = () => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "50vh",
    }}
  >
    <CircularProgress />
  </Box>
);