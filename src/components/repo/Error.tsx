import React from "react";
import { Alert, AlertTitle } from "@mui/material";

interface ErrorAlertProps {
  error: string;
}

export const ErrorAlert: React.FC<ErrorAlertProps> = ({ error }) => (
  <Alert severity="error" sx={{ maxWidth: "md", mx: "auto", mt: 4 }}>
    <AlertTitle>Error Fetching Data</AlertTitle>
    {error} 
  </Alert>
);