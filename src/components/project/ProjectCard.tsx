import {
  Card as MuiCard,
  CardContent as MuiCardContent,
  CardActions as MuiCardActions,
  CardHeader as MuiCardHeader,
  Typography,
  Tooltip as MuiTooltip,
  Chip,
  Divider,
  Button as MuiButton,
  Box,
  Stack,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";

import { FaRegStar, FaRegHourglass } from "react-icons/fa";
import { MdOpenInNew } from "react-icons/md";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  isImportant?: boolean;
  isUnderDevelopment?: boolean;
  liveUrl?: string;
  viewProjectLink?: string;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const theme = useTheme();

  return (
    <MuiCard
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <MuiCardHeader
        title={
          <Typography
            variant="h6"
            component="div"
            sx={{ fontWeight: 600, width: "auto" }}
          >
            <MuiTooltip title="Project title">
              <span>{project.title}</span>
            </MuiTooltip>
          </Typography>
        }
        action={
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            sx={{ mt: 0.5 }}
          >
            {project.isUnderDevelopment && (
              <MuiTooltip title="Under development">
                <FaRegHourglass />
              </MuiTooltip>
            )}
            {project.isImportant && (
              <MuiTooltip title="Primary project">
                <FaRegStar />
              </MuiTooltip>
            )}
          </Stack>
        }
      />

      <MuiCardContent sx={{ flexGrow: 1 }}>
        <Stack spacing={0}>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ minHeight: "4.5em" }}
          >
            {project.description}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: theme.spacing(1),
            }}
          >
            {project.technologies.map((tech) => (
              <Chip key={tech} label={tech} size="small" />
            ))}
          </Box>
        </Stack>
      </MuiCardContent>

      {(project.liveUrl || project.viewProjectLink) && <Divider />}

      <MuiCardActions sx={{ padding: theme.spacing(2) }}>
        <Stack
          direction="row"
          spacing={1.5}
          alignItems="center"
          sx={{ width: "100%" }}
        >
          {project.liveUrl && (
            <MuiTooltip title="View this project live">
              <MuiButton
                variant="contained"
                color="primary"
                size="small"
                component={RouterLink}
                to={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                endIcon={<MdOpenInNew />}
                sx={{ flexShrink: 0 }}
              >
                View live
              </MuiButton>
            </MuiTooltip>
          )}

          {project.viewProjectLink ? (
            <MuiTooltip title="View project source">
              <MuiButton
                variant="outlined"
                size="small"
                component={RouterLink}
                to={project.viewProjectLink}
                target="_blank"
                rel="noopener noreferrer"
                endIcon={<MdOpenInNew />}
                sx={{ flexShrink: 0 }}
              >
                View source
              </MuiButton>
            </MuiTooltip>
          ) : (
            <Typography
              variant="caption"
              sx={{
                color: theme.palette.warning.dark,
              }}
            >
              Source is private
            </Typography>
          )}
        </Stack>
      </MuiCardActions>
    </MuiCard>
  );
}
