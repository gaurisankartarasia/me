import { SocialLinkItem } from "@/types/index";
import { IconButton, Grid, Link, Tooltip } from "@mui/material";

interface SocialLinksProps {
  links: SocialLinkItem[];
}

export default function SocialLinks({ links }: SocialLinksProps): JSX.Element {
  return (
    <Grid container spacing={1} justifyContent="center">
      {links.map((social) => (
        <Grid
          size={{ xs: 4, sm: "auto" }}
          key={social.label}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Tooltip title={`Go to ${social.label}`}>
            <IconButton
              component={Link}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Go to ${social.label}`}
              sx={{
                padding: 2.5,
                backgroundColor: "primary.main",
                color: "primary.contrastText",
                "&:hover": {
                  backgroundColor: "primary.main",
                },
              }}
            >
              <social.icon style={{ height: "30px", width: "30px" }} />
            </IconButton>
          </Tooltip>
        </Grid>
      ))}
    </Grid>
  );
}