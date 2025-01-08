import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/globals.css";
import Entry from "./entry.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Entry />
  </StrictMode>
);
