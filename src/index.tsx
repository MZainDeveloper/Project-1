import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { SouldeedsArticle } from "./screens/SouldeedsArticle/SouldeedsArticle";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <SouldeedsArticle />
  </StrictMode>,
);
