import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/variables.css";
import App from "./App.tsx";
import Options from "./components/Options/Options.tsx";

const router = createBrowserRouter([
  { path: "/typing-speed-test/", element: <App /> },
  {
    path: "/typing-speed-test/options",
    element: <Options onSave={(data) => {}} />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
