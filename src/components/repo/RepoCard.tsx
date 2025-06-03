import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Link,
  CardActionArea,
  Typography,
  Box,
} from "@mui/material";
import { GitHubRepo } from "@/types";
import { RepoStats } from "./RepoStats";
import { RepoTopics } from "./RepoTopics";
import { RepoLanguage } from "./RepoLanguage";
import { formatDate } from "@/utils/dateFormatter";

interface RepoCardProps {
  repo: GitHubRepo;
}

export const RepoCard: React.FC<RepoCardProps> = ({ repo }) => (
  <Card
    sx={{
      display: "flex",
      flexDirection: "column",
      height: "100%",
    }}
  >
    <Link
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      underline="none"
    >
      <CardActionArea>
        <CardHeader
          title={
            <Typography
              variant="h6"
              sx={{
                fontSize: "1.25rem",
                fontWeight: "medium",
                color: "text.primary",
                "&:hover": { color: "primary.main" },
                display: "block",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {repo.name}
            </Typography>
          }
          subheader={
            repo.description ? (
              <Typography
                variant="body2"
                color="text.secondary"
                title={repo.description}
                sx={{
                  mt: 0.5,
                  height: "40px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                }}
              >
                {repo.description}
              </Typography>
            ) : (
              <Box sx={{ height: "40px", mt: 0.5 }} />
            )
          }
          action={
            <RepoStats
              stargazers_count={repo.stargazers_count}
              forks_count={repo.forks_count}
            />
          }
          sx={{
            alignItems: "flex-start",
            pb: 0,
            "& .MuiCardHeader-content": { overflow: "hidden" },
          }}
        />
        <CardContent
          sx={{
            flexGrow: 1,
            pt: repo.description || (repo.topics && repo.topics.length > 0) ? 1 : 2,
            pb: "8px !important",
          }}
        >
          <RepoTopics topics={repo.topics} />
        </CardContent>

        <CardActions
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid",
            borderColor: "divider",
            p: 2,
            mt: "auto",
          }}
        >
          <RepoLanguage language={repo.language} />
          <Typography variant="caption" color="text.secondary">
            Updated: {formatDate(repo.updated_at)}
          </Typography>
        </CardActions>
      </CardActionArea>
    </Link>
  </Card>
);
