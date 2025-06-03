//src/main.tsx

import { StrictMode } from "react";

import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import ThemeProviderWrapper from "./ThemeProviderWrapper";

createRoot(document.getElementById("gaurisankar")!).render(
  <StrictMode>
    <ThemeProviderWrapper>
      <App />
    </ThemeProviderWrapper>
  </StrictMode>
);
