import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";
import { ErrorBoundary } from "react-error-boundary";
import PageNotFound from "./pages/PageNotFound/PageNotFound.jsx";

if (import.meta.env.VITE_REACT_APP_NODE_ENV !== "development")
  disableReactDevTools();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary fallback={<PageNotFound />}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
