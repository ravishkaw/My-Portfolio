import { createRoot } from "react-dom/client";
// Global tokens and base styles must load before component styles so that a
// component rule can override the defaults at equal specificity.
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(<App />);
