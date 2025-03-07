import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import { CrowdFundingProvider } from "./Context/CrowdFundingContext"
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CrowdFundingProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </CrowdFundingProvider>
  </StrictMode>
);
