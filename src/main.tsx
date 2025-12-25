import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/variables.css";
import App from "./App.tsx";
import Options from "./components/Options/Options.tsx";

const router = createBrowserRouter([
  { path: "/typing-test", element: <App /> },
  { path: "/typing-test/options", element: <Options /> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
