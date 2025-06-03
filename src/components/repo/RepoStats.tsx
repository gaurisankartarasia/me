import React from "react";
import { Box, Typography } from "@mui/material";
import { MdOutlineStarBorder, MdAltRoute } from "react-icons/md";

interface RepoStatsProps {
  stargazers_count: number;
  forks_count: number;
}

export const RepoStats: React.FC<RepoStatsProps> = ({
  stargazers_count,
  forks_count,
}) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      gap: { xs: 0.5, sm: 1 },
      color: "text.secondary",
      flexShrink: 0,
      mt: 0.5,
    }}
  >
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        p: 0.5,
      }}
      title="Stars"
    >
      <MdOutlineStarBorder />
      <Typography variant="body2" component="span">
        {stargazers_count}
      </Typography>
    </Box>
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        p: 0.5,
      }}
      title="Forks"
    >
      <MdAltRoute />
      <Typography variant="body2" component="span">
        {forks_count}
      </Typography>
    </Box>
  </Box>
);