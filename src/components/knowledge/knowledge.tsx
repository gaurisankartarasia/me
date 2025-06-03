import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActionArea,
  Popover,
} from "@mui/material";
import { useState } from "react";
import { skills } from "@/config/knowledge";
import { Skill } from "@/types/index";

export default function Knowledge() {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>, skill: Skill) => {
    setAnchorEl(event.currentTarget);
    setSelectedSkill(skill);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedSkill(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "skill-popover" : undefined;

  return (
    <Box sx={{ py: 8, bgcolor: "background.default", px: 4 }}>
      <Box sx={{ maxWidth: "md", mx: "auto" }}>
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography variant="h5" color="text.secondary">
            Technologies I work with
          </Typography>
        </Box>

        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          justifyContent="center"
        >
          {skills.map((skill: Skill) => (
            <Grid key={skill.name} size={{ xs: 2, sm: 4, md: 3 }}>
              <Card
                sx={{
                  overflow: "hidden",
                  transition: "all 0.2s ease-in-out",
                  cursor: "pointer",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
                onClick={(event) => handleClick(event, skill)}
              >
                <CardActionArea>
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      flexGrow: 1,
                      p: 3,
                      color: "text.secondary",
                    }}
                  >
                    <skill.icon size={skill.size} className="m-3" />
                    <Typography
                      variant="subtitle1"
                      fontWeight="medium"
                      textAlign="center"
                    >
                      {skill.name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <Box sx={{ p: 2, maxWidth: 300 }}>
            <Typography>{selectedSkill?.description}</Typography>
          </Box>
        </Popover>
      </Box>
    </Box>
  );
}
