import React from "react";
import { Grid, Typography } from "@mui/material";
import { GitHubRepo } from "@/types";
import { RepoCard } from "./RepoCard";

interface RepoGridProps {
  repos: GitHubRepo[];
}

export const RepoGrid: React.FC<RepoGridProps> = ({ repos }) => {
  if (repos.length === 0) {
    return (
      <Typography
        variant="subtitle1"
        color="text.secondary"
        sx={{ textAlign: "center", mt: 10 }}
      >
        No public repositories found.
      </Typography>
    );
  }

  return (
    <Grid container spacing={3}>
      {repos.map((repo) => (
        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={repo.id}>
          <RepoCard repo={repo} />
        </Grid>
      ))}
    </Grid>
  );
};