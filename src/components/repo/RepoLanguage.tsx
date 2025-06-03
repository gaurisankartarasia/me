import React from "react";
import { Box } from "@mui/material";
import { getLanguageMuiColor } from "@/utils/languageColors";

interface RepoLanguageProps {
  language: string | null;
}

export const RepoLanguage: React.FC<RepoLanguageProps> = ({ language }) => {
  if (!language) return <Box sx={{ minHeight: "14.5px" }} />;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        typography: "caption",
        color: "text.secondary",
        minHeight: "14.5px",
      }}
    >
      <Box
        component="span"
        sx={{
          height: 10,
          width: 10,
          borderRadius: "50%",
          mr: 0.75,
          backgroundColor: getLanguageMuiColor(language),
        }}
      />
      {language}
    </Box>
  );
};
