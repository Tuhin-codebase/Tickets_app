import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
const VITE_CLERK_KEY = import.meta.env.VITE_CLERK_KEY;
import { ClerkProvider } from "@clerk/clerk-react";

if (!VITE_CLERK_KEY) {
  throw new Error("VITE_CLERK_KEY is not defined");
}

createRoot(document.getElementById("root")).render(
  <ClerkProvider publishableKey={VITE_CLERK_KEY}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ClerkProvider>
);
