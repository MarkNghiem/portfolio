// App and Error Wrapper

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import App from "./App.js";
import ErrorBoundary from "./containers/ErrorBoundary.js";

const rootElement = document.getElementById("root");

// document.getElementById has 'HTMLElement | null' type so we need to add a check here
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </StrictMode>,
  );
} else {
  console.error("❌ Root element not found");
}
