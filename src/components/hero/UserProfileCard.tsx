import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Personal_data_types } from "@/types/index";

interface UserProfileCardProps {
  userData: Personal_data_types;
}

export default function UserProfileCard({
  userData,
}: UserProfileCardProps): JSX.Element {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={{ xs: 2, sm: 4 }}
      alignItems={{ xs: "center", sm: "flex-start" }}
    >
      <Avatar
        src={userData?.avatar_url}
        alt={userData?.name ?? "User Avatar"}
        sx={{
          width: { xs: 200, sm: 180, md: 260 },
          height: { xs: 200, sm: 180, md: 260 },
          borderRadius: 4,
          flexShrink: 0,
        }}
        slotProps={{ img: { style: { objectFit: "cover" } } }}
      >
        {userData?.name?.substring(0, 2).toUpperCase() || "GT"}
      </Avatar>

      <Box
        sx={{
          textAlign: { xs: "center", sm: "left" },
          flex: 1,
          mt: { xs: 1, sm: 2 },
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "2rem", sm: "2.25rem", md: "2.5rem" },
          }}
        >
          {userData?.name}
        </Typography>
        {userData?.bio && (
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              mt: 1,
              fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
            }}
          >
            {userData.bio}
          </Typography>
        )}
        {userData?.location && (
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mt: 0.8, fontSize: "0.9rem" }}
          >
            Location: {userData.location}
          </Typography>
        )}
      </Box>
    </Stack>
  );
}
