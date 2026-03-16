import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Remove SSG placeholder content before React mounts
const ssgContent = document.getElementById("ssg-content");
if (ssgContent) ssgContent.remove();

createRoot(document.getElementById("root")!).render(<App />);
