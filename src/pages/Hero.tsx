import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material/styles";

import Knowledge from "../components/knowledge/knowledge";
import UserProfileCard from "../components/hero/UserProfileCard";
import SocialLinks from "../components/hero/SocialLinks";
import ResumeDownload from "@/components/hero/ResumeDownload";
import { personal_data, socialPrimary } from "@/config/personal_data";

export default function FrontPage(): JSX.Element {
  const theme = useTheme();
  const data = personal_data;

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: theme.spacing(2),
          bgcolor: "background.default",
        }}
      >
        <Card
          sx={{
            width: "100%",
            maxWidth: "76rem",
            position: "relative",
          }}
        >
          <CardContent
            sx={{
              paddingBottom: { xs: "80px", sm: theme.spacing(2) },
            }}
          >
            <Grid
              container
              spacing={{ xs: 3, md: 4 }}
              alignItems={{ xs: "center", md: "stretch" }}
            >
              <Grid size={{ xs: 12, md: 12, lg: 12 }}>
                <UserProfileCard userData={data} />
              </Grid>
            </Grid>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={{
                position: { xs: "relative", sm: "absolute" },
                bottom: theme.spacing(2),
                right: { xs: 0, sm: theme.spacing(2) },
                mt: { xs: 4, sm: 0 },
                alignItems: { xs: "center", sm: "flex-start" },
              }}
            >
              <SocialLinks links={socialPrimary} />
              <ResumeDownload />
            </Stack>
          </CardContent>
        </Card>
      </Box>
      <Knowledge />
    </Box>
  );
}
