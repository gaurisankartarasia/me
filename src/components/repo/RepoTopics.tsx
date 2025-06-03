import React from "react";
import { Box, Chip } from "@mui/material";

interface RepoTopicsProps {
  topics: string[];
}

export const RepoTopics: React.FC<RepoTopicsProps> = ({ topics }) => {
  if (!topics || topics.length === 0) return null;

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 0.75,
        mt: 1,
      }}
    >
      {topics.slice(0, 4).map((topic) => (
        <Chip
          key={topic}
          label={topic}
          size="small"
          variant="outlined"
        />
      ))}
      {topics.length > 4 && (
        <Chip
          label="..."
          size="small"
          variant="outlined"
          title={topics.slice(4).join(", ")}
        />
      )}
    </Box>
  );
};
